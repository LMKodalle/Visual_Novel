namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("AUREA_NOVEL starting");
  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "./Images/Transitions/puzzle.png",
      edge: 1
    }
  }

  export let sound = {
    // Music
    backgroundTheme: "",

    // Sound
    click: ""

  }

  export let location = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/Bedroom_Night.png"
    }
  }

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        // Pfad als String angeben
        angry: "",
        happy: "",
        upset: ""
      }
    }
  }

  export let dataForSave = {

  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]")
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }
}