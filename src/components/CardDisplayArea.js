import React from "react";
import Card from "./Card";

const CardDisplayArea = ({ books }) => {
  return (
    <div>
      <h1>{books.length}</h1>
      <div className="container row mx-auto">
        {books.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              authors={item.authors}
              pageCount={item.pageCount}
              publisher={item.publisher}
              img={
                item.imageLinks !== undefined
                  ? item.imageLinks.thumbnail
                  : "https://i.stack.imgur.com/1hvpD.jpg"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDisplayArea;
