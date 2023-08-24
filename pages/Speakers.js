const { default: SpeakersList } = require("./SpeakersList");
const { default: SpeakersToolbar } = require("./SpeakersToolbar");
import { useState } from "react";

function Speakers({data, theme, setTheme}) {
    const [showSessions, setShowSessions] = useState(true); 
    return (
        <>
         <SpeakersToolbar  theme={theme}
             setTheme={setTheme} 
             showSessions={showSessions}
             setShowSessions={setShowSessions}
         />
         <SpeakersList data={data}
         showSessions={showSessions}
         setShowSessions={setShowSessions}
          />
        </>
    );
}

export default Speakers; 