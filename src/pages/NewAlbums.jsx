import Card from '../components/ui/card';
import Loader from '../components/ui/loader';
import {useState,useEffect} from "react";
import contentServ from "../services/ContentAPIRequests";


function NewAlbums(){
  const [newalbums,setnewalbums]=useState([])
  const [isloading,setisloading]=useState(true)
  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await contentServ.getHomeContent().then((res)=>{
        setnewalbums(res.new_albums)
        setisloading(false)
      }).catch((e)=>{
        console.log(e)
      })
    }
    fetchdata()
  },[])
    return isloading?
    <Loader/>
    :(
        <div>
        <h2 className="text-black dark:text-white text-3xl py-4 font-bold">New Albums</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {newalbums.map((fs) => {
            return (
                
                <Card
                key={fs.albumid}
                genre="album"
                id={fs.albumid}
                title={fs.title.replaceAll(" ","_")}
                url={fs.image.replace("150x150","500x500")}
                lang={fs.language}
              />
              
            );
          })}
        </div>
      </div>
    );
}

export default NewAlbums