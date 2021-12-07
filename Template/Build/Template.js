"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
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
    Template.location = {
        bedroom: {
            name: "Bedroom",
            background: "./Images/Backgrounds/Bedroom_Night.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // Pfad als String angeben
                angry: "",
                happy: "",
                upset: ""
            }
        }
    };
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("Intro");
        /*  let text = {
            narrator: {
              T001: "",
              T002: ""
            },
            protagonist: {
            }
          } */
        await Template.ƒS.Location.show(Template.location.bedroom);
        await Template.ƒS.update(Template.transition.puzzle.duration, Template.transition.puzzle.alpha, Template.transition.puzzle.edge);
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positions.bottomcenter);
        //await ƒS.update(1);
        //await ƒS.Speech.tell(characters.narrator, text.narrator.T001);
        //await ƒS.Character.hide(characters.protagonist);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map