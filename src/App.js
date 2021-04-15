import React from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar'
import image1 from "./assets/image1.jpeg";
import {
  makeStyles,
  Grid
} from "@material-ui/core";

const homeStyles = makeStyles((theme) => ({
  imgBrand: {
    width: "100%"
  }, 
}));

function App() {
  const classes = homeStyles();
  return (
    <div className="App">
    <ButtonAppBar/>  
      <Grid container >
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className={classes.imgBrand} alt="logo" src={image1} />
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
