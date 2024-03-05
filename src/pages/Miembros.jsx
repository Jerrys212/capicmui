import { useEffect, useState } from "react";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "../exports";
import axios from "axios";
import { Backdrop } from "@mui/material";
import { Handshake } from "@mui/icons-material";

const Miembros = () => {
    const [miembros, setMiembros] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        const obtenerMiembros = async () => {
            handleOpen();
            try {
                const { data } = await axios("https://apiprd.devdesignhub.com/capic/obtenerMiembros", {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTI3NzA0Y2EzZDJiY2JjYzY5OGQ1YyIsImlhdCI6MTcwOTYwNzkyNywiZXhwIjoxNzEyMTk5OTI3fQ.KzbQOEki_3nRAitK_OW7vI09xCNDrNk06oRqyMEBya0",
                    },
                });
                console.log(data);
                setMiembros(data);
                handleClose();
            } catch (error) {
                console.log(error);
            }
        };

        obtenerMiembros();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Backdrop open={open} handleClose={handleClose} />
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>CURP</TableCell>
                        <TableCell>Celular</TableCell>
                        <TableCell>Grupo</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {miembros.map((miembro) => (
                        <TableRow key={miembro._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {`${miembro.nombre} ${miembro.ap} ${miembro.am}`}
                            </TableCell>
                            <TableCell>{miembro.curp}</TableCell>
                            <TableCell>{miembro.celular}</TableCell>
                            <TableCell>{miembro.grupo}</TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Miembros;
