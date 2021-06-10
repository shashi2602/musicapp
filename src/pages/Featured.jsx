import Card from "../components/ui/card";
import Loader from '../components/ui/loader';
import {useState,useEffect} from "react";
import contentServ from "../services/ContentAPIRequests";

function Featured(){
  const [featured,setfeatured]=useState([])
  const [isloading,setisloading]=useState(true)
  
  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await contentServ.getHomeContent().then((res)=>{
        setfeatured(res.featured_playlists)
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
      <div className="grid grid-cols-3">
        <h2 className="text-black  dark:text-white py-4 font-bold  text-3xl col-span-2">Featured</h2>
  
      </div>
    
    <div className="grid grid-cols-3 sm:grid-cols-4  gap-5">
      {featured.map((fs) => {
        return (
          <Card
            key={fs.listid}
            genre="featured"
            id={fs.listid}
            title={fs.listname.replaceAll(" ","_")}
            url={fs.image}
            lang={fs.language}
          />
        );
      })}
    </div>
  </div>
    );

}

export default Featured