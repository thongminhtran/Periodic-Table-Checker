import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import '../App.css';  // Make sure to import your CSS file

function WordSpelling({ spelledWord }) {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh'
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {spelledWord.length > 0 ? (
                    spelledWord.map((el, index) => (
                        <Grid item key={index}>
                            <div className="element">
                                <div className="number">{el.number}</div>
                                <div className="symbol">{el.symbol}</div>
                                <div className="name">{el.name}</div>
                            </div>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6">No valid spelling found.</Typography>
                )}
            </Grid>
        </Container>
    );
}

export default WordSpelling;