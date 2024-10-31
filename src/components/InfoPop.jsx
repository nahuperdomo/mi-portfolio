import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

export const InfoPop = ({ sx, infoText, icon, backgroundColor }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                ...sx,
                transition: 'transform 0.2s',
                transform: hovered ? 'scale(1.2)' : 'scale(1)',
                animationPlayState: hovered ? 'paused' : 'running',
                cursor: 'pointer',
                '&:hover': { zIndex: 2 },
                position: 'relative', // Para posicionar el tooltip relativo al contenedor
            }}
        >
            {/* Contenido visual de InfoPop */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    height: 70,
                    backgroundColor: backgroundColor,
                    borderRadius: '50%',
                }}
            >
                {icon}
            </Box>

            {/* Cuadro de información en hover */}
            {hovered && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)', // Ajuste para que el cuadro aparezca debajo
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        zIndex: 3,
                        maxWidth: '20rem', // Ancho máximo del cuadro
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            overflow: 'visible',
                            whiteSpace: 'normal',
                        }}
                    >
                        {infoText}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};
