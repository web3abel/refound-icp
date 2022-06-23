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
          <img
            style={{ width: 100 }}
            alt="Raise Awareness Swiftly"
            src="/icon/arrow.png"
          />
          <h2>Raise awareness swiftly</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            In app camera capability to capture live photos and videos as NFTs
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.center}>
          <img style={{ width: 100 }} alt="Visual" src="/icon/glasses.png" />
          <h2>Visual</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            Tell a visual story that informs the world of what's really going on
            in the front lines
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.center}>
          <img style={{ width: 100 }} alt="Rewards" src="/icon/rewards.png" />
          <h2>Rewards</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            Earn income via NFT sales and direct $ICP donations to your wallet
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={classes.center}>
          <img style={{ width: 100 }} alt="Low Fees" src="/icon/cash.png" />
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
            src="/icon/journalist.png"
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
            alt="Provides for the future"
            src="/icon/future.png"
          />
          <h2>Provides for the future</h2>
          <p style={{ fontSize: "1.1em", textAlign: "center" }}>
            NFT sale proceeds go to pre-selected beneficiaries in case of death
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
