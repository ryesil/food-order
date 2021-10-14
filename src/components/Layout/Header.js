import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Button } from "@mui/material";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>

        <Button size="large" variant="contained" color="secondary">
          Cart
        </Button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Header;
