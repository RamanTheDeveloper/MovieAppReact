import React from "react";
import { useParams } from "react-router-dom";
//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';
//Components
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
//Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const {movieId} = useParams();//Take movie ID from url

    const {state: Movie, loading, error} = useMovieFetch(movieId)
    return(
        <>
            <div>Movie</div>
        </>
    );
}

export default Movie;