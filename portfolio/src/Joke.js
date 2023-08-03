import React, { useState, useEffect } from "react";
import "./Joke.css";

const Joke = ({ isVisible, onHideJoke, savedJokes, setSavedJokes }) => {
  const [joke, setJoke] = useState("");
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // When isVisible prop changes, trigger the slide animation
    setSlideIn(isVisible);
  }, [isVisible]);

  const generateJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Joke data:", data); // Debugging statement
        setJoke(data.joke);
      })
      .catch((error) => console.log(error));
  };

  const saveJoke = () => {
    setSavedJokes([...savedJokes, joke]);
  };

  const handleHideJoke = () => {
    setJoke(""); // Clear the joke content to hide the joke
    onHideJoke(); // Call the function from the parent component to hide the Joke
  };

  return (
    <div className={`joke-page-content ${slideIn ? "slide-in" : "slide-out"}`}>
      <p>
        Press the <span className="button-highlight">BUTTON</span> below to
        randomly generate a thigh-slapping cracker straight to your screen.
        <br />
      </p>
      <button className="joke-button" onClick={generateJoke}>
        Joke Button
      </button>
      <br />
      {joke && (
        <div className="joke-container">
          <p className="joke-text">{joke}</p>
          <br />
        </div>
      )}
    </div>
  );
};

export default Joke;
