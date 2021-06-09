import {combineReducers} from 'redux'
import movieDetail from './detailReducer'
import discoverReducer from './discoverReducer'
import genresReducer from './genresReducer'
import mobileReducer from './mobileReducer'
import moviesReducer from './moviesReducer'
import tvGenresReducer from './tvGenreReducer'



export const rootReducer = combineReducers({
    movies:moviesReducer,
    details:movieDetail,
    discover:discoverReducer,
    genres:genresReducer,
    tvGenres:tvGenresReducer,
    isMobile:mobileReducer
})