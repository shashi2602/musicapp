import { useParams } from "react-router-dom";
import MusicList from "../components/ui/Musiclist";
import Loader from '../components/ui/loader';
import {useState,useEffect} from "react";
import contentServ from "../services/ContentAPIRequests";

function AlbumDetails() {
  const {id} = useParams();
  const [album,setalbum]=useState([])
  const [isloading,setisloading]=useState(true)


  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await contentServ.getAlbumDetails(id).then((res)=>{
        console.log(res)
        setalbum(res)
        setisloading(false)
      }).catch((e)=>{
        console.log(e)
      })
    }
    fetchdata()
  },[])
  return isloading?
  <Loader/>
  :
  (
    <div>
      <div
        className="w-full h-48 bg-green-500  mt-8 rounded-t-lg bg-cover shadow-xl"
        style={{ backgroundImage: `url(${album.image})` }}
      >
        <div className="relative h-48 text-center pt-16 col-start-1 row-start-1 px-4  pb-3 bg-gradient-to-r from-green-500 rounded-t-lg">
          <h1 className="text-xl  sm:w-full sm:text-5xl text-gray-100 font-extrabold overflow-ellipsis overflow-hidden">
            {album.name}
          </h1>
          <p className="pt-2 text-gray-900 text-sm sm:text-lg font-semibold text-white">
            {album.title} -{" "}
            {album.primary_artists} -{" "}
            {album.year}
          </p>
          
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-black dark:text-white  pt-5">
          Songs
        </h2>
      </div>
      {album.songs.map((s) => {
        return <MusicList key={s.id} song={s}/>
      })}
    </div>
  );
}

export default AlbumDetails;
