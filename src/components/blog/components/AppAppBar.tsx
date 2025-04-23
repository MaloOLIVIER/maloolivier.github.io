import * as React from 'react';
import { alpha, styled, PaletteMode } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function AppAppBar({
  mode,
  toggleColorMode,
}: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <AppBar
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2, position: { xs: 'absolute', md: 'fixed' } }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Typography
              sx={{ fontFamily: 'Roboto, sans-serif' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              {isHovered ? '🕺' : '👨‍🔬'}
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
                <Button variant="text" color="info" size="small" sx={{ fontFamily: 'Roboto, sans-serif', ml: 1 }}>
                  Home
                </Button>
              </Link>
              <Link to="/Resume">
                <Button variant="text" color="info" size="small" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  Resume
                </Button>
              </Link>
              <Link to="/Publications">
                <Button variant="text" color="info" size="small" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  Publications
                </Button>
              </Link>
              <Link to="/Contact">
                <Button variant="text" color="info" size="small" sx={{ fontFamily: 'Roboto, sans-serif', minWidth: 0 }}>
                  Contact
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >

            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
            />

          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                  <MenuItem>
                    <ToggleColorMode
                      data-screenshot="toggle-mode"
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </MenuItem>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={toggleDrawer(false)}>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={toggleDrawer(false)}>
                  <Link to="/Resume" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      Resume
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={toggleDrawer(false)}>
                  <Link to="/Publications" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      Publications
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={toggleDrawer(false)}>
                  <Link to="/Contact" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      Contact
                    </Typography>
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar >
  );
}
