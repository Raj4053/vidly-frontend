import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieForum = ({match}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Movie Forum {id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForum;
