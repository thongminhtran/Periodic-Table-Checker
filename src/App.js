import React, { useState } from 'react';
import './App.css';
import WordInput from './components/WordInput';
import WordSpelling from './components/WordSpelling';
import speller from './js/speller'; // Import your speller module

function App() {
    const [word, setWord] = useState('');
    const [spelledWord, setSpelledWord] = useState([]);

    const handleSpell = () => {
        console.log("Spell button clicked with word:", word);
        const result = speller.check(word);
        console.log("Spelling result:", result);
        setSpelledWord(result);
    };

    return (
        <div className="App">
            <WordInput word={word} setWord={setWord} handleSpell={handleSpell} />
            <hr />
            <WordSpelling spelledWord={spelledWord} />
        </div>
    );
}

export default App;