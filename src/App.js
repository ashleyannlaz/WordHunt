import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header';

function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en")

  const dictionaryApi = async() => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');
      setMeanings(data.data);

    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryApi();
  }, []) // useEffect used whenever your app is first rendered

  return (
    <div className="App" style={{height:'100vh', backgroundColor: '#282c34', color:'white'}}>
      <Container maxWidth="md" style={{display:'flex',flexDirection:'column', height:'100vh',}}>
      <Header category={category} setCategory={setCategory} />
      </Container>
    </div>
  );
}

export default App;
