import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const MovieList = ({ res }) => {
  let altImage ="altImage.jpeg"; 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    console.log(res);
  });

  return (
    <>
    <section className="p-6 mt-10 border-solid border-[#004D74] bg-[#022B42] rounded-xl font-mono">
      {(res != "undefined" && res?.Response =="True") && (
        <Slider {...settings}>
          {res?.Response == "True" &&
            (res?.Search).map((i) => {
              return (
                 (
                  <center key={i} className="p-2">
                      <img
                        src={i.Poster != "N/A" ? i.Poster: altImage}
                        className="h-[300px] w-full border-solid border-2 border-[#032030] hover:w-[250px]"
                        alt=""
                      />
                      <Link to={`/MovieLibrary/MovieDetails/${i.Title}/${i.Year}/${i.imdbID}/${i.Type}/`} target="_blank">
                      <li className="font-semibold p-5 bg-[#032030] mt-2 font-mono">
                        {i.Title}
                      </li>
                    </Link>
                  </center>
                )
              );
            })}
        </Slider>
      )}
      {!res && "Search for any Movie"} <br />
      {res?.Response == "False" && res?.Error}
    </section>
    </>
  );
};

export default MovieList;
