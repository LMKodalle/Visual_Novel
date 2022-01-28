"use strict";
var Template;
(function (Template) {
    async function protagonistCycle() {
        var currentProtagonistCycle;
        switch (Template.currentScene) {
            case "intro":
                currentProtagonistCycle = Template.hero.dialog.intro;
                break;
            case "room01":
                currentProtagonistCycle = Template.hero.dialog.room1;
                break;
        }
        for (let i of Object.values(currentProtagonistCycle)) {
            for (let key in i) {
                // console.log("protagonist key is:", key);
                if (key == "mood") {
                    console.log("protagonist mood", i.mood.valueOf());
                    switch (i.mood.valueOf()) {
                        case "happy":
                            await Template.ƒS.Character.hide(Template.characters.protagonist);
                            await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happy, Template.ƒS.positionPercent(30, 90));
                            await Template.ƒS.update(0);
                            break;
                        case "sad":
                            await Template.ƒS.Character.hide(Template.characters.protagonist);
                            await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.upset, Template.ƒS.positionPercent(30, 90));
                            await Template.ƒS.update(0);
                            break;
                        case "angry":
                            await Template.ƒS.Character.hide(Template.characters.protagonist);
                            await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.angry, Template.ƒS.positionPercent(30, 90));
                            await Template.ƒS.update(0);
                            break;
                    }
                }
                if (key == "animation") {
                    console.log("protagonist animation:", i.animation.valueOf());
                }
                if (key == "text") {
                    console.log("protagonist line:", i.text.valueOf());
                    await Template.ƒS.Speech.tell(Template.characters.protagonist, i.text.valueOf());
                }
                if (key == "swap") {
                    // console.log(i.text.length)
                    Template.hero.dialog.intro.shift();
                    if (i.swap == ">") {
                        console.log("switch speaker");
                        antagonistCycle();
                        return;
                    }
                }
            }
        }
    }
    Template.protagonistCycle = protagonistCycle;
    async function antagonistCycle() {
        var currentAntagonistCycle;
        switch (Template.currentScene) {
            case "intro":
                currentAntagonistCycle = Template.villain.dialog.intro;
                break;
            case "room01":
                currentAntagonistCycle = Template.villain.dialog.room1;
                break;
        }
        for (let i of Object.values(currentAntagonistCycle)) {
            for (let key in i) {
                // console.log("antagonist key is:", key);
                if (key == "mood") {
                    console.log("antagonist mood:", i.mood.valueOf());
                    switch (i.mood.valueOf()) {
                        case "happy":
                            await Template.ƒS.Character.hide(Template.characters.antagonist);
                            await Template.ƒS.Character.show(Template.characters.antagonist, Template.characters.antagonist.pose.happy, Template.ƒS.positionPercent(30, 90));
                            await Template.ƒS.update(0);
                            break;
                        case "sad":
                            await Template.ƒS.Character.hide(Template.characters.antagonist);
                            await Template.ƒS.Character.show(Template.characters.antagonist, Template.characters.antagonist.pose.upset, Template.ƒS.positionPercent(30, 90));
                            await Template.ƒS.update(0);
                            break;
                        case "angry":
                            await Template.ƒS.Character.hide(Template.characters.antagonist);
                            await Template.ƒS.Character.show(Template.characters.antagonist, Template.characters.antagonist.pose.angry, Template.ƒS.positionPercent(30, 90));
                            await Template.ƒS.update(0);
                            break;
                    }
                }
                if (key == "animation") {
                    console.log("antagonist animation:", i.animation.valueOf());
                }
                if (key == "text") {
                    console.log("antagonist line:", i.text.valueOf());
                    await Template.ƒS.Speech.tell(Template.characters.antagonist, i.text.valueOf());
                }
                if (key == "swap") {
                    // console.log(i.text.length)
                    Template.villain.dialog.intro.shift();
                    if (i.swap == ">") {
                        console.log("switch speaker");
                        protagonistCycle();
                        return;
                    }
                }
            }
        }
    }
    Template.antagonistCycle = antagonistCycle;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    // Transitions
    console.log("AUREA_NOVEL starting");
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "./Images/Transitions/puzzle.png",
            edge: 1
        }
    };
    Template.sound = {
        // Music
        backgroundTheme: "",
        // Sound
        click: ""
    };
    // Locations
    Template.location = {
        bedroom: {
            name: "Bedroom",
            background: "./Images/Backgrounds/Bedroom_Night.png"
        }
    };
    // Characters
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        protagonist: {
            name: "Lucy",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // Pfad als String angeben
                angry: "./Images/Characters/boy_angry.png",
                happy: "./Images/Characters/boy_happy.png",
                upset: "./Images/Characters/boy_upset.png",
                excited: "./Images/Characters/boy_excited.png",
                veryangry: "./Images/Characters/boy_veryangry.png",
                pleased: "./Images/Characters/boy_pleased.png"
            }
        },
        antagonist: {
            name: "Adam Ovajeh",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // Pfad als String angeben
                angry: "./Images/Characters/mother_angry.png",
                happy: "./Images/Characters/mother_happy.png",
                upset: "./Images/Characters/mother_upset.png",
                sleepy: "./Images/Characters/mother_sleepy.png"
            }
        },
        michela: {
            name: "Michela",
        }
    };
    // Animations
    function weirdAnime() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 90), rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white") },
            end: { translation: Template.ƒS.positionPercent(70, 90), rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.weirdAnime = weirdAnime;
    function canvasRightEntry() {
        return {
            start: { translation: Template.ƒS.positionPercent(130, 90) },
            end: { translation: Template.ƒS.positionPercent(90, 90) },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.canvasRightEntry = canvasRightEntry;
    Template.dataForSave = {
        namePlayer: "",
        points: 0,
        pagecount: 0
    };
    Template.currentScene = "";
    // Menü
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    let menu = true;
    let statusInventory = false;
    let selectedItemArray = [];
    function clickInventory(_event) {
        if (_event) {
            statusInventory = false;
            console.log(statusInventory);
        }
    }
    Template.clickInventory = clickInventory;
    async function buttonFunctions(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
        }
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menu = true;
                }
                break;
        }
    }
    // Items
    Template.items = {
        Buchseiten: [{
                name: "Seite 1",
                description: "Eine leicht verbrannte Buchseite",
                investigate: "",
                text: "",
                image: "",
                static: true,
                handler: hndItem
            },
            {
                name: "Seite 2",
                description: "Eine leicht verbrannte Buchseite",
                investigate: "",
                text: "",
                image: "",
                static: true,
                handler: hndItem
            },
            {
                name: "Seite 3",
                description: "Eine leicht verbrannte Buchseite",
                investigate: "",
                text: "",
                image: "",
                static: true,
                handler: hndItem
            },
            {
                name: "Seite 4",
                description: "Eine leicht verbrannte Buchseite",
                investigate: "",
                text: "",
                image: "",
                static: true,
                handler: hndItem
            },
            {
                name: "Seite 5",
                description: "Eine leicht verbrannte Buchseite",
                investigate: "",
                text: "",
                image: "",
                static: true,
                handler: hndItem
            },
            {
                name: "Seite 6",
                description: "Eine leicht verbrannte Buchseite",
                investigate: "",
                text: "",
                image: "",
                static: true,
                handler: hndItem
            }
        ],
        Code: {
            name: "Code",
            description: "Ein geheimer Code, der sich aus den markierten Buchstaben und Ziffern der einzelnen Seiten zusammensetzt",
            investigate: "",
            image: "",
            static: true,
            handler: hndItem
        },
        Fackel: {
            name: "Fackel",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Schlüssel: {
            name: "Schlüssel",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Seelenenergie: {
            name: "Seelenenergie",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Messer: {
            name: "Messer",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Zahn: {
            name: "Zahn",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Salz: {
            name: "Salz",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Blut: {
            name: "Blut",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Engelsfeder: {
            name: "Engelsfeder",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Weihwasser: {
            name: "Weihwasser",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Schlafsand: {
            name: "Schlafsand",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Fläschchen: {
            name: "Fläschchen",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        },
        Schaufel: {
            name: "Schaufel",
            description: "",
            investigate: "",
            image: "",
            static: false,
            handler: hndItem
        }
    };
    Template.state = {
        a: 1,
        b: "",
        c: 2
    };
    Template.pages = [
        "<strong>Überschrift:</strong>blabla<br></br> <br>Seite 1</br>",
        "<strong>Überschrift</strong>",
    ];
    function randomItem() {
        let randomIndex = Math.floor(Math.random() * Template.items.Buchseiten.length);
        let randomItem = Template.items.Buchseiten[randomIndex];
        if (Template.dataForSave.pagecount < 6) {
            Template.ƒS.Inventory.add(randomItem);
            Template.items.Buchseiten.splice(randomIndex, 1);
            document.getElementById("pagecount").innerHTML = "Gesammelte Seiten" + " " + `${Template.dataForSave.pagecount += 1}/6`;
            console.log("added", randomItem.name, `${Template.dataForSave.pagecount}/6`);
        }
    }
    Template.randomItem = randomItem;
    function hndItem(_event) {
        if (_event.type == "pointerup") {
            //console.log(_event);
            switch (_event.detail) {
                case "Seite 1":
                case "Seite 2":
                case "Seite 3":
                case "Seite 4":
                case "Seite 5":
                case "Seite 6":
                    if (selectedItemArray.length == 0) {
                        Template.ƒS.Text.print(Template.pages[0]);
                    }
                    else if (selectedItemArray.length > 0) {
                        for (let i = 0; i <= document.getElementById("items").children.length; i++) {
                            if (_event.detail == `Seite ${i}`) {
                                console.log(`... with Seite ${i}`);
                                if (selectedItemArray[0] != _event.detail) {
                                    if (Template.dataForSave.pagecount == 6) {
                                        let itemsChild = document.getElementById("items").children;
                                        let j = itemsChild.length;
                                        while (j--) {
                                            console.log("j =", j);
                                            if (itemsChild[j].id == "Seite_1" || "Seite_2" || "Seite_3" || "Seite_4" || "Seite_5" || "Seite_6") {
                                                itemsChild[j].parentNode.removeChild(itemsChild[j]);
                                            }
                                        }
                                        document.getElementById("combo").innerHTML = "Erstellt: Code";
                                        Template.ƒS.Inventory.add(Template.items.Code);
                                        codegenerator();
                                    }
                                }
                                else {
                                    document.getElementById("combo").innerHTML = "Nicht mit sich selbst kombinierbar";
                                    selectedItemArray.splice(0, selectedItemArray.length);
                                }
                            }
                        }
                    }
                    break;
            }
        }
    }
    ;
    function codegenerator() {
        for (let i = 0; i < Template.items.Buchseiten.length; i++) {
            let codeArray = Array.from(Template.items.Buchseiten[i].text);
            let randomIndex = Math.floor(Math.random() * Template.items.Buchseiten[i].text.length);
            let randomSymbol = codeArray[randomIndex];
            var code = "";
            code += randomSymbol;
        }
        console.log(code);
    }
    let counter = 0;
    function eventHandler(_event) {
        let container = document.querySelector("#items");
        let highlightedItems = container.querySelectorAll("li");
        for (let i = 0; i < highlightedItems.length; i++) {
            if (_event.target == highlightedItems[i]) {
                document.addEventListener("keydown", listen);
                counter = i;
            }
        }
        if (_event.target == container) {
            document.removeEventListener("keydown", listen);
        }
    }
    function listen(_event) {
        let nameItem = document.querySelectorAll("li > name");
        if (_event.code == "KeyC") {
            if (selectedItemArray.length == 0) {
                selectedItemArray.push(nameItem[counter].innerHTML);
                console.log(`combining ${selectedItemArray[0]} ...`);
                document.getElementById("combo").innerHTML = "Kombiniere ...";
            }
        }
    }
    document.addEventListener("keydown", hndKeypressForInventory);
    async function hndKeypressForInventory(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.I:
                if (!statusInventory) {
                    console.log("open inventory");
                    Template.ƒS.Inventory.open();
                    statusInventory = true;
                    console.log(statusInventory);
                }
                else {
                    console.log("close inventory");
                    Template.ƒS.Inventory.close();
                    statusInventory = false;
                    console.log(statusInventory);
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                Template.ƒS.Inventory.close();
                statusInventory = false;
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
        document.getElementById("inv").addEventListener("pointerdown", clickInventory);
        document.getElementById("items").addEventListener("pointerover", eventHandler);
        let scenes = [
            { scene: Template.Scene_01, name: "Scene_01" },
            //  { scene: Scene_02, name: "Scene_02" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_01() {
        console.log("Scene 1: Intro");
        Template.currentScene = "intro";
        //protagonistCycle();
        //let menu: ƒS.Menu = ƒS.Menu.create({a: "Opt1", b: "Opt2"}, null);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Dies ist nur ein Test");
        //menu.close();
        //ƒS.Text.print("Hallo User")
    }
    Template.Scene_01 = Scene_01;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene_02() {
        console.log("Scene_02");
        let text = {
            narrator: {
                T001: "Ein winterlicher Abend, der Vollmond leuchtet grell durch den dichten Schneesturm.",
                T002: "Du befindest dich zum Glück im warmen Wohnzimmer und bist mit einer flauschigen Decke gemütlich eingerollt.",
                T003: "Alles was jetzt noch fehlt, ist eine heiße Tasse Schokolade mit einem großen Klecks Schlagsahne.",
                T004: "Deine Mutter kommt passender Weise gerade durch die Wohnzimmertür und wäre die perfekte Dienstbotin, um dir deinen Wunsch zu erfüllen.",
                T005: "Bevor deine Mutter mit müden Augen zu Wort kommt, unterbrichst du sie..."
            },
            protagonist: {
                T001: "Mama! Du kommst gerade richtig, um mir einen heißen Kakao zu bringen."
            },
            antagonist: {
                T001: "Mir tut leider alles weh vom Schneeschüppen. Bitte mach ihn dir doch selber, okay?"
            }
        };
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T001);
        await Template.ƒS.Location.show(Template.location.bedroom);
        await Template.ƒS.update(Template.transition.puzzle.duration, Template.transition.puzzle.alpha, Template.transition.puzzle.edge);
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.happy, Template.ƒS.positionPercent(30, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T004);
        await Template.ƒS.Character.animate(Template.characters.antagonist, Template.characters.antagonist.pose.sleepy, Template.canvasRightEntry());
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T005);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "!!!");
        await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.excited, Template.ƒS.positionPercent(30, 90));
        await Template.ƒS.Character.hide(Template.characters.protagonist);
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.protagonist, text.protagonist.T001);
        await Template.ƒS.Speech.tell(Template.characters.antagonist, "...");
        await Template.ƒS.Speech.tell(Template.characters.antagonist, text.antagonist.T001);
        //await ƒS.Character.hide(characters.protagonist);
        //await ƒS.update(0);
        let firstOption = {
            option1: "Ist schon okay, ruh dich erstmal aus!",
            option2: "Ich will jetzt nicht aufstehen, siehst du doch. Du hast doch jetzt nichts Besseres zu tun."
        };
        let firstElement = await Template.ƒS.Menu.getInput(firstOption, "individualCSSClass");
        switch (firstElement) {
            case firstOption.option1:
                await Template.ƒS.Character.show(Template.characters.protagonist, Template.characters.protagonist.pose.pleased, Template.ƒS.positionPercent(30, 90));
                await Template.ƒS.Character.hide(Template.characters.protagonist);
                await Template.ƒS.update(0);
                break;
            case firstOption.option2:
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Ich glaub wohl ich hör nicht richtig!?");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Du bist so ein faules Kind geworden, siehst du nicht, dass ich Schmerzen habe?");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Warum motzt du denn gleich so rum ey.");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Du hast andauernd irgendwas, warum jetzt schon wieder?");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Entschuldigung, dass ich mir das nicht aussuchen konnte, du bewegst im Gegensatz keinen einzigen Finger hier im Haushalt.");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Jaja, dann muss ich halt jetzt extra aufstehen, meine Güte");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.antagonist, "Danke dir, das schaffst du auch alleine. Ich kann wirklich kaum noch was machen und will einfach nur ins Bett fallen.");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Dann halte ich dich nicht länger auf.");
        await Template.ƒS.Speech.tell(Template.characters.antagonist, "Warte, könntest du mir vielleicht noch kurz helfen?");
        await Template.ƒS.Speech.tell(Template.characters.antagonist, "Du müsstest noch draußen etwas Feuerholz für den Ofen rein bringen, sonst wird es hier heute Nacht sehr kalt im Haus.");
        let secondOption = {
            option1: "Ja natürlich, ich mach das schon. Ich möchte ja nicht, dass wir uns einen Ast abfrieren.",
            option2: "Aha, ich soll jetzt noch was für dich machen, aber du willst nichts für mich machen. Ich glaube das kannst du dir abschminken."
        };
        let secondElement = await Template.ƒS.Menu.getInput(secondOption, "individualCSSClass");
        switch (secondElement) {
            case secondOption.option1:
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Danke mein Schatz, du bist ein Engel! Was würde ich nur ohne dich machen.");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Seit dein Vater weg ist, musst du hier der Mann im Haus sein. ich kann leider nicht mehr alles machen.");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Ich muss zwei Jobs belegen, damit wir über die Runden kommen und jünger werde ich leider auch nicht.");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Deshalb bedeutet mir deine Hilfe sehr viel, danke dir!");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Das ist doch selbstverständlich, du musst dir da keine Gedanken machen. Ich werde mich um uns kümmern so gut es geht.");
                break;
            case secondOption.option2:
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Ich bin wahnsinnig enttäuscht von dir, deine Art bricht mir das Herz.");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Dein Vater hätte das nicht so gewollt von dir.");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Wage ja nicht ihn zu erwähnen!");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Tu nicht so als hätte er sich so viel um dich... um uns... gekümmert!");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Was ist nur passiert? Du warst früher so fröhlich und hilfsbereit.");
                await Template.ƒS.Speech.tell(Template.characters.antagonist, "Und nun machst du einen Aufstand wegen einer Tasse Kakao, weil deine kranke Mutter vor Schmerzen kaum noch stehen kann.");
                await Template.ƒS.Menu.getInput({ option1: "Es... es tut mir leid, ich weiß nicht was über mich gekommen ist." }, "individualCSSClass");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Du hast Recht, ich habe mich selbst verloren seit Papa nicht mehr ist.");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Als wäre ich von einem bösen Geist besessen, ich kann es nicht erklären.");
                await Template.ƒS.Speech.tell(Template.characters.protagonist, "Bitte lass es mich wieder gut machen.");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.antagonist, "Ich hab dich so sehr lieb, vergiss das bitte nie.");
        await Template.ƒS.Speech.tell(Template.characters.protagonist, "Niemals! Ich werde sofort das Holz holen und dir dann noch einen leckeren Kakao ans Bett bringen.");
        await Template.ƒS.Speech.tell(Template.characters.antagonist, "Das ist mein Kind!");
    }
    Template.Scene_02 = Scene_02;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Characters
    Template.hero = {
        name: "Lucy",
        level: 0,
        items: 0,
        dialog: {
            intro: [{ mood: "", animation: "", text: "", swap: "" }],
            room1: [{ mood: "", animation: "", text: "", swap: "" }],
            room2: [{ mood: "", animation: "", text: "", swap: "" }]
        }
    };
    Template.villain = {
        name: "Adam Ovajeh",
        dialog: {
            intro: [{ mood: "", animation: "", text: "", swap: "" }],
            room1: [{ mood: "", animation: "", text: "", swap: "" }],
            room2: [{ mood: "", animation: "", text: "", swap: "" }]
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
    Template.hero.dialog.intro = [
        { mood: "", animation: "", text: "...", swap: "" },
        { mood: "", animation: "", text: "W... Wo... Wo bin Ich?", swap: ">" },
        { mood: "", animation: "", text: "*Arrrgh*", swap: "" },
        { mood: "", animation: "", text: "...", swap: "" },
        { mood: "", animation: "", text: "Mein Kopf schmerzt sehr... Moment... Wer bist Du?", swap: ">" },
        { mood: "", animation: "", text: "Es tut mir Leid, dass Ich mich nicht an dich erinnern kann.", swap: "" },
        { mood: "", animation: "", text: "...", swap: "" },
        { mood: "", animation: "", text: "Ich kann mich nicht mal an mich selbst erinnern...", swap: ">" },
        { mood: "", animation: "", text: "Lucy... ein schöner Name. Leider kann Ich nichts damit verbinden, als herrsche eine pechschwarze Dunkelheit in meinem Kopf. Immer wenn Ich versuche, nach einem Moment aus meinem Leben zu greifen, stoße Ich vor eine Wand.", swap: ">" }
    ];
    // Raw
    "...";
    "W... Wo... Wo bin Ich?";
    "*Arrrgh*";
    "...";
    "Mein Kopf schmerzt sehr... Moment... Wer bist Du?";
    "Es tut mir Leid, dass Ich mich nicht an dich erinnern kann.";
    "...";
    "Ich kann mich nicht mal an mich selbst erinnern...";
    "Lucy... ein schöner Name. Leider kann Ich nichts damit verbinden, als herrsche eine pechschwarze Dunkelheit in meinem Kopf. Immer wenn Ich versuche, nach einem Moment aus meinem Leben zu greifen, stoße Ich vor eine Wand.";
    "*Hmmmm*";
    "Es fühlt sich so schlecht an, dass Ich nichts wiedererkenne, besonders meinen eigenen Vater. Apropros, Du musst mir noch Deinen Namen verraten.";
    "Danke, das ist lieb von dir! Aber vielleicht sollten wir uns darüner unterhalten, was mit mir passiert ist.";
    Template.villain.dialog.intro = [
        { mood: "happy", animation: "", text: "Guten Morgen... Ich hoffe Du hast dich gut erholt.", swap: ">" },
        { mood: "sad", animation: "", text: "Es ist okay, mein Schatz... Du scheinst eine leichte Vergesslichkeit zu haben, sie sollte hoffentlich gleich vorbei sein.", swap: ">" },
        { mood: "", animation: "", text: "Bitte mach dir keine Sorgen, wir schaffen schon noch, dass Du dich an Alles erinnerst. Ich fange einfach mal mit mir an: Ich bin dein Vater. Das macht dich natürlich zu meiner Tochter. Du bist meine tapfere Lucy (...)", swap: ">" },
        { mood: "", animation: "", text: "Ach entschuldige, ich heiße Michael. Deswegen musst Du dich keineswegs schlecht fühlen, mein Kind. Wie gesagt, wir stehen das zusammen durch, Du und Ich.", swap: ">" }
    ];
    // Raw
    "Guten Morgen... Ich hoffe Du hast dich gut erholt.";
    "Es ist okay, mein Schatz... Du scheinst eine leichte Vergesslichkeit zu haben, sie sollte hoffentlich gleich vorbei sein.";
    "Bitte mach dir keine Sorgen, wir schaffen schon noch, dass Du dich an Alles erinnerst. Ich fange einfach mal mit mir an: Ich bin dein Vater. Das macht dich natürlich zu meiner Tochter. Du bist meine tapfere Lucy (...)";
    "Ach entschuldige, ich heiße Michael. Deswegen musst Du dich keineswegs schlecht fühlen, mein Kind. Wie gesagt, wir stehen das zusammen durch, Du und Ich.";
    // Options
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map