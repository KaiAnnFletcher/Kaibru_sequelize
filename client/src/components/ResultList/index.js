import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.thumbnail} />
          <h4>{result.details}</h4>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;