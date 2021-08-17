import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from '@material-ui/core/Grid';


import { useLocation } from 'react-router-dom';

import Sidebar from "./Sidebar";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "black"
    },
    title: {
        // flexGrow: 1,
        color: "blue",
    },
    appBarTransparent: {
        backgroundColor: "rgba(0,0,0,0)"
    },
    appBarSolid: {
        background: "linear-gradient(to left top, blue, red) fixed"
    },
    shiftRight: {
        flex: 1,
        // marginRight: "250px",
        // align: "right",
    }


}));



function ButtonAppBar() {

    const classes = useStyles();
    const [navBackground, setNavBackground] = useState("appBarTransparent");

    const navRef = React.useRef()
    navRef.current = navBackground;


    let location = useLocation();


    useEffect(() => {

        const handleScroll = () => {

            let show;

            if (location.pathname === "/") {
                show = window.scrollY > 900
            } else {
                show = window.scrollY > 10
            }

            if (show)
                setNavBackground('appBarSolid');
            else
                setNavBackground('appBarTransparent');
        }

        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll);
        }


    }, []);

    return (
        <div>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>
                    <Sidebar />

                    <Typography variant="h4" className={classes.title, classes.shiftRight}>
                        Notified
                    </Typography>

                    <Button color="black">
                        Login
                    </Button>



                    <Grid
                        justify="space-between" // Add it here :)
                        container
                        spacing={24}
                    >
                        <Grid item>
                            <Typography type="title" color="inherit">
                                Title
                            </Typography>
                        </Grid>

                        <Grid item>
                            <div>
                                {/* <HeartIcon /> */}
                                <Button raised color="accent">
                                    Login
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default ButtonAppBar

