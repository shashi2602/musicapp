import {useState,useMemo } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";
const Search = () => {
  const history = useHistory();
  const [text, setText] = useState()

  const pushKeyword = useMemo(() => {
    return debounce((searchTerm) => {
      if (searchTerm) {
        history.push(`/search?q=${searchTerm}`);
      } else {
        history.push(history.push(history.location.pathname));
      }
    }, 500
    )// end of debounce
  }, [history]);

  function onSearch(event) {
    event.preventDefault();
    pushKeyword(text)
  }
  return (
    <div >
      <form onKeyUp={onSearch} onSubmit={onSearch} className="shadow-md rounded dark:bg-gray-900 bg-gray-300 p-1 flex mb-2 mt-1" id="search-form">
      <input
        className="w-full  p-2 bg-gray-200 dark:bg-black  text-black dark:text-white "
        type="text"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={onSearch}
        className=" w-auto bg-gray-300 dark:bg-gray-900 flex justify-end items-center  p-2 "
      >
        <svg
          className="text-gray-900 dark:text-white h-4 w-4 fill-current"
          viewBox="0 0 56.966 56.966"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
      </form>
    </div>
  );
}

export default Search;
