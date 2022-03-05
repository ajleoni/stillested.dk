import React from "react";
import styles from './MethodPage.module.css';
const mtd01 = '/imgs/pages/MethodPage/mtd01.jpg';
const mtd02 = '/imgs/pages/MethodPage/mtd02.jpg';
const mtd03 = '/imgs/pages/MethodPage/mtd03.jpg';
const mtd04 = '/imgs/pages/MethodPage/mtd04.jpg';

const style1 = {backgroundImage:`url(${mtd01})`};
const style2 = {backgroundImage:`url(${mtd02})`};
const style3 = {backgroundImage:`url(${mtd03})`};
const style4 = {backgroundImage:`url(${mtd04})`};

const sectionText = {};
sectionText.h2 = 'Mine måder at arbejde på';
sectionText.h31 = 'Mindfulness-Baseret Kognitiv Terapi';
sectionText.p1 = 'I Mindfulness-Baseret Kognitiv Terapi (MBKT) kombineres den mere klassiske og meget anerkendte kognitive terapi med de nyeste udviklinger indenfor meditation og mindfulness-øvelser. Hvilke typer meditationer, der inddrages i terapien, afhænger af dig og dine ønsker og behov. Jeg har mange års erfaring med at arbejde med MBKT, og kan tilpasse terapien helt individuelt til dig.';
sectionText.h32 = 'Kropsligt forankret narrativ terapi og empowerment';
sectionText.p2 = 'Jeg er optaget af de historier, som vi bærer rundt på - både de bevidste - de fortællinger som vi fortæller om os selv, men også de mere før-bevidste eller ubevidste fortællinger, der kan ligge gemt i vores kroppe. Ved at arbejde med kropslig forankring og centrering via meditaion og mindfulness, kan vi få mulighed for at frigøre nogle af de fortællinger, der måske er blevet til blokeringer for os i dagligdagen. Vi kan på den måde få en større fleksibilitet og en bredere og mere nuanceret selvforståelse og selvfølelse, der giver os en stærkere handlekraft.';
sectionText.h33 = 'Terapi i naturen';
sectionText.p3 = 'Jeg inddrager så vidt det er muligt, og i den udstrækning klienten ønsker det, naturen i terapien. Jeg har rigtig god erfaring med, at naturen kan være en hjælper, når vi skal finde hjem til os selv. Naturen hjælper os med at sanse og opleve mere direkte, og giver os støtte i at være tilstede med os selv. Måske finde hvile i os selv og genopbygge vores indre ressourcer. Når vi føler os udmattede, kan naturen hjælpe med restitution. Når vi føler os fastlåste, kan naturen hjælpe med at få øje på et større eller bredere perspektiv. Når vi føler os ensomme og isolerede, viser naturen, at vi er en del af et fællesskab af liv, så vi måske kan begynde at føle os forbundne igen - ikke kun til os selv, men også verden omkring os.';


export default function MethodPage() {
  return (
    <>
    <section>
      <h2>{sectionText.h2}</h2>
      <h3>{sectionText.h31}</h3>
      <p>{sectionText.p1}</p>
      <h3>{sectionText.h32}</h3>
      <p>{sectionText.p2}</p>
      <h3>{sectionText.h33}</h3>
      <p>{sectionText.p3}</p>
    </section>
    <section className='carousel grid-4-2'>
      <div className='carousel-img' style={style1} alt=""></div>
      <div className='carousel-img' style={style2} alt=""></div>
      <div className='carousel-img' style={style3} alt=""></div>
      <div className='carousel-img' style={style4} alt=""></div>
     </section>
     </>
    );
};