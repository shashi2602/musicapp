function PlayBtn(prop){
 
    return (
        
        <button onClick={prop.onPlay} className="bg-gray-800 w-full hover:opacity-75 text-white rounded-full px-8 py-2">
            Play
        </button>
    );
}

export default  PlayBtn