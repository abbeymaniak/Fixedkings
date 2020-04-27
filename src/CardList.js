import React from "react";
import Card from "./Card";

const CardList = ({ kings }) => {
  return (
    <div>
      {kings.map((user, i) => {
        return (
          <Card
            key={i}
            club={kings[i].Club}
            name={kings[i].Name}
            fs={kings[i].FieldofStudy}
            cert={kings[i].Certification}
            school={kings[i].Institution}
            color={kings[i].FavouriteColor}
          />
        );
      })}
    </div>
  );
};

export default CardList;
