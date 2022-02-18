namespace Ovajeh {

    // Characters
    export let hero = {
        name: "Hero",
        dialog: {
            intro: [{mood: "", text: ""}],
            bibliothek: [{mood: "", text: ""}],
            mirrorroom: [{mood: "", text: ""}]
        }
    };
    
    export let michela = {
        name: "Michela",
        dialog: {
            //intro: [{mood: "", animation: "", text: "", swap: ""}],
            //map1: [{mood: "", animation: "", text: "", swap: ""}],
            //map2: [{mood: "", animation: "", text: "", swap: ""}]
        }
    };
    
    /* Notizen 
    */

    // Narration
    // await ƒS.Text.print("Hier kommt Narration"); 

    // Dialog
    hero.dialog.intro = [
        {mood: "smile", text: "Hey du! Willkommen zu meiner Geschichte."},
        {mood: "happy", text: "Du siehst meinen Namen auf der linken Seite, dieser ändert sich mit jedem Playthrough."},
        {mood: "smile", text: "Nicht nur mein Name ist zufällig generiert, sondern viele andere Dinge auch!"},
        {mood: "normal", text: "Aber mal ehrlich, diese Visual Novel soll nicht wie alle anderen sein..."},
        {mood: "smile", text: "Deshalb wurde extrem viel Zeit in die Programmierung gesteckt."},
        {mood: "sad", text: "Leider gab es eine Deadline einzuhalten, also sind manche Dinge nicht ganz so wie erhofft."},
        {mood: "smile", text: "Spiel diese Visual Novel im maximierten Browser (ohne Console offen), damit die Bildkoordinaten passen."},
        {mood: "", text: "Damit du nicht ausversehen irgendwo zu früh drauf klickst, drücke den Dialog am Besten nur mit der Leertaste weg, oder klicke ganz am Bildrand links oder rechts"},
        {mood: "happy", text: "Das ist richtig, du klickst auf Details im Bild, um mehr zu erfahren!"},
        {mood: "smile", text: "Aber jetzt noch nicht, erst möchte ich dir erzählen, worum es geht."},
        {mood: "normal", text: "Eigentlich komme ich nicht von hier, ich wurde adoptiert als ich noch klein war."},
        {mood: "sad", text: "Meine Eltern starben in einem Auto-Unfall..."},
        {mood: "shocked", text: "Ich habe mir damals die Schuld gegeben, weil ich meine Eltern wegen einer Kleinigkeit aufgehalten habe..."},
        {mood: "sad", text: "Wären sie etwas früher losgefahren, hätte der Unfall vielleicht nie stattgefunden."},
        {mood: "normal", text: "Ich konnte einfach nicht aufhören, darüber nachzudenken... Bis Adam kam."},
        {mood: "smile", text: "Adam ist mein Adoptiv-Vater. Er hat mir gezeigt, wie ich wieder zu positiven Gedanken komme."},
        {mood: "normal", text: "Dazu musste ich endlich akzeptieren, dass ich nichts an der Vergangenheit ändern kann..."},
        {mood: "angry", text: "Die Schuld liegt nicht bei mir, sondern dem betrunkenen Mistkerl, der die rote Ampel überquert hat \
        und geradewegs in das Auto meiner Eltern gecrasht ist."},
        {mood: "sad", text: "Ich kann es trotzdem nicht fassen, dass sie einfach weg sind..."},
        {mood: "", text: "Meine Gedanken drehen sich gerade nurnoch um diesen Moment..."},
        {mood: "shocked", text: "Warum?! Oh meine Güte, ich bin ganz durcheinander..."},
        {mood: "sad", text: "Adam ist seit zwei Tagen spurlos verschwunden, mitsamt meiner Schwester Michela."},
        {mood: "", text: "Deshalb kommen ständig die Gedanken an meine Eltern wieder... Das Gefühl der Einsamkeit..."},
        {mood: "shocked", text: "Wie?!"},
        {mood: "normal", text: "Tut mir Leid, ich muss mich wieder sammeln, du hast Recht."},
        {mood: "smile", text: "Danke, dass du da bist! Wir sollten uns auf die jetzige Situation konzentrieren, genau."},
        {mood: "normal", text: "Also der Polizei habe ich bereits alles erzählt, naja eigentlich gar nichts..."},
        {mood: "", text: "Es gibt einfach keinen Grund, warum sie weg sein sollten. Keiner von ihnen hat eine Nachricht oder ähnliches hinterlassen."},
        {mood: "sad", text: "Einfach spurlos verschwunden, von einem Moment auf den anderen. Das Komische ist... All ihre Sachen sind noch hier."},
        {mood: "shocked", text: "Entführt? Niemals! Ich habe sie Sekunden vor ihrem Verschwinden noch im Haus gehört."},
        {mood: "normal", text: "Ich glaube, dass sie noch hier sind... also nicht 'hier' hier. Ja ich weiß... die Polizei hält mich auch für verrückt."},
        {mood: "angry", text: "Die glauben ernsthaft, ich hätte etwas damit zu tun! Die glauben, das Alles ist nur ein blöder Streich!"},
        {mood: "normal", text: "Keiner von denen kennt Adam und Michela so wie ich. Beide würden mich niemals so im Stich lassen."},
        {mood: "happy", text: "Du glaubst mir? Das ist lieb von dir!"},
        {mood: "smile", text: "Nur Glaube allein bringt uns hier nicht weiter. Wir sollten im Haus nach Hinweisen suchen!"},
        {mood: "happy", text: "Danke, dass du für mich da bist und mir Suchen hilfst! Am Besten fangen wir gleich hier sofort an."},
        {mood: "", text: "Klick einfach auf interessante Bereiche des Raumes und ich schaue sie mir mal genauer an."},
    ]
    hero.dialog.bibliothek = [
        {mood: "smile", text: 'Irgendwie steigt jedes Mal ein Gefühl der Euphorie auf, wenn ich in die "Bibliothek" eintrete'},
        {mood: "happy", text: "Ich liebe den Duft der vielen Bücher, vermischt mit dem leicht verbrannten Geruch des Kaminholzes, der weiterhin in der Luft liegt."},
        {mood: "smile", text: "Dazu kommt pure Nostalgie, die Erinnerungen an kalte Wintertage, an denen ich mit Adam vor dem Kaminfeuer saß und Bücher las."},
        {mood: "happy", text: "Als Kind habe ich auch gerne auf dem wunderschönen Teppich gespielt, während Adam auf der Couch gemütlich lag und Zeitung gelesen hat."},
        {mood: "smile", text: "Die Bib war quasi unser liebster Aufenthaltsraum... und das bedeutet viel in so einem riesigen Haus."},
        {mood: "sad", text: "Michela war da jedoch anderer Meinung... Sie fand Bücher und Kaminfeuer immer langweilig."},
        {mood: "normal", text: "Meistens war sie in ihrem Zimmer, oder außer Haus. Sie mochte das Haus anscheinend nicht so gerne..."},
        {mood: "shocked", text: "Einmal meinte sie sogar, dass es unheimlich ist! Unheimlich?!"},
        {mood: "normal", text: "Ich glaube sie vermisste einfach ihre alte Heimat und kam mit der Umstellung auf so ein Luxus nicht ganz klar."},
        {mood: "sad", text: "Ich konnte sie aber gut verstehen... Sie wollte einfach nur ihre Eltern wiederhaben, statt unnötigen Luxus."},
        {mood: "", text: "Ich wollte auch nichts lieber als meine Eltern zurück..."},
        {mood: "normal", text: "Adam machte mir aber früh klar, dass ich weder Schuld an dem Tod meiner Eltern hatte, noch meine Zukunft mit ständiger Trauer verbringen sollte."},
        {mood: "angry", text: "Michela fand das gar nicht gut, dass er ihr vorschrieb, ob und wann sie Trauern durfte."},
        {mood: "normal", text: "Das war nicht fair von ihr, Adam hatte nur gute Intentionen."},
        {mood: "smile", text: "Zumindest konnte er zu ihr durchdringen, als sie etwas älter wurde."},
        {mood: "shocked", text: "Oh man, wie lange ich wieder über sowas nachdenke, während Beide in Gefahr sein könnten."},
        {mood: "normal", text: "Okay, reiß dich zusammen! Vielleicht finde ich doch etwas und alles wird wieder wie früher!"},
        {mood: "", text: "Ich sollte mir alles nochmal gründlich anschauen."},
    ]
    hero.dialog.mirrorroom = [
        {mood: "smile", text: "Bin ich erleichtert! Ich dachte schon ich würde etwas Schlimmes vorfinden."},
        {mood: "normal", text: "Es sieht genauso aus, wie ich es zuletzt gesehen habe..."},
        {mood: "normal", text: "..."},
        {mood: "shocked", text: "Okay ich nehm das zurück! Das Fenster ist ganz offen, was eben noch nicht der Fall war."},
        {mood: "", text: "Ich war mir ziemlich sicher, dass das Fenster verschlossen war."},
        {mood: "", text: "Sogar die Polizei meinte, dass es keine Anzeichen auf einen Einbruch gab."},
        {mood: "normal", text: "Ich frage mich wie lange das Fenster schon auf war. Ansonsten hätte ich ja gleich von draußen ins Zimmer gelangen können."},
        {mood: "shocked", text: "Es kann aber erst kurz bevor ich die Tür geöffnet habe, aufgegangen sein."},
        {mood: "normal", text: "Normalerweise hörte man immer ein kleines Windpfeifen, sobald Michela ihr Fenster aufgemacht hatte zum Lüften."},
        {mood: "normal", text: "Ich sollte direkt mal nachschauen, ob Michela oder Adam vielleicht wieder eine versteckte Botschaft hinterlassen haben."},
    ]




    //michela.dialog.intro = []
        // Raw
    // Options
        
}