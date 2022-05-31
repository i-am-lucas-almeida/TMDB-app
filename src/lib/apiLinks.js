const API_KEY = process.env.REACT_APP_API_KEY;

export function getImages() {

    return 'https://image.tmdb.org/t/p/w1280';

}

export function getImageDefault() {

    return 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

}

export function getTrending(page) {

    return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`;

}

export function getMovies(id, page) {

    return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${id}&page=${page}`;

}

export function getSearch(id, page) {

    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${id}&page=${page}`;

}

export function getGenres() {

    return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`;

}

export function getUpcoming(page) {

    return `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${page}`;

}

export function getTopRated(page) {

    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=${page}`;

}

export function getDetails(id) {

    return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;

}

export function getCasting(id) {

    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

}

export function getSynopsis(id) {

    return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`;

}

export function getTrailer(id) {

    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`;

}