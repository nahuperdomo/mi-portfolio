import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import useTypewriter from '../hoooks/useTypewriter';
import { InfoPop } from './InfoPop';
import SurfingIcon from '@mui/icons-material/Surfing';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhpIcon from '@mui/icons-material/Php';
import { FaReact, FaJava, FaGithub } from 'react-icons/fa';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const HeroSection = () => {
  const title = useTypewriter("Nahuel Perdomo", 150);
  const subtitle = useTypewriter("Fullstack Developer", 150);

  const infoArray1 = [
    {
      infoText: 'El surfing es una de mis pasiones. Disfruto de la conexión con el océano y la adrenalina de deslizarme sobre las olas. Siempre estoy buscando nuevas playas y desafíos en el agua.',
      icon: <SurfingIcon fontSize="large" />,
    },
    {
      infoText: 'Me encanta el arte del café. Desde preparar un espresso perfecto hasta experimentar con métodos de preparación, disfruto cada momento detrás de la máquina.',
      icon: <LocalCafeIcon fontSize="large" />,
    },
    {
      infoText: 'Me encanta explorar nuevos lugares y culturas. Actualmente, estoy viviendo en Nueva Zelanda, donde disfruto de sus paisajes impresionantes y de la oportunidad de aprender sobre una nueva forma de vida.',
      icon: <FlightTakeoffIcon fontSize="large" />,
    },
    {
      infoText: 'Los videojuegos son una forma divertida de relajarme y socializar. Disfruto de la narrativa, los desafíos y el trabajo en equipo en juegos multijugador.',
      icon: <SportsEsportsIcon fontSize="large" />,
    },
  ];

  const infoArray2 = [
    {
      infoText: 'Como desarrollador backend, tengo una sólida experiencia en PHP. He trabajado en proyectos que requieren soluciones robustas y escalables.',
      icon: <PhpIcon style={{ fontSize: '2.5rem' }} />,
    },
    {
      infoText: 'Soy un entusiasta de React y disfruto construir interfaces de usuario interactivas y dinámicas.',
      icon: <FaReact style={{ fontSize: '2.5rem' }} />,
    },
    {
      infoText: 'Java es uno de mis lenguajes de programación preferidos. Su versatilidad y portabilidad me permiten desarrollar aplicaciones escalables y eficientes.',
      icon: <FaJava style={{ fontSize: '2.5rem' }} />,
    },
    {
      infoText: 'La colaboración y el control de versiones son fundamentales en mi trabajo. Utilizo GitHub para gestionar mis proyectos.',
      icon: <FaGithub style={{ fontSize: '2.5rem' }} />,
    },
  ];

  const colors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700'];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', backgroundColor: '#1A1A1A', minHeight: '100vh' }}>
      {/* Left InfoPop */}
      <Box sx={{
        position: 'absolute',
        left: 0,
        width: '20vw',
        height: '100vh',
        overflow: 'visible', // Cambiado de 'hidden' a 'visible'
        zIndex: 1,
      }}>
        {infoArray1.map((info, index) => (
          <InfoPop
            key={index}
            infoText={info.infoText}
            icon={info.icon}
            backgroundColor={colors[index % colors.length]}
            sx={{
              animation: `float 5s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
              position: 'absolute',
              top: `${Math.random() * 80}vh`,
              left: `${Math.random() * 10}vw`,
            }}
          />
        ))}
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 2, padding: '2rem 0' }}>
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{ fontSize: '4rem', fontFamily: 'Cutive Mono', color: '#FFFFFF', marginBottom: '1rem' }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: '2rem', fontFamily: 'Cutive Mono', color: '#FFFFFF', marginBottom: '2rem' }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.25rem', fontFamily: 'Cutive Mono', color: '#CCCCCC', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}
          >
            Desarrollador Full-Stack apasionado por crear soluciones innovadoras y efectivas. Especializado en desarrollo web, con un enfoque en diseñar interfaces intuitivas y funcionales.
          </Typography>
        </Container>
        <Typography
          variant="h6"
          sx={{ color: '#FFFFFF', marginTop: '3rem', fontFamily: 'Cutive Mono' }}
        >
          Ver mis proyectos
        </Typography>
        <ArrowDownwardIcon sx={{ color: '#FFFFFF', fontSize: '3rem', marginTop: '1rem' }} />
      </Box>

      {/* Right InfoPop */}
      <Box sx={{
        position: 'absolute',
        right: 0,
        width: '20vw',
        height: '100vh',
        overflow: 'visible', // Permitir visibilidad
        zIndex: 1,
      }}>
        {infoArray2.map((info, index) => (
          <InfoPop
            key={index}
            infoText={info.infoText}
            icon={info.icon}
            backgroundColor={colors[index % colors.length]}
            sx={{
              animation: `float 5s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
              position: 'absolute',
              top: `${Math.random() * 80}vh`,
              right: `${Math.random() * 10}vw`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
