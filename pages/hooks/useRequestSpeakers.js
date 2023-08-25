import { data } from "@/SpeakerData";
import {useState, useEffect} from 'react';


const REQUEST_STATUS = {
    LOADING: "loading", 
    SUCCESS: "success", 
    FAILURE: "failure", 
}


 function useRequestSpeakers(delayTime = 1000) {

    const [sepeakersData, setSpeakersData] = useState([]);
const [isLoading, setIsLoading] = useState(true); 
const [hasErrored, setHasErrored] = useState(false); 
const [error, setError] = useState(""); 

const delay = (delayTime) => new Promise(resolve => setTimeout(resolve, delayTime)); 

useEffect(() => {
   async function delayFunc() {
      try {
       await delay(2000); 
       setIsLoading(false);
       setSpeakersData(data); 
      } catch(e) {
       setIsLoading(false); 
       setHasErrored(true);
       setError(e); 
      }
   }
   delayFunc();
},[]);

function onFavoriteToggle(id) {
   const speakersRecPrevious = sepeakersData.find(function (rec) {
       return rec.id === id; 
   }); 
   const speakerRecUpdated = {
       ...speakersRecPrevious, 
       favorite: !speakersRecPrevious.favorite
   };
   const speakersDataNew = sepeakersData.map(function (rec) {
       return rec.id === id ? speakerRecUpdated : rec; 
   }); 

   setSpeakersData(speakersDataNew);
}

return {
    sepeakersData, 
    isLoading, 
    hasErrored,
     error, 
     onFavoriteToggle
}


}

export default useRequestSpeakers; 
