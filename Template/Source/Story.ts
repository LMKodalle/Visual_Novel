namespace Template {

    // Characters
    export let hero = {
        name: "Lucy", 
        level: 0, 
        items: 0, 
        dialog: {
            intro: [{mood: "", animation: "", text: "", swap: ""}],
            room1: [{mood: "", animation: "", text: "", swap: ""}],
            room2: [{mood: "", animation: "", text: "", swap: ""}]
        }
    };
    
    export let villain = {
        name: "Adam Ovajeh",
        dialog: {
            intro: [{mood: "", animation: "", text: "", swap: ""}],
            room1: [{mood: "", animation: "", text: "", swap: ""}],
            room2: [{mood: "", animation: "", text: "", swap: ""}]
        }
    };
    
    /* Notizen 
    - Protagonist ist ein kleines Waisenmädchen namens Lucy (8/9 Jahre alt)
    - Adoptiv-Vater ist ein frommer und wohlhabender Mann namens Michael (Anfang 50)
    - Leben in einer großen Villa und unter ihr befindet sich eine geheime Forschungsanlage
    - Lucy ist in Wirklichkeit ein Klon der verstorbenen Tochter von Michael
    - Lucy war ein Genie wie ihr Vater, womöglich aber noch viel schlauer
    - Sie ist durch einen tragischen Unfall umgekommen
    - Michael gibt sich selber die Schuld, dass Lucy gestorben ist und hat sich das Ziel gesetzt, sie zurück zuholen
    - Doch beim Klonen sind die Erinnerungen zum Teil verloren gegangen, sie sind jedoch weiterhin in ihrem Gehirn verankert
    - Außerdem ist ihre Persönlichkeit verändert und ihre Intelligenz schwankt von Modell zu Modell
    - Nur ein perfekter Zufall beim Klonen kann bewirken, dass alles mit der alten Lucy übereinstimmt und ihre Erinnerungen wieder
    hergestellt werden können
    - Lucy findet heraus, dass sie bereits das 13. Modell ist und fragt sich, wo die alten Modelle gelandet sind
    - Michael "entsorgt" die fehlgeschlagenen Modelle und Lucy findet dies heraus
    - Lucy versteht nicht warum, doch Michael braucht die wahre Lucy zurück, da ihre Erinnerungen sehr wichtig sind
    - Ihre Erinnerungen kommen nach und nach wieder und sie merkt was passiert, da sie eine nahezu perfekte Kopie von
    Michaels Tochter ist
    - Sie ist der Schlüssel für das Ganze
    */

    // Narration
    // await ƒS.Text.print("Hier kommt Narration"); 

    // Dialog
    hero.dialog.intro = [
        {mood: "", animation: "", text: "...", swap: ""},
        {mood: "", animation: "", text: "W... Wo... Wo bin Ich?", swap: ">"},
        {mood: "", animation: "", text: "*Arrrgh*", swap: ""},
        {mood: "", animation: "", text: "...", swap: ""},
        {mood: "", animation: "", text: "Mein Kopf schmerzt sehr... Moment... Wer bist Du?", swap: ">"},
        {mood: "", animation: "", text: "Es tut mir Leid, dass Ich mich nicht an dich erinnern kann.", swap: ""},
        {mood: "", animation: "", text: "...", swap: ""},
        {mood: "", animation: "", text: "Ich kann mich nicht mal an mich selbst erinnern...", swap: ">"},
        {mood: "", animation: "", text: "Lucy... ein schöner Name. Leider kann Ich nichts damit verbinden, als herrsche eine pechschwarze Dunkelheit in meinem Kopf. Immer wenn Ich versuche, nach einem Moment aus meinem Leben zu greifen, stoße Ich vor eine Wand.", swap: ">"}
    ]

        // Raw
        "..."; "W... Wo... Wo bin Ich?" 
        "*Arrrgh*"; "..."; "Mein Kopf schmerzt sehr... Moment... Wer bist Du?"
        "Es tut mir Leid, dass Ich mich nicht an dich erinnern kann."; "..."; "Ich kann mich nicht mal an mich selbst erinnern..."
        "Lucy... ein schöner Name. Leider kann Ich nichts damit verbinden, als herrsche eine pechschwarze Dunkelheit in meinem Kopf. Immer wenn Ich versuche, nach einem Moment aus meinem Leben zu greifen, stoße Ich vor eine Wand."; "*Hmmmm*"; "Es fühlt sich so schlecht an, dass Ich nichts wiedererkenne, besonders meinen eigenen Vater. Apropros, Du musst mir noch Deinen Namen verraten."
        "Danke, das ist lieb von dir! Aber vielleicht sollten wir uns darüner unterhalten, was mit mir passiert ist."
    villain.dialog.intro = [
        {mood: "happy", animation: "", text: "Guten Morgen... Ich hoffe Du hast dich gut erholt.", swap: ">"}, 
        {mood: "sad", animation: "", text: "Es ist okay, mein Schatz... Du scheinst eine leichte Vergesslichkeit zu haben, sie sollte hoffentlich gleich vorbei sein.", swap: ">"},
        {mood: "", animation: "", text: "Bitte mach dir keine Sorgen, wir schaffen schon noch, dass Du dich an Alles erinnerst. Ich fange einfach mal mit mir an: Ich bin dein Vater. Das macht dich natürlich zu meiner Tochter. Du bist meine tapfere Lucy (...)", swap: ">"},
        {mood: "", animation: "", text: "Ach entschuldige, ich heiße Michael. Deswegen musst Du dich keineswegs schlecht fühlen, mein Kind. Wie gesagt, wir stehen das zusammen durch, Du und Ich.", swap: ">"}
    ]

        // Raw
        "Guten Morgen... Ich hoffe Du hast dich gut erholt."
        "Es ist okay, mein Schatz... Du scheinst eine leichte Vergesslichkeit zu haben, sie sollte hoffentlich gleich vorbei sein."
        "Bitte mach dir keine Sorgen, wir schaffen schon noch, dass Du dich an Alles erinnerst. Ich fange einfach mal mit mir an: Ich bin dein Vater. Das macht dich natürlich zu meiner Tochter. Du bist meine tapfere Lucy (...)"
        "Ach entschuldige, ich heiße Michael. Deswegen musst Du dich keineswegs schlecht fühlen, mein Kind. Wie gesagt, wir stehen das zusammen durch, Du und Ich."
    // Options
        
}