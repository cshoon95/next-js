import React, { useState, useEffect } from 'react';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

interface IGetMoviesProps {
    page: number;
    results: IMovieProps[];
    total_pages: number;
    total_results: number;
}

interface IMovieProps {
    id: number;
    backdrop_path: string;
    original_title: string;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
    genre_ids: [number];
}

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async() => {
            const { results } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);

    return (
        <>
        <Seo title="Home"/>
        {movies.length === 0 && <h4>Loading...</h4>}
        {movies?.map((movie: IMovieProps) => {
            return (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            )
        })}
        </>
    );
}