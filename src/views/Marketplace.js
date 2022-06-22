import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Wallet from "../components/Wallet";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Navbar from "../containers/Navbar.js";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import PriceICP from '../components/PriceICP';
import { EntrepotUpdateStats, EntrepotAllStats } from '../utils';
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const useStyles = makeStyles((theme) => ({ 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  collectionContainer: {
    marginBottom: 20,
    [theme.breakpoints.up('xs')]: {
      width : "100%",
    },
    [theme.breakpoints.up('sm')]: {
      width : 300,
    },
    [theme.breakpoints.up('md')]: {
      width : 330,
    },
    [theme.breakpoints.up('lg')]: {
      width : 360,
    },
  },
  root: {
    maxWidth: 345,
  },
  heading: {
    textAlign: "center",
  },
  media: {
    cursor: "pointer",
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
var _stats = [];
export default function Marketplace(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const [sort, setSort] = React.useState("total_desc");
  const [query, setQuery] = React.useState("");
  const [stats, setStats] = React.useState([]);

  const styles = {
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    content: {
      flexGrow: 1,
      marginLeft: 0,
    },
  };
  const _updates = () => {
    EntrepotUpdateStats().then(setStats);    
  };
  const changeSort = (event) => {
    setSort(event.target.value);
  };
  React.useEffect(() => {
    if (EntrepotAllStats().length == 0) {
      _updates();
    } else {
      setStats(EntrepotAllStats());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useInterval(_updates, 60 * 1000);
  const handleClick = (a) => {
    navigate(a);
  };
  return (
    <>
      <div style={{ width: "100%", display: "block", position: "relative" }}>
        <div
          style={{
            margin: "0px auto", 
            minHeight:"calc(100vh - 221px)"
          }}
        >
          <h1 className={classes.heading}>All Regions</h1>
          <div style={{margin:"0 auto", textAlign:"center",maxWidth:500}}>
            <TextField placeholder="Search" style={{width:"100%", marginBottom:50}} value={query} onChange={e => setQuery(e.target.value)} variant="outlined" />
          </div>
          <div style={{textAlign:"right", marginBottom:"30px", marginRight:25}}>
            <FormControl style={{ marginRight: 20 }}>
              <InputLabel>Sort by</InputLabel>
              <Select value={sort} onChange={changeSort}>
                <MenuItem value={"listings_asc"}>Listings: Low to High</MenuItem>
                <MenuItem value={"listings_desc"}>Listings: High to Low</MenuItem>
                <MenuItem value={"total_asc"}>Total Volume: Low to High</MenuItem>
                <MenuItem value={"total_desc"}>Total Volume: High to Low</MenuItem>
                <MenuItem value={"floor_asc"}>Floor Price: Low to High</MenuItem>
                <MenuItem value={"floor_desc"}>Floor Price: High to Low</MenuItem>
                <MenuItem value={"alpha_asc"}>Alphabetically: A-Z</MenuItem>
                <MenuItem value={"alpha_desc"}>Alphabetically: Z-A</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {
              props.collections.filter(a => (query == "" || [a.name, a.brief, a.keywords].join(" ").toLowerCase().indexOf(query.toLowerCase()) >= 0)).sort((a,b) => {
                switch (sort) {
                  case "featured":
                    return b.priority - a.priority;              
                  break;
                  case "listings_asc":
                    if (stats.findIndex(x => x.canister == a.canister) < 0 && stats.findIndex(x => x.canister == b.canister) < 0) return 0;
                    if (stats.findIndex(x => x.canister == a.canister) < 0) return 1;
                    if (stats.findIndex(x => x.canister == b.canister) < 0) return -1;
                    if (stats.find(x => x.canister == a.canister).stats === false && stats.find(x => x.canister == b.canister).stats === false) return 0;
                    if (stats.find(x => x.canister == a.canister).stats === false) return 1;
                    if (stats.find(x => x.canister == b.canister).stats === false) return -1;
                    return Number(stats.find(x => x.canister == a.canister).stats.listings) - Number(stats.find(x => x.canister == b.canister).stats.listings);
                  break;
                  case "listings_desc":
                    if (stats.findIndex(x => x.canister == a.canister) < 0 && stats.findIndex(x => x.canister == b.canister) < 0) return 0;
                    if (stats.findIndex(x => x.canister == a.canister) < 0) return 1;
                    if (stats.findIndex(x => x.canister == b.canister) < 0) return -1;
                    if (stats.find(x => x.canister == a.canister).stats === false && stats.find(x => x.canister == b.canister).stats === false) return 0;
                    if (stats.find(x => x.canister == a.canister).stats === false) return 1;
                    if (stats.find(x => x.canister == b.canister).stats === false) return -1;
                    return Number(stats.find(x => x.canister == b.canister).stats.listings) - Number(stats.find(x => x.canister == a.canister).stats.listings);
                  break;
                  case "total_asc":
                    if (stats.findIndex(x => x.canister == a.canister) < 0 && stats.findIndex(x => x.canister == b.canister) < 0) return 0;
                    if (stats.findIndex(x => x.canister == a.canister) < 0) return 1;
                    if (stats.findIndex(x => x.canister == b.canister) < 0) return -1;
                    if (stats.find(x => x.canister == a.canister).stats === false && stats.find(x => x.canister == b.canister).stats === false) return 0;
                    if (stats.find(x => x.canister == a.canister).stats === false) return 1;
                    if (stats.find(x => x.canister == b.canister).stats === false) return -1;
                    return Number(stats.find(x => x.canister == a.canister).stats.total) - Number(stats.find(x => x.canister == b.canister).stats.total);
                  break;
                  case "total_desc":
                    if (stats.findIndex(x => x.canister == a.canister) < 0 && stats.findIndex(x => x.canister == b.canister) < 0) return 0;
                    if (stats.findIndex(x => x.canister == a.canister) < 0) return 1;
                    if (stats.findIndex(x => x.canister == b.canister) < 0) return -1;
                    if (stats.find(x => x.canister == a.canister).stats === false && stats.find(x => x.canister == b.canister).stats === false) return 0;
                    if (stats.find(x => x.canister == a.canister).stats === false) return 1;
                    if (stats.find(x => x.canister == b.canister).stats === false) return -1;
                    return Number(stats.find(x => x.canister == b.canister).stats.total) - Number(stats.find(x => x.canister == a.canister).stats.total);
                  break;
                  case "floor_asc":
                    if (stats.findIndex(x => x.canister == a.canister) < 0 && stats.findIndex(x => x.canister == b.canister) < 0) return 0;
                    if (stats.findIndex(x => x.canister == a.canister) < 0) return 1;
                    if (stats.findIndex(x => x.canister == b.canister) < 0) return -1;
                    if (stats.find(x => x.canister == a.canister).stats === false && stats.find(x => x.canister == b.canister).stats === false) return 0;
                    if (stats.find(x => x.canister == a.canister).stats === false) return 1;
                    if (stats.find(x => x.canister == b.canister).stats === false) return -1;
                    return Number(stats.find(x => x.canister == a.canister).stats.floor) - Number(stats.find(x => x.canister == b.canister).stats.floor);
                  break;
                  case "floor_desc":
                    if (stats.findIndex(x => x.canister == a.canister) < 0 && stats.findIndex(x => x.canister == b.canister) < 0) return 0;
                    if (stats.findIndex(x => x.canister == a.canister) < 0) return 1;
                    if (stats.findIndex(x => x.canister == b.canister) < 0) return -1;
                    if (stats.find(x => x.canister == a.canister).stats === false && stats.find(x => x.canister == b.canister).stats === false) return 0;
                    if (stats.find(x => x.canister == a.canister).stats === false) return 1;
                    if (stats.find(x => x.canister == b.canister).stats === false) return -1;
                    return Number(stats.find(x => x.canister == b.canister).stats.floor) - Number(stats.find(x => x.canister == a.canister).stats.floor);
                  break;
                  case "alpha_asc":
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                  break;
                  case "alpha_desc":
                    if(a.name < b.name) { return 1; }
                    if(a.name > b.name) { return -1; }
                    return 0;
                  break;
                  default:
                    return 0;
                }
              }).filter((collection, i) => {
                if (collection.route === 'btcflower' || collection.route === 'poked' || collection.route === 'motoko') {
                  return true;
                } else {
                  return false;
                }
              }).map((collection, i) => {
                let imageLink = "";
                let title = "";
                let brief = "";
                if (collection.route === "btcflower") {
                  imageLink = "/collections/ukraine.png";
                  title = "Ukraine";
                  brief = "Living through War in Ukraine";
                } else if (collection.route === "poked" ) {
                  imageLink = "/collections/palestine.jpeg";
                  title = "Middle East";
                  brief = "What it means to be a journalist in the Middle East";
                } else {
                  imageLink = "/collections/mexico.png";
                  title = "Mexico";
                  brief = "La Vida en Mexico en 2020";
                };

                console.log(i, collection)
                return (<Grid key={i} item className={classes.collectionContainer}>
                  <Link style={{textDecoration:"none"}} to={"/marketplace/"+collection.route}>
                    <Card style={{height:375,}} className={classes.root}>
                      <CardMedia
                        className={classes.media}
                        image={imageLink}
                        title={title}
                      />
                      <CardContent style={{textAlign:"center"}}>
                        <h2 style={{marginTop:0, fontSize:"1.4em"}}>{title}</h2>
                        <Typography style={{minHeight:48}} variant="body1" color="textSecondary" component="p">{brief}</Typography>
                        {stats.findIndex(a => a.canister == collection.canister) >= 0 ?
                          <>{stats.find(a => a.canister == collection.canister).stats ?
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                              <Grid style={{borderRight:"1px dashed #ddd"}} item md={4}>
                                <span style={{color:"#0070f3"}}>Volume</span><br />
                                <strong><PriceICP volume={true} clean={true} price={stats.find(a => a.canister == collection.canister).stats.total} size={20} /></strong>
                              </Grid>
                              <Grid style={{borderRight:"1px dashed #ddd"}} item md={4}>
                                <span style={{color:"#0070f3"}}>Listings</span><br />
                                <strong>{stats.find(a => a.canister == collection.canister).stats.listings}</strong>
                              </Grid>
                              <Grid item md={4}>
                                <span style={{color:"#0070f3"}}>Floor Price</span><br />
                                <strong><PriceICP volume={true} clean={true} price={stats.find(a => a.canister == collection.canister).stats.floor} size={20} /></strong>
                              </Grid>
                            </Grid> : "" /*<span style={{display:"block",fontWeight:"bold",paddingTop:15}}>Not Available</span>*/ }
                          </> 
                        : <span style={{display:"block",fontWeight:"bold",paddingTop:15}}>Loading...</span>}
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>);
              })
            }
          </Grid>
        </div>
      </div>
    </>
  );
}
