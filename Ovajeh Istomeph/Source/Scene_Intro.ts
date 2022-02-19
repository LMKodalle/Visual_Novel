namespace Ovajeh {
    // Positions
    export let chair = {
        xMax: 1200,
        xMin: 1000,
        yMax: 660,
        yMin: 470,
        visited: false,
        linesA: [{
            pose: "smile", text: "Adams Lieblings-Stuhl! Naja, drauf gesessen hat er eigentlich kaum. Er war ihm zu morsch, deshalb hat er ihn hier zur Dekoration hingestellt."
        }, {
            pose: "normal", text: "Ich weiß noch, als Michela und ich Fangen im Haus spielten und ich beim Vorbeilaufen am rechten Stuhlbein hängen blieb und gestolpert bin..."
        }, {
            pose: "", text: "Adam hat es nie erfahren, aber dabei ist das Stuhlbein abgeknickt. Michela hat es zum Glück wieder einigermaßen gerade gerückt und mit Kleber befestigt."
        },
        ]
    };
    export let door1 = {
        xMax: 550,
        xMin: 310,
        yMax: 625,
        yMin: 390,
        visited: false,
        linesA: [{}]
    };
    export let door2 = {
        xMax: 1450,
        xMin: 1250,
        yMax: 600,
        yMin: 330,
        visited: false,
        linesA: [{}]
    };
    export let lamp = {
        xMax: 1295,
        xMin: 1150,
        yMax: 250,
        yMin: 55,
        visited: false,
        linesA: [{}]
    };
    export let steps = {
        xMax: 790,
        xMin: 540,
        yMax: 700,
        yMin: 410,
        visited: false,
        linesA: [{}]
    };
    export let window1 = {
        xMax: 460,
        xMin: 355,
        yMax: 300,
        yMin: 120,
        visited: false,
        linesA: [{}]
    };
    export let carpetAgain = false;
    export let carpetNo = false;
    export let carpetDone = false;
    export let lampenteil = false;
    export let knowDoor = false;
    export let doorOpen = false;
    export let windowNotice = false;
    export let gotKey = false;
    export let knowWindow = false;

    // CLICKABLE POSITIONS
    export async function positions_intro(_event: MouseEvent) {
        // console.log(_event.x, _event.y)
        let hero_randomConfirm = Math.floor(Math.random() * sound.protagonist.confirmation.length);

        if (ui_Open === false) {
            if (_event.x >= chair.xMin && _event.x <= chair.xMax) {
                if (_event.y >= chair.yMin && _event.y <= chair.yMax) {
                    ƒS.Sound.play(sound.protagonist.confirmation[hero_randomConfirm], 0.5, false);

                    if (chair.visited == false) {
                        console.log("chair a");
                        chair.visited = true;
                        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
                        await ƒS.update(0);
                        showUI();
                        for (let i = 0; i < chair.linesA.length; i++) {
                            await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, chair.linesA[i].text);
                            switch (chair.linesA[i].pose) {
                                case "normal":
                                    await ƒS.Character.hide(characters.protagonist);
                                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
                                    await ƒS.update(0);
                                    break;
                                case "smile":
                                    await ƒS.Character.hide(characters.protagonist);
                                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.smile, ƒS.positionPercent(20, 100));
                                    await ƒS.update(0);
                                    break;
                                case "happy":
                                    await ƒS.Character.hide(characters.protagonist);
                                    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(20, 100));
                                    await ƒS.update(0);
                                    break;
                            }
                        } let options = {
                            one: "Weiter untersuchen",
                            two: "In Ruhe lassen"
                        };
                        let decide = await ƒS.Menu.getInput(options);
                        switch (decide) {
                            case options.one:
                                await ƒS.Character.hide(characters.protagonist);
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Huh? Daran kann ich mich gar nicht erinnern!');
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Jemand hat mit einem Messer etwas in das Stuhlbein geritzt: "Nimm mich mit".');
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Das muss ein Zeichen sein! Vielleicht von Michela? Jetzt glaubst du mir aber, dass hier etwas nicht stimmt!');
                                let options1 = {
                                    one: "Stuhlbein nehmen",
                                    two: "In Ruhe lassen"
                                };
                                let decide1 = await ƒS.Menu.getInput(options1);
                                switch (decide1) {
                                    case options1.one:
                                        await ƒS.Character.hide(characters.protagonist);
                                        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
                                        await ƒS.update(0);
                                        await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Ich hoffe Adam wird mir nicht allzu böse sein... Auf Wiedersehen, Herr Stuhl!');
                                        ƒS.Sound.play(sound.protagonist.misc[6], 0.5);
                                        ƒS.Inventory.add(items.Stuhlbein);
                                        save.protagonist.experience += 10;
                                        checkExperience()
                                        await ƒS.Text.print("Stuhlbein dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                        break;
                                    case options1.two:
                                        await ƒS.Character.hide(characters.protagonist);
                                        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
                                        await ƒS.update(0);
                                        await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Ich kann das Adam nicht antun... Aber ich muss!');
                                        ƒS.Sound.play(sound.protagonist.misc[6], 0.5);
                                        ƒS.Inventory.add(items.Stuhlbein);
                                        save.protagonist.experience += 10;
                                        checkExperience()
                                        await ƒS.Text.print("Stuhlbein dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                        break;
                                }
                                break;
                            case options.two:
                                await ƒS.Character.hide(characters.protagonist);
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Ich sollte weiterschauen.');
                                await ƒS.Character.hide(characters.protagonist);
                                await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                                await ƒS.update(0);
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Moment mal!');
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Ich glaubs ja nicht, da wurde etwas in das Stuhlbein geritzt! Da steht: "Nimm mich mit".');
                                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, 'Das muss ein Zeichen sein! Aber warum das Stuhlbein? Trotzdem sollte ich es erstmal mitnehmen.');
                                ƒS.Inventory.add(items.Stuhlbein);
                                save.protagonist.experience += 10;
                                checkExperience()
                                sfx("complete");
                                await ƒS.Text.print("Stuhlbein dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                break;
                        };
                        await ƒS.Character.hide(characters.protagonist);
                        await ƒS.update(0);
                        closeUI();
                    } else {
                        console.log("chair b");
                        await say("normal", "Ich glaube an dem Stuhl möchte ich nicht noch mehr kaputt machen");
                        await say("sad", "Bitte bitte sei mir nicht böse Adam!");
                    }
                }
            };

            if (_event.x >= door1.xMin && _event.x <= door1.xMax) {
                if (_event.y >= door1.yMin && _event.y <= door1.yMax) {
                    if (door1.visited == false) {
                        door1.visited = true;
                        console.log("door 1 a");
                        sfx("confirm");
                        await say("normal", 'Hey! da geht es zu Adams "Bibliothek"... was eigentlich nur sein Arbeitszimmer ist. Mit vielen Büchern halt...');
                        await say("happy", 'Als Kind bin ich dort so gerne gewesen und habe mir jedes einzelne Buch angeschaut und sehr viele davon auch komplett gelesen.');
                        await say("normal", 'Inzwischen war ich länger nicht mehr drin. Außer natürlich vor Kurzem, um nach Adam und Michela zu suchen...');
                        if (chair.visited === true) {
                            await say("shocked", 'Aber na klar! Aufgrund des neuen Hinweises auf dem Stuhlbein, sollte ich nochmal hereingehen und vielleicht hat sich inzwischen etwas geändert');
                            if (await options("In Adams Arbeitszimmer gehen", "Noch nicht") == true) {
                                await say("smile", "Auf geht's!");
                                ƒS.insert(Scene_Bibliothek);
                            } else {
                                await say("normal", 'Wahrscheinlich besser, wenn ich hier erstmal alles unter die Lupe nehme.')
                            }
                        } else {
                            await say('normal', "Es spricht natürlich nichts dagegen, trotzdem nochmal nachzuschauen.");
                            if (await options("In Adams Arbeitszimmer gehen", "Noch nicht") == true) {
                                await say("normal", "Hoffentlich finde ich etwas.");
                                ƒS.insert(Scene_Bibliothek);
                            } else {
                                await say("normal", 'Wahrscheinlich Zeitverschwendung...')
                            }
                        }
                    } else {
                        console.log("door 2 b");
                        sfx("confirm");
                        if (await options("In Adams Arbeitszimmer gehen", "Noch nicht") == true) {
                            ƒS.insert(Scene_Bibliothek);
                        } else {
                            await say("normal", 'Ich bin wohl noch nicht ganz fertig.')
                        }
                    }
                }
            }

            if (_event.x >= door2.xMin && _event.x <= door2.xMax) {
                if (_event.y >= door2.yMin && _event.y <= door2.yMax) {
                    if (door2.visited == false) {
                        door2.visited = true;
                        console.log("door 2 a");
                        sfx("confirm");
                        await say("smile", 'Das ist Michelas Schlafzimmer...')
                        await say("sad", "Oh man, ich kann es gar nicht fassen, dass sie auf einmal weg ist. Ich gebe sie aber niemals auf!")
                        await say("smile", 'Ihr Zimmer ist immer wahnsinnig aufgeräumt, selbst die Polizei hat nichts Verdächtiges gefunden.')
                        if (chair.visited === true) {
                            await say("shocked", 'Ja genau! Vielleicht hat sie ebenso kleine unscheinbare Hinweise hinterlassen, wie am Stuhlbein!')
                            await say("happy", 'Sie wusste über uns und den Stuhl Bescheid, ich muss unbedingt nochmal in ihr Zimmer!')
                            if (await options("In Michelas Zimmer gehen", "Später") == true) {
                                await say("smile", "Schnell hinein und schauen!");
                                await say("shocked", "...")
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await say("angry", 'Es ist... VERSCHLOSSEN? Wie kann das denn sein? Ihre Tür ist sonst nie verschlossen!')
                                await say("normal", 'Ich muss den Schlüssel zu ihrem Zimmer finden, sofort!');
                                knowDoor = true;
                            } else {
                                await say("normal", "Vielleicht doch noch nicht, ich sollte aber schnell machen!");
                            }
                        } else {
                            await say("sad", 'Vor ihrer Tür so zu stehen, gibt mir Gänsehaut.')
                            await say("normal", 'Ja, ich reiß mich zusammen. Vielleicht war der Hinweis die gesamte Zeit über vor meiner Nase.')
                            if (await options("In Michelas Zimmer gehen", "Später") == true) {
                                await say("normal", "Es führt nichts daran vorbei, wenn ich sie finden will.");
                                await say("shocked", "...")
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await say("shocked", 'Das ist ja komisch... Nein, funktioniert immernoch nicht. Die Tür ist einfach verschlossen!')
                                await say("normal", 'Michelas Tür ist sonst nie verschlossen, sie vertraut uns Beiden sehr.')
                                await say("normal", 'Die Polizei kann es nicht gewesen sein. Ich habe sie aus dem Zimmer herausgehen sehen und keiner hat die Tür zugemacht.')
                                await say("shocked", 'Ich wüsste nicht einmal, wo überhaupt der Schlüssel sein könnte.')
                                await say("smile", 'Ich habs doch gleich gesagt, dass hier etwas Paranormales stattgefunden hat.')
                                await say("normal", "Aber warum sollte ihre Tür verschlossen sein? ...")
                                await say("shocked", 'Außer jemand möchte uns von ihrem Zimmer fern halten. Oh Gott! Ich muss sofort den Schlüssel finden!')
                                knowDoor = true;
                            } else {
                                await say("normal", "Ich fühl mich wohl noch nicht ganz bereit.")
                            }
                        }
                    } else {
                        console.log("door 2 b");
                        sfx("confirm");
                        if (doorOpen === true) {
                            if (await options("Eintreten", 'Noch nicht') === true) {
                                ƒS.insert(Scene_Mirror_Room);
                            } else {
                                await say("normal", 'Am Besten überprüfe ich nochmal, ob ich hier alles gefunden habe.')
                            }
                        } else {
                            if (knowDoor === true) {
                                if (checkForItems("Schlüssel") == true) {
                                    await say("happy", 'Ich schätze mal der große Augenblick ist gekommen, in dem ich die Tür endlich knacken werde! Worauf warte ich noch?')
                                } else {
                                    if (checkForItems("Lampenteil") == true || checkForItems("Kaminteil") == true) {
                                        await say("sad", 'Ohne ein zweites Stück kann ich keine Schlüsselalternative basteln.')
                                        await say("normal", "Ich wette, dass irgendwo in der Nähe etwas Brauchbares zu finden ist.")
                                    } else {
                                        await say("sad", 'Es ist mir ein Mysterium, warum die Tür auf magische Art und Weise verschlossen ist.')
                                        await say("normal", 'Besser ich finde einen alternativen Schlüssel, weil ich nicht weiß, ob es überhaupt jemals einen gab.')
                                    }
                                }
                            } else {
                                if (await options("In Michelas Zimmer gehen", "Später") == true) {
                                    await say("normal", "Hätte ich schon längst machen sollen.");
                                    await say("shocked", "Was soll das denn?...")
                                    ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                    await say("shocked", 'Warum ist ihre Tür verschlossen? Das kann gar nicht sein!')
                                    await say("normal", 'Ich habe noch nie erlebt, dass ihre Tür verschlossen war.')
                                    await say("normal", 'Die Polizei hat die Tür auch nicht angrührt, das habe ich mitbekommen.')
                                    await say("shocked", 'Aber auf einmal ist sie zu und ich komme nicht rein.')
                                    await say("normal", "So viele Fragen, die sich mir gerade stellen. Ich muss irgendwie die Tür aufbekommen.")
                                    await say("shocked", 'Hoffentlich habe ich das Zeitfenster nicht verpasst eben, in dem die Tür noch offen war.')
                                    await say("angry", 'Ich musste ja ausgerechnet noch was anderes machen...')
                                    knowDoor = true;
                                } else {
                                    await say("sad", 'Ich weiß nicht, vielleicht muss ich mich vorher noch mal sammeln.')
                                }
                            }
                        }
                    }
                }
            }

            if (_event.x >= lamp.xMin && _event.x <= lamp.xMax) {
                if (_event.y >= lamp.yMin && _event.y <= lamp.yMax) {
                    if (lamp.visited == false) {
                        lamp.visited = true;
                        console.log("lamp a");
                        sfx("confirm");
                        await say("smile", 'Ach ja, die Lampe fand ich noch nie wirklich schön. Sie macht wenigstens, was sie soll.')
                        await say("happy", "Als Michela noch klein war, hat sie ernsthaft versucht, zur Lampe hochzuspringen, um sich dann an ihr festzuhalten.")
                        await say("smile", 'Natürlich ging das nur für kurze Zeit gut, bis die Lampe plötzlich ein Stückchen hinuntersackte...')
                        await say("happy", "Michelas Gesicht ist noch nie so blass gewesen, als sie vor Schreck die Lampe losließ.")
                        await say("normal", "Unfassbar, an welche Dinge man sich erinnern kann, wenn man Orts- oder Gegenstands-bezogen denkt.")
                        await say("sad", "Jetzt merke ich erst richtig, wie sehr ich gerade mit Michela reden will.")
                        await say("sad", 'Wir waren nicht gerade einfach... Aber Adam hat uns trotzdem so sehr Lieb gehabt.')
                        await say("happy", "Er ist wirklich der freundlichste Mensch, den ich kenne.")
                        await say("normal", "Allerdings hat er nie viel von sich und seiner Vergangenheit erzählt. Zurückblicked gesehen war uns das damals aber auch egal.")
                        await say("happy", "Wir haben ihn trotzdem lieb, er hat uns alles gegeben, was wir brauchten.")
                        await say("smile", "Ich meine, allein schon in so einem großen Herrenhaus aufzuwachsen, das hat viele schöne Kindheitserinnerungen geprägt.")

                        if (knowDoor === true) {
                            await say("shocked", "Interessant, wie sehr das unterste Stückchen der Lampe nach einem Schlüsselteil aussieht!")
                            await say("sad", 'Leider nicht ganz ausreichend, um als Schlüsselersatz zu funtionieren.')
                            if (kaminKnow === true) {
                                await say("smile", 'Aber gerade kommt mir wieder in den Sinn, dass ich das Stückchen gut in Verbindung mit etwas anderem verwenden kann.')
                                await say("happy", 'Endlich könnte ich Michelas Tür knacken! Außer irgendetwas Unvorhersehbares kommt dazwischen.')
                                ƒS.Inventory.add(items.Lampenteil);
                                lampenteil = true;
                                save.protagonist.experience += 10;
                                checkExperience()
                                sfx("complete");
                                await ƒS.Text.print("Lampenteil dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            }
                        }
                    } else {
                        console.log("lamp b");
                        sfx("confirm");
                        if (lampenteil === false) {
                            if (chair.visited === true) {
                                await say("normal", "Anscheinend kann man nicht gründlich genug schauen, wenn die Hinweise so unscheinbar wie bislang sind")
                                if (knowDoor === true) {
                                    await say("shocked", "Das Lampenstück ganz unten sieht einem Schlüssel verdammt ähnlich!")
                                    await say("normal", 'Ich bräuchte aber noch eine weitere Komponente, damit ich Michelas Zimmertür knacken kann.')
                                    if (kaminKnow === true) {
                                        await say("smile", 'Perfekt, ich wüsste auch bereits, wo ich das andere Stück herbekommen könnte.')
                                        await say("happy", 'Wenn ich beide Teile habe, kann ich vielleicht endlich Zugang zu neuen Antworten finden.')
                                        ƒS.Inventory.add(items.Lampenteil);
                                        lampenteil = true;
                                        save.protagonist.experience += 10;
                                        checkExperience()
                                        sfx("complete");
                                        await ƒS.Text.print("Lampenteil dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                    }
                                }
                            } else await say("normal", "Ich möchte diese Lampe nicht noch länger anschauen, als nötig.")

                        } else {
                            await say('happy', 'Die Lampe hat ihren Zweck erfüllt. Dennoch ist sie kein bisschen hübscher dadurch geworden.')
                        }
                    }
                }
            }

            if (_event.x >= window1.xMin && _event.x <= window1.xMax) {
                if (_event.y >= window1.yMin && _event.y <= window1.yMax) {
                    console.log(_event.x, _event.y);
                    if (window1.visited == false) {
                        window1.visited = true;
                        console.log("window a");
                        sfx("confirm");
                        await say("normal", "Draußen herrscht außergewöhnlich viel Nebel.")
                        await say("sad", "Ehrlich gesagt war ich die letzten Tage gar nicht mehr außer Haus.")
                        await say("normal", "Ich möchte einfach nicht riskieren, dass Michela und Adam wieder auftauchen und ich nicht da bin.")
                        await say("normal", "Aber das Wetter war eigentlich nicht besonders auffällig bis jetzt.")

                        if (chair.visited === true) {
                            await say("shocked", "Der Nebel war genauso plötzlich da, wie die Inschrift!")
                            await say("normal", "Ich sollte auf weitere solcher Ungwöhnlichkeiten Acht geben.")
                        }
                    } else {
                        console.log("window b");
                        sfx("confirm");
                        if (knowWindow === false) {
                            if (checkForItems("Asche") === false) {
                                ƒS.Sound.play(sound.protagonist.misc[2], 0.5);
                                await say("shocked", 'Igitt! Da ist ja ziemlich viel Dreck an der rechten unteren Ecke')
                                if (await options("Genauer anschauen", "Igitt") === true) {
                                    await say("shocked", "Interessant! Vielleicht halluziniere ich gerade, aber der Dreck scheint eine perfekte Form zu bilden.")
                                    await say("normal", 'Könnte ein Buchstabe sein, oder eine Zahl...')
                                    windowNotice = true;
                                    if (chair.visited === true) {
                                        await say("smile", 'Also den Umständen entsprechend ist dies nicht gerade uninteressant.')
                                        await say("normal", "Wie beim Stuhlbein könnte hier die Liebe zum Detail genau richtig sein.")
                                        await say("smile", 'Ich will damit nicht sagen, dass ich die Fensterscheibe mit Dreck einschmieren sollte...')
                                        await say("happy", 'Aber vielleicht sollte ich es machen und schauen ob dann mehr zu erkennen ist.')
                                    } else {
                                        await say("normal", 'Naja, vielleicht nicht genau das, wonach ich suche. Ich behalte es mal im Hinterkopf')
                                    }
                                } else {
                                    await say("angry", 'Was mache ich hier auch und schaue mir den Dreck an den Fensterscheiben an.')
                                    await say('normal', 'Ich wünschte, dass ich aus Dreck Gold machen könnte, also im Symbolischen Sinne.')
                                }
                            } else {
                                await say('smile', 'Jetzt könnte ich endlich die Botschaft entziffern. Worauf warte ich noch?')
                            }
                        } else {
                            await say("normal", "Nebel überall. Ich glaube der geht so schnell nicht wieder weg. Genauso wie der Dreck, igitt.")
                        }
                    }
                }
            }

            if (_event.x >= steps.xMin && _event.x <= steps.xMax) {
                if (_event.y >= steps.yMin && _event.y <= steps.yMax) {
                    console.log(_event.x, _event.y)
                    if (steps.visited == false) {
                        steps.visited = true;
                        console.log("steps a");
                        sfx("confirm");
                        await say("sad", 'Oh je, ich habe keine guten Erinnerungen an diese Treppen. Vor einigen Jahren bin ich dort gestürzt...')
                        await say("shocked", 'Ich bin voll auf den Hinterkopf gefallen und musst sofort ins Krankenhaus.')
                        await say("angry", 'Der blöde "Teppich" war viel zu locker und deshalb bin ich beim Hochgehen damit weggerutscht!')
                        await say("normal", 'Vielleicht hatte ich einfach Pech, aber davor saß der Teppich immer bombenfest.')
                        await say("sad", 'Ich habe ehrlich gedacht, Michela hätte ihn extra lose gemacht, um mir eins auszuwischen.')
                        await say("sad", 'Wie konnte ich sowas nur denken... Wir waren ja keine Kinder mehr, die einander Streiche spielen.')
                        await say("normal", 'Jedoch dachte ich, sie wäre extrem wütend gewesen, weil ich ihr meine Meinung zu ihrem damaligen Freund gesagt habe.')
                        await say('angry', "Gabriel... Er hat ihr überhaupt nicht gut getan und das wollte Michela einfach nicht sehen.")
                        await say('shocked', "Sie hat sich von ihm ausnutzen lassen und er hatte wenig Interesse an ihr als Person.")
                        await say('normal', "Er hatte mit ihr Schluss gemacht, kurz nachdem ich ihr das klar machen wollte...")
                        await say("sad", 'Sie hatte mich deshalb im Verdacht und war stinksauer. Ich würde aber sowas nie machen.')
                        await say("normal", 'Das danach der Teppich auf einmal locker war, hatte mich schon stutzig gemacht.')
                        await say("normal", 'Michela hat mir geschworen, dass sie es nicht war.')
                        await say("normal", "Adam war irgendwie komisch drauf deswegen, aber bestimmt hatte er sich nur unglaubliche Sorgen gemacht.")
                        await say("smile", "Er liegt sehr an seiner Einrichtung, aber auch unserer Sicherheit.")
                        await say("normal", 'Ich deute wahrscheinlich zu viel hinein in Kleinigkeiten.')
                    } else {
                        console.log("steps b");
                        sfx("confirm");
                        if (carpetDone === false) {
                            if (booksL.visited === true || booksR.visited === true) {
                                if (carpetAgain === false && carpetNo === false) {
                                    await say("normal", 'Also wenn ich mehr von diesen Buchseiten finden will, sollte ich wirklich jeden Fleck umdrehen.')
                                    await say("normal", 'Je mehr Seiten ich finden kann, desto mehr erfahre ich vielleicht, womit ich es hier zu tun habe.')
                                    if (await options("Teppich anheben", "Nichts machen") === true) {
                                        await say("angry", "Beim Lockern des Teppichs bekomme ich direkt Flashbacks an meinen blöden Sturz.")
                                        await say("normal", 'Aber dann wollen wir mal schauen...')
                                        await say("normal", "...");
                                        await say("normal", "...");
                                        await say("sad", 'Alles umsonst... Warum dachte ich auch, dass ich hier was finden werde?')
                                        carpetAgain = true;
                                    } else {
                                        await say("normal", 'Ehrlich gesagt habe ich gerade keine Lust, diesen Staubfänger anzuheben.')
                                        await say("angry", 'Nochmal verletze ich mich nicht wegen dem!');
                                        carpetNo = true;
                                    }
                                }
                                if (carpetAgain === true && carpetNo === false) {
                                    await say("normal", 'Ach was solls... Ich habe noch nicht alle Stufen abgesucht, ganz oben war ich noch nicht.')
                                    await say("sad", 'Irgendwie wollt ich es nicht wahrhaben, aber ich hatte wohl eine Angst gegen diese Stufen entwickelt nach dem Unfall.')
                                    await say("shocked", 'Wenn ich mir das so vor Augen führe, habe ich tatsächlich ein unwohles Gefühl solange ich auf dieser Treppe stehe.')
                                    await say("smile", 'Okay, ich pack das schon! Ich werde einfach extra vorsichtig vorgehen.')
                                    await say("normal", '...')
                                    await say("shocked", 'Oh nein! Meine Angst vor der Treppe hätte mich davon abgehalten, eine weitere Buchseite zu finden!')
                                    await say("happy", 'Ich bin so froh, dass ich über mich hinauswachsen konnte!')
                                    // Der Unfall ihrer Eltern hat sie unbewusst sehr ängstlich/vorsichtig gemacht. Jeder noch so kleine Unfall hinterlässt langfristige psychische Folgen
                                    randomItem();
                                    save.protagonist.experience += 5;
                                    checkExperience()
                                    sfx("complete");
                                    carpetDone = true;
                                    await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                                }
                                if (carpetAgain === false && carpetNo === true) {
                                    await say("normal", 'Okay okay... Ich schaue am Besten doch mal drunter.')
                                    if (await options("Teppich doch anheben", "Wieder nichts machen") === true) {
                                        await say("angry", "Glaub mir Teppich, ich werde nicht sanft mit dir umgehen!")
                                        await say("normal", 'Oh man, hoffentlich bereue ich meine Worte nicht.')
                                        await say("normal", "Und los gehts... Langsam den Teppich lösen und anheben... so weit so gut.");
                                        await say("normal", "...");
                                        await say("angry", 'Ich wusste es, was für eine reine Zeitverschwendung. Was habe ich mir nur gedacht.');
                                        carpetAgain = true;
                                    } else {
                                        await say("shocked", 'Ich kann es einfach nicht... habe ich etwa Angst wieder zu stürzen?')
                                        await say("normal", 'Nah, ich glaube nicht. Mir ist einfach bewusst, dass hier nichts zu finden ist.')
                                    }
                                }
                                if (carpetAgain === true && carpetNo === true) {
                                    await say("angry", 'Ich kann es nicht glauben, dass ich ernsthaft nochmal darüber nachdenke...')
                                    await say("sad", 'Ehrlich gesagt habe ich beim ersten Mal nicht bis zur obersten Stufe hin untersucht.')
                                    await say("shocked", 'Verdammt nochmal! Ich habe tatsächlich unbewusste Angst vor dieser Treppe!')
                                    await say("normal", 'Ich habe mir selber was vorgelogen und dachte, dass ich meine Ängste im Griff habe.')
                                    await say("sad", 'Besonders vor so einer "harmlosen" Treppe... Na dann fange ich diesmal einfach oben an.')
                                    await say("normal", 'Mal schauen...')
                                    await say("happy", 'Oha, tatsächlich eine weitere Buchseite! Ich komme der Sache hoffentlich immer näher.')
                                    randomItem();
                                    save.protagonist.experience += 5;
                                    checkExperience()
                                    sfx("complete");
                                    carpetDone = true;
                                    await ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                                }
                            } else {
                                await say("normal", 'Diese Stufen und Ich... Wir sind wie Wasser und Öl.')
                                await say("angry", "Mir schmerzt der Kopf schon beim bloßen Gedanken, die Treppe hoch- oder runterzugehen.")
                            }
                        } else {
                            await say("smile", 'Endlich kann ich meinen Frieden mit der Treppe schließen')
                        }
                    }
                }
            }
        } // if ui_Open
    } // function

    // Scene Intro
    export async function Scene_Intro(): ƒS.SceneReturn {
        currentScene = "intro";
        console.log(`current scene: ${currentScene}`);
        sfx("ambient");
        mapListeners();
        closeUI();
        await ƒS.Location.show(location.intro.mansion);
        await ƒS.update(0);
        if (visitScene() === false) {
            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(20, 100));
            await ƒS.update(1);
            showUI();
            let hero_randomGreeting = Math.floor(Math.random() * sound.protagonist.greeting.length);
            ƒS.Sound.play(sound.protagonist.greeting[hero_randomGreeting], 1, false);
            await protagonistCycle();
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(1);
            closeUI();
        } else if (won === false) {
            await say("normal", 'Irgendwas Neues?');
        } else {
            await say("shocked", 'Los los! Ich muss mich beeilen und schnell zu Michelas Spiegel gelangen!')
        }
    }
}
