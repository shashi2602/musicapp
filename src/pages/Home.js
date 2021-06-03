import Card from "../components/ui/card";
import Linkify from "../components/ui/Linkify";
import Loader from '../components/ui/loader';
import {useState,useEffect} from "react";
import axios from 'axios';
import {HOME_SCREEN_CONTENT_URL} from '../constants/urls';

function Home() {
  const [newalbums,setnewalbums]=useState([])
  const [featured,setfeatured]=useState([])
  const [isloading,setisloading]=useState(true)
  console.log(HOME_SCREEN_CONTENT_URL)
  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await axios.get(HOME_SCREEN_CONTENT_URL).then((res)=>{
        setnewalbums(res.data.new_albums)
        setfeatured(res.data.featured_playlists)
        setisloading(false)
        console.log(newalbums)
      }).catch((e)=>{
        console.log(e)
      })
    }
    fetchdata()
  },[])
  return isloading?
  <Loader/>
  : (
      <div>
            <div>
        <div className="grid grid-cols-3">
          <h2 className="text-black dark:text-white py-4  text-3xl font-bold col-span-2">New Albums</h2>
          <div className=" text-right py-4">
            <Linkify
              classes=" text-green-500 sm:text-white dark:bg-black sm:dark:bg-gray-900 sm:bg-green-500 hover:bg-black font-bold w-8 h-4  sm:w-20  sm:h-8 text-xs sm:text-sm rounded-lg "
              link="/newalbums"
              text="More"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {newalbums.slice(0, 9).map((fs) => {
            return (
              <Card
                key={fs.albumid}
                genre="album"
                id={fs.albumid}
                title={fs.title.replaceAll(" ","_")}
                url={fs.image.replace("150x150","500x500")}
                lang={fs.year}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3">
          <h2 className="text-black dark:text-white py-4 text-3xl font-bold col-span-2">Featured</h2>
          <div className=" text-right py-4">
            <Linkify
              classes="text-green-500  sm:text-white dark:bg-black sm:dark:bg-gray-800  sm:bg-green-500 hover:bg-black font-bold w-8 h-4  sm:w-20  sm:h-8 text-xs sm:text-sm rounded-lg "
              link="/featured/list"
              text="More"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {featured.slice(0, 9).map((fs) => {
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
        {/* <GridCard fs={featuredPlaylist}/> */}
      </div>

    </div>
      
    
  );
}

export default Home;
