import { useNavigate } from "react-router-dom";
import {
    Box,
    Drawer,
    MonetizationOnIcon,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MoneyOffIcon,
    Diversity2Icon,
    PeopleIcon,
} from "../exports/index";

const Navbar = ({ open, toggleDrawer }) => {
    const navigate = useNavigate();

    const menu = [
        { Id: 1, Nombre: "Miembros", Link: "miembros", Icono: MonetizationOnIcon },
        { Id: 2, Nombre: "Aportaciones", Link: "aportaciones", Icono: PeopleIcon },
        { Id: 3, Nombre: "Prestamos", Link: "prestamos", Icono: MoneyOffIcon },
        { Id: 4, Nombre: "Grupos", Link: "grupos", Icono: Diversity2Icon },
    ];

    return (
        <>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                        {menu.map((element) => (
                            <ListItem key={element.Id} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        navigate(element.Link);
                                    }}
                                >
                                    <ListItemIcon>
                                        <element.Icono />
                                    </ListItemIcon>
                                    <ListItemText primary={element.Nombre} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
