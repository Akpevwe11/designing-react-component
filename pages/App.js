
import SpeakersList from './SpeakersList';
import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';
import { useState } from 'react';


import Speakers  from './Speakers';

 function App() {
    const [theme, setTheme] = useState("light"); 
    return (
       <div className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
       }>
        <Header theme={theme} />
        <Speakers 
      
         theme={theme}
         setTheme={setTheme} 
        />
       </div>
    )

}


export default App; 
