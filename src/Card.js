import React from "react";
//import * as images from "./images";
//import * as images from "./img";
import Chelsea from "./img/chelsea.png";
// import Manutd from "./img/manutd.jpg";
// import Barca from "./img/barcelona.png";
// import Real from "./img/real.png";
//import { images } from "./images";
import * as ImgArr from "./images";

const Card = ({ name, club, fs, cert, school, color }) => {
  return (
    <div className=" tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={ImgArr.ImgArr[club]} alt="clubs" width="200" height="200" />
      <div>
        <h2>{name}</h2>
        <p>{fs}</p>
        <p>{cert} </p>
        <p>{school}</p>
        <p>{color}</p>
      </div>
    </div>
  );
};

export default Card;
