import Image from "next/image";
import './AboutPage.module.css';

//import aboutAside from './aboutAside.jpg';
//import aboutFullPage from './aboutFullPage.jpg';


const aboutText = {};
aboutText.h2 = 'Om mig som psykolog';
aboutText.p1 = 'Jeg er autoriseret klinisk psykolog og forfatter. Jeg tilbyder terapi til unge og voksne i min private psykologpraksis STILLE STED, der ligger i hjertet af Vanløse - 500 m. fra Vanløse metro- og togstation.';
aboutText.p2 = 'Til dagligt arbejder jeg i Center for Mental Sundhed, Københavns Kommune, hvor jeg som psykolog tilbyder meditationsbaserede gruppeforløb og kognitiv terapi til unge og voksne, der oplever stress-, angst- og depressionssymptomer.';
aboutText.p3 = 'Som psykolog er jeg stærkt forankret i den nyeste kliniske viden og terapeutiske udviklinger samt udviklingspsykologisk viden. Jeg arbejder med den metode, der passer til den enkeltes behov og livssituation, men er særligt inspireret af relationelle og mentaliseringsfremmende tilgange, ACT, Compassion Focused Therapy og Mindfulness-Baseret Kognitiv Terapi. ';
aboutText.p4 = 'Jeg er uddannet i Mindfulness-Baseret Kognitiv Terapi for voksne med stress, angst eller depression ved Bangor University, Wales. Derudover er jeg uddannet og certificeret i en videreudvikling af Mindfulness-Baseret Kognitiv Terapi, der er særligt tilpasset til unge og børn - samt forældre (og fagfolk) - ved Institut for Psykologi, Amsterdam Universitet. Jeg er desuden certificeret i Åben og Rolig, der er et 9 ugers meditationsbaseret gruppeforløb for voksne, der oplever en høj grad af pres og stress i deres dagligdag. ';
aboutText.p5 = 'Jeg holder mig løbende orienteret i den nyeste forskning og viden på feltet - gennem konferencer og kurser både nationalt og internationalt. Jeg anvender selv mindfulnessmeditation og bevidst nærvær i min dagligdag.';
aboutText.p6 = 'Jeg er 42 år, gift og mor til tre.';

const projectText = {};
projectText.h2 ='Projekter';
projectText.p1 ='Jeg arbejder ofte projektbaseret:';
projectText.b1 = <p>i 2017-2018 har jeg deltaget i et forskningsprojekt ved Institut for Psykologi - Syddansk Universitet, hvor jeg har faciliteret 4 gruppeforløb i Mindfulness-Baseret Kognitiv Terapi for unge med autisme og for deres forældre. Jeg faciliteret 1 unge gruppe og 3 forældre grupper.</p>;
projectText.b2 = <p>i 2016 deltog jeg i en udviklingsgruppe under <a target="_blank" href="https://www.cfps.dk">Center For Psykisk Sundhedsfremme</a>, hvor vi tilpassede det meditations-integrerende gruppeforløb 'Åben og Rolig' til unge i gymnasier og på videregående uddannelser - her var jeg samtidig facilitator af et gruppeforløb på et gymnasie i Aalborg.</p>;
projectText.b3 = <p>i 2015 var jeg medudvikler af og forfatter til det resiliensfremmende læringsforløb STÆRKE SAMMEN (4.-6. klasse) hos Red Barnet. Materialet STÆRKE SAMMEN og det tilhørende legekatalog LEGE SAMMEN <a target="_blank" href="https://redbarnet.dk/skole/boerns-rettigheder/staerke-sammen/">kan downloades gratis her</a>.</p>;


export default function AboutPage() {
  return (
    <>
    <section className='article-left-text flex '>
      <article className="twoThirds-to-all">
        <h2>{aboutText.h2}</h2>
        <p>{aboutText.p1}</p>
        <p>{aboutText.p2}</p>
        <p>{aboutText.p3}</p>
        <p>{aboutText.p4}</p>
        <p>{aboutText.p5}</p>
        <p>{aboutText.p6}</p>
      </article>
      <aside>
        <div>
          <Image width="500px" height="750px" src='/imgs/Pages/AboutPage/aboutAside.jpg' alt="Sabrina Leoni"></Image>
          <p className="center-text">Sabrina Leoni</p>
        </div>
      </aside>
    </section>
    <Image width="1500px" height="1001px" src='/imgs/Pages/AboutPage/aboutFullPage.jpg' alt="A relaxing panorama"></Image>
    <section className="article-bullet-list">
      <article>
        <h2>{projectText.h2}</h2>
        <p>{projectText.p1}</p>
        <ul>
          <li>{projectText.b1}</li>
          <li>{projectText.b2}</li>
          <li>{projectText.b3}</li>
        </ul>
      </article>
    </section>

    </>
    );
};