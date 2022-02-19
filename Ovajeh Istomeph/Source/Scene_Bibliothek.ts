namespace Ovajeh {
    // Positions
    export let kamin = {
        xMax: 915,
        xMin: 550,
        yMax: 680,
        yMin: 445,
        visited: false,
    }
    export let couch = {
        xMax: 300,
        xMin: 100,
        yMax: 740,
        yMin: 580,
        visited: false,
    }
    export let secret1 = {
        xMax: 420,
        xMin: 330,
        yMax: 650,
        yMin: 585,
        visited: false,
    }
    export let carpet = {
        xMax: 1240,
        xMin: 565,
        yMax: 745,
        yMin: 690,
        visited: false,
    }
    export let door = {
        xMax: 240,
        xMin: 115,
        yMax: 570,
        yMin: 70,
        visited: false,
    }
    export let booksRR = {
        xMax: 1345,
        xMin: 1225,
        yMax: 555,
        yMin: 115,
        visited: false,
    }
    export let booksR = {
        xMax: 1190,
        xMin: 980,
        yMax: 530,
        yMin: 175,
        visited: false,
    }
    export let booksL = {
        xMax: 470,
        xMin: 275,
        yMax: 525,
        yMin: 175,
        visited: false,
    }
    export let table = {
        xMax: 420,
        xMin: 295,
        yMax: 745,
        yMin: 645,
        visited: false,
    }
    export let ashesFound = false;
    export let kaminKnow = false;
    export let kaminteil = false;
    export let carpetCheck = false;
    export let watchCheckable = false;
    export let gotAshes = false;
    export let won = false;

    // CLICKABLE POSITIONS
    export async function positions_bibliothek(_event: MouseEvent) {
        console.log(_event.x, _event.y)
        if (ui_Open === false) {
            // Kamin
            if (_event.x >= kamin.xMin && _event.x <= kamin.xMax) {
                if (_event.y >= kamin.yMin && _event.y <= kamin.yMax) {
                    sfx("confirm");
                    if (kamin.visited == false) {
                        console.log("kamin a");
                        kamin.visited = true;
                        await say("normal", "Der Kamin war echt lange nicht mehr an. Das Holz ist noch tadellos.")
                        await say("sad", "Wenn ich mich richtig erinnere, war er sogar fast 2 Jahre nicht mehr an...")
                        await say("smile", 'Wenn Adam wieder hier ist, dann sollten wir den Kamin definitv mal wieder in Betrieb nehmen. Den alten Zeiten zuliebe')

                        if (knowDoor === true) {
                            await say("smile", 'Hmmm, mir fällt gerade das Metallgeschirr dort im Kamin besonders ins Auge.')
                            await say("normal", 'Ich werde den Gedanken nicht los, dass ich daraus vielleicht einen Schlüssel basteln könnte.')
                            await say("normal", 'Beim genaueren Betrachten wird mir allerdings klar, dass dieses Teil niemals ausreichen würde.')
                            await say("normal", 'Naja was solls, ich finde schon eine Lösung.')
                            kaminKnow = true;
                        }

                        if (windowNotice === true) {
                            await say("normal", 'So viel alte Asche liegt noch drin. Das muss echt mal sauber gemacht werden')
                            await say("normal", 'Ich entferne einfach mal ein bisschen, dann wirkt der Kamin wieder etwas lebendiger.')
                            ƒS.Inventory.add(items.Asche)
                            gotAshes = true;
                            await ƒS.Text.print("Asche dem Inventar hinzugefügt <hr class='golden'>")
                        }

                    } else {
                        console.log("kamin b");
                        if (gotKey === false) {
                            if (kaminKnow === true && kaminteil === false) {
                                await say("normal", 'Hmmm, ich bin mir nicht sicher, ob ich für das Metallteil wirklich Verwendung finde.')
                                if (lampenteil === true) {
                                    await say("happy", 'Aber ja natürlich, ich sehe es jetzt! Mit dem Lampenteil verbunden könnte es klappen.')
                                    ƒS.Inventory.add(items.Kaminteil);
                                    kaminteil = true;
                                    save.protagonist.experience += 10;
                                    checkExperience()
                                    sfx("complete");
                                    await ƒS.Text.print("Kaminteil dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                } else {
                                    await say("normal", 'Ich weiß nicht, bestimmt gibt es noch etwas Besseres.')
                                }
                            } else {
                                if (kaminteil === true) {
                                    await say("happy", 'Ich liebe diesen Kamin! Danke, dass du mir buchstäblich den Weg öffnest.')
                                } else {
                                    await say("smile", 'Ach ja... die warmen Kaminfeuer vermisse ich wirklich sehr.')
                                }
                            }
                        } else if (won === false) {
                            await say("smile", 'Am liebsten würde ich ihn jetzt anzünden.')
                        }
                        if (windowNotice === true) {
                            if (gotAshes === false) {
                                await say("normal", 'Viel zu viel Asche liegt noch im Kamin von früher. Da hat sich ganz schön was angehäuft.')
                                await say("normal", 'Ich kann ihn nicht einfach so lassen. Es geht ja ganz schnell...')
                                ƒS.Inventory.add(items.Asche)
                                await ƒS.Text.print("Asche dem Inventar hinzugefügt <hr class='golden'>")
                                gotAshes = true;
                            }
                        }
                        if (checkForItems("Opferungsfackel") === true) {
                            await say("normal", 'Das ist es! Der perfekte Ort, um das Feuer zu entzünden. Dadurch fackel ich nicht gleich das gesamte Haus mit ab.');
                            await say("angry", 'Also dann, ich habe nicht mehr viel Zeit! Ich sollte das Kaminholz jetzt anzünden.')
                        }
                        if (won === true) {
                            await say("smile", 'Unglaublich, dass ich auf eigene Faust eine Kreatur der Spiegelwelt besiegt habe!')
                        }
                    }
                } // if y
            } // if x

            // Couch
            if (_event.x >= couch.xMin && _event.x <= couch.xMax) {
                if (_event.y >= couch.yMin && _event.y <= couch.yMax) {
                    sfx("confirm");
                    if (couch.visited == false) {
                        console.log("couch a");
                        couch.visited = true;
                        await say("normal", 'Komisch, die Couch so leer zu sehen.')
                        await say("sad", "Ich bin echt erschöpft...")
                        await say("sad", "Wann findet diese Ungewissheit endlich ein Ende?");
                        await say("smile", "Wenn ich mich kurz hinlege um zu verschnaufen, sollte glaube nichts Schlimmes passieren.")

                        if (await options("Hinlegen", "Jetzt nicht") === true) {
                            await say("happy", "Ach ja, das tut gut! Seit zwei Tagen habe ich kaum Schlaf bekommen.")
                            await say("normal", '... ... ... Ich sollte wieder aufstehen...')
                            if (await options("Etwas weiter dösen", "Aufstehen") === true) {
                                await say("shocked", 'Oh man bin ich müde! Ich bin viel zu schlapp.');
                                await say('normal', 'Egal, ich brauch das...')
                                await say("normal", "... ... ...")
                                await say("angry", 'Jetzt ist aber genug! Ich darf nicht die ganze Zeit schlafen.')
                                if (await options("Noch eine Runde", "Aufstehen") === true) {
                                    await say("sad", 'Ich armes Stück Elend, wie lange denn noch, bis ich wieder einigermaßen ausgeruht bin?')
                                    await say("normal", '... ... ...');
                                    ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                    await say("shocked", '...?!')
                                    await say("shocked", 'Ich glaube da ist ein kleiner Zettel im Spalt! Moment...')
                                    ƒS.Inventory.add(items.Notiz)
                                    save.protagonist.experience += 10;
                                    checkExperience()
                                    await ƒS.Text.print("Notiz dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>")
                                    await say("smile", 'Wer hätt gedacht, dass ich beim Schlafen fündig werden. Endlich!');
                                } else {
                                    await say("smile", 'Nein, ich muss endlich weiter suchen. So verlockend es auch ist.')
                                }
                            } else {
                                await say("happy", 'Weiter geht die Suche!');
                            }
                        } else {
                            await say("normal", "Was habe ich mir auch dabei gedacht? Es gibt jetzt Wichtigeres.");
                        }
                    } else {
                        console.log("couch b");
                        await say("normal", 'Ich sollte mir nichts vormachen. Wenn ich so müde wie jetzt bin, habe ich auch etwas Schlaf verdient.')
                        if (await options("Nochmal hinlegen", "Aufstehen") === true) {
                            await say("normal", 'Jetzt schlaf ich aber wirklich bis ich ausgeruht bin.')
                            await say("normal", '... ... ...');
                            ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                            await say("shocked", '...?!')
                            await say("shocked", 'Da ist ein Stückchen Papier im Couchspalt! Ich träume wahrscheinlich. Doch nicht, es ist eine Notiz!')
                            ƒS.Inventory.add(items.Notiz)
                            save.protagonist.experience += 10;
                            checkExperience()
                            await ƒS.Text.print("Notiz dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>")
                            await say("happy", 'War doch eine gute Entscheidung, mich kurz hinzulegen! Ich höre ab sofort auf mein Bauchgefühl.');
                        } else {
                            await say("sad", "Warum folter ich mich so sehr?");
                        }
                    }
                } // if y
            } // if x

            // Secret
            if (_event.x >= secret1.xMin && _event.x <= secret1.xMax) {
                if (_event.y >= secret1.yMin && _event.y <= secret1.yMax) {
                    if (secret1.visited == false) {
                        if (checkForItems("Taschenuhr") == true && checkForItems("Notiz")) {
                            console.log("secret a");
                            sfx("confirm");
                            secret1.visited = true;
                            await say("happy", "Ein Geheimfach! Viele kleine Löcher, genau wie die Zeichnung oder Gravur angedeutet haben.")
                            await say("normal", 'Was zum Teufel verheimlichst du mir, Adam?')
                            await say("angry", 'Es war die ganze Zeit über vor meiner Nase und ich habe es nie mitbekommen.')
                            await say("shocked", 'Ich hoffe es ist nichts Schlimmes! Vielleicht ist das Alles ein großes Missverständnis.')
                            await say("angry", 'Die Zeit rennt, ich sollte es jetzt einfach öffnen und nachschauen.')
                            await say("normal", '...')
                            await say("shocked", 'Oh verdammt! Ein Zahlencode ist gefordert...')
                            await say('sad', 'Wie konnt ich auch nur so naiv sein und denken, dass sich der Inhalt einfach so präsentiert...')
                            await say("normal", 'Ich muss dringend nachdenken, wie ich nun an diesen Code gelange.')
                            watchCheckable = true;
                        }

                    } else {
                        if (gotWeapon === false) {
                            console.log("secret b");
                            await say("normal", 'Ich probiere mal...')
                            showUI()
                            numberCodeCheck();
                        } else await say("normal", 'Los ich muss weiter! Da ist nichts mehr drin.')
                    }
                } // if y
            } // if x

            // Carpet
            if (_event.x >= carpet.xMin && _event.x <= carpet.xMax) {
                if (_event.y >= carpet.yMin && _event.y <= carpet.yMax) {
                    sfx("confirm");
                    if (carpet.visited == false) {
                        console.log("carpet a");
                        carpet.visited = true;
                        await say("smile", 'Ein sehr schöner Teppich. Ich habe mir nie Gedanken gemacht, wie aufwendig es wohl war, ihn herzustellen.')

                        if (booksL.visited === true && booksR.visited === true) {
                            await say("smile", 'Wenn ich gerade so oder so schon auf der Suche nach weiteren Buchseiten bin...')
                            await say("normal", 'Buchseiten sind flach, der Teppich ist flach... Ich sollte definitiv mal nachschauen.')
                            await say("normal", '...')
                            await say("happy", 'Es war ja klar! Peinlich, dass ich nicht früher den Boden überprüft habe...')
                            randomItem()
                            save.protagonist.experience += 5;
                            checkExperience()
                            sfx("complete");
                            carpetCheck = true;
                            await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                        }
                    } else {
                        console.log("carpet b");
                        if (carpetCheck === true) {
                            await say("smile", 'Ich bin mir absolut sicher, dass da nichts mehr drunter liegt.')
                        } else if (booksL.visited === false && booksR.visited === false) {
                            await say("smile", 'Die Teppichfarbe ist einfach traumhaft! Nur schade, dass er momentan keinen Nutzen für mich hat.')
                        }
                        if (booksL.visited === true && booksR.visited === true) {
                            if (carpetCheck === false) {
                                await say("smile", 'Wenn ich gerade so oder so schon auf der Suche nach weiteren Buchseiten bin...')
                                await say("normal", 'Buchseiten sind flach, der Teppich ist flach... Ich sollte definitiv mal nachschauen.')
                                await say("normal", '...')
                                await say("happy", 'Es war ja klar! Peinlich, dass ich nicht früher den Boden überprüft habe...')
                                randomItem()
                                save.protagonist.experience += 5;
                                checkExperience()
                                sfx("complete");
                                carpetCheck = true;
                                await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                            }
                        }
                    }
                } // if y
            } // if x

            // Door
            if (_event.x >= door.xMin && _event.x <= door.xMax) {
                if (_event.y >= door.yMin && _event.y <= door.yMax) {
                    sfx("confirm");
                    if (door.visited == false) {
                        console.log("door a");
                        door.visited = true;
                        if (await options("Treppenhaus", "Hier bleiben") === true) {
                            ƒS.insert(Scene_Intro);
                        }
                    } else {
                        console.log("door b");
                        if (await options("Treppenhaus", "Hier bleiben") === true) {
                            ƒS.insert(Scene_Intro);
                        }
                    }
                } // if y
            } // if x

            // BooksRR
            if (_event.x >= booksRR.xMin && _event.x <= booksRR.xMax) {
                if (_event.y >= booksRR.yMin && _event.y <= booksRR.yMax) {
                    sfx("confirm");
                    if (booksRR.visited == false) {
                        console.log("booksrr a");
                        booksRR.visited = true;
                        await say("normal", 'So, dann schauen wir mal... Ich mochte die Bücher in diesem Regal nicht so gerne')

                        if (booksR.visited === true) {
                            await say("smile", 'Im Vergleich zu den Büchern aus meinem Lieblingsregal natürlich.')
                            await say("happy", 'Aber dagegen sind die meisten Bücher schlecht! Ich liebe einfach Fiktion, weniger Wissenschaftliches')
                        }
                        await say("normal", 'Hier befinden sich hauptsächlich Lexikas und andere Lernbücher geballt mit enorm viel Wissen.')

                        if (booksL.visited === true && booksR.visited === true) {
                            await say("smile", 'Bestimmt finde ich hier nicht nur eine einzige Buchseite, sondern gleich zwei!')
                            await say("happy", 'Ich mache nur Scherze! Mir ist überhaupt nicht klar, nach welchem System die Seiten platziert wurden.')
                            await say("smile", 'Wenn es überhaupt ein "System gibt. Aber am ehesten würde ich sie in einem Bücherregal erwarten.')
                        }
                        ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                        await say("shocked", '...')
                        await say("normal", 'Also ein Buch über Volkslieder auf Lateinisch habe ich noch am wenigsten von Adam erwartet.')
                        await say("smile", 'Ich will nicht sagen, dass er unmusikalisch wäre...')
                        await say("happy", 'Das wäre nämlich eine komplette Untertreibung!')
                        await say("smile", 'Wenn er singt... Ach ich habe genug gelästert. Adam ist was manche Dinge angeht, sehr komisch.')
                        await say("shocked", 'Manchmal könnte man meinen, dass er ein Alien oder so ist.')
                        await say("normal", 'Ehrlich gesagt bin ich mir inzwischen gar nicht mehr sicher, was er in Wirklichkeit ist.')
                        await say("smile", 'Ich schau mir das Buch mal an, Latein habe ich noch nie gelesen.')
                        ƒS.Inventory.add(items.Buch);
                        save.protagonist.experience += 5
                        sfx("complete");
                        await ƒS.Text.print("Buch dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    } else {
                        console.log("booksrr b");
                    }
                } // if y
            } // if x

            // BooksR
            if (_event.x >= booksR.xMin && _event.x <= booksR.xMax) {
                if (_event.y >= booksR.yMin && _event.y <= booksR.yMax) {
                    sfx("confirm");
                    if (booksR.visited == false) {
                        console.log("booksr a");
                        booksR.visited = true;
                        await say("happy", 'Die besten Bücher befinden sich in diesem Regal hier.')
                        await say("smile", 'Allein die Fantasy Romane habe ich etliche Male durchgelesen.')
                        await say("smile", 'Manchmal versank ich so tief in den Geschichten, dass sie sich so unfassbar echt anfühlten.')
                        await say("happy", 'Adam meinte immer, ich wäre beim Lesen bloß eingeschlafen und hätte es vergessen.')

                        if (booksL.visited === true) {
                            await say("normal", 'Hmmm, ist das da wieder eine lose Buchseite zwischen den Bänden?')
                            await say("smile", 'Aha! Gut, dann hätte ich noch eine gefunden. Vielleicht macht der erste Text jetzt mehr Sinn.')
                            await say("normal", 'Nein, da muss noch mehr sein. Ich sollte nach solchen losen Buchseiten Ausschau halten.')
                        } else {
                            await say("shocked", 'Da passt etwas nicht! Eine lose Buchseite? Was macht die dort zwischen?')
                            await say("normal", 'Ich sollte sie mir definitv mal genauer anschauen.')
                        }
                        randomItem()
                        save.protagonist.experience += 5;
                        checkExperience()
                        sfx("complete");
                        await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    } else {
                        console.log("booksr b");
                        await say("smile", 'Jetzt stimmt wieder alles! Keine losen Seiten mehr.')
                    }
                } // if y
            } // if x

            // BooksL
            if (_event.x >= booksL.xMin && _event.x <= booksL.xMax) {
                if (_event.y >= booksL.yMin && _event.y <= booksL.yMax) {
                    sfx("confirm");
                    if (booksL.visited == false) {
                        console.log("booksl a");
                        booksL.visited = true;
                        await say("smile", 'Ich liebe den Geruch der Bücher! Alle stehen schön geordnet da.')
                        await say("shocked", 'Ja wer hätte es denn gedacht? Da ragt doch tatsächlich eine lose Seite hervor!')

                        if (booksR.visited === true) {
                            await say("normal", 'Komischerweise schon die nächste lose Buchseite. Wie viele gibt es denn davon?')
                            await say("shocked", 'Langsam bekomme ich das Gefühl, dass Adam uns viel mehr verheimlicht hat, als ich dachte.')
                            await say("angry", 'Er hat besser eine gute Erklärung dafür!')
                        } else {
                            await say("normal", 'Sie ist aus einem Buch herausgerissen worden. Ich sollte sie mir mal genauer anschauen.')
                        }
                        randomItem()
                        save.protagonist.experience += 5;
                        checkExperience()
                        sfx("complete");
                        await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    } else {
                        console.log("booksl b");
                        await say("smile", 'Viele dieser Bücher habe ich schonmal durchgelesen. Mir würde sofort auffallen, wenn etwas Neues dabei wäre.')
                    }
                } // if y
            } // if x

            // Table
            if (_event.x >= table.xMin && _event.x <= table.xMax) {
                if (_event.y >= table.yMin && _event.y <= table.yMax) {
                    sfx("confirm");
                    if (table.visited == false) {
                        console.log("table a");
                        table.visited = true;
                        await say("smile", 'Ein antiker und sehr teurer Tisch. Nicht, dass das irgendwie weiterhelfen würde, aber...')
                        await say("shocked", 'Sieh mal einer an, was haben wir denn da? Eine... Reißzwecke?')
                        await say("sad", 'Ich hatte eigentlich auf etwas Interessantes gehofft.')
                        await say("normal", 'Auf der anderen Seite sollte ich wohl erstmal alles einstecken, was aus der Reihe tanzt.')
                        ƒS.Inventory.add(items.Reißzwecke);
                        save.protagonist.experience += 10;
                        checkExperience()
                        sfx("complete");
                        await ƒS.Text.print("Reißzwecke dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                    } else {
                        console.log("table b");
                        await say("normal", 'Hier gibt es nichts mehr zu entdecken...')
                    }
                } // if y
            } // if x

        } // if ui_Open
    } // function

    // Scene Bibliothek
    export async function Scene_Bibliothek(): ƒS.SceneReturn {
        currentScene = "bibliothek";
        console.log(`current scene: ${currentScene}`);
        sfx("ambient");
        mapListeners();
        closeUI();
        await ƒS.Location.show(location.intro.bib);
        await ƒS.update(0);
        if (visitScene() === false) {
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
            await ƒS.update(1);
            showUI();
            await protagonistCycle();
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(1);
            closeUI();
        } else {
            await say('normal', 'Irgendwas muss hier doch sein.')
            await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
        }
    }
}