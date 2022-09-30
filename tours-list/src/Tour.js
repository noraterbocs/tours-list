import React from "react";

const Tour = ({ tours, removeTourSection }) => {
  return tours.map((tour) => {
    return (
      <section key={tour.id}>
        <img src={tour.image} alt={tour.name} />
        <article>
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <h4>{tour.price}</h4>
          </div>
          <p>{tour.info}</p>
          <button onClick={() => removeTourSection(tour.id)}>
            Not Interested
          </button>
        </article>
      </section>
    );
  });
};

export default Tour;
