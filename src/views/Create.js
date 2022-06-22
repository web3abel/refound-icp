import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Container } from "@material-ui/core";
import Navbar from "../containers/Navbar";
import {Journalists} from "./Home.js"
import Features from "../components/Features";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    maxWidth: 345,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    width: "100%",
  },
  heading: {
    textAlign: "center",
    marginTop: "40px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    padding: "120px 120px",
    [theme.breakpoints.down("md")]: {
      padding: "110px 66px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "90px 45px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "75px 45px",
    },
  },
  footer: {
    textAlign: "center",
    background: "#091216",
    color: "white",
    padding: "30px 0px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
export default function Create(props) {
  const classes = useStyles();
  return (
    <>
      <div style={{ width: "100%", display: "block", position: "relative" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0px auto",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <h1 style={{ textAlign: "center" }}>
                Take ownership of the media you already create!
              </h1>
              <ul style={{ paddingLeft: "20%" }}>
                <li>
                  <p style={{ textAlign: "left", fontSize: "1.3em" }}>
                    Mint Front Line Photo NFTs through mobile-first solutions (mobile web and SMS uploads)
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left", fontSize: "1.3em" }}>
                    Add beneficiary wallets in case of an End of Life situation
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left", fontSize: "1.3em" }}>
                    Get paid in <bold>$ICP</bold> by news corporations and
                    individuals for your content
                  </p>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <p style={{ textAlign: "center", fontSize: "1.3em" }}>
                If you would like to launch a collection of Front Line NFTS
                please apply by filling out the form below, or ask us questions
                in our discord.
              </p>
              <Grid container spacing={2} style={{ paddingBottom: 20 }}>
                <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
                  <Button size="large" variant="outlined" href="/">
                    Application Form
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button size="large" variant="outlined" href="/">
                    Join our Discord
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Features />
          <Journalists classes={classes} />
        </div>
      </div>
    </>
  );
}
