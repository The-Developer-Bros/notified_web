import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "black"
    },
    title: {
        flexGrow: 1,
        color: "black",
    },
    appBarTransparent: {
        backgroundColor: "rgba(0,0,0,0)"
    },
    appBarSolid: {
        background: "linear-gradient(to left top, blue, red) fixed"
    }

}));



function ButtonAppBar() {

    const classes = useStyles();
    const [navBackground, setNavBackground] = useState("appBarTransparent");

    const navRef = React.useRef()
    navRef.current = navBackground;

    useEffect(() => {

        const handleScroll = () => {
            const show = window.scrollY > 890
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
                    <IconButton className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        News
                    </Typography>
                    <Button color="black">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ButtonAppBar
