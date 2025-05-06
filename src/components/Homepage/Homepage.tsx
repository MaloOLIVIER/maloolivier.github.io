import React from 'react';
import { Author, cardData, StyledTypography, SyledCard, SyledCardContent } from '../Publications/Publications';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CardMedia, Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Homepage: React.FC = () => {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = (pdfUrl: string) => {
        window.location.href = pdfUrl;
    };

    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 15, gap: 2 }}
        >

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h1" gutterBottom fontFamily={'Roboto'} sx={{ fontWeight: 100 }}>
                        Welcome to my publication research blog
                    </Typography>
                    <Typography variant="h4" fontFamily={'Roboto'} sx={{ color: "#4169E1", fontWeight: 100, fontStyle: 'italic' }}>
                        Step into the world of my research. Explore, learn, and engage.
                    </Typography>
                    <Box
                        component="a"
                        href="https://github.com/MaloOLIVIER/hungarian-net"
                        target="_blank"
                        rel="noopener noreferrer"
                        display="flex"
                        flexDirection="column"
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
                        <Grid size={{ xs: 12, md: 12 }}>
                            <img
                                alt="Latest on Github!"
                                src="https://img.shields.io/badge/Latest_on_Github!-blue?style=for-the-badge"
                            //style={{ marginBottom: '16px', marginTop: '40px' }} // Adds space between the image and text
                            />
                            <img
                                alt="PyTorch"
                                src="https://img.shields.io/badge/-Pytorch 2.4-ee4c2c?style=for-the-badge&logo=pytorch&logoColor=white"
                                style={{ marginLeft: '4px' }}
                            />
                            <img
                                alt="Lightning"
                                src="https://img.shields.io/badge/-Lightning 2.4-792ee5?style=for-the-badge&logo=lightning&logoColor=white"
                                style={{ marginLeft: '4px' }}
                            />
                            <img
                                alt="Config: hydra"
                                src="https://img.shields.io/badge/-🐙 hydra 1.3-89b8cd?style=for-the-badge&logo=hydra&logoColor=white"
                                style={{ marginLeft: '4px' }}
                            />
                        </Grid>
                        <Typography variant="h4" fontFamily={'Roboto'} sx={{ fontWeight: 100 }}>
                            Come checkout my latest repository! I made a deep-learning implementation of the Hungarian algorithm applied for sound source localization. <GitHubIcon />
                        </Typography>
                    </Box>
                    <Typography gutterBottom variant="caption" component="div" fontFamily={'Roboto'} sx={{ marginBottom: 2 }}>
                        Python ; Deep Learning ; Pytorch ; Hydra ; Hungarian Algorithm ; Hungarian Assignment ; Sound Source Localization.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 12 }}>
                    <CardMedia
                        component="img"
                        image="/static/images/avatar/malo.jpg"
                        alt="Photo of Malo Olivier"
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

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onClick={() => handleClick("https://doi.org/10.1016/j.specom.2025.103238")}
                        onFocus={() => handleFocus(0)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="vibravox"
                            image={cardData[0].img}
                            aspect-ratio="16 / 9"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                objectFit: 'contain', // Ensure the image fits within the container
                                height: '100%', // Ensure the image takes the full height of the container
                            }}
                        />

                        <SyledCardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}>
                            <Typography sx={{ borderTop: '1px solid', borderColor: 'divider' }} gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                {cardData[0].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                {cardData[0].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom fontFamily={'Roboto'}>
                                {cardData[0].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[0].authors} date={cardData[0].date} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onClick={() => handleClick("/static/images/papers/MaloOLIVIER_MasterThesis.pdf")}
                        onFocus={() => handleFocus(0)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="insa"
                            image={cardData[1].img}
                            aspect-ratio="16 / 9"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                objectFit: 'contain', // Ensure the image fits within the container
                                height: '100%', // Ensure the image takes the full height of the container
                            }}
                        />

                        <SyledCardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}>
                            <Typography sx={{ borderTop: '1px solid', borderColor: 'divider' }} gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                {cardData[1].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                {cardData[1].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom fontFamily={'Roboto'}>
                                {cardData[1].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[1].authors} date={cardData[1].date} />
                    </SyledCard>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Homepage;