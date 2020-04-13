import React from "react";
import { ListItem } from "../List";

const Card = ({
  title,
  subtitle,
  link,
  authors,
  description,
  image,
  Button,
}) => {
  return (
    <ListItem>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={image} className="card-img" alt="..." />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <small className="text-muted">{subtitle}</small>
              </p>
              <p className="card-text">{authors}</p>
              <p className="card-text">{description}</p>
              <div className="row">
                <div className="p-2 bd-highlight">
                  <a
                    href={link}
                    role="button"
                    className="btn btn-outline-secondary heading-subtitle ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
                <div className="p-2 bd-highlight">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ListItem>
  );
};

export default Card;
