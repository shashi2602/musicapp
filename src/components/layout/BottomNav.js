import {
  MdSkipNext,
  MdSkipPrevious,
  MdPlayCircleOutline,
  MdPauseCircleOutline,
} from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
function BottomNav(props) {
  const [isplay, setisplaying] = useState(false);

  function onPlay() {
    setisplaying(false);
  }
  function onPause() {
    setisplaying(true);
  }

  return (
    <div className="w-full h-64">
      <section
        id="bottom-navigation"
        className="block fixed  inset-x-0 bottom-0 z-10 "
      >
        <div className="bg-rows-2">
          <div className="bg-gray-900 w-full h-2">
            <div className="bg-green-500 h-2" style={{width:10}}>
            </div>
          </div>
          <div className=" bg-gray-200  dark:bg-gray-900 grid grid-cols-3">
            <div className="col-span-2 pt-5 lg:pt-0 dark:bg-gray-900  p-2 pb-4 sm:p-4 lg:p-2 lg:pb-3 xl:p-4 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
              <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                <img
                  src=""
                  alt=""
                  width="160"
                  height="160"
                  className="flex-none w-10 h-10 shadow-2xl rounded-lg bg-gray-100 object-cover md:w-20 md:h-20"
                />
                <div className="min-w-0 flex-auto space-y-0.5">
                  <Link to={`/song//`}>
                    <h2 className="text-black dark:text-white text-xs sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
                      
                    </h2>
                  </Link>
                  <p className="text-blue-900 dark:text-gray-400 text-xs sm:text-lg lg:text-base xl:text-lg font-medium">
                    
                  </p>
                </div>
              </div>
            </div>

            <div className=" text-black dark:bg-gray-900 dark:text-white  py-4 px-1 sm:px-3 lg:px-1 xl:px-3 grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 items-center">
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block mx-auto"
              >
                <MdSkipPrevious className="text-4xl" />
              </button>
              <button type="button" className="hidden  sm:block  mx-auto">
                <svg width="34" height="39" fill="none">
                  <path
                    d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
                    fill="currentColor"
                  />
                  <path
                    d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6"
                    stroke="currentColor"
                    style={{ strokeWidth: "1.5" }}
                  />
                  <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
                </svg>
              </button>
              {isplay ? (
                <button
                  type="button"
                  onClick={onPlay}
                  className="mx-auto ml-10 lg:ml-0 h-50 w-50 shadow-xl rounded-full"
                >
                  <MdPlayCircleOutline className="text-5xl" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onPause}
                  className="mx-auto ml-10 lg:ml-0 h-50 w-50 shadow-xl rounded-full"
                >
                  <MdPauseCircleOutline className="text-5xl" />
                </button>
              )}
              <button type="button" className="hidden sm:block mx-auto">
                <svg width="34" height="39" fill="none">
                  <path
                    d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
                    fill="currentColor"
                  />
                  <path
                    d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6"
                    stroke="currentColor"
                    style={{ strokeWidth: "1.5" }}
                  />
                  <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block mx-auto"
              >
                <MdSkipNext className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default BottomNav;
