
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import requests from './requests';
import Results from './Results';

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTopRated);


  return (
    <div className="app">
  
      <Header />
      

      <Nav setSelectedOption={setSelectedOption}/>
      

       <Results selectedOption={selectedOption}/>
    </div>
 
  
  );

}
export default App;
