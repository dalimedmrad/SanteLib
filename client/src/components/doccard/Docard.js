import React from "react";
import { Link } from "react-router-dom";
import "./doccard.css";
import RoomIcon from "@material-ui/icons/Room";

export default function MediaCard({ el }) {
  return (
    <div className="trajet-card1">
      <div className="trajet-card">
        <div>
          <img className="image" src={el.image2} />
        </div>
        <div className="trajet-body">
          <div className="trajet-row">
            <Link
              style={{ textDecoration: "none" }}
              to={`/docprofile/${el._id}`}
            >
              <p className="name">
                Dr {el.name} {el.lastName}
              </p>
            </Link>
            <p className="sps">{el.specialite}</p>
            <p className="vil">
              <RoomIcon className="i1" />
              {el.ville}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
