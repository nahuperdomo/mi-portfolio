import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

// Datos de ejemplo
const projects = [
  {
    title: 'Despegar.com',
    image: "src/images/despegar.png",
    description: 'Desarrollo y aseguramiento de calidad de un nuevo producto para mejorar la experiencia del usuario en el sector de viajes. Implementación de tecnologías como Java, Spring Boot, Angular y Git.',
    link: 'https://github.com/nahuel/proyecto1'
  },
  {
    title: 'RapidoYFacil',
    image: 'src/images/rapidoyfacil.png',
    description: 'Solución para simplificar y optimizar procesos operativos en una aplicación orientada al cliente. Proyecto enfocado en funcionalidad y escalabilidad utilizando tecnologías modernas.',
    link: 'https://github.com/nahuel/proyecto2'
  },
  {
    title: 'Telus',
    image: 'src/images/telus.png',
    description: 'Desarrollo de un producto de telecomunicaciones para una empresa canadiense, aplicando metodologías ágiles (Scrum) y realizando pruebas automatizadas con Selenium.',
    link: 'https://github.com/nahuel/proyecto1'
  },
  {
    title: 'Tickantel',
    image: 'src/images/tickantel.png',
    description: ' Participación en el desarrollo y pruebas de un sistema de gestión de entradas, optimizando la funcionalidad y la experiencia del usuario. Trabajo colaborativo para garantizar la calidad del producto.',
    link: 'https://github.com/nahuel/proyecto1'
  }
  // Agrega más proyectos aquí
];
export const Projects = () => {
  return (
    <>
      <Typography
        sx={{ display: 'flex', justifyContent: 'center', color: 'white', fontFamily: 'Cutive Mono' }}
      >PROYECTOS</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', padding: 4 }}>
        {projects.map((project, index) => (
          <Card key={index} sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia component="img" height="140" image={project.image} alt={project.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} target="_blank" rel="noopener">
                Ver Proyecto
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}
