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
                        AI Python Research Engineer
                    </Typography>
                    <Typography variant="h4" fontFamily={'Roboto'} sx={{ color: "#4169E1", fontWeight: 400, mb: 2 }}>
                        Deep Learning Research on UAV Detection, Classification & Localization
                    </Typography>
                    <Typography variant="h6" fontFamily={'Roboto'} sx={{ color: "#666", fontWeight: 300, mb: 8 }}>
                        Conservatoire National des Arts et Métiers, LMSSC - Paris
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
                                    2026 - 2027
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <WorkIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    AI Research Consultant - Speech Processing
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    Q1 2026
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    AWS Cloud & AI Practitioner Certificates
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    December 2025 - January 2026
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <SchoolIcon sx={{ color: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    Python Programming Teacher at CNAM
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
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
                                    AI Python Research Engineer - UAV Classification & Localization
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
                                        AI Python Research Engineer - UAV Detection, Classification & Localization
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
                                            Deep learning research on drone/UAV detection, classification, and localization using acoustic modalities
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Developing novel deep learning algorithms to disentangle multiple UAV signals from complex acoustic environments
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Advanced signal processing and machine learning for multi-UAV source separation and identification
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Research focus on acoustic-based drone surveillance systems for defense and security applications
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Publication and presentation of research findings in top-tier conferences and journals
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
                                        AI Research Consultant - French L2 Pronunciation Assessment
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1", ml: 1 }}>
                                            Fonetix Association
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
                                            Leading a <b>12-month</b> R&D project (€23K) to develop advanced speech processing algorithms for French L2 pronunciation evaluation
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Implementing phonemization and syllabic segmentation algorithms using self-supervised models (Wav2Vec 2.0, HuBERT, AudioLM)
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Developing prosodic analysis models for rhythm, intonation, and accentuation assessment in French speech
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Creating comprehensibility scoring algorithms for language learning applications with real-time feedback
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Optimizing performance/computational cost tradeoffs for web application integration and scalable deployment
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Delivering open-source algorithms and comprehensive performance benchmarks for educational technology applications
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
                                        Python Programming Teacher
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Grid container alignItems="center">
                                        <PlaceIcon sx={{ color: "#4169E1" }} />
                                        <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1", ml: 1 }}>
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
                                            Teaching Python programming fundamentals to <b>25+</b> Master's students in Mechanical Engineering
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Designed and delivered <b>30 hours</b> of intensive coursework covering NumPy and Matplotlib for engineering applications
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
                                            Developed and deployed wav2vec2-french-phonemizer model achieving <b>4.2% PER</b> on French speech recognition, generating <b>180,000+ downloads (46,000+ monthly)</b> on HuggingFace platform
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Built VibraVox dataset comprising <b>45+ hours</b> of synchronized 6-channel audio from 188 participants across 5 body-conduction sensors, resulting in <b>139,000+ downloads (29,000+ monthly)</b> for speech research applications
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Engineered production-ready ASR training pipeline using PyTorch Lightning, Hydra, and TensorBoard, enabling fine-tuning of transformer-based models with DDP multi-GPU support on Jean ZAY supercomputer
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Implemented automated data quality filtering using Voice Activity Detection and energy-based metrics, processing <b>30,568 initial recordings</b> and retaining <b>28,471 high-quality samples</b> (93.1% retention rate)
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Conducted experimental data collection protocol recording <b>200 participants</b> using 6 microphones simultaneously in controlled acoustic environments with 5th-order ambisonic spatialization
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Optimized speech recognition models using trapezoidal learning rate scheduling and transformer layer freezing strategies from wav2vec 2.0 research, achieving <b>6.4% PER</b> on reference microphone test set
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Contributed to EBEN (Extreme Bandwidth Extension Network) speech enhancement research for body-conduction microphones, supporting ongoing doctoral research in degraded speech restoration
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Collaborated using Agile methodology with PhD candidate and professor, delivering project milestones ahead of schedule and co-authoring scientific article for peer-reviewed publication
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

            <Typography fontFamily={'Roboto'} variant="h6">Research Expertise and Technical Skills</Typography>
            <Grid container spacing={2} columns={12} >
                <Grid size={{ xs: 4, md: 4 }}>

                    <Typography fontFamily={'Roboto'} sx={{ mb: 3, fontWeight: 'bold' }} variant="body2">AI & ML Engineering</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={95} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Python & ML Libraries</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={95} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>PyTorch & Lightning</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={90} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Scientific Computing</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={85} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Signal Processing</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={85} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Acoustic Analysis</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4, md: 4 }}>

                    <Typography fontFamily={'Roboto'} sx={{ mb: 3, fontWeight: 'bold' }} variant="body2">Research & MLOps</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={85} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Hydra Configuration</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Hugging Face</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={85} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Experiment Tracking</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Git & Version Control</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={75} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Docker & Containers</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4, md: 4 }}>

                    <Typography fontFamily={'Roboto'} sx={{ mb: 3, fontWeight: 'bold' }} variant="body2">Systems & Infrastructure</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={85} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>SLURM/HPC Systems</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Multi-GPU Computing</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Linux Systems</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={75} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>Cloud Computing</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StaticCircularProgress value={80} size={40} />
                        <Typography fontFamily={'Roboto'} variant="body1" sx={{ ml: 2 }}>SSH & Remote Work</Typography>
                    </Box>
                    
                </Grid>
            </Grid>

            <Divider />

            <Typography fontFamily={'Roboto'} variant="h6" mb={2}>Research Areas & Expertise</Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        UAV/Drone Acoustic Detection
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        Advanced signal processing techniques for drone detection, classification & localization using acoustic signatures and deep learning models
                    </Typography>
                    
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Multi-Source Separation
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        Novel algorithms for disentangling multiple UAV signals from complex acoustic environments
                    </Typography>

                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Deep Learning for Audio
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        Transformer architectures, CNNs, and RNNs applied to acoustic classification and localization tasks
                    </Typography>

                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Speech Processing & Phonetics
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        Self-supervised learning models (Wav2Vec 2.0, HuBERT) for phonemization, prosodic analysis, and pronunciation assessment
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Defense & Security Applications
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        Development of surveillance systems for critical infrastructure protection and airspace monitoring
                    </Typography>

                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        High-Performance Computing
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        Expertise in distributed training on multi-GPU clusters and supercomputing environments
                    </Typography>

                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Educational Technology & NLP
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                        AI-powered language learning applications, pronunciation evaluation, and comprehensibility scoring systems
                    </Typography>

                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Research Publications
                    </Typography>
                    <Typography fontFamily={'Roboto'} variant="body2" sx={{ color: 'text.secondary' }}>
                        Contributing to cutting-edge research in acoustic AI, UAV detection, and speech processing with peer-reviewed publications
                    </Typography>
                </Grid>
            </Grid>

        </Container >
    );
};

export default Resume;