import React, {useState, useEffect} from 'react';
import './App.css';
import WordInput from './components/WordInput';
import WordSpelling from './components/WordSpelling';
import speller from './js/speller';
import Clock from "./js/Clock"; // Import your speller module
import DigitalClock from "./js/DigitalClock";
import LoadingSpinner from './components/LoadingSpinner';

function App() {
    const [word, setWord] = useState('');
    const [spelledWord, setSpelledWord] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleSpell = () => {
        console.log("Spell button clicked with word:", word);
        setLoading(true);
        setTimeout(() => {
            const result = speller.check(word);
            setSpelledWord(result);
            setLoading(false);
        }, 500);
    };
    return (
        <div className="App">
            <WordInput word={word} setWord={setWord} handleSpell={handleSpell}/>
            <hr/>
            {
                loading ? <LoadingSpinner/> : <WordSpelling spelledWord={spelledWord}/>
            }
            <hr/>
            <Clock/>
            <DigitalClock/>
        </div>
    );
}

export default App;