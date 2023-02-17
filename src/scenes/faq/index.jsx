import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";



const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
    <Box m="20px">      
        <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important Question For You
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                A Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important Quandry
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Stupid Questions
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </AccordionDetails>
       </Accordion>

       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Wierd Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </AccordionDetails>
       </Accordion>
    </Box>
    );
};

export default FAQ;