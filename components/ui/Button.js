import React from "react";
import Link from "next/link";

import classes from "./Button.module.css";

// ## =>
function Button({ children, link, onCLick }) {
  return (
    <>
      {link && (
        <Link href={link}>
          <a className={classes.btn}>{children}</a>
        </Link>
      )}

      {!link && (
        <button className={classes.btn} onClick={onCLick}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
