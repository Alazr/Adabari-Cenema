import GlobalStyles from './shared/GlobalStyles'
import Home from './components/Home'
import {Redirect, Route,Switch,useLocation} from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import Discover from './components/Discover'
import "./app.css"
import Movies from './components/moviesComponent'
import TvComponent from './components/tvComponent'
import NotFound from './components/NotFound'
import {AnimatePresence} from 'framer-motion'

function App() {
  const loc = useLocation()
  return (
    <div className="App">
      <GlobalStyles/>
      <AnimatePresence exitBeforeEnter>

      <Switch key={loc.pathname} location={loc}>
    <Redirect from="/movie/movie/:id" to="/movie/:id"/>
    <Route path="/movie/:id">
      <MovieDetail/>
    </Route>
    <Redirect from="/tv/tv/:id" to="/tv/:id"/>
    <Route path="/tv/:id">
      <MovieDetail/>
    </Route>
    <Route path="/movies">
      <Movies/>
    </Route>
    <Route path="/tv">
      <TvComponent/>
    </Route>
    <Route path="/discover">
      <Discover/>
    </Route>
    <Route path="/notfound">
      <NotFound/>
    </Route>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Redirect to="/notfound"/>    
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
