import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({
  title,
  subtitle="",
  description = "",
  authors = "authors",
  pageCount="",
  publisher,
  img,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setRestClicked(false);
  },[title]);
  const [restClicked, setRestClicked] = useState(false);
  const restClickHandler = () => {
    setRestClicked(!restClicked);
  };
  return (
    <div className="col-md-6 col-sm-12 mt-5 text-justify" data-aos="fade-up">
      <div className="col-md-12">
        <div className="card">
          <img
            className="card-img-top"
            src={img}
            style={{
              width: "128px",
              margin: "20px auto",
              height: "192px",
              objectFit: "contain",
            }}
            alt="Hele"
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h5 className="card-subtitle">{subtitle!=="" ? (`"${subtitle}"`) : (null)}</h5>
            {description.length < 400 ? (
              <p className="card-text">{description}</p>
            ) : (
              <>
                <p className="card-text">
                  {restClicked ? description : description.slice(0, 400) + '...'}
                </p>
                <button class="btn btn-secondary" onClick={restClickHandler}>
                  <i
                    className={
                      restClicked
                        ? "fa fa-angle-double-up"
                        : "fa fa-angle-double-down"
                    }
                  ></i>
                  {!restClicked ? "Show More" : "Show Less"}
                </button>
              </>
            )}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Author(s): {authors.toString()}</li>
            <li className="list-group-item">{pageCount!=="" ? (pageCount + ' pages') : ('No page info') }</li>
            <li className="list-group-item">Publisher: {publisher}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
