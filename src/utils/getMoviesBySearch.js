export const getMoviesBySearch=(movies,value)=>{
    const filteredMovies=value?.length>0?(movies?.length>0 && movies.filter(movie=>movie.title.toLowerCase().includes(value.toLowerCase()))):movies;
    return filteredMovies;
}