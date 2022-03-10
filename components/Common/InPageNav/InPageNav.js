import styles from './InPageNav.module.css';
import Image from 'next/image';
import Link from 'next/link';

const subText = {};
subText.text1 ='Terapi med unge og voksne' ;
subText.text2 = 'Mine måder at arbejde på';
subText.text3 = 'Mine bøger og workshops';
subText.text4 = 'Guidede meditationer og ressourcer';

export const InPageNav = () => {
  return (
    <nav id="in-page-nav" className="grid-4-2">
        <Link href="/terapi">
            <a>
                <section className={styles.navBox}>
                    <figure className={styles.navImg}><Image width='228px' height="228px" alt='Two people talking' src='/imgs/InPageNav/01inPageNav.png'/></figure>
                    <aside className={styles.navSubtitle}><h2>{subText.text1}</h2></aside>
                </section>
            </a>
        </Link>      
        <Link href="/metode">
            <a>
                <section className={styles.navBox}>
                    <figure className={styles.navImg}><Image width='228px' height="228px" alt='person under a tree' src='/imgs/InPageNav/02inPageNav.png' /></figure>
                    <aside className={styles.navSubtitle}><h2>{subText.text2}</h2></aside>
                </section>
            </a>
        </Link>        
        <Link href="/boeger">
            <a>
                <section className={styles.navBox}>
                    <figure className={styles.navImg}><Image width='228px' height="228px" alt='mindfulness books' src='/imgs/InPageNav/03inPageNav.png' /></figure>
                    <aside className={styles.navSubtitle}><h2>{subText.text3}</h2></aside>
                </section>
            </a>
        </Link>
        <Link href="/ressourcer">
            <a>
                <section className={styles.navBox}>
                    <figure className={styles.navImg}><Image width='228px' height="228px" alt='smiling face' src='/imgs/InPageNav/04inPageNav.png'/></figure>
                    <aside className={styles.navSubtitle}><h2>{subText.text4}</h2></aside>
                </section>
            </a>
        </Link>
    </nav>
    );
};