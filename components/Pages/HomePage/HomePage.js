import styles from './HomePage.module.css';
import Image from 'next/image';
import {InPageNav} from '@components/Common/InPageNav/InPageNav.js';

const homePageText = {};
homePageText.p1 = 'Velkommen hos klinisk psykolog Sabrina Leoni. Min praksis kalder jeg for Stille Sted, fordi jeg i samarbejde med mine klienter hjælper dem til at stoppe op og finde hjem til sig selv, så det bliver tydeligere for den enkelte at se, hvad der er vigtigt og meningsfuld, og hvilke pejlemærker der derfor bliver vigtige at navigere efter i dagligdagen og i livet mere bredt.'
homePageText.p2 = 'Jeg har gennem mange år arbejdet med at integrere meditation og mindfulnessøvelser i mit psykologiske virke og har set, hvordan det kan hjælpe mennesker, der kæmper med usikkerhed, forvirring, nedtrykthed, bekymringer og angst- eller stresssymptomer - læs gerne mere under mine måder at arbejde på.'
homePageText.p3 = 'Jeg tager pt. ikke privatklienter.'


export default function HomePage() {
  return (
    <main>
        <InPageNav />
        <article>
            <section >
                <p>{homePageText.p1}</p>
                <p>{homePageText.p2}</p>
                <p>{homePageText.p3}</p>
            </section>
            <section><Image width='960px' height="640px" alt='A person in a nice garden' src='/imgs/Pages/HomePage/frontPage.jpg'/></section>
        </article>

    </main>
    );
};