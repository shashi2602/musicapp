import Loader from "../components/ui/loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import contentServ from "../services/ContentAPIRequests";
function SongDetails(props) {
  let { id } = useParams();
  const [songdetails, setSongDetails] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const fetchapi = async () => {
      await contentServ.getSongDetails(id).then((res) => {
        console.log(res);
        setisloading(false);
        setSongDetails(res);
        console.log(songdetails.image);
      });
    };
    fetchapi();
  }, []);

  return isloading ? (
    <Loader />
  ) : (
    <div className="content">
      <div className="grid mt-8  grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className=" md:col-span-2 w-fullp-4">
          <div className="flex-none lg:flex">
            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
              <img
                src={songdetails.image}
                alt={songdetails.song}
                className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
              />
            </div>
            <div className="flex-auto ml-3 justify-start py-2">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-xs text-green-500 dark:text-green-200 font-medium ">
                  {songdetails.album}
                </div>
                <h2 className="flex-auto text-black dark:text-white text-2xl md:text-4xl font-medium">
                  {songdetails.song}
                </h2>
              </div>
              <div className="flex-auto  justify-start py-2">
                <p className="text-gray-500 font-semibold dark:text-gray-500">
                  {songdetails.album} · {songdetails.music}
                </p>
                <p className="text-gray-500 font-semibold dark:text-gray-500">
                  {songdetails.singers}
                </p>
                {/* <p className="text-gray-500 font-semibold dark:text-gray-500">{(songdetails.play_count).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString().replace(".00","")} Plays · {songdetails.language}</p> */}
                <p className="text-gray-500 font-semibold dark:text-gray-500">
                  {songdetails.primary_artists}
                </p>
                <p className="text-gray-500 font-semibold dark:text-gray-500">
                  {songdetails.copyright_text}
                </p>
              </div>
            </div>
            <div className="flex-auto ml-3 justify-start py-2">
              <div className="flex flex-wrap pt-0  md:pl-0 lg:pl-0 sm:pl-0 pmd:pt-14 lg:pt-14 sm:pt-14">
                <button
                  className="bg-gray-800 w-full hover:opacity-75 text-white rounded-full px-8 py-2 focus:outline-none"
                  onClick={()=>props.onClickPlay(songdetails)}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        songdetails.lyrics?
        <>
        <div className="grid grid-cols-3 ">
        <h2 className="text-black  dark:text-white py-4 font-bold  text-3xl col-span-2">
          lyrics
        </h2>
      </div>
      <div>
        <p className="text-black  dark:text-white py-4">{songdetails.lyrics}</p>
      </div>
        </>
        :
        <></>
      }
      
    </div>
  );
}

export default SongDetails;
