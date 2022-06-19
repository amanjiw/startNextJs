import React from "react";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address> {formatedAddress} </address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            {" "}
            <span> Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />{" "}
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
