import Link from 'next/link';
import styles from './ResourcesPage.module.css';
import {AudioPlayer} from '@components/Common/AudioPlayer/AudioPlayer.js';

const track01 = '/tracks/track01.mp3';
const track02 = '/tracks/track02.mp3';
const track03 = '/tracks/track03.mp3';
const track04 = '/tracks/track04.mp3';
const track05 = '/tracks/track05.mp3';
const track06 = '/tracks/track06.mp3';
const track07 = '/tracks/track07.mp3';
const track08 = '/tracks/track08.mp3';
const track09 = '/tracks/track09.mp3';

const tName01 ='01 Børneøvelse: spænd op - spænd ned';
const tName02 ='02 Børneøvelse: Vejrtrækning med sten';
const tName03 ='03 Børneøvelse: spænd op - spænd ned';
const tName04 ='04 Ungeøvelse:  Dyb vejrtrækning';
const tName05 ='05 Ungeøvelse: Kropsscanning';
const tName06 ='06 Ungeøvelse: Opmærksomhed på vejrtrækning';
const tName07 ='07 Ungeøvelse: Opmærksomhed på vejrtrækning og krop';
const tName08 ='08 Voksenøvelse: Åndedrætsmeditation';
const tName09 ='09 Vokesnøvelse: Kropsscanning';

const soundfileText = {};
soundfileText.h2='Lydfiler og ressourcer';
soundfileText.p1='Jeg har lavet et udvalg af lydfiler til børn, unge og voksne. Lydfilerne finder du her, men de kan også tilgås via Soundcloud.';


const resText={};
resText.h2 = 'Andre Ressourcer';
resText.p1='Bøger hvor mindfulness til voksne bliver introduceret:';
resText.p2 ='"Mindfulness - En guide til at finde fred i en hektisk verden" af Mark Williams og Danny Penman';
resText.p3 ='"Lev med livets katastrofer" af Jon Kabat-Zinn';
resText.p4 ='"Coming to Our Senses" af Jon Kabat-Zinn (På engelsk)';
resText.h41 ='Bøger til unge:';
resText.p5 ='"Generation præstation - Slip presset. Øvelser i mindfulness til unge" af Lone Ross Nylandssted.';
resText.h42 ='Bøger om mindfulness til børn og unge (skrevet til voksne):';
resText.p6 = <p>"Mindfulness med børn - øvelser og lege, der styrker nærvær, opmærksomhed og samhørighed" af Sabrina Leoni - <Link href="/boeger">Læs mere om bogen her</Link></p>;
resText.p7 =<p>"Mindfulness for børn og unge - teori og praktiske øvelser" af Sabrina Leoni - <Link href="/boeger">Læs mere om bogen her</Link></p>;
resText.p8 ='"Nærvær og empati i skolen" af Helle Jensen';
resText.p9 ='"Sådan får du børn i balance" af Eline Snel';
resText.p10 ='"The Mindful Child" af Susan Kaiser Greenland';
resText.p11 ='"Udvikling af følelsesmæssig intelligens" af Linda Lantieri';
resText.p12 ='"Det stille og rolige sted" af Amy Saltzman';
resText.h43 ='Bøger til børn:';
resText.p13 ='"Evigglads eventyrlige afspænding" af Michael Chissick';
resText.p14 ='"Frede Frøs fantastiske tale" af Michael Chissick';
resText.p15 ='"Fido og fugls forunderlige rejse" af Anne-Mette Trøjborg Rasmussen';
resText.h44 ='Link til forskningsartikler';
resText.p16 ='Her har jeg valgt at linke til et udpluk af interessante artikler, der beskriver forskning indenfor mindfulness og terapi til unge.';
resText.p17 ='Mindfulness-Based Approaches with Children and Adolescents: A Preliminary Review of Current Research in an Emergent Field - Christine A. Burke';
resText.p18 ='The Effectiveness of Mindfulness Training for Children with ADHD and Mindful Parenting for their Parents - Van der Oord m. fl. (2011)';
resText.p19 ='The Effectiveness of Mindfulness Training on Behavioral Problems and Attentional Functioning in Adolescents with ADHD - van de Weijer-Bergsma m. fl. (2011)';
resText.p20 ='Mindfulness-Based Stress Reduction for the Treatment of Adolescent Psychiatric Outpatients: A Randomized Clinical Trial - Biegel m. fl. (2009)';

export default function ResourcesPage() {
  return (
    <>
      <h2>{soundfileText.h2}</h2>
      <p>{soundfileText.p1}</p>
      <AudioPlayer source={track01} trackName={tName01}/>
      <AudioPlayer source={track02} trackName={tName02}/>
      <AudioPlayer source={track03} trackName={tName03}/>
      <AudioPlayer source={track04} trackName={tName04}/>
      <AudioPlayer source={track05} trackName={tName05}/>
      <AudioPlayer source={track06} trackName={tName06}/>
      <AudioPlayer source={track07} trackName={tName07}/>
      <AudioPlayer source={track08} trackName={tName08}/>
      <AudioPlayer source={track09} trackName={tName09}/>
      <h2>{resText.h2}</h2>
      <p>{resText.p1}</p>
      <p>{resText.p2}</p>
      <p>{resText.p3}</p>
      <p>{resText.p4}</p>
      <h4>{resText.h41}</h4>
      <p>{resText.p5}</p>
      <h4>{resText.h42}</h4>
      <p>{resText.p6}</p>
      <p>{resText.p7}</p>
      <p>{resText.p8}</p>
      <p>{resText.p9}</p>
      <p>{resText.p10}</p>
      <p>{resText.p11}</p>
      <p>{resText.p12}</p>
      <h4>{resText.h43}</h4>
      <p>{resText.p13}</p>
      <p>{resText.p14}</p>
      <p>{resText.p15}</p>
      <h4>{resText.h44}</h4>
      <p>{resText.p16}</p>
      <p>{resText.p17}</p>
      <p>{resText.p18}</p>
      <p>{resText.p19}</p>
      <p>{resText.p20}</p>
    </>
    );
};