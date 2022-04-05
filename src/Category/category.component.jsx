import React from "react";
import "./category.component.css";

export default function Category(props) {
  let sortedCategories = props.categories
    .sort((a, b) => a.order - b.order)
    .filter((ele) => ele.order >= 0);

  let allcategories = sortedCategories.map((category) => {
    return (
      <div className="row allCategories">
        <div className="shadow">
          <img
            className={category.order % 2 == 0 ? "rightImage" : "leftImage"}
            src={"./" + category.imageUrl}
            alt="First slide"
            key={category.id}
            height="250 px"
          />
          <div className="descriptionCategory text-center">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button className="btn btn-danger">
              {"Explore " + category.key}
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div>{allcategories}</div>;
}
