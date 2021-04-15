import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontWeight: "bold",
  },
  title: {
    fontFamily: `"Times New Roman", Times, serif`,
    fontSize: "larger",
  },
  appBar: {
    backgroundColor: "#3b5360",
    padding: "2vh 0 2vh 0.5vw",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <Typography variant="time" className={classes.title}>
           Last Wishes
          </Typography>
          <Button className={classes.menuButton} color="inherit">Login</Button>
          <Button className={classes.menuButton} color="inherit">Resources</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}