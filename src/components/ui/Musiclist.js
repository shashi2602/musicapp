import { Link} from "react-router-dom";
import PlayBtn from "./playbtn";
import BottomNav from "../layout/BottomNav"

function MusicList(prop) {

  function Playsong(){

  }
  return (
    <div className="mt-4">
      <div className=" p-2  rounded-lg flex flex-wrap md:flex-wrap-reverse justify-between items-center">
        <div className="flex ">
          <div className="mr-4">
            <img
              className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full"
              src={prop.song.image}
              alt="Avatar"
            />
          </div>
          <div>
            <Link to={`/song/${prop.song.id}/${prop.song.song.replaceAll(" ", "_")}`}>
              <h1 className="text-sm sm:text-xl font-medium text-gray-900 dark:text-white">
                {prop.song.song}
              </h1>
            </Link>
            <p className=" text-white text-sm sm:text-sm text-green-500 overflow-hidden"> {prop.song.album}</p>
          </div>
        </div>
        <div className="hidden sm:inline">
        <PlayBtn link={prop.song} onPlay={Playsong} />
        </div>
      </div>
      
    </div>

  );
}

export default MusicList;
