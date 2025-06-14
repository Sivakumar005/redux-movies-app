import { useEffect } from "react";
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { getmovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { getMoviesBySearch } from '../../utils/getMoviesBySearch';

const Home = () => {
    const dispatch = useDispatch();
    const { movies,searchValue } = useSelector(state => state.movies);
    const filterByMovieName=getMoviesBySearch(movies,searchValue);
    useEffect(() => {
        dispatch(getmovies());
    }, [])
    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1, marginTop:2, marginLeft:4 }}>
                <Grid container spacing={5}>               {
                    filterByMovieName?.length > 0 && filterByMovieName.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
                </Grid>
            </Box>
        </>
    )
}

export default Home;