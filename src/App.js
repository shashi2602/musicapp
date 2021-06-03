import "./App.css";
import {Route,Switch} from 'react-router-dom'
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
import {Search_data} from "./data/Searchdata"


function App() {
  return (
    <Layout>
      <Search/>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/featured/list">
            <Featured/>
        </Route>
        <Route path="/newalbums">
            <NewAlbums/>
        </Route>
        <Route path="/album/:id/:name">
            <AlbumDetails/>
        </Route>
        <Route path="/featured/:id/:name">
            <FeaturedDetails/>
        </Route>
        <Route path="/song/:id/:name">
            <SongDetails/>
        </Route>
        <Route path="/search">
            <SearchResults/>
        </Route>
      </Switch>
        <BottomNav />
      {/* <Player/>  
      <div>
          <MusicList/>
      </div> */}
    </Layout>
  );
}

export default App;
