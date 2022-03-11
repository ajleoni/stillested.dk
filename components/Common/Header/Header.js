import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function Header(props) {
    const router = useRouter();
    const handleClick = (e) => {
        console.log(e.target);
        const topNav = document.getElementById('top-nav');
        const visibility = topNav.getAttribute('data-visible');
        const navOpen = document.getElementById('nav-open');
        const navClose = document.getElementById('nav-close');
        if (visibility === "true") {
            topNav.setAttribute("data-visible", false);
            navClose.setAttribute("visible", false);
            navOpen.setAttribute("visible", true);
            };       
};  
  const handleOpen = ({target}) => {
    const navOpen = target;
    const topNav = target.nextSibling;
    const navClose = document.getElementById('nav-close');
    const visibility = topNav.getAttribute("data-visible");            
        if (visibility === "false") {
             topNav.setAttribute("data-visible", true);
             navOpen.setAttribute("visible", false);
             navClose.setAttribute("visible", true);
            } 
    };
    const handleClose = ({target}) => {
        const navClose = target;
        const topNav = document.getElementById('top-nav');
        const navOpen = document.getElementById('nav-open');
        const visibility = topNav.getAttribute("data-visible");            
            if (visibility === "true") {
                 topNav.setAttribute("data-visible", false);
                 navOpen.setAttribute("visible", true);
                 navClose.setAttribute("visible", false);
                } 
        };    
  return (
    <header>
        <div id="logo-box">
            <a href='https://stillested.dk'><Image width='1000px' height="305px" alt='Stillested logo' src='/StilleStedLogo.png'/></a>
            <div id="logo-subtitle"><h1>Terapi og mindfulness ved psykolog Sabrina Leoni</h1>
            </div>
        </div>
        <button onClick={handleOpen} id="nav-open" className="nav-button" aria-controls="primary-navigation">
                <span className="sr-only">Menu Open</span>
            </button>
        <nav id="top-nav" data-visible="false">
            <button onClick={handleClose} id="nav-close" className="nav-button" aria-controls="primary-navigation">
                <span className="sr-only">Menu Close</span>
            </button>
            <ul >
                <li className='top-nav-li' >
                    <Link href="/">
                        <a className={router.pathname == "/" ? "active-link" : ""} onClick={handleClick}>FORSIDE</a>
                    </Link>
                </li>
                <li className='top-nav-li' >
                    <Link href="/about">
                        <a className={router.pathname == "/about" ? "active-link" : ""} onClick={handleClick}>OM MIG</a>
                    </Link>
                </li>
                <li className='top-nav-li' >
                    <Link href="/kontakt">
                        <a className={router.pathname == "/kontakt" ? "active-link" : ""} onClick={handleClick}>KONTAKT</a>
                    </Link>
                </li>
                <li className='top-nav-li' >
                    <Link href="/nyheder">
                        <a className={router.pathname == "/nyheder" ? "active-link" : ""} onClick={handleClick}>NYHEDER</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);
};