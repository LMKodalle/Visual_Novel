namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("Intro");
    
    let text = {
      narrator: {
        T001: "",
        T002: ""
      },
      protagonist: {
      } 
    }
    await ƒS.Location.show(location.bedroom);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T001);
    await ƒS.Character.hide(characters.protagonist);





  }
}