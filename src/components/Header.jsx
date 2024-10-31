import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={1}>
    <Container>
      <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
        <div>
          <Button color="inherit" href="#proyectos">Proyectos</Button>
          <Button color="inherit" href="#about">Sobre mí</Button>
          <Button color="inherit" href="#contacto">Contacto</Button>
        </div>
      </Toolbar>
    </Container>
  </AppBar>
  )
}
