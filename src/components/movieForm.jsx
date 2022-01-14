import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>
      <button
        to="/Movies"
        className="btn btn-secondary"
        onClick={() => history.push("/Movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
