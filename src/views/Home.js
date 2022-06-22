import React from "react";
import PriceICP from "../components/PriceICP";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "../containers/Navbar";
import Features from "../components/Features";
import ReactPlayer from 'react-player'
import Carousel from 'react-material-ui-carousel'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  heading: {
    textAlign: "center",
    marginTop: "40px",
  },
  media: {
    height: 0,
    paddingTop: "100%",
    // paddingTop: "56.25%", // 16:9
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

export const Journalists = ({classes}) => {
  var cards = [
    {
      title: "Fatima, Palestine",
      link: "/",
      image: "/collections/photoJ.png",
      content: <></>,
    },
    {
      title: "Danylo, Ukraine",
      link: "/",
      image: "/collections/ukraineJ.png",
      content: <></>,
    },
    {
      title: "Oscar & Jose, Mexico",
      link: "/",
      image: "/collections/mexJ.jpeg",
      content: <></>,
    },
  ];

  return (
    <>
      <h1 className={classes.heading}>Journalists on the frontlines</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {cards.slice(0, 3).map((card, i) => {
          return (
            <Grid key={i} item md={4} style={{ marginBottom: 20 }}>
              <Card className={classes.root}>
                <a href={card.link}>
                  <CardMedia
                    className={classes.media}
                    image={card.image}
                    title={card.title}
                  />
                </a>
                <CardContent>
                  <h3>{card.title}</h3>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  )
}

export default function Home(props) {
  const classes = useStyles();

  const navigate = useNavigate();
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/banners").then(r => r.json()).then(r => {
      setItems(r);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  var photos = [
    {
      image: "/collections/photo01.png",
      content : (<></>),
      id: 'dfghjkiuyfgbnj',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2022, Ukraine',
      title: 'Season 2, 32',
    },
    {
      image: "/collections/photo02.png",
      content : (<></>),
      id: 'jg7ew878hubugh',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2019, South America',
      title: 'NA 2045',
    },
    {
      image: "/collections/photo03.jpg",
      content : (<></>),
      id: 'gfgujhgtyy7uijbhyj',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2023, Africa',
      title: 'Outlands 223',
    },
    {
      image: "/collections/photo04.jpg",
      content : (<></>),
      id: 'gfrt67uijnhytgy78uij',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2022, East Asia',
      title: 'Outlands 3',
    },
    {
      image: "/collections/photo05.jpg",
      content : (<></>),
      id: 'nhgt678uijnbytuj',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2022. Eastern Europe.',
      title: 'Deep Outer 224',
    },
    {
      image: "/collections/photo06.jpg",
      content : (<></>),
      id: 'nhgt678ijhgt67uj',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2022, North America',
      title: 'Nightshade',
    },
    {
      image: "/collections/photo08.jpg",
      content : (<></>),
      id: 'hhgt678uijhyt78ujh',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2019. Unchartered region of South America.',
      title: 'Gildered Issue',
    },
    {
      image: "/collections/photo09.jpg",
      content : (<></>),
      id: 'jnhy789oikjhy78ui',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2023, Africa',
      title: 'SS04:03',
    },
    {
      image: "/collections/photo10.png",
      content : (<></>),
      id: 'jhgy78uijhgty78ujn',
      creatorId: 'jmngt67u8iujhgty7ujh',
      price: 100000000 * 1,
      description: '2021. A hard-hit region during the pandemic.',
      title: 'Pandemic 22',
    },
  ];

  const banners = [
    {
      image: "/collections/hero.png",
    },
  ];

  return (
    <>
      <div style={{ width: "100%", display: "block", position: "relative" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0px auto",
          }}
        >
          {items.length > 0 ? (
            <div className={classes.banner}>
              <Carousel
                style={{ height: 485 }}
                autoPlay={false}
                interval={5000}
                animation={"slide"}
                reverseEdgeAnimationDirection={false}
                indicators={false}
              >
                {banners.map((item, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        borderRadius: 30,
                        height: 485,
                        background:
                          "url('" +
                          item.image +
                          "') center center / cover no-repeat",
                      }}
                    ></div>
                  );
                })}
              </Carousel>
            </div>
          ) : (
            ""
          )}
          <h1 className={classes.heading}>
            Mint media back to life on <span>refound</span>
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3em",
              padding: "0 30px",
            }}
          >
            Refound is an NFT marketplace where journalists and photographers
            can share first person, creative content from the frontlines
            swiftly, raise awareness, and sell directly to businesses, with sale
            proceeds going to customizable beneficiaries.
          </p>
          <h1 className={classes.heading}>Photography</h1>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {photos.slice(0, 10).map((photo, i) => {
              return (
                <Grid key={i} item md={4} style={{ marginBottom: 20 }}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={photo.image}
                      title={photo.title}
                    />
                    <CardContent>
                      <h3>{photo.title}</h3>
                      <p>{photo.description}</p>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <Button
                          onClick={(ev) => {
                            ev.stopPropagation();
                          }}
                          onMouseDown={(ev) => ev.stopPropagation()}
                          variant="contained"
                          size="small"
                          color="primary"
                          style={{
                            marginRight: "auto",
                            backgroundColor: "#003240",
                            color: "white",
                          }}
                        >
                          Buy Now
                        </Button>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          <Typography
                            style={{
                              fontSize: 13,
                              textAlign: "right",
                              fontWeight: "bold",
                            }}
                            color={"inherit"}
                            gutterBottom
                          >
                            Price&nbsp;
                            <PriceICP price={photo.price} />
                          </Typography>
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Button
            className={classes.marketBtn}
            fullWidth
            variant={"outlined"}
            onClick={() => navigate(`/marketplace`)}
            color={"primary"}
            style={{ fontWeight: "bold", margin: "20px auto" }}
          >
            Explore The Front Lines
          </Button>
          <Journalists {...{classes: {heading: classes.heading, root: classes.root, media: classes.media}}} />
          <Button
            className={classes.marketBtn}
            fullWidth
            variant={"outlined"}
            onClick={() => navigate(`/create`)}
            color={"primary"}
            style={{ fontWeight: "bold", margin: "20px auto" }}
          >
            Apply To Create
          </Button>
        </div>
      </div>
    </>
  );
}
