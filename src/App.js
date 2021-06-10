import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import MusicList from "./components/ui/Musiclist";
// import Player from "./components/ui/player";
import Search from "./components/ui/searchbox";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import NewAlbums from "./pages/NewAlbums";
import AlbumDetails from "./pages/AlbumDetails";
import BottomNav from "./components/layout/BottomNav";
import FeaturedDetails from "./pages/FeaturedDetails";
import SongDetails from "./pages/SondDetails";
import SearchResults from "./pages/Search";
import React,{useState} from "react";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const [playSong,setPlaySong]=useState([])  
  const path = location.pathname;
  function handelPlaySong(song){
    setPlaySong(song)
    console.log(playSong)
  }
  return (
    <React.Fragment>
        <Layout>
          <Search />
          <p class="font-bold center text-center text-green-400">ByJio saavn</p>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/featured/list">
              <Featured />
            </Route>
            <Route path="/newalbums">
              <NewAlbums />
            </Route>
            <Route path="/album/:id/:name">
              <AlbumDetails/>
            </Route>
            <Route path="/featured/:id/:name">
              <FeaturedDetails />
            </Route>
            <Route path="/song/:id/:name">
              <SongDetails onClickPlay={handelPlaySong}/>
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>
          </Switch>
          {
            playSong.length!==0?
            <BottomNav song={playSong}/>
            :
            <div></div>
          }
        </Layout>
      
    </React.Fragment>
  );
}

export default App;
