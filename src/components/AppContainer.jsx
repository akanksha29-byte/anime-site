import React from "react";
import Cards from "./Cards";

const AppContainer = ({ anime, search }) => {
  if (search !== "") {
    anime = anime.filter((item) =>
      item.titles["en"].toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="main">
      <div className="anime-container">
        {anime.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AppContainer;
