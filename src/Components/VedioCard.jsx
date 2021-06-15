import React from "react";
import "../App.css";
import { Suspense } from "react";
import TextTruncate from "react-text-truncate";
import Loading from "./Loading";
import {IoThumbsUpOutline} from 'react-icons/io5'
import { ListItem, ListItemText,ListItemIcon } from "@material-ui/core";
const VedioCard = ({movie}) => {
  return (
    <div className="vedio_card">
    
    <Suspense fallback={<Loading/>}>
    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} alt="" />

    </Suspense>
      <h2>{movie.title}</h2>
      <TextTruncate
          line={1}
          element="p"
          truncateText="…"
          text={movie.overview}
        />
     <div className="vedio_like">
        <ListItem>
        <ListItemIcon><IoThumbsUpOutline style={{fontSize:'23px'}} className="icons"/></ListItemIcon>
          <ListItemText>{movie.vote_count}</ListItemText>
        </ListItem>
     </div>
    </div>
  );
};

export default VedioCard;
