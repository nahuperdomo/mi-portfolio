import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import useTypewriter from '../hoooks/useTypewriter';
import { InfoPop } from './InfoPop';
import SurfingIcon from '@mui/icons-material/Surfing';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhpIcon from '@mui/icons-material/Php';
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { color } from 'framer-motion';


export const HeroSection = () => {
    const title = useTypewriter("Nahuel Perdomo", 150);
    const subtitle = useTypewriter("Fullstack Developer", 150);
    const infoArray1 = [
      {
          infoText: 'El surfing es una de mis pasiones. Disfruto de la conexión con el océano y la adrenalina de deslizarme sobre las olas. Siempre estoy buscando nuevas playas y desafíos en el agua.',
          icon: <SurfingIcon fontSize='large'/> 
      },
      {
          infoText: 'Me encanta el arte del café. Desde preparar un espresso perfecto hasta experimentar con métodos de preparación, disfruto cada momento detrás de la máquina. Además, valoro el tiempo compartido con amigos en una buena cafetería.',
          icon: <LocalCafeIcon fontSize='large'/>
      },
      {
          infoText: 'Me encanta explorar nuevos lugares y culturas. Actualmente, estoy viviendo en Nueva Zelanda, donde disfruto de sus paisajes impresionantes y de la oportunidad de aprender sobre una nueva forma de vida. Cada viaje es una aventura que me enriquece personal y profesionalmente',
          icon: <FlightTakeoffIcon fontSize='large'/>
      },
      {
          infoText: 'Los videojuegos son una forma divertida de relajarme y socializar. Disfruto de la narrativa, los desafíos y el trabajo en equipo en juegos multijugador. Me apasiona la evolución de la tecnología en este ámbito.',
          icon: <SportsEsportsIcon fontSize='large'/>
      }
  ];
  const infoArray2 = [
    {
        infoText: 'Como desarrollador backend, tengo una sólida experiencia en PHP. He trabajado en proyectos que requieren soluciones robustas y escalables, y siempre busco optimizar el rendimiento y la eficiencia del código.',
        icon: <PhpIcon style={{ fontSize: '2.5rem' }}/> 
    },
    {
        infoText: 'Soy un entusiasta de React y disfruto construir interfaces de usuario interactivas y dinámicas. Me apasiona la idea de crear aplicaciones que ofrezcan una excelente experiencia de usuario y sean fáciles de mantener.',
        icon: <FaReact style={{ fontSize: '2.5rem' }}/>
    },
    {
        infoText: 'Java es uno de mis lenguajes de programación preferidos. Su versatilidad y portabilidad me permiten desarrollar aplicaciones escalables y eficientes en múltiples plataformas. Disfruto aprovechar sus características orientadas a objetos para crear soluciones robustas que optimizan el rendimiento y mejoran la experiencia del usuario.',
        icon: <FaJava style={{ fontSize: '2.5rem' }}/>
    },
    {
        infoText: 'La colaboración y el control de versiones son fundamentales en mi trabajo. Utilizo GitHub para gestionar mis proyectos y colaborar con otros desarrolladores, asegurando un flujo de trabajo organizado y efectivo.',
        icon: <FaGithub style={{ fontSize: '2.5rem' }}/>
    }
];
const colors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700'];

    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
            {/* Contenedor para los InfoPop del lado izquierdo */}
            <Box
                sx={{
                    position: 'absolute',
                    left: '0', 
                    width: '20vw',
                    height: '100vh', 
                    overflow: 'hidden', 
                    zIndex: 1,
                }}
            >
                {infoArray1.map((info, index) => (
                    <InfoPop
                        infoText={info.infoText}
                        icon={info.icon}
                        backgroundColor={colors[index % colors.length]}
                        key={index}
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

            {/* Contenido principal */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
              }}
            >
              <Container maxWidth="md">
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: '4rem',
                    fontFamily: 'Cutive Mono',
                    color: 'white',
                  }}
                >
                  {title}
                  <span
                    style={{
                      borderRight: '2px solid white',
                      marginLeft: '2px',
                      animation: 'blink 1s infinite',
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    mb: '2rem',
                    color: 'white',
                    fontFamily: 'Cutive Mono',
                  }}
                >
                  {subtitle}
                  <span
                    style={{
                      borderRight: '2px solid white',
                      marginLeft: '2px',
                      animation: 'blink 1s infinite',
                    }}
                  />
                </Typography>
                <Container
                  sx={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '15rem',
                      fontFamily: 'Cutive Mono',
                      opacity: 0.8,
                    }}
                  >
                    {"["}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      fontSize: '1.25rem',
                      fontFamily: 'Cutive Mono',
                      color: 'white',
                      maxWidth: '600px',
                      mx: 'auto',
                      mt: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    Desarrollador full-stack apasionado por crear soluciones innovadoras
                    y efectivas. Especializado en desarrollo web, con un enfoque en
                    diseñar interfaces intuitivas y atractivas que mejoren la experiencia
                    del usuario y resuelvan necesidades reales.
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '15rem',
                      fontFamily: 'Cutive Mono',
                      opacity: 0.8,
                    }}
                  >
                    {"]"}
                  </Typography>
                </Container>
              </Container>
              <Typography sx={{
                color:'white',
                fontSize:'1.3rem',
                marginTop:'10rem',
                fontFamily: 'Cutive Mono',
              }}
              >Ver mis proyectos
              </Typography>
              <ArrowDownwardIcon sx={{
                color:'white',
                fontSize:'3rem',
                
              }}/>
            </Box>

            {/* Contenedor para los InfoPop del lado derecho */}
            <Box
                sx={{
                    position: 'absolute',
                    right: '0', 
                    width: '20vw',
                    height: '100vh', 
                    overflow: 'hidden', 
                    zIndex: 1,
                }}
            >
                {infoArray2.map((info, index) => (
                    <InfoPop
                        infoText={info.infoText}
                        icon={info.icon}
                        key={index + 4}
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
        </Box>
    );
};
