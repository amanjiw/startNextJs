import React from "react";
import EventItem from "./EventItem";

import classes from "./EventList.module.css";

// ## =>
function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
