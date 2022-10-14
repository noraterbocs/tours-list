import React, { useState } from "react";

const Tour = ({ tours, removeTourSection }) => {
  const [readMore, setReadMore] = useState(false);
  return tours.map((tour) => {
    return (
      <section className="tour-section" key={tour.id}>
        <img src={tour.image} alt={tour.name} />
        <article className="tour-article">
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <h4>{tour.price}</h4>
          </div>
          <p className="tour-text">
            {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
            <button
              className="btn-readmore"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show less" : "  Read more"}
            </button>
          </p>
          <button className="btn" onClick={() => removeTourSection(tour.id)}>
            Not Interested
          </button>
        </article>
      </section>
    );
  });
};

export default Tour;
