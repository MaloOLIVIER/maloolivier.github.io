import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import Homepage from './components/Homepage/Homepage';
import Resume from './components/Resume/Resume';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import getBlogTheme from './components/blog/theme/getBlogTheme';
import AppAppBar from './components/blog/components/AppAppBar';
import Footer from './components/blog/components/Footer';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* emailjs parameters */
export const MALO_MAIL = "MaloOlivier333@gmail.com"
export const PUBLIC_KEY = "MdTfxlz4OeqU4iNRa"
export const SERVICE_ID = 'service_qky46tp'
export const TEMPLATE_ID = 'template_5bjrtst'


//TODO: fix the routes on smartphone


function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const blogTheme = createTheme(getBlogTheme(mode));
  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  return (
    <ThemeProvider theme={blogTheme}>
      <CssBaseline enableColorScheme />
      <HashRouter>

        <AppAppBar
          mode={mode}
          toggleColorMode={toggleColorMode} />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </HashRouter>

    </ThemeProvider>

  );
}

export default App;
