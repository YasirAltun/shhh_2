import React from "react";

import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
        {props.details.map((value, index) => (
        <div className="card" key={index}>
            <div className="card-image">
                <img src={value.img}/>
            </div>
            <div>
                <p className="card-title">{value.title}</p>
                <p className="description">{value.description}</p>

            </div>

            <div className="card-button">
                <Link className="card-button" to={value.videoURL} ><button  >İzle</button></Link>
            </div>
        </div>
        ))}
    </>
  );
};
export default Card;