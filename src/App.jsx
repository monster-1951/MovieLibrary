import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./COMPONENTS/Input";
import MovieList from "./COMPONENTS/MovieList";
import MovieDetails from "./COMPONENTS/MovieDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicExample from "./COMPONENTS/BasicExample";
import { CirclesWithBar } from "react-loader-spinner";

function App() {
  let MovieName;
  const [Response, setResponse] = useState();
  const [loaderDisplay, setloaderDisplay] = useState(false)

  const getResponse = async (data) => {
    setloaderDisplay(true)
    const response = await fetch(
      `http://www.omdbapi.com/?s=${data}&apikey=1e568fe8`
    )
      .then((res) => res.json())
      .then((data) => setResponse(data));
      setloaderDisplay(false)
    // console.log("responded");
  };
  const setMovieName = (data) => {
    MovieName = data;
    getResponse(MovieName);
    console.log(Response);
    //  getResponse(data)
    console.log(MovieName);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1 className="text-5xl font-bold p-5 font-mono">Movie Library</h1>
          <Input sendMovieName={setMovieName}></Input>
          <MovieList res={Response}></MovieList> 
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
        </>
      ),
    },
    {
      path: "/MovieDetails/:MovieName/:MovieYear/:MovieId/:Type",
      element: (
        <>
          <h1 className="text-5xl font-bold p-5 font-mono">Movie Library</h1>
          <Input sendMovieName={setMovieName}></Input>
          <MovieList res={Response}></MovieList>
          <MovieDetails />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
