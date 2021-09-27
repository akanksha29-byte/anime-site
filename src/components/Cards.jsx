import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/animeContext";

const Cards = ({ item }) => {
  const { setCurrentAnime } = useAuth();
  const trim = (str, len) => {
    return str.length > len ? str.substring(0, len).concat("...").trim() : str;
  };

  const genres = () => {
    let str = "";
    for (let i = 0; i < item.genres.length; i++) {
      str += `#${item.genres[i]} `;
    }

    return str.trim().substring(0, str.length - 2);
  };

  return (
    <Link
      to={{
        pathname: `/${item.anilist_id}`,
        id: item.anilist_id,
      }}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Card
        style={{ width: "18rem" }}
        className="card-container"
        onClick={() => {
          setCurrentAnime({ ...item, hashTags: genres() });
        }}
      >
        <Card.Img
          variant="top"
          src={item.cover_image}
          alt={item.titles["en"]}
        />

        <Card.Body className="card-body">
          <Card.Title style={{ height: "30px", fontSize: "18px" }}>
            {trim(item.titles["en"], 50)}
          </Card.Title>

          <Button
            size="sm"
            variant="success"
            className="w-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(item.trailer_url);
            }}
          >
            Trailer
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Cards;
