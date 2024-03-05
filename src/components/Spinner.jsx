import React from "react";

const Spinner = ({ open, handleClose }) => {
    return (
        <Backdrop
            sx={{ color: "#000080", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Spinner;
