export const initialstate={
    playlist=[],
    song=[],
    playing=null,

};

const MusicReducer=(state=initialstate,action)=>{
        switch (action.type){
            case "SET_PLAYLIST":
                return {
                    ...state,playlist:action.payload
                }
            case "SET_SONG":
                return{
                    ...state,song:action.payload
                }
            case "SET_PLAYING":
                return {
                    ...state,playing:action.payload
                }
        }
}

export default MusicReducer