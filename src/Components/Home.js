import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { movieHomepage } from "../Redux/action/getMovie";
import Loading from "./Loading";
import VedioCard from "./VedioCard";

const Home = (props) => {
  
  const movieList = useSelector((state) => state.movies);
  const { movies, loading } = movieList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieHomepage());
  }, []);

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

export default Home;
