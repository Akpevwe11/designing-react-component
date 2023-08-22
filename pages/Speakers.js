import {data} from '../SpeakerData';
import SpeakersList from './SpeakersList';
import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';


import Speaker from './Speaker';

 function Speakers() {

    return (
       <div className='container-fluid'>
        <Header />
        <SpeakersToolbar />
       <SpeakersList data={data} />
       </div>
    )

}


export default Speakers; 
