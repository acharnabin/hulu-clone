import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getMovie } from "../Redux/action/getMovie";
import Loading from "./Loading";
import VedioCard from "./VedioCard";

const MovieList = (props) => {
  const id = props.match.params.id;
  const movieList = useSelector((state) => state.movies);
  const { movies, loading } = movieList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  return (
    <div className="movie_list">
      {loading ? <Loading /> : null}
      {movies.length ? (
        movies.map((item, index) => {
          return (
            <VedioCard
              keys={index}
              movie={item}
              

            />
          );
        })
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default MovieList;
