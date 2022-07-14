const API_KEY = process.env.REACT_APP_API_KEY;

export function getImages() {

    return "https://image.tmdb.org/t/p/w1280";

}

export function getImageDefault() {

    return "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

}

export function getMediaGenre(type, id, page) {

    return `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=pt-BR&with_genres=${id}&page=${page}`;

}

export function getSearch(id, page) {

    return `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${id}&page=${page}`;

}

export function getGenres(type) {

    return `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=pt-BR`;

}

export function getCategory(page, type) {

    return `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=pt-BR&page=${page}`;

}

export function getDetails(type, id) {

    return `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=pt-BR`;

}

export function getCasting(type, id) {

    return `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;

}

export function getSynopsis(type, id) {

    return `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=pt-BR`;

}

export function getTrailer(type, id) {

    return `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=pt-BR`;

}

// Movie
export const moviePopular = "popular";
export const movieUpcoming = "upcoming";
export const movieTopRated = "top_rated";

// TV
export const tvPopular = "popular";
export const tvTopRated = "top_rated";

// Genre
export const genreMovie = "/genre/movie/list";
export const genreTV = "/genre/tv/list";