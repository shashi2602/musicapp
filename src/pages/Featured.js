import Card from "../components/ui/card";
import {featuredPlaylist} from '../data/featureddata';
import Loader from '../components/ui/loader';
import {useState,useEffect} from "react";
import axios from 'axios';
import {HOME_SCREEN_CONTENT_URL} from '../constants/urls';
function Featured(){
  const [featured,setfeatured]=useState([])
  const [isloading,setisloading]=useState(true)
  console.log(HOME_SCREEN_CONTENT_URL)
  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await axios.get(HOME_SCREEN_CONTENT_URL).then((res)=>{
        setfeatured(res.data.featured_playlists)
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