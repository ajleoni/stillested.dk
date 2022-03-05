import styles from './ParentsPage.module.css';


const parentsText = {};
parentsText.h21 = 'Bevidst nærvær i forældreskabet';
parentsText.p11 = 'Bevidst nærvær eller mindfulness i forældreskabet handler grundlæggende om, at man som forælder styrker sin opmærksomhed mod sit barn og sig selv i forældreskabet. Bevidst nærvær i forældreskabet baserer sig på værdien om forælder-barn relationens vigtige betydning.';
parentsText.p12 = 'Gennem øvelser og dialoger udforsker vi sammen dit/jeres forældreskab og hvilke grundlæggende værdier, I som forældre ønsker at navigere ud fra. Vi arbejder med at se dit/jeres barn med "nybegynders øjne" og blive mere bevidste om og opmærksomme på egne automatiske reaktioner i forældreskabet - er de hensigtsmæssige og i overensstemmelse med jeres grundlæggende værdier?';
parentsText.p13 = 'Et rådgivningsforløb med bevidst nærvær i forældreskabet er en udforskende proces, hvor vi udover dialog bruger forskellige meditationsøvelser til at styrke kontakten til os selv - vores krop og vejrtrækning - og finde tilbage til vores egne indre visdom i forældreskabet. Vi undersøger sammen hvilken retning, der kunne være givende at gå sammen med jeres barn, og jeg støtter dig/jer i denne proces undervejs.';

parentsText.h22 = 'Hvornår kunne et forældreforløb være relevant';
parentsText.p21 = 'Bevidst nærvær i forældreskabet kan være en særlig stor hjælp, når dét at være forældre i perioder virker mere stressfyldt eller krævende, end man som forældre føler, at man kan bære. Dagene føles måske mest som ren overlevelse, og du kan mærke at der er brug for nye perspektiver og fornyet energi og vitalitet i relationen.';
parentsText.p22 = 'Hvis man som forælder er under pres, så vil man typisk opleve at have en "kortere lunte" overfor resten af familien og det påvirker samtidig ens evne til at være nærværende overfor sine børn. Vi ved, at børn absorbere stress fra de nære voksne i deres liv, og hvis deres forældre er stressede eller ude af balance, så forældrene uden at være helt bevidste om det bidrage til at stresse barnet.';
parentsText.p23 = 'Ud over at et forældreforløb kan hjælpe til at mindske stressniveauet hos forældrene og dermed hele familien, så kan øvelserne samtidig støtte jer som forældre til at give jer selv en mere positiv opmærksomhed og selvomsorg. Som forælder bliver man styrket i at møde sig selv på en mere kærlig, forstående og tilgivende måde frem for at være hård, dømmende og selvkritisk.';

parentsText.h23 = 'Rammer for et forløb';
parentsText.p31 = 'Et forløb kan enten bestå af en enkelt eller et par samtaler. Det kan også være et lidt længere forløb over 9 gange - med 8 gange ugentligt + en opfælgningssamtale ca. 4-6 uger efter endt forløb. Jeg sørger for tilgængelige lydfiler og eventuelle arbejdsark undervejs. Vi kan også arrangere at dit/jeres barn/børn deltager sammen med jer nogle af sessionerne.';


export default function ParentsPage() {
  return (
    <>
    <section>
      <article>
        <h2>{parentsText.h21}</h2>
        <p>{parentsText.p11}</p>
        <p>{parentsText.p12}</p>
        <p>{parentsText.p13}</p>
      </article>
      <article>
        <h2>{parentsText.h22}</h2>
        <p>{parentsText.p21}</p>
        <p>{parentsText.p22}</p>
        <p>{parentsText.p23}</p>
      </article>
      <article>
        <h2>{parentsText.h23}</h2>
        <p>{parentsText.p31}</p>
      </article>
    </section> 
    </>
    );
};