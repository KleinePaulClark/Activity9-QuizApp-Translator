import React, { useState } from 'react';
import './App.css';

function BackgroundVideo() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      good: 'mabuti',
    morning: 'umaga',
    evening: 'gabi',
    how: 'paano',
    are: 'ay',
    you: 'ikaw',
    thank: 'salamat',
    goodbye: 'paalam',
    please: 'pakiusap',
    sorry: 'paumanhin',
    yes: 'oo',
    no: 'hindi',
    love: 'mahal',
    friend: 'kaibigan',
    family: 'pamilya',
    beautiful: 'maganda',
    happy: 'masaya',
    food: 'pagkain',
    water: 'tubig',
    book: 'aklat',
    house: 'bahay',
    car: 'kotse',
    cat: 'pusa',
    dog: 'aso',
    child: 'bata',
    man: 'lalaki',
    woman: 'babae',
    rain: 'ulan',
    sun: 'araw',
    moon: 'buwan',
    star: 'bituin',
    sky: 'kalangitan',
    tree: 'puno',
    flower: 'bulaklak',
    bird: 'ibon',
    fish: 'isda',
    horse: 'kabayo',
    apple: 'mansanas',
    banana: 'saging',
    orange: 'kahel',
    grape: 'ubas',
    pineapple: 'pinya',
    chicken: 'manok',
    beef: 'karne ng baka',
    fish: 'isda',
    salt: 'asin',
    pepper: 'paminta',
    sugar: 'asukal',
    bread: 'tinapay',
    rice: 'kanin',
    noodles: 'pancit',
    coffee: 'kape',
    tea: 'tsaa',
    milk: 'gatas',
    computer: 'kompyuter',
    phone: 'telepono',
    television: 'telebisyon',
    music: 'musika',
    movie: 'pelikula',
    school: 'paaralan',
    teacher: 'guro',
    student: 'estudyante',
    work: 'trabaho',
    job: 'empleyo',
    city: 'lungsod',
    country: 'bansa',
    world: 'mundo',
    universe: 'uniberso',
    earth: 'mundo',
    air: 'hangin',
    wind: 'hangin',
    fire: 'apoy',
    stone: 'bato',
    mountain: 'bundok',
    sea: 'dagat',
    river: 'ilog',
    lake: 'lawa',
    ocean: 'karagatang-dagat',
    forest: 'gubat',
    desert: 'disyerto',
    jungle: 'gubat',
    snow: 'niyebe',
    cloud: 'ulap',
    storm: 'bagyo',
    sunshine: 'sinag ng araw'
      // Add more translations as needed
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div classname="app-container">
      <BackgroundVideo />
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word: </label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  </div>
  );
}

export default App;
