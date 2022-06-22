import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";
import Features from "../components/Features";
import Carousel from 'react-material-ui-carousel'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  heading: {
    textAlign: "center",
    marginTop: "40px",
  },
  footer: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100% !important",
    height: "100px !important",
    background: "#091216",
    color: "white",
    paddingTop: 30,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  marketBtn: {
    marginTop: 10,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      width: "350px",
      fontSize: "1.1em",
    },
  },
  banner: {
    position: "relative",
  },
  bannerimg: {
    maxWidth: "100%",
    borderRadius: "30px",
  },
  anchor: {
    position: "absolute",
    bottom: "-15px",
    background: "white",
    borderRadius: "100%",
    padding: "5px",
    width: "40px",
    border: "1px solid black",
    left: "calc(50% - 20px)",
  },
}));
export default function Sale(props) {
  const classes = useStyles();

  const newCollections = [
    {
      name: "India",
      image: "/collections/india_upcoming.png",
      blurb: "COVID situation and equality",
    },
    {
      name: "Syria",
      image: "/collections/syria_upcoming.png",
      blurb: "Housing shortage",
    },
    {
      name: "Myanmar, Civil War",
      image: "/collections/myanmar_upcoming.png",
      blurb: "Rohingya crisis",
    },
    {
      name: "Venezuela",
      image: "/collections/venezuela_upcoming.png",
      blurb: "Employee strikes",
    },
    {
      name: "Turkey",
      image: "/collections/turkey_upcoming.png",
      blurb: "Free speech demonstrations",
    },
    {
      name: "Kazakhstan, Civil Unrest",
      image: "/collections/kazakstan_upcoming.png",
      blurb: "Front-line updates from the capital",

    }

  ]
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "100%", display: "block", position: "relative" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0px auto",
          }}
        >
          <h1 className={classes.heading}>Upcoming drops by journalists around the world!</h1>

          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
          >
            {
              props.collections.filter(a => typeof a.sale != 'undefined' && a.sale == true)
              .filter((collection, i) => i < 6)
              .map((collection, i) => {
                return (<Grid key={i} item md={4} style={{ marginBottom: 20 }}>
                  <Link style={{textDecoration:"none"}} to={"/sale"}>
                    <Card className={classes.root}>
                      <CardMedia
                        className={classes.media}
                        image={newCollections[i].image}
                        title={newCollections[i].name}
                      />
                      <CardContent>
                        <h3>{newCollections[i].name}</h3>
                        <Typography style={{display:"block", height:"125px", overflow:"hidden", textOverflow: "ellipsis"}} variant="body1" color="textSecondary" component="p"
                        >{newCollections[i].blurb}</Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>);
              })
            }
          </Grid>
          <h1 className={classes.heading}>Launch your Front Line Photo NFT with Refound</h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3em",
              padding: "0 30px",
            }}
          >
            Apply to share your photo journalism with the world!
          </p>
          <Features />
        </div>
      </div>
    </>
  );
}
