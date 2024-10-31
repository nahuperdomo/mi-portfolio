import React from 'react'
import { Box, Typography, Link, Container } from '@mui/material';


export const Footer = () => {
  return (
    <Box component="footer" py={2} bgcolor="#f8f8f8" boxShadow={1}>
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; {new Date().getFullYear()} Nahuel. Todos los derechos reservados.
      </Typography>
      <Box mt={1} display="flex" justifyContent="center" gap={2}>
        <Link href="https://linkedin.com" target="_blank" rel="noopener" color="primary">
          LinkedIn
        </Link>
        <Link href="https://github.com" target="_blank" rel="noopener" color="primary">
          GitHub
        </Link>
      </Box>
    </Container>
  </Box>
  )
}
