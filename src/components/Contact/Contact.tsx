import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import emailjs from 'emailjs-com';
import { MALO_MAIL, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';

export function GradientCircularProgress({ activateWhen, size }) {
    if (!activateWhen?.includes('.')) return null;
    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#4169E1" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress size={size} sx={{
                'svg circle': { stroke: 'url(#my_gradient)' },
                verticalAlign: 'middle',
            }} />
        </React.Fragment>
    );
}

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const ContactContainer = styled(Stack)(({ theme }) => ({
    padding: 20,
    marginTop: '10vh',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const Contact = (props: { disableCustomTheme?: boolean }) => {
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [messageError, setMessageError] = React.useState(false);
    const [messageErrorMessage, setMessageErrorMessage] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);
    const [messageStatus, setMessageStatus] = React.useState<string | null>(null);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        const templateParams = {
            to_mail: MALO_MAIL,
            from_name: name,
            from_mail: email,
            message: message,
        };

        isValid && emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageStatus('Thanks a lot!');
            }, (error) => {
                console.log('FAILED...', error);
                setMessageStatus('Failed to send message. Please try again.');
                alert('Error. Please try again.');
            });

        (event.target as HTMLFormElement).reset();
    };

    const validateInputs = () => {
        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const message = document.getElementById('message') as HTMLInputElement;

        let valid = true;

        if (!name.value) {
            setNameError(true);
            setNameErrorMessage('Please enter your name.');
            valid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            valid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!message.value) {
            setMessageError(true);
            setMessageErrorMessage('Please enter a message.');
            valid = false;
        } else {
            setMessageError(false);
            setMessageErrorMessage('');
        }

        setIsValid(valid);

        valid ? setMessageStatus("Sending...") : setMessageStatus(null);

        return valid;
    };

    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 8, gap: 4 }}
        >
            <CssBaseline enableColorScheme />
            <ContactContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ fontWeight: 100 }}
                        fontFamily={'Roboto'}
                    >
                        Contact
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="name" sx={{ fontFamily: 'Roboto, sans-serif' }}>Name</FormLabel>
                            <TextField
                                error={nameError}
                                helperText={nameErrorMessage}
                                id="name"
                                type="name"
                                name="name"
                                placeholder="Your name"
                                autoComplete="name"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'name' }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email" sx={{ fontFamily: 'Roboto, sans-serif' }}>Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'email' }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="message" sx={{ fontFamily: 'Roboto, sans-serif' }}>Message</FormLabel>
                            <TextField
                                error={messageError}
                                helperText={messageErrorMessage}
                                name="message"
                                placeholder="Hello!"
                                type="message"
                                id="message"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={messageError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                            sx={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            {!messageStatus ? "Send" : messageStatus}
                            <Box sx={{ ml: 2 }}>
                                <GradientCircularProgress activateWhen={messageStatus} size={30} />
                            </Box>
                        </Button>
                    </Box>
                    <Divider>
                        <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                            or
                        </Typography>
                    </Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            startIcon={<LinkedInIcon />}
                            sx={{ fontFamily: 'Roboto, sans-serif' }}
                            onClick={() => window.open('https://www.linkedin.com/in/maloolivier', '_blank')}
                        >
                            Let's connect on LinkedIn
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            sx={{ fontFamily: 'Roboto, sans-serif' }}
                            onClick={() => window.open('https://github.com/MaloOLIVIER', '_blank')}
                        >
                            Let's connect on GitHub
                        </Button>
                    </Box>
                </Card>
            </ContactContainer>
        </Container>
    );
}

export default Contact;