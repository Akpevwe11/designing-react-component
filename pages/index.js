import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {data} from '../SpeakerData';

const inter = Inter({ subsets: ['latin'] })

function Session({session}) {
  
  const {title, room} = session;

  return (
    <span className="session w-100">
                  {title}{" "}
                  <strong>Room: {room.name}</strong>
                </span>
  )
}

function Sessions({ sessions }) {
    return (
      <div className="sessionBox card h-250">
                <Session session={sessions[0]} />
                
         </div>
    ); 
}

export default function Home() {

  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            sessions,
          } = speaker;

          return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12" key={id}>
              <div className="card card-height p-4 mt-4" >
                <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                  <img
                    className="contain-fit"
                    src={`/images/speaker-${id}.jpg`}
                    width="300"
                    alt={`${first} ${last}`}
                    
                  />
                </div>
                <div className="speaker-info">
                  <div className="d-flex justify-content-between mb-3">
                    <h3 className="text-truncate w-200">
                      {first} {last}
                    </h3>
                  </div>
                  <div>
                    <p>
                      {bio} {company} {twitterHandle} {favorite}
                    </p>
                  </div>
                </div>
              </div>
              <Sessions sessions={sessions} />
            </div>
          );
        })}
      </div>
    </div>
  );


};
