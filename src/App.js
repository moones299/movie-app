

import { useState } from 'react'
import Header from './component/Header';
import MovieList from './component/MovieList';
import './App.css'

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const[darkmode, setDarkmode]=useState(true);
return(
     <div className={darkmode ? "app dark" : "app light"}>
 <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkmode={darkmode}  setDarkmode={setDarkmode}/>
 <MovieList searchTerm={searchTerm} />
 
 
 
 </div>
)
}

export default App;
