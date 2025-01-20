import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

// Datos de proyectos
const projects = [
  {
    title: 'Despegar.com',
    image: "src/images/despegar.png",
    description: 'Desarrollo y aseguramiento de calidad de un nuevo producto para mejorar la experiencia del usuario en el sector de viajes. Implementación de tecnologías como Java, Spring Boot, Angular y Git.',
    link: 'https://github.com/nahuel/proyecto1',
  },
  {
    title: 'RapidoYFacil',
    image: 'src/images/rapidoyfacil.png',
    description: 'Solución para simplificar y optimizar procesos operativos en una aplicación orientada al cliente. Proyecto enfocado en funcionalidad y escalabilidad utilizando tecnologías modernas.',
    link: 'https://github.com/nahuel/proyecto2',
  },
  {
    title: 'Telus',
    image: 'src/images/telus.png',
    description: 'Desarrollo de un producto de telecomunicaciones para una empresa canadiense, aplicando metodologías ágiles (Scrum) y realizando pruebas automatizadas con Selenium.',
    link: 'https://github.com/nahuel/proyecto1',
  },
  {
    title: 'Tickantel',
    image: 'src/images/tickantel.png',
    description: 'Participación en el desarrollo y pruebas de un sistema de gestión de entradas, optimizando la funcionalidad y la experiencia del usuario. Trabajo colaborativo para garantizar la calidad del producto.',
    link: 'https://github.com/nahuel/proyecto1',
  },
];

export const Projects = () => {
  return (
    <Box sx={{ backgroundColor: '#282c34', minHeight: '100vh', padding: '2rem 0' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', color: '#fff', fontFamily: 'Cutive Mono', marginBottom: '2rem' }}
      >
        Proyectos
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          padding: '0 1rem',
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              boxShadow: 5,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 10,
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'justify', lineHeight: 1.6 }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                href={project.link}
                target="_blank"
                rel="noopener"
                sx={{ textTransform: 'none' }}
              >
                Ver Proyecto
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
