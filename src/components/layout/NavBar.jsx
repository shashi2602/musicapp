
import { useTheme } from "react-hook-tailwind-darkmode";
import {BsMoon} from "react-icons/bs";
import {WiDaySunny} from 'react-icons/wi';
import {Link} from 'react-router-dom'

function NavBar() {
  const { changeTheme, theme } = useTheme();
  return (
    <header className="grid grid-cols-2">
      <Link to="/">
      <h1 className=" pt-2 sm:pt-5 pl-0 md:pl-10  text-2xl sm:text-5xl font-bold text-black dark:text-white md:text-left text-left">
      <span className="text-bold">♫</span>usiz
      
      </h1>
      
      </Link>
     
      <div className=" text-right pt-2 sm:pt-7  pr-0 sm:pr-5">
      <button onClick={() => changeTheme()} type="button" className=" h-10 w-10 pl-2 focus:outline-none ">
        {theme !== "dark" ? 
          <BsMoon className="text-black w-6 h-6"/>
         : 
          <WiDaySunny className="text-white w-6 h-6"/>
        }
      </button>
      </div>
    </header>
  );
}

export default NavBar;
