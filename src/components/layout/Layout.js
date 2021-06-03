// import BottomNav from './bottomnav'
import NavBar from './NavBar'
import {Search_data} from "../../data/Searchdata"
function Layout(props){
    return (
        <div className="grid grid-cols-none p-5 sm:p-0 sm:pr-2 sm:grid-cols-4">
            <div>
                <NavBar/>
            </div>
            <div className="col-span-none  sm:col-span-3 pt-5">
                {props.children}
            </div>
        </div>
    );
}

export default Layout