import React from 'react'
import { Box,Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

// Datos de ejemplo
const projects = [
  { 
    title: 'Proyecto 1',
    image: 'https://via.placeholder.com/150',
    description: 'Descripción breve del proyecto 1',
    link: 'https://github.com/nahuel/proyecto1'
  },
  { 
    title: 'Proyecto 2',
    image: 'https://via.placeholder.com/150',
    description: 'Descripción breve del proyecto 2',
    link: 'https://github.com/nahuel/proyecto2'
  },
  // Agrega más proyectos aquí
];
export const Projects = () => {
  return (
    <>
    <Typography
    sx={{display:'flex', justifyContent:'center', color:'white',fontFamily:'Cutive Mono'}}
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
