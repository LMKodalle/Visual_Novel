namespace Ovajeh {
    // Scene Mirror Room
    export async function Scene_Mirror_World(): ƒS.SceneReturn {
        currentScene = "mirrorworld";
        console.log(`current scene: ${currentScene}`);
        ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
        sfx("combat");
        mapListeners();
        closeUI();
        await ƒS.Location.show(location.intro.mirror_world);
        await ƒS.update(0);
        if (visitScene() === false) {
            await ƒS.Character.show(characters.michela, characters.michela.pose.smile, ƒS.positionPercent(50, 100));
            await ƒS.update(2);
            await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, `${save.protagonist.name}! Du hast es geschafft!`);
            await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, 'Sag mir eins...');
            await ƒS.Character.hide(characters.michela);
            await ƒS.Character.show(characters.michela, characters.michela.pose.angry, ƒS.positionPercent(50, 100));
            await ƒS.Character.hide(characters.michela);
            await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, 'Wirst du in der Lage sein das größte Übel zu besiegen? ...');
            await ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, 'Wirst du in der Lage sein... ADAM zu töten!?');
            await ƒS.Character.hide(characters.michela);
            await ƒS.update(2);
            await ƒS.Text.print("TO BE CONTINUED...");
        }
    }
}