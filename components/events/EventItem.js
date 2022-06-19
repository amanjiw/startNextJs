import React from "react";
import Link from "next/link";

import Button from "../ui/Button";

import classes from "./EventItem.module.css";

// ## =>
function EventItem({ title, image, date, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summery}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address> {formatedAddress} </address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}> Explore event </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
