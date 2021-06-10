import { Link} from "react-router-dom";

function MusicList(prop) {
  const {album,id,song,image}=prop.song


  return (
    <div className="mt-4">
      <div className=" p-2  rounded-lg flex flex-wrap md:flex-wrap-reverse justify-between items-center">
        <div className="flex ">
          <div className="mr-4">
            <img
              className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full"
              src={image}
              alt="Avatar"
            />
          </div>
          <div>
            <Link to={`/song/${id}/${song.replaceAll(" ", "_")}`}>
              <h1 className="text-sm sm:text-xl font-medium text-gray-900 dark:text-white">
                {song}
              </h1>
            </Link>
            <p className=" text-white text-sm sm:text-sm text-green-500 overflow-hidden"> {album}</p>
          </div>
        </div>
        <div className="hidden sm:inline">
        {/* <button className="bg-gray-800 w-full hover:opacity-75 text-white rounded-full px-8 py-2" onClick={onClickPlay}>Play</button> */}
        </div>
      </div>
      
    </div>

  );
}

export default MusicList;
