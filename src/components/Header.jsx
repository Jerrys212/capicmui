import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuIcon } from "../exports/index";
import Navbar from "./Navbar";

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#16A34A" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CAPIC
                    </Typography>
                    <Button color="inherit">Salir</Button>
                </Toolbar>
            </AppBar>

            <Navbar open={open} toggleDrawer={toggleDrawer} />
        </Box>
    );
};

export default Header;
