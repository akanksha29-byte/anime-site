import React, { useState } from "react";
import { Navbar, FormControl, Button } from "react-bootstrap";

const NavBar = ({ setSearch }) => {
  const [temp, setTemp] = useState("");

  return (
    <div className="nav-outer">
      <Navbar expand="lg" className="nav-inner">
        <Navbar.Brand
          href="/"
          className="text-light"
          style={{ fontSize: "25px" }}
        >
          Anime Website
        </Navbar.Brand>
        <div className="search-bar">
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <Button
            type="submit"
            variant="success"
            style={{ marginLeft: "5px" }}
            onClick={() => {
              setSearch(temp);
              setTemp("");
            }}
          >
            Search
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
