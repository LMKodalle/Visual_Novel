namespace Template {
  
    export async function Scene_01(): ƒS.SceneReturn {
      console.log("Scene 1: Intro");
      currentScene = "intro";
      //protagonistCycle();
      //let menu: ƒS.Menu = ƒS.Menu.create({a: "Opt1", b: "Opt2"}, null);
      await ƒS.Speech.tell(characters.narrator,"Dies ist nur ein Test");
      //menu.close();
      //ƒS.Text.print("Hallo User")
    }
  }