import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    maxWidth: 345,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export default function Features(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.center}>
          <img style={{ width: 100 }} alt="Low Fees" src="/icon/fee.png" />
          <h2>Low Fees</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            We charge a <strong>1.0%</strong> Marketplace fee, and collection
            creators can charge a Royalty fee of up to <strong>10%</strong>
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.center}>
          <img
            style={{ width: 100 }}
            alt="Photography"
            src="/icon/photography.png"
          />
          <h2>Real Journalists</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            We are working with journalists and locals who are living and
            risking their lives to share the latest from the front-lines 
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.center}>
          <img
            style={{ width: 100 }}
            alt="Non-custodial"
            src="/icon/wallet.png"
          />
          <h2>Non-custodial</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            All assets remain in your full control - we never take custody any
            of your digital assets
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
