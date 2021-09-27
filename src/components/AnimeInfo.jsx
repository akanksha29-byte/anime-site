import React from "react";
import { useAuth } from "../context/animeContext";

const AnimeInfo = () => {
  const { currentAnime: anime } = useAuth();
  return (
    <div className="anime-info-container">
      <img src={`${anime.banner_image}`} alt={`${anime.titles["en"]}`} />
      <div className="anime-detail">
        <h2>{`${anime.titles["en"]} / ${anime.titles["jp"]}`}</h2>

        <h6>
          Start date : {new Date(anime.start_date).toDateString()}, End date :{" "}
          {new Date(anime.end_date).toDateString()}
        </h6>
        <p className="hashtags">
          <strong>Genres:</strong> {anime.hashTags}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {`${
            anime.descriptions["en"] !== "" ? anime.descriptions["en"] : "NA"
          }`}{" "}
        </p>
      </div>
    </div>
  );
};

export default AnimeInfo;
