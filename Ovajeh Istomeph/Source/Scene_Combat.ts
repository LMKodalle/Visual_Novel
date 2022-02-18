namespace Ovajeh {
  
    export async function Scene_Combat(): ƒS.SceneReturn {
      currentScene = "combat";
      console.log(`current scene: ${currentScene}`);
      ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
      sfx("combat");
      mapListeners()
      visitScene();
      await ƒS.Location.show(location.intro.bib_dark);
      ƒS.update(0);
      
      // Combat
      createEnemy("Zahnfee")
      startCombat();
    }
  }