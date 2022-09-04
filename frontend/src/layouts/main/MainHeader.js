import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="55" viewBox="0 0 600 600" width="50">
        <g transform="translate(50 50)">
          <path transform="translate(-50 -50)" fill="red" d="m408.774 299.092c-20.291 48.98-110.999 122.181-163.549 155.349-11.744 7.413-26.706 7.413-38.45 0-52.55-33.168-143.258-106.369-163.549-155.349-66.676-160.947 101.871-216.245 182.774-139.186 80.903-77.059 249.45-21.761 182.774 139.186z" />
          <animateTransform attributeName="transform" type="scale" values="1; 1.08; 1.10; 1.15; 1.15; 1;" dur="3s" repeatCount="indefinite" additive="sum"></animateTransform>
          <ellipse fill="#0000ff" cx="270.73" cy="290.237" rx="110.271" ry="110.239" />
          <path fill="#fc7979" d="m350.372 190.024c-19.348 12.323-91.703-47.471-83.147-69.371 5.141-13.16 42.197-19.546 67.403-.492 27.548 20.823 27.861 62.146 15.744 75.863z" />
          <path fill="#af2727" d="m160 245c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25z" />
          <path fill="#0000ff" d="m133.714 246.069c-5.128 2.048-10.947-.443-12.999-5.571l-10.715-26.788-30.715 76.788c-1.455 3.637-4.899 6.09-8.813 6.275-.158.007-.316.011-.474.011-3.732 0-7.172-2.084-8.891-5.427l-27.209-52.906h-53.898c-5.523 0-10-4.478-10-10s4.477-10 10-10h60c3.747 0 7.179 2.095 8.893 5.427l19.968 38.827 31.854-79.635c1.519-3.797 5.196-6.286 9.285-6.286s7.766 2.489 9.285 6.286l20 50c2.051 5.128-.443 10.948-5.571 12.999z" />
          <path fill="#fff5f5" d="m356.456 270.15v42.149c0 5.523-4.477 10-10 10h-44.381v44.381c0 5.523-4.477 10-10 10h-42.15c-5.523 0-10-4.477-10-10v-44.381h-44.381c-5.523 0-10-4.477-10-10v-42.149c0-5.523 4.477-10 10-10h44.381v-44.381c0-5.523 4.477-10 10-10h42.15c5.523 0 10 4.477 10 10v44.381h44.381c5.522 0 10 4.477 10 10zm-127.71-306.113-7.79-14.243c-.635-1.161-2.303-1.161-2.939 0l-7.79 14.243c-.154.281-.385.512-.666.666l-14.243 7.79c-1.161.635-1.161 2.303 0 2.939l14.243 7.79c.281.154.512.385.666.666l7.79 14.243c.635 1.161 2.303 1.161 2.939 0l7.79-14.243c.154-.281.385-.512.666-.666l14.243-7.79c1.161-.635 1.161-2.303 0-2.939l-14.243-7.79c-.282-.154-.513-.385-.666-.666z"></path>
          <path fill="#d5f1fe" d="m259.381 261.15h-19.456v-44.381c0-5.523 4.477-10 10-10h29.456c-5.523 0-10 4.477-10 10v34.381c0 5.523-4.477 10-10 10zm-34.381 0h-29.456c-5.523 0-10 4.477-10 10v42.149c0 5.523 4.477 10 10 10h29.456c-5.523 0-10-4.477-10-10v-42.149c0-5.523 4.477-10 10-10zm44.381 106.53v-34.381c0-5.523-4.477-10-10-10h-19.456v44.381c0 5.523 4.477 10 10 10h29.456c-5.523 0-10-4.477-10-10z" />
        </g>
      </svg>

          <Link href="https://docs-minimals.vercel.app/changelog" target="_blank" rel="noopener" underline="none">
            <Label color="primary" sx={{ ml: 1 }}>
            <div><span style={{"color": "transparent",
      "background": "#666666",
      "-webkit-background-clip": "text",
      "-mozBackgroundClip": "text",
      "backgroundClip": "text",
      "textShadow": "0px 1px 1px rgba(0, 4, 255, 0.699)",
      "fontSize":"30px"}}>Travis The Health Advisor </span>
</div>
            </Label>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
          
          <Button
            variant="contained"
            target="_blank"
            rel="noopener"
            href="https://material-ui.com/store/items/minimal-dashboard/"
          >
            Apply now!
          </Button>

          {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
