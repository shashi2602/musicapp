import Card from '../components/ui/card';
import MusicList from '../components/ui/Musiclist';
import axios from 'axios';
import {SEARCH} from '../constants/urls';
import {useState,useEffect} from "react"
import Loader from '../components/ui/loader';
import querystring from 'query-string'
import {useLocation} from 'react-router-dom'
function SearchResults(){
  // let { query } = useParams();
  const location=useLocation()
  const [albums,setalbums]=useState([])
  const [songs,setsongs]=useState([])
  const [playlist,setplaylist]=useState([])
  const [isloading,setisloading]=useState(true)
  const {q}=querystring.parse(location.search)
  console.log(q)
  
  useEffect(()=>{
    const fetchdata=async ()=>{
      setisloading(true)
       await axios.get(SEARCH+q).then((res)=>{
        setalbums(res.data.albums.data)
        setsongs(res.data.songs.data)
        setplaylist(res.data.playlists.data)
        setisloading(false)
      }).catch((e)=>{
        console.log(e)
      })
    }
    fetchdata()
  },[q])
    return isloading?
      <Loader/>
    :(
        <div className="content">
        <h2 className="text-black  dark:text-white py-4 font-bold  text-xl col-span-2">looking for '{q}'</h2>
        <div>
        <h2 className="text-black  dark:text-white py-4 font-bold  text-3xl col-span-2">Albums</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {albums.map((fs) => {
            return (
                
                <Card
                key={fs.id}
                genre="album"
                id={fs.id}
                title={fs.title.replaceAll(" ","_")}
                url={fs.image.replace("50x50","500x500")}
                lang={fs.more_info.language}
              />
              
            );
          })}
        </div>
        <h2 className="text-black  dark:text-white py-4 font-bold  text-3xl col-span-2">Songs</h2>
        <div >
          {songs.map((fs) => {
            return (
               
               <MusicList key={fs.id} id={fs.id}name={fs.album}  image={fs.image} album={fs.album} title={fs.title}/>
              
              
            );
          })}
        </div>
        <h2 className="text-black  dark:text-white py-4 font-bold  text-3xl col-span-2">Playlists</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {playlist.map((fs) => {
            return (
                
                <Card
                key={fs.id}
                genre="featured"
                id={fs.id}
                title={fs.title.replaceAll(" ","_")}
                url={fs.image.replace("50x50","500x500")}
                lang={fs.language}
              />
              
            );
          })}
        </div>
        </div>
        </div>
    );
}

export default SearchResults