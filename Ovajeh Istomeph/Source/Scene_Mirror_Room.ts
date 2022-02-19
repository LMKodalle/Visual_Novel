namespace Ovajeh {
    // Positions
    export let bed = {
        xMax: 565,
        xMin: 230,
        yMax: 600,
        yMin: 295,
        visited: false,
    }
    export let picture = {
        xMax: 705,
        xMin: 630,
        yMax: 345,
        yMin: 230,
        visited: false,
    }
    export let mirror = {
        xMax: 1355,
        xMin: 1200,
        yMax: 485,
        yMin: 225,
        visited: false,
    }
    export let schubladen = {
        xMax: 1390,
        xMin: 1075,
        yMax: 640,
        yMin: 490,
        visited: false,
    }
    export let window2 = {
        xMax: 1130,
        xMin: 980,
        yMax: 400,
        yMin: 80,
        visited: false,
    }
    export let secret2 = {
        xMax: 940,
        xMin: 875,
        yMax: 480,
        yMin: 425,
        visited: false,
    }
    export let exit1 = {
        xMax: 185,
        xMin: 0,
        yMax: 740,
        yMin: 0,
        visited: false,
    }
    export let exit2 = {
        xMax: 1235,
        xMin: 700,
        yMax: 740,
        yMin: 650,
        visited: false,
    }

    export let mirrorRepaired = false;
    export let mirrorOpened = false;
    export let michelaVisited = false;

    // CLICKABLE POSITIONS
    export async function positions_mirror_room(_event: MouseEvent) {
        //console.log(_event.x, _event.y)
        if (ui_Open === false) {
            // Bed
            if (_event.x >= bed.xMin && _event.x <= bed.xMax) {
                if (_event.y >= bed.yMin && _event.y <= bed.yMax) {
                    sfx("confirm");
                    if (bed.visited == false) {
                        console.log("bed a");
                        bed.visited = true;
                        await say("smile", 'Michela hat mit Abstand das beste Bett von uns. Sie braucht ihre zwölf Stunden Schlaf.')
                        await say("happy", 'Ach ja... Sie war öfters schlecht gelaunt, aber wehe sie hatte ihren vollen Schlaf nicht!')
                        await say("smile", 'Ich bin ihr morgens deshalb meistens aus dem Weg gegangen, aber das war in Ordnung für sie.')
                        await say("smile", 'Vielleicht lege ich mich ganz kurz mal hin und verschnaufe.')
                        await say("normal", 'Ich versuche positiv zu bleiben, aber der Stress erhöht sich mit jedem neuen Hinweis, den ich finde.')
                        await say("shocked", 'Irgendwie hatte ich immer gehofft, dass eines Tages Paranormale Dinge passieren und ich dabei sein werde.')
                        await say("sad", 'Aber nicht so... Eine andere Welt? Das ist viel auf einmal zu verarbeiten.')
                        await say("shocked", 'Was ist nur, wenn Michela und Adam beide in Gefahr sind? Werde ich in der Lage sein, sie zu retten? Für sie zu kämpfen?')
                        await say('sad', 'Vor einigen Tagen war Alles noch so simpel... Verglichen mit dem hier')
                        await say('sad', 'Ich wünschte, dass ich einschlafen könnte und beim Aufwachen ist wieder Alles wie früher...')
                        if (await options("Hinlegen", "Weiter Suchen") === true) {
                            await say('normal', 'ZZZZZzzz... Zzz... zz...')
                            await say('normal', 'Hey! Da ist irgendein spitzer Gegenstand unter dem Kopfkissen.')
                            ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                            await say('shocked', 'Ein goldener Zahn? Was macht der unter dem Kopfkissen?')
                            await say('shocked', "Ich hätte schwören können, dass der beim Einschlafen noch nicht da war!")
                            await say('normal', 'Wie als hätte sich die Zahnfee umentschieden, aber den Zahn trotzdem wertvoller gemacht.')
                            await say('smile', 'Ach ich Spinnerin... Ich nehme ihn erstmal mit, bis ich weiß, was ich damit anfangen soll.')
                            ƒS.Inventory.add(items.Zahn);
                            save.protagonist.experience += 10
                            checkExperience();
                            sfx("complete");
                            await ƒS.Text.print("Zahn dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            if (checkForItems("Feder") === true) {
                                await say("normal", 'Hmmm, erst die Feder, jetzt der Zahn. Erst nichts und dann sind die Dinge plötzlich da.')
                                await say("normal", "Ich weiß nichtmal ob mir das Alles helfen soll, oder am Ende sogar in die Irre führt.")
                                await say("shocked", 'Was ist wenn ich in eine Falle gelockt werde, genauso wie Adam und Michela?')
                                await say("normal", 'Egal was kommt, ich muss mich vorbereiten. Aber aufgeben werde ich nie!')
                            }
                        } else {
                            await say("normal", 'War ein schöner Gedanke, aber ich kann mir jetzt nicht leisten, einzuschlafen.');
                        }
                    } else {
                        console.log("bed b");
                        if (checkForItems("Zahn") === false) {
                            await say("smile", 'Ach was solls, ein paar Minuten werden schon nicht schaden.')
                            if (await options("Hinlegen", "Weiter Suchen") === true) {
                                await say('normal', 'ZZZz... Zzz... zz...')
                                await say('normal', 'Ich habe das Gefühl, dass unter dem Kissen irgendwas Spitzes liegt.')
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await say('shocked', 'Es ist ein Zahn! Komplett vergoldet, wow! Aber...')
                                await say('shocked', "Aber ich könnte schwören, dass ich im Halbschlaf das Kissen gewendet hatte und zu der Zeit noch kein Zahn drunter lag.")
                                await say('normal', 'Macht sich die Zahnfee einen Spaß? Inzwischen würde ich sogar fast glauben, dass es sie wirklich gibt.')
                                await say('smile', 'Aber dafür ist ihr Konzept zu komisch. Warum sollte sie die Zähne von Kindern im Austausch für ein Geschenk wollen?')
                                await say("smile", 'Also wenn übernatürliche Wesen existieren, dann sind es bestimmt Geister und Dämonen, aber keine Zahnfee.')
                                await say("normal", 'Ich stecke ihn erstmal ein. Wahrscheinlich werde ich ihn später brauchen.')
                                ƒS.Inventory.add(items.Zahn);
                                save.protagonist.experience += 10
                                checkExperience();
                                sfx("complete");
                                await ƒS.Text.print("Zahn dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                if (checkForItems("Feder") === true) {
                                    await say("normal", 'Ob das plötzliche Auftauchen der Dinge, wie die Feder oder jetzt der Zahn, etwas miteinander zu tun hat?')
                                    await say("normal", "Wenn es aus einer anderen Welt kommt, dann sollte ich vielleicht eher vorsichtig sein, wohin mich das Ganze führt.")
                                    await say("shocked", 'Was ist wenn ich in die Irre geführt werde, oder sogar in eine Falle? Wer rettet mich dann?')
                                    await say("normal", 'Darüber habe ich noch nicht nachgedacht, aber jetzt wird mir klar, dass ich mich auf das Schlimmste vorbereiten sollte.')
                                }
                            } else {
                                await say("sad", 'Ich mach mich noch kaputt...')
                            }
                        } else {
                            await say("smile", 'Verlockend, aber ich will nicht noch so ein Zahn.');
                        }
                    }
                } // if y
            } // if x

            // Picture
            if (_event.x >= picture.xMin && _event.x <= picture.xMax) {
                if (_event.y >= picture.yMin && _event.y <= picture.yMax) {
                    sfx("confirm");
                    if (picture.visited == false) {
                        console.log("picture a");
                        picture.visited = true;
                        await say("smile", 'Michela hatte schon immer einen schrägen Sinn für Humor. Ein umgedrehtes Hufeisen?')
                        await say("normal", 'Das ganze Glück fällt ja einfach wieder raus!')
                        await say("smile", 'Sie hat ständig Witze darüber gemacht, wie viel Pech sie nur hat.')
                        await say("normal", 'Adam und ich wussten, dass es ihre Methode war, mit ihrer traumatischen Vergangenheit klar zu kommen')
                        await say("happy", 'Aber in der jetztigen Situation brauchen wir viel Glück, also drehe ich das Bild einfach auf den Kopf!')
                        await say("smile", '...')
                        await say("smile", 'Schon viel besser. Ich glaube, so herum war das Bild ursprünglich auch angedacht')
                        ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                        await say("shocked", 'Whoops! Was ist da denn gerade heruntergefallen?')
                        await say("shocked", 'Eine Buchseite! Hinter dem Bild war sie versteckt.')
                        await say("normal", 'Beim Umdrehen muss sie durch die Öffnung im Rahmen geschlitten sein. Jemand hat sie geplant versteckt.')
                        await say("normal", 'Hoffentlich hilft sie mir weiter beim Auflösen der Botschaften.')
                        randomItem();
                        save.protagonist.experience += 5
                        checkExperience();
                        sfx("complete");
                        await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    } else {
                        console.log("picture b");
                        await say("smile", 'Das Hufeisen hat sofort Glück beschert. Hoffentlich nicht nur einmal.')
                    }
                } // if y
            } // if x

            // Mirror
            if (_event.x >= mirror.xMin && _event.x <= mirror.xMax) {
                if (_event.y >= mirror.yMin && _event.y <= mirror.yMax) {
                    sfx("confirm");
                    if (mirror.visited == false) {
                        console.log("mirror a");
                        mirror.visited = true;
                        await say("shocked", 'Dem Spiegel fehlt ein Stück! Das ist mir bislang noch gar nicht aufgefallen.')
                        await say("normal", 'Es ist aber auch sehr einfach zu übersehen.')

                        if (mirrorRepaired === false) {
                            await say('shocked', 'Ich weiß nicht genau, aber irgendwas stimmt nicht ganz mit meinem Spiegelbild.')
                            await say("shocked", 'Es ist fast so, als würde es sich leicht zeitversetzt bewegen.')
                        }

                        if (checkForItems("Scherbe")) {
                            await say("normal", 'Michelas Spiegel muss wohl ein Portal zu der Spiegeldimension sein.')
                            await say("normal", 'Es wird Zeit, den Schritt in eine andere Welt zu wagen.')
                        } else {
                            await say("sad", 'Ohne die exakt passende Scherbe kann ich den Spiegel nicht reparieren')
                            await say("normal", 'Ich muss unbedingt herausfinden, was mit meinem Spiegelbild los ist.')
                        }
                    } else {
                        console.log("mirror b");
                        if (mirrorRepaired === false) {
                            await say("shocked", 'Ich glaube, da war gerade jemand hinter mir im Spiegel!')
                            await say("shocked", 'Eine dunkle Gestalt! Oh nein, hier stimmt was ganz und gar nicht!')
                        } else if (mirrorOpened === false) {
                            if (michelaVisited === false) {
                                await say("normal", "... Hmmm ...");
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await say("shocked", "!!!!!!!!");
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                showUI()
                                await ƒS.Character.animate(characters.michela, characters.michela.pose.smile, canvasBottomEntry());
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, `Hallo ${save.protagonist.name}! Du hast bestimmt viele Fragen.`); showUI()
                                await say("happy", 'Michela! Ich bin so verdammt froh dich zu sehen! Und wie ich Fragen habe! Du und Adam haben ganz schön was zu erzählen.'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.happy, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Ich freue mich auch sehr dich zu sehen! Das bedeutet, dass du meinen Hinweisen richtig gefolgt bist."); showUI()
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.sad, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Am liebsten würde ich dir alles erzählen, aber die Zeit drängt und ich bin in großer Gefahr!");
                                await say("shocked", 'Oh mein Gott! Geht es dir gut!? Was ist mit Adam? Wie kann ich zu euch gelangen, um euch zu retten?'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.angry, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Adam... Er ist der Grund, weshalb ich hier gefangen bin! Ich konnte es auch nicht fassen, aber du musst mir jetzt genau zuhören!");
                                await say("sad", 'Adam hat dich entführt!? Ich hatte schon so eine Vermutung, aber konnte es mir nicht zusammenreimen.'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.sad, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Er ist in Wirklichkeit nicht die Person, die er all die Jahre vorgab zu sein.");
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.shocked, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Ich erkläre dir alles wenn du hier drüben bist, jetzt musst du so schnell wie möglich das Portal öffnen bevor es zu spät ist!");
                                await say("shocked", 'Zu spät? Was meinst du damit?! Werden wir dann nicht beide gefangen sein?'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.angry, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Es ist Adam! Sobald er herausfindet, dass ich dir im Geheimen Botschaften übermittelt habe...");
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.shocked, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Dann wird er alles in Gang setzen, um jede Verbindung zu dieser Welt zu schließen!");
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Damit wir beide eine Chance haben, musst du unbedingt seine Waffe mitnehmen! Du hast sie doch hoffentlich gefunden?");
                                if (gotWeapon === true) {
                                    await say("sad", 'Eine Chance? Du machst mir extrem viel Angst gerade! Aber ja, ich habe die Waffe gefunden. Was hat das zu bedeuten?'); showUI()
                                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
                                    await ƒS.update(0);
                                } else {
                                    await say("sad", 'Waffe? Davon höre ich zum ersten Mal! Ich werde sie noch finden, versprochen! Aber lediglich eine Chance? Oh je...'); showUI()
                                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
                                    await ƒS.update(0);
                                }
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.sad, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Ja, es ist schwer zu glauben... Aber du musst mir vertrauen.");
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.shocked, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Oh nein! Es ist gleich zu spät! Um das Portal zu öffnen, musst du eine Kreatur aus dieser Dimension beschwören.");
                                await say("shocked", 'Ich weiß aber gar nicht wie das gehen soll! Nichts davon stand auf den Buchseiten...'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Du musst mit einer Fackel der Opferung ein Feuer entzünden und die Kreatur besiegen, um ihre Essenz zu erlangen. Damit wird sich das Spiegelportal öffnen!");
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.normal, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Das Stuhlbein ist aus Holz der Spiegeldimension und auf dem Stoff sind magische Symbole eingraviert.");
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Zusammen bilden sie die Grundlage für die Opferungsfackel. Doch entfachen lässt sie sich nur mit Blut!");
                                await say("shocked", 'Die Fackel sollte kein Problem sein, aber gegen ein Monster aus einer anderen Dimension zu kämpfen?!'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await say("normal", 'Mir ist bewusst was auf dem Spiel steht. Ich werde die Waffe in die Hand nehmen und mit der Essenz zurückkehren.'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await say("smile", 'Ich verspreche es dir! Bitte bring dich nicht noch mehr in Gefahr.'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.smile, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Character.hide(characters.michela);
                                await ƒS.Character.show(characters.michela, characters.michela.pose.smile, ƒS.positionPercent(80, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Das ist meine Schwester! Ich wusste, dass ich auf dich zähl... ...");
                                await ƒS.Character.hide(characters.michela)
                                await ƒS.update(1);
                                await say("shocked", '...'); showUI()
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await say("shocked", 'Michela?! Oh nein, ich muss mich unbedingt beeilen!');
                                await ƒS.Character.hide(characters.protagonist);
                                await ƒS.update(0);
                            } else {
                                await say("sad", 'Ich habe die Verbindung zu ihr verloren... Sie wird sich nicht wieder melden. Ich muss zu ihr so schnell es geht!')
                            }
                        } else {
                            await say("smile", 'Es wird Zeit...')
                            if (await options("Spiegelwelt betreten", "Noch nicht") === true) {
                                ƒS.insert(Scene_Mirror_World);
                            } else {
                                await say("normal", 'Ich überprüfe noch schnell was, dann nichts wie rein in das Portal.')
                            }
                        }
                    }
                } // if y
            } // if x

            // Schubladen
            if (_event.x >= schubladen.xMin && _event.x <= schubladen.xMax) {
                if (_event.y >= schubladen.yMin && _event.y <= schubladen.yMax) {
                    sfx("confirm");
                    if (schubladen.visited == false) {
                        console.log("schubladen a");
                        schubladen.visited = true;
                        if (await options("Schubladen öffnen", "Privatsphäre beibehalten") === true) {
                            await say("normal", 'Hmmm, Kleidung über Kleidung...')
                            await say('smile', '...')
                            if (booksL.visited === true || booksR.visited === true || picture.visited === true) {
                                await say("happy", 'Aha! Hätte nicht gedacht, dass ich eine weitere Buchseite in Michelas Schubladen finde.')
                            } else {
                                await say("normal", 'Eine Buchseite, komisch. Was macht sowas versteckt unter Michelas Kleidung?')
                            }
                            randomItem();
                            save.protagonist.experience += 5
                            checkExperience();
                            sfx("complete");
                            await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");

                            await say("normal", 'Sieh mal einer an, das Stückchen Stoff unter der Buchseite sieht interessant aus.')
                            await say("smile", 'Super weich und elegant. Aber die Symbole sind mir fremd. Besser nehm ich den Stoff erstmal mit.')

                            ƒS.Inventory.add(items.Stoff);
                            save.protagonist.experience += 10
                            checkExperience();
                            sfx("complete");
                            await ƒS.Text.print("Stoff dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                        }
                    } else {
                        console.log("schubladen b");
                        await say("smile", 'Vielleicht überrede ich Michela mal, mir ein paar von ihren tausend Klamotten zu leihen');
                    }
                } // if y
            } // if x

            // Window
            if (_event.x >= window2.xMin && _event.x <= window2.xMax) {
                if (_event.y >= window2.yMin && _event.y <= window2.yMax) {
                    sfx("confirm");
                    if (window2.visited == false) {
                        console.log("window a");
                        window2.visited = true;
                        await say("normal", '...')
                        await say("normal", 'Was liegt dort auf dem Fenstersims?')
                        await say("happy", 'Eine wunderschöne Feder, wow! Ich habe noch nie in meinem Leben so eine Feder gesehen.')
                        await say("smile", 'Es könnte die Feder eines Engels sein, so atemberaubend sieht sie aus.')
                        await say('smile', 'Sie liegt dort definitv nicht ohne Grund, ich muss nur herausfinden, wofür ich sie brauche.')
                        if (checkForItems("Zahn") === true) {
                            await say("normal", 'Es tauchen immer wieder Dinge plötzlich auf, genauso wie der Zahn und jetzt die Feder.')
                            await say("normal", "Entweder irgendwer oder -was möchte mir ernsthaft helfen die andere Welt zu finden, oder mich komplett in die Irre führen")
                            await say("shocked", 'Oh nein! Vielleicht sogar in eine Falle? Darüber habe ich noch gar nicht wirklich nachgedacht!')
                            await say("normal", 'Ich muss aufmerksam bleiben und mich auf das Schlimmste gefasst machen. Vorher gebe ich nicht auf!')
                        }
                        ƒS.Inventory.add(items.Feder);
                        save.protagonist.experience += 10
                        checkExperience();
                        sfx("complete");
                        await ƒS.Text.print("Feder dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                    } else {
                        console.log("window b");
                        await say("normal", 'Draußen ist nichts zu sehen weit und breit. Ich glaube aber nicht, dass ich noch so eine Feder finde.')
                    }
                } // if y
            } // if x

            // Secret
            if (_event.x >= secret2.xMin && _event.x <= secret2.xMax) {
                if (_event.y >= secret2.yMin && _event.y <= secret2.yMax) {
                    if (secret2.visited == false) {
                        console.log("secret a");
                        secret2.visited = true;
                        ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                        if (secret1.visited === true) {
                            await say("shocked", 'Noch ein Geheimfach, in Michelas Zimmer! Von allen Plätzen im Haus, hätte ich hier eins am wenigsten vermutet!')
                            await say("normal", 'Ohne Beweise will ich zu keinem Urteil springen, bestimmt gibt es eine gute Erklärung.')
                            await say("angry", "Es ist wieder ein Code gefordert, verdammt! Diesmal sogar eine Sechs-stellige Buchstabenabfolge.")
                            await say("sad", 'Das wäre noch viel unmöglicher zu erraten, als beim Zahlencode.')
                        } else {
                            await say("shocked", "Was ist... Ein Fach eingebaut in der Wand! Ein Geheimfach könnte man sagen.")
                            await say("angry", 'Ich kann es nicht glauben, es wird ein Code aus Sechs Buchstaben gefordert!')
                            await say("sad", 'Wie soll ich da nur jemals drankommen? Ich kann den Code unmöglich erraten.')
                        }
                        await say("normal", 'Habe ich etwas übersehen? Ich sollte mir nochmal alles genau anschauen.')
                    } else {
                        console.log("secret b");
                        sfx("confirm");
                        if (mirrorRepaired === false) {
                            if (checkForItems("Scherbe") === false) {
                                if (checkForItems("Code") == true) {
                                    await say("smile", "Ich sollte alles haben, was ich benötige");
                                    showUI()
                                    codecheck();
                                } else {
                                    await say("normal", 'Ich bin mir nicht sicher, ob ich den richtigen Code herausgefunden habe.')
                                    showUI();
                                    codecheck();
                                }
                            } else await say("normal", 'Außer der Scherbe war dort nichts mehr drin.')
                        } else {
                            await say("smile", 'Also eines ist klar, bis jetzt ist noch keine neue Spiegelscherbe drin.')
                        }
                    }
                } // if y
            } // if x

            // Exit 1
            if (_event.x >= exit1.xMin && _event.x <= exit1.xMax) {
                if (_event.y >= exit1.yMin && _event.y <= exit1.yMax) {
                    sfx("confirm");
                    if (exit1.visited == false) {
                        console.log("exit1 a");
                        exit1.visited = true;
                        await say("normal", 'Da gehts wieder zurück zum Treppenhaus.');
                        if (await options("Treppenhaus", "Bleiben") === true) {
                            ƒS.insert(Scene_Intro);
                        } else {
                            await say("normal", 'Ich sollte mich erstmal auf diesen Raum konzentrieren');
                        }
                    } else {
                        console.log("exit1 b");
                        if (await options("Treppenhaus", "Bleiben") === true) {
                            ƒS.insert(Scene_Intro);
                        } else {
                            await say("normal", 'Erstmal bleib ich hier.');
                        }
                    }
                } // if y
            } // if x

            // Exit 2
            if (_event.x >= exit2.xMin && _event.x <= exit2.xMax) {
                if (_event.y >= exit2.yMin && _event.y <= exit2.yMax) {
                    sfx("confirm");
                    if (exit2.visited == false) {
                        console.log("exit2 a");
                        exit2.visited = true;
                        await say("normal", 'Soll ich wieder zurück?');
                        if (await options("Treppenhaus", "Bleiben") === true) {
                            ƒS.insert(Scene_Intro);
                        } else {
                            await say("normal", 'Besser ich suche hier noch weiter.');
                        }
                    } else {
                        console.log("exit2 b");
                        if (await options("Treppenhaus", "Bleiben") === true) {
                            ƒS.insert(Scene_Intro);
                        } else {
                            await say("normal", 'Noch nicht.');
                        }
                    }
                } // if y
            } // if x

        } // if ui_Open
    } // function

    // Scene Mirror Room
    export async function Scene_Mirror_Room(): ƒS.SceneReturn {
        currentScene = "mirrorroom";
        console.log(`current scene: ${currentScene}`);
        sfx("ambient");
        mapListeners();
        closeUI();
        await ƒS.Location.show(location.intro.mirror);
        await ƒS.update(0);
        if (visitScene() === false) {
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
            await ƒS.update(1);
            showUI();
            await protagonistCycle();
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(1);
            closeUI();
        } else if (won === false) {
            await say("normal", 'Hat sich nichts geändert.')
        } else {
            await say("shocked", 'Schnell, das Portal! Ich muss es sofort öffnen, es geht um jede Sekunde!');
        }
    }
}