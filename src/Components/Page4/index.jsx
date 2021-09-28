import React, { Component } from "react";
import "./Page4.css";

export default class Page4 extends Component {
  render() {
    const { movieCast } = this.props;
    return (
      <div className="container_actor">
        <h1>ACTOR</h1>
        <div className="actor_body row row-cols-1 row-cols-md-2 g-4">
          {movieCast.map((actor) => {
            const { name, character, profile_path} = actor;

            return (
              <div className="card col p-3 m-4" style={{ width: "20rem",textAlign:"center", boxShadow:"#000000 10px 10px 33px -4px"}}>
                <img src={`https://image.tmdb.org/t/p/original${profile_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    {character}
                  </p>
                 
                </div>
                
              </div>

              
            );
          })}
        </div>
      </div>
    );
  }
}
