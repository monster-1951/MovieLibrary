import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const MovieDetails = () => {
  const [loaderDisplay, setloaderDisplay] = useState(true)
  const params = useParams();
  let Title = params.MovieName;
  const [MovieData, setMovieData] = useState("");
  const getMovieDetails = async (params) => {
    // setloaderDisplay(true)
    await fetch(`http://www.omdbapi.com/?s=${Title}&apikey=1e568fe8`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
      setloaderDisplay(false)
    console.log(MovieData);
  };

  getMovieDetails();

  return (
    <center className="mt-10 flex flex-wrap space-x-4 space-y-4 justify-center">
      <CirclesWithBar
            height="100"
            width="100"
            color="#006494"
            outerCircleColor="#006494"
            innerCircleColor="#006494"
            barColor="#006494"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loaderDisplay}
          />
      {MovieData?.Search?.map((i) => {
        return (
          <center className="flex">
            <span className="bg-[#003554] p-5 rounded-xl w-[450px] flex space-x-10">
              <img
                src={i.Poster}
                alt=""
                className="h-[200px] w-[200px] rounded-2xl"
              />
              <div className="p-2">
                <h1>{i.Title}</h1> <br />
                <h4 className="">Year of Release : {i.Year}</h4>
                <br />
                <h4 className="">IMDB ID : {i.imdbID}</h4>
                <br />
                <h4 className="">Show type :{i.Type}</h4>
              </div>
            </span>
          </center>
        );
      })}
    </center>
  );
};

export default MovieDetails;
