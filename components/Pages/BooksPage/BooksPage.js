import styles from './BooksPage.module.css';
import Image from 'next/image';
const book01 = '/imgs/Pages/BooksPage/book01.jpg';
const book02 = '/imgs/Pages/BooksPage/book02.jpg';

const firstSection = {};
firstSection.h2 = 'Mine bøger og workshops';
firstSection.h3 = 'Mindfulness for børn og unge (2012)';
firstSection.p1 = 'Min bog Mindfulness for børn og unge – teori og praktiske øvelser giver en bred introduktion til begrebet og metoden ’Mindfulness’, og det beskrives, hvordan mindfulness er blevet indarbejdet i den vestlige verdens interventionsstrategier, og hvordan man inddrage mindfulnessøvelser i sit møde med børn og unge. I bogen giver jeg et bud på, hvordan man kan forstå sit arbejde med mindfulness til børn og unge indenfor en udviklingspsykologisk forståelsesramme. Derudover beskriver jeg i bogen forskellige interventioner, der trækker på mindfulness og som er blevet tilpasset til børn, unge og deres forældre.';
firstSection.p2 = 'Bogen giver en god baggrundsviden og et teoretisk udgangspunkt til både forældre, lærere, pædagoger, terapeuter/psykologer og andre voksne, der arbejder professionelt med børn og voksne. Samtidig har jeg lagt stor vægt på at videreformidle nogle konkrete øvelser, så ca. halvdelen af bogen er dedikeret til de praktiske øvelser, og hvordan man kan tilrettelægge en børnegruppe.';
firstSection.p3 = 'De mange inspirerende øvelser er ordnet i grupper med følgende overskrifter:';
firstSection.b1 ='Åndedrætsøvelser';
firstSection.b2 ='Sanseøvelser';
firstSection.b3 ='Krops- og bevægelsesøvelser';
firstSection.b4 ='Det indre trygge sted';
firstSection.b5 ='Sammenhæng mellem vejrtrækning, krop og sind';
firstSection.b6 ='Loving Kindness-øvelser (selvomsorgsøvelser)';
firstSection.h4 ='Anmeldelser:';
firstSection.p4 =<a href='http://www.folkeskolen.dk/515039/er-mindfulness-det-nye-mantra'>Link til Folkeskolens anmeldelse af min bog</a>;

const secondSection = {};
secondSection.h3 = 'Mindfulness med børn (2016)';
secondSection.p1 = 'Min bog Mindfulness med børn - Øvelser og lege, der styrker nærvær, opmærksomhed og samvær indeholder et inspirerende katalog med øvelser og lege til de 5-12 årige – lige til at gå i gang med i klassen, børnegruppen eller på gulvet derhjemme.';
secondSection.p2 = 'Mindfulness med børn er praksisorienteret og overskueligt bygget op. Den er skrevet til fagpersoner, der arbejder med børn i børnehaver, skoler og fritidsordninger, og kan også bruges af forældre.';
secondSection.p3 = <><span>Læs et uddrag af bogen</span><a href="http://ipaper.ipapercms.dk/DanskPsykologiskForlag/Psykologi/Mindfulness_med_born/"> her.</a></> ;
secondSection.p4 = 'Bogen indeholder:';

secondSection.b1 ='kortfattet baggrundsviden';
secondSection.b2 ='30 forskellige mindfulnessøvelser';
secondSection.b3 ='forslag til temaer og historier, man kan arbejde med sammen med øvelserne';
secondSection.b4 ='15 lege, der supplerer øvelserne';
secondSection.b5 ='viden om planlægning, strukturering og facilitering af børnegrupper';
secondSection.b6 ='forslag til strukturerede gruppeforløb til yngre og ældre børn';

const thirdSection = {};
thirdSection.h3 ='Foredrag og workshops';
thirdSection.p1 ='Jeg tager ud i hele landet og holder foredrag, workshops eller kursusforløb, der er særligt tilrettelagt jeres ønsker og behov. Jeg har gode erfaringer med disse temaer:';
thirdSection.b1 ='Mindfulness-meditation for voksne når hverdagen udfordrer (bagrundsviden og afprøvning af øvelser sammen samt dialog)';
thirdSection.b2 ='Mindfulness-baseret kognitiv terapi for unge og voksne med ADHD';
thirdSection.b3 ='Bevidst nærvær/mindfulness i forældreskabet (til forældre)';
thirdSection.b4 ='Mindfulness med unge (henvendt til unge, hvor vi sammen afprøver øvelser og taler om dem)';
thirdSection.b5 ='Integration af mindfulness i mødet med børn og unge (til fagpersoner eller forældre). Hvordan I kan anvende tilpassede mindfulnessøvelser med børn eller unge i jeres pædagogiske og didaktiske arbejde.  Afprøvning af praktiske krops- og vejrtrækningsøvelser samt samarbejdslege, som de voksne selv får lov at afprøve, sådan at alle går derfra med en baggrundsviden og nok inspiration til selv at gå i gang med at begynde at integrere øvelser i dagligdagen.';
thirdSection.p2 ='Kontakt mig gerne hvis du har andre ønsker eller vil høre om andre muligheder.';

export default function BooksPage() {
  return (
    <> 
      <h2>{firstSection.h2}</h2>
      <h3>{firstSection.h3}</h3>
      <section className="flex left-image">
        <aside className="oneFourth-to-all">
          <br />
          <Image width="200px" height="300px" src={book01} alt='cover for the book Mindfulness for børn og unge (2012)'/>
        </aside>
        <article className="twoThirds-to-all">
          <p>{firstSection.p1}</p>
          <p>{firstSection.p2}</p>
          <p>{firstSection.p3}</p>
          <ul>
            <li>{firstSection.b1}</li>
            <li>{firstSection.b2}</li>
            <li>{firstSection.b3}</li>
            <li>{firstSection.b4}</li>
            <li>{firstSection.b5}</li>
            <li>{firstSection.b6}</li>
          </ul>
          <h4>{firstSection.h4}</h4>
          <p>{firstSection.p4}</p>    
        </article>
      </section>
      <h3>{secondSection.h3}</h3>
      <section className="flex left-image">
        <aside className="oneFourth-to-all">
          <br />
          <Image width="200px" height="300px" src={book02} alt="Cover for the book Mindfulness med børn (2016)"/>
        </aside>
        <article className="twoThirds-to-all">
          <p>{secondSection.p1}</p>
          <p>{secondSection.p2}</p>
          <p>{secondSection.p3}</p>
          <p>{secondSection.p4}</p>
          <ul>
            <li>{secondSection.b1}</li>
            <li>{secondSection.b2}</li>
            <li>{secondSection.b3}</li>
            <li>{secondSection.b4}</li>
            <li>{secondSection.b5}</li>
            <li>{secondSection.b6}</li>
          </ul>
        </article>
      </section>
      <section className="full-width">
        <h2>{thirdSection.h3}</h2>
        <p>{thirdSection.p1}</p>
        <ul>
          <li>{thirdSection.b1}</li>
          <li>{thirdSection.b2}</li>
          <li>{thirdSection.b3}</li>
          <li>{thirdSection.b4}</li>
          <li>{thirdSection.b5}</li>
        </ul>
        <p>{thirdSection.p2}</p>
      </section>    
    </>
    );
};