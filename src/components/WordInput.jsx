import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function WordInput({ word, setWord, handleSpell }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '30px',
                paddingBottom: '10px'
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                Enter a Word:
            </Typography>
            <TextField
                value={word}
                onChange={(e) => setWord(e.target.value)}
                label="Word"
                variant="outlined"
                sx={{ marginBottom: '10px', width: '300px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSpell}
                sx={{ width: '100px' }}
            >
                Spell
            </Button>
        </Box>
    );
}

export default WordInput;