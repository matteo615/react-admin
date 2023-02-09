import { Box } from "@mui/material";
import Header from "../../components/Header";

const Bar = () => {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Home Page' subtitle='Welcome to Time Tracker. Make sure to put your time in everyday!' />
        </Box>
    </Box>
    );
};

export default Bar;