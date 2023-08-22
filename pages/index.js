import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {data} from '../SpeakerData';
import Speaker from './Speaker';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          
          return (
            <Speaker key={speaker.id} speaker={speaker}/>
          );
        })}
      </div>
    </div>
  );


};
