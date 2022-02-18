namespace Ovajeh {

    export async function protagonistCycle() {
        var currentProtagonistCycle
        switch (currentScene) {
            case "intro":
                currentProtagonistCycle = hero.dialog.intro;
                break;
            case "bibliothek":
                currentProtagonistCycle = hero.dialog.bibliothek;
                break;
            case "mirrorroom":
                currentProtagonistCycle = hero.dialog.mirrorroom;
                break;
        }
        for (let i of Object.values(currentProtagonistCycle)) {
            for (let key in i) {
                // console.log("protagonist key is:", key);
                if (key == "mood") {
                    console.log("protagonist mood", i.mood.valueOf());
                    switch (i.mood.valueOf()) {
                        case "happy":
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(20, 100));
                            await ƒS.update(0);
                            break;
                        case "sad":
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
                            await ƒS.update(0);
                            break;
                        case "angry":
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(20, 100));
                            await ƒS.update(0);
                            break;
                        case "normal":
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
                            await ƒS.update(0);
                            break;
                        case "shocked":
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
                            await ƒS.update(0);
                            break;
                        case "smile":
                            await ƒS.Character.hide(characters.protagonist);
                            await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.smile, ƒS.positionPercent(20, 100));
                            await ƒS.update(0);
                            break;
                    }
                }
                if (key == "animation") {
                    console.log("protagonist animation:");
                }
                if (key == "text") {
                    console.log("protagonist line:", i.text.valueOf());
                    await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, i.text.valueOf());
                }
                if (key == "swap") {
                    // console.log(i.text.length)
                    hero.dialog.intro.shift();
                }
            }
        }
    }
    /*export async function antagonistCycle() {
        var currentAntagonistCycle
        switch (currentScene) {
            case "intro":
                currentAntagonistCycle = villain.dialog.intro;
                break;
            case "room01":
                currentAntagonistCycle = villain.dialog.room1;
                break;
        }
        for (let i of Object.values(currentAntagonistCycle)) {
            for (let key in i) {
                // console.log("antagonist key is:", key);
                if (key == "mood") {
                    console.log("antagonist mood:", i.mood.valueOf());
                    switch (i.mood.valueOf()) {
                        case "happy":
                            await ƒS.Character.hide(characters.antagonist);
                            await ƒS.Character.show(characters.antagonist, characters.antagonist.pose.happy, ƒS.positionPercent(30, 90));
                            await ƒS.update(0);
                            break;
                        case "sad":
                            await ƒS.Character.hide(characters.antagonist);
                            await ƒS.Character.show(characters.antagonist, characters.antagonist.pose.upset, ƒS.positionPercent(30, 90));
                            await ƒS.update(0);
                            break;
                        case "angry":
                            await ƒS.Character.hide(characters.antagonist);
                            await ƒS.Character.show(characters.antagonist, characters.antagonist.pose.angry, ƒS.positionPercent(30, 90));
                            await ƒS.update(0);
                            break;
                    }
                }
                if (key == "animation") {
                    console.log("antagonist animation:", i.animation.valueOf());
                }
                if (key == "text") {
                    console.log("antagonist line:", i.text.valueOf());
                    await ƒS.Speech.tell(characters.antagonist, i.text.valueOf());
                }
                if (key == "swap") {
                    // console.log(i.text.length)
                    villain.dialog.intro.shift();
                    if (i.swap == ">") {
                        console.log("switch speaker")
                        protagonistCycle();
                        return;
                    }
                }
            }
        }*/
}