import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-bootstrap";

const Input = ({sendMovieName}) => {
  const [input, setinput] = useState("");
  

  const handleChange = (e) => {
    console.log(input);
    setinput(e.target.value);
    console.log(input);
  };

  const Search = () => {
      console.log(input);
      sendMovieName(input.trim());
  };

  const keydownHandler = (e) => {
    // console.log(e.key);
    if (e.key == "Enter") {
      Search();
    //   console.log(MovieName);
    }
  };

  return (
    <div>
      <div className="input-group input-group-lg flex flex-row justify-center space-x-5">
        <div className="my-auto text-white">
          <FaSearch />
        </div>
        <input
          type="text"
          className="form-control border-solid rounded-lg border-2 border-black p-2 w-3/4 text-black text-lg font-semibold animate-pulse font-mono"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Enter the Movie name"
          value={input}
          onChange={handleChange}
          onKeyDown={keydownHandler}
        />
        <NavLink to="/MovieDetails">
        <button className=" bg-[#003554] p-3 rounded-lg w-24 font-mono" onClick={Search}>
          Enter
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Input;
