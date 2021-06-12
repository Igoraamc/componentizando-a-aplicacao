import React from "react";
import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: MovieProps[];
}

export function Content(props: ContentProps) {
  const { movies } = props;

  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  );
}