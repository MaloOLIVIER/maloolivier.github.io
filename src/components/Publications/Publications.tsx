import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

export const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

export const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

export const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export function Author({ authors, date }: { authors: { name: string; avatar: string }[]; date: string }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                        <Avatar
                            key={index}
                            alt={author.name}
                            src={author.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    ))}
                </AvatarGroup>
                <Typography variant="caption" fontFamily={'Roboto'}>
                    {authors.map((author) => author.name).join(', ')}
                </Typography>
            </Box>
            <Typography variant="caption" fontFamily={'Roboto'}>{date}</Typography>
        </Box>
    );
};

export const cardData = [
    {
        img: '/static/images/content/french_phonemizers.png',
        tag: 'Wav2Vec2 ; Speech-to-Phoneme ; Common Voice ; Speech recognition.',
        title: 'wav2vec2-french-phonemizer : A French Speech to Phoneme Model based on Wav2Vec2 with 200k+ downloads on HuggingFace',
        description:
            `🔗 wav2vec2-french-phonemizer | <b>46,000+ Downloads last month !</b>
             A production-ready French phonemizer that converts speech into phonetic transcriptions. Built by fine-tuning Wav2Vec2 on French speech data, this model breaks down spoken language into its fundamental sound units (phonemes).
             
             • <b>PER</b> : <b>5.52 %</b> on Common Voice v13 (French) and <b>4.36 %</b> on Multilingual Librispeech (French)
             • <b>46,000+ downloads</b> last month, <b>180k+ total</b>
             • <b>Real-time</b> inference on consumer hardware
             • Open source and available on <b>HuggingFace</b> Model Hub

             Used by researchers and production teams worldwide for French speech processing applications. Developed in collaboration with <b>CNAM LMSSC</b>.

             <b>Technical stack</b> : Wav2Vec2 <b>•</b> PyTorch <b>•</b> HuggingFace Transformers <b>•</b> Python <b>•</b> Speech Processing
             `,
        authors: [
            { name: 'Malo Olivier', avatar: '/static/images/avatar/malo.jpg' },
            { name: 'Julien Hauret', avatar: '/static/images/avatar/julien.jpg' },
            { name: 'Éric Bavu', avatar: '/static/images/avatar/eric.jpg' },
        ],
        date: "April 30, 2025",
    },
    {
        img: '/static/images/content/vibravox_sensors.png',
        tag: 'Body-Conduction audio sensors ; Robust Communication ; Speech enhancement ; Speech recognition ; Speaker verification.',
        title: 'VibraVox: A Dataset of French Speech Captured with Body-conduction Audio Sensors',
        description:
            `Vibravox is a dataset compliant with the General Data Protection Regulation (GDPR) containing audio recordings using five different body-conduction audio sensors : two in-ear microphones, two bone conduction vibration pickups and a laryngophone.
            The data set also includes audio data from an airborne microphone used as a reference.
            The Vibravox corpus contains 38 hours of speech samples and physiological sounds recorded by 188 participants under different acoustic conditions imposed by an high order ambisonics 3D spatializer.
            Annotations about the recording conditions and linguistic transcriptions are also included in the corpus.
            We conducted a series of experiments on various speech-related tasks, including speech recognition, speech enhancement and speaker verification.
            These experiments were carried out using state-of-the-art models to evaluate and compare their performances on signals captured by the different audio sensors offered by the Vibravox dataset, with the aim of gaining a better grasp of their individual characteristics.`,
        authors: [
            { name: 'Julien Hauret', avatar: '/static/images/avatar/julien.jpg' },
            { name: 'Malo Olivier', avatar: '/static/images/avatar/malo.jpg' },
            { name: 'Thomas Joubaud', avatar: '/static/images/avatar/' },
            { name: 'Christophe Langrenne ', avatar: '/static/images/avatar/' },
            { name: 'Sarah Poirée', avatar: '/static/images/avatar/' },
            { name: 'Véronique Zimpfer', avatar: '/static/images/avatar/' },
            { name: 'Éric Bavu', avatar: '/static/images/avatar/eric.jpg' },
        ],
        date: "April 30, 2025",
    },
    {
        img: '/static/images/content/insa.png',
        tag: 'Body conduction microphones ; Automatic Speech Recognition ; Deep Neural Networks ; Transformer layers ; Experimental sciences.',
        title: 'Graduation project to design an intelligent speech transcription system for unconventional data [R&D]',
        description:
            `In order to support the thesis work of Mr. Julien HAURET, the aim of this final project is to contribute to the development of the VibraVox dataset and the design of an Automatic Speech Recognition (ASR) system using unconventional data.
            A methodology based on the use of Deep Neural Networks and Transformer layers has been implemented. The finetuning of pretrained models is carefully adjusted using implementation strategies and the hyperparameters described by Baevski et al. are adopted.
            The experiments aim to analyze the performance differences between different microphones and quantify the impact of a speech enhancement system in pre-processing.
            A total of 200 participants (50 hours) will follow an experimental protocol to record audio data using different body-conducted microphones.
            A scientific article summarizes these findings and conclusions.`,
        authors: [{ name: 'Malo Olivier', avatar: '/static/images/avatar/malo.jpg' }],
        date: "January 31, 2024",
    },
];

const Publications: React.FC = () => {
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
            <Typography variant="h1" gutterBottom fontFamily={'Roboto'} sx={{ fontWeight: 100 }}>Publications</Typography>

            <Grid direction='column' container spacing={8} columns={12} justifyContent="center" alignItems="center">
                <Grid size={{ xs: 12, md: 8 }}>
                    <SyledCard
                        variant="outlined"
                        onClick={() => handleClick("https://huggingface.co/Cnam-LMSSC/wav2vec2-french-phonemizer")}
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
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />

                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                {cardData[0].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                {cardData[0].title}
                            </Typography>
                            <StyledTypography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                                sx={{
                                    minHeight: '150px', // Adjust this value as needed
                                    overflow: 'auto', // Add scroll if content overflows
                                    textAlign: 'justify', // Justify the text
                                    whiteSpace: 'pre-line', // Preserve line breaks from \n
                                }}
                                fontFamily={'Roboto'}
                                dangerouslySetInnerHTML={{ __html: cardData[0].description }}
                            />
                        </SyledCardContent>
                        <Author authors={cardData[0].authors} date={cardData[0].date} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
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
                            image={cardData[1].img}
                            aspect-ratio="16 / 9"
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />

                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                {cardData[1].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                {cardData[1].title}
                            </Typography>
                            <StyledTypography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                                sx={{
                                    minHeight: '150px', // Adjust this value as needed
                                    overflow: 'auto', // Add scroll if content overflows
                                    textAlign: 'justify', // Justify the text
                                }}
                                fontFamily={'Roboto'}
                            >
                                {cardData[1].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[1].authors} date={cardData[1].date} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
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
                            image={cardData[2].img}
                            aspect-ratio="16 / 9"
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />

                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                {cardData[2].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                {cardData[2].title}
                            </Typography>
                            <StyledTypography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                                sx={{
                                    minHeight: '150px', // Adjust this value as needed
                                    overflow: 'auto', // Add scroll if content overflows
                                    textAlign: 'justify', // Justify the text
                                }}
                                fontFamily={'Roboto'}
                            >
                                {cardData[2].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[2].authors} date={cardData[2].date} />
                    </SyledCard>
                </Grid>
            </Grid>


        </Container>
    );
};

export default Publications;