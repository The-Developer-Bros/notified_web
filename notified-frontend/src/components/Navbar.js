import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "./Navbar.css";
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
        // background: "linear-gradient(to left top, blue, red) fixed"
        backgroundColor: "white"
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


    }, [location.pathname])

    return (
        <div>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>
                    <Sidebar />

                    {/* Typography which is the title of the page */}
                    <Typography variant="h6" className={classes.title}>
                        Notified Logo
                    </Typography>

                    <Button color="inherit" className="signup-button">
                        Sign Up
                    </Button>

                    <Button color="inherit" className="login-button">
                        Log In
                    </Button>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default ButtonAppBar

