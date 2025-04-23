import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, styled, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import GoogleIcon from '@mui/icons-material/Google';
import { ReactComponent as ResearchGateIcon } from './researchgate.svg';
import { ReactComponent as HuggingFaceIcon } from './hf.svg';
import WorkIcon from '@mui/icons-material/Work';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CircularProgress, { CircularProgressProps, circularProgressClasses, } from '@mui/material/CircularProgress';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#4169E1',
        ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
        }),
    },
}));

const StaticBorderLinearProgress: React.FC<{ value: number }> = ({ value }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <BorderLinearProgress variant="determinate" value={value} />
            </Box>
            {/*<Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
            </Box>*/}
        </Box>
    );
};

const StaticCircularProgress: React.FC<{ props?: CircularProgressProps, value: number, size: number }> = ({ props, value, size }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={(theme) => ({
                    color: theme.palette.grey[200],
                    ...theme.applyStyles('dark', {
                        color: theme.palette.grey[800],
                    }),
                })}
                size={size}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="determinate"
                disableShrink
                /*sx={(theme) => ({
                    color: '#4169E1',
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                    ...theme.applyStyles('dark', {
                        color: '#308fe8',
                    }),
                })}*/
                sx={(theme) => ({
                    position: 'absolute',
                    left: 0,
                    color: '#4169E1',
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                })}
                value={value}
                size={size}
                thickness={4}
                {...props}
            />
        </Box>
    );
}

const Resume: React.FC = () => {
    const handleClick = (pdfUrl: string) => {
        window.location.href = pdfUrl;
    };
    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 15, gap: 2 }}
        >
            <Grid container spacing={2} columns={12} mb={8}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h1" gutterBottom fontFamily={'Roboto'} sx={{ fontWeight: 100 }}>
                        Resume
                    </Typography>
                    <Typography variant="h4" gutterBottom fontFamily={'Roboto'} sx={{ color: "#4169E1", fontWeight: 400 }}>
                        Master of Science in Computing Sciences
                    </Typography>
                    <Typography variant="h4" fontFamily={'Roboto'} sx={{ color: "#4169E1", fontWeight: 400, mb: 8 }}>
                        Research Engineer at Conservatoire National des Arts et Métiers, LMSSC - Paris
                    </Typography>

                    <Grid container spacing={2} columns={12} mb={0}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box display="flex" alignItems="center" mb={1}>
                                <ChildFriendlyIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    28 November 2000
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <HomeIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    Île de France
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <PhoneIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    +33 6 ** ** ** **
                                </Typography>
                            </Box>
                            <Box
                                component="a"
                                href="https://github.com/MaloOLIVIER"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                }}
                            >
                                <GitHubIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    /MaloOLIVIER
                                </Typography>
                            </Box>
                            <Box
                                component="a"
                                href="mailto:Malo.Olivier@lecnam.net"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                }}
                            >
                                <EmailIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    Malo.Olivier@lecnam.net
                                </Typography>
                            </Box>
                            <Box
                                component="a"
                                href="https://www.linkedin.com/in/maloolivier"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                }}
                            >
                                <LinkedInIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    in/maloolivier
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="a"
                                href="https://scholar.google.fr/citations?hl=fr&user=BH9n_XEAAAAJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                }}
                            >
                                <GoogleIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    Malo Olivier
                                </Typography>
                            </Box>
                            <Box
                                component="a"
                                href="https://www.researchgate.net/profile/Malo-Olivier"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                    '--rg-text': localStorage.getItem('themeMode') === 'dark' ? 'black' : 'white',      
                                }}
                            >
                                <ResearchGateIcon fill="currentColor" />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    /Malo-Olivier
                                </Typography>
                            </Box>
                            <Box
                                component="a"
                                href="https://huggingface.co/MaloOLIVIER"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                }}
                            >
                                <HuggingFaceIcon fill="currentColor" />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    /MaloOLIVIER
                                </Typography>
                            </Box>
                            <Box
                                component="a"
                                href="https://orcid.org/0009-0000-6534-8962"
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                mb={1}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        color: '#4169E1',
                                    },
                                }}
                            >
                                <BiotechIcon />
                                <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                                    0009-0000-6534-8962
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 12 }}>
                    <CardMedia
                        component="img"
                        image="/static/images/avatar/malo.jpg"
                        onClick={() => handleClick("/static/images/papers/CVENMaloOLIVIER.pdf")}
                        title="Malo"
                        sx={{
                            width: '50%',
                            height: 'auto',
                            mb: 2,
                            borderRadius: '45%',
                            transition: 'transform 0.3s, opacity 0.3s', // Smooth transition for hover effects
                            cursor: 'pointer', // Change cursor to pointer
                            '&:hover': {
                                transform: 'scale(1.05)', // Slightly enlarge the image
                                opacity: 0.8, // Slightly reduce opacity
                            },
                        }} />
                    <Typography variant="h6" fontFamily={'Roboto'} sx={{ color: "#4169E1", fontWeight: 400 }}>
                        Malo Olivier
                    </Typography>
                </Grid>
            </Grid>

            <Divider />
            <Grid container spacing={2} columns={12}>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    Since October 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <BiotechIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    AI Research Engineer at CNAM, ISL
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    June 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Graduated from INSA Lyon
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    January - June 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    ERASMUS exchange at Stockholms Universitet
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    September 2023 - January 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <WorkIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Graduation Project at CNAM
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    May - August 2023
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <WorkIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Internship at BNP Paribas
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    November 2022 - April 2023
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <WorkIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Part-time at onepoint Montréal
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    June - August 2022
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <WorkIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Internship at onepoint Montréal
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    July - August 2021
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <WorkIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Full-time at Banque de France
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    September 2020
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Started at INSA Lyon
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    2018 - 2020
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Intensive preparatory classes PTSI-PT
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    2018
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Graduated from high school with highest honors
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>

                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>

                    <Typography mt={2} ml={3} mb={3} fontFamily={'Roboto'} variant="h4">Job experiences</Typography>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2} columns={12} alignItems="center" justifyContent="space-between" width="100%">
                                <Grid size={{ xs: 6, md: 6 }}>
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        AI Research Engineer
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1", ml: 1 }}>
                                            CNAM - ISL
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Keep updated!
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2} columns={12} alignItems="center" justifyContent="space-between" width="100%">
                                <Grid size={{ xs: 6, md: 6 }}>
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Research assistant in EBEN project | VibraVox dataset
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                            CNAM Paris
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Acoustics experiments and recording sessions for data collection
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Monitoring, quality control and consistency of collected data
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Python speech transcription project based on the CNAM EBEN project (Pytorch, Pytorch Lightning, Hydra, Hugging Face).
                                            Use of a tokenizer, evaluation metrics (Word Error Rate, Character Error Rate, Phoneme Error Rate, CTC cost function, transformer architectures) for S2T and S2P ASR tasks
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Handling of Whisper from open AI and wav2vec2-large-xlsr-53-english
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Work integrated into the journal article presenting the VibraVox dataset
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            High performance multi-GPU computation using IDRIS' Jean ZAY supercomputer
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2} columns={12} alignItems="center" justifyContent="space-between" width="100%">
                                <Grid size={{ xs: 6, md: 6 }}>
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Technical Consultant Java
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                            BNP Paribas Paris
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Orchestrator pipeline maintenance and Gherkins/Cucumber testing
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Ingestion pipeline maintenance and Gherkins/Cucumber testing
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Specifications and documentation of accounting Information System
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Acquisition of Business knowledge : accounting, finance, legal
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Acquisition of Teradata knowledge : big data considerations and SQL language
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2} columns={12} alignItems="center" justifyContent="space-between" width="100%">
                                <Grid size={{ xs: 4, md: 6 }}>
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        DevOps Engineer & FullStack Developer techstud.io associate
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                            onepoint Montréal, Canada
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Implementation and insertion of QA tests in GitLab/Jenkins pipeline for the Connect Building software of the National Bank of Canada (BNC) and the Espace Montmorency, by Montoni
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            FullStack development in Java with Quarkus & Maven and TypeScript with React
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2} columns={12} alignItems="center" justifyContent="space-between" width="100%">
                                <Grid size={{ xs: 4, md: 6 }}>
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        FullStack Developer
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                            onepoint Montréal, Canada
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            FullStack development, QA tests, modeling, Connect Building software specifications for the National Bank of Canada (BNC) and the Espace Montmorency, by Montoni
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Agile development, Jira ticket management, Figma & Confluence specifications, UAT & production server installation on AWS Cloud
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container spacing={2} columns={12} alignItems="center" justifyContent="space-between" width="100%">
                                <Grid size={{ xs: 4, md: 6 }}>
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Business Analyst
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                            Banque de France, Courbevoie
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Quotation of tax forms
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Correction of stored data
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Computation and measurement of France's balance of payment and international investment position
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid >

            <Divider />

            <Typography fontFamily={'Roboto'} variant="h6">Languages</Typography>
            <Grid container spacing={2} columns={12} >
                <Grid size={{ xs: 6, md: 6 }}>
                    <Typography fontFamily={'Roboto'} variant="body1">French</Typography>
                    <StaticBorderLinearProgress value={100} />
                    <Typography mt={1} fontFamily={'Roboto'} variant="body1">English</Typography>
                    <StaticBorderLinearProgress value={95} />
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                    <Typography fontFamily={'Roboto'} variant="body1">Italian</Typography>
                    <StaticBorderLinearProgress value={70} />
                    <Typography mt={1} fontFamily={'Roboto'} variant="body1">Spanish</Typography>
                    <StaticBorderLinearProgress value={50} />
                    <Typography mt={1} fontFamily={'Roboto'} variant="body1">Russian</Typography>
                    <StaticBorderLinearProgress value={35} />
                </Grid>
            </Grid >

            <Divider />

            <Typography fontFamily={'Roboto'} variant="h6">Programming languages and Skills</Typography>
            <Grid container spacing={2} columns={12} >
                <Grid size={{ xs: 4, md: 4 }}>

                    <Typography fontFamily={'Roboto'} sx={{ mb: 3, fontWeight: 'bold' }} variant="body2">Development</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={90} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Java</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>C</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>C++</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={70} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>TypeScript</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={70} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>React</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4, md: 4 }}>

                    <Typography fontFamily={'Roboto'} sx={{ mb: 3, fontWeight: 'bold' }} variant="body2">Data Processing & Deep Learning</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={95} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Python</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={90} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Pytorch</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={90} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Pytorch Lightning</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Hydra</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Hugging Face</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4, md: 4 }}>

                    <Typography fontFamily={'Roboto'} sx={{ mb: 3, fontWeight: 'bold' }} variant="body2">Frameworks & Execution Environment</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Maven</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Quarkus</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={70} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Hypersistence</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={75} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Node.js</Typography>
                    </Box>

                </Grid>
            </Grid>

        </Container >
    );
};

export default Resume;