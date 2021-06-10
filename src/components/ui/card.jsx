import {Link} from 'react-router-dom'
function Card(prop) {
  const {genre,id,title,url}=prop
  return (
    <div >
      <Link to={`/${genre}/${id}/${title}`}>
      <div  className="relative bg-gray-900 shadow-2xl  rounded-lg group h-20 w-20 sm:h-48 sm:w-48 flex justify-center items-center">
        
        <div
          className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
          style={{backgroundImage:`url(${url})`}}
        >
            <div>
            {/* <p className="  w-12 h-6 p-1 bg-green-500 font-bold text-white text-xs sm:text-xs  rounded-r-lg capitalize">{lang}</p> */}
        </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Card;
