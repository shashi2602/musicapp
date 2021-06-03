import { useParams } from "react-router-dom";
import MusicList from "../components/ui/Musiclist";
import Loader from '../components/ui/loader';
import {useState,useEffect} from "react";
import axios from 'axios';
import {PLAYLIST_DETAILS} from '../constants/urls';

function FeaturedDetails() {
  let { id} = useParams();
  const [playlist,setplaylistdata]=useState([])
  const [isloading,setisloading]=useState(true)
  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await axios.get(PLAYLIST_DETAILS+id).then((res)=>{
        setplaylistdata(res.data)
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
      <div
        className="w-full h-48 bg-green-500 mt-8 rounded-lg bg-cover sm:bg-auto shadow-xl"
        style={{ backgroundImage: `url(${playlist.image})` }}
      >
        <div className="relative h-48 text-center pt-16 col-start-1 row-start-1 px-4  pb-3 bg-gradient-to-r from-green-500 rounded-lg">
          <h1 className="text-xl  sm:w-full sm:text-5xl text-gray-100 font-extrabold overflow-ellipsis overflow-hidden">
            {playlist.listname}
          </h1>
          <p className="pt-2 text-gray-900 text-sm sm:text-lg font-semibold text-white">
            {(parseInt(playlist.follower_count)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString().replace(".00","")} Followers
          </p>
          <p>{playlist.list_count} songs</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-black dark:text-white  pt-5">
          Songs
        </h2>
      </div>
      {playlist.songs.map((s) => {
        return <MusicList key={s.id} id={s.id} link={s.media_url} name={s.music} album={s.album}  image={s.image} title={s.song}/>

      })}
    </div>
  );
}

export default FeaturedDetails;
