import {lazy,Suspense} from 'react';
import GlobalStyles from './shared/GlobalStyles'
import {Redirect, Route,Switch,useLocation} from 'react-router-dom' 
import NotFound from './components/NotFound'
import {AnimatePresence} from 'framer-motion'
import Loader from './shared/Loader';

const Home = lazy(()=>import('./components/Home'))
const MovieDetail = lazy(()=>import('./components/MovieDetail'))
const Movies = lazy(()=>import('./components/moviesComponent'))
const TvComponent = lazy(()=>import('./components/tvComponent'))
const Discover = lazy(()=>import('./components/Discover'))

function App() {
  const loc = useLocation()
  return (
    <div className="App">
      <GlobalStyles/>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<Loader/>}>
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
      </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;