namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  // Transitions
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
  // Locations
  export let location = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/Bedroom_Night.png"
    }
  }

  // Characters
  export let characters = {
    narrator: {
      name: "Narrator"
    },
    protagonist: {
      name: "Lucy",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
  }

  // Animations
  export function weirdAnime(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 90), rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white") },
      end: { translation: ƒS.positionPercent(70, 90), rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
  }

  export function canvasRightEntry(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(130, 90) },
      end: { translation: ƒS.positionPercent(90, 90) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export let dataForSave = {
    namePlayer: "",
    points: 0,
    pagecount: 0
  }

  export let currentScene = "";

  // Menü
  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close"
  };

  let gameMenu: ƒS.Menu;
  let menu: boolean = true;
  let statusInventory: boolean = false;
  let selectedItemArray: any[] = [];

  export function clickInventory(_event: MouseEvent) {
    if (_event) {
      statusInventory = false;
      console.log(statusInventory);
    }
  }

  async function buttonFunctions(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
    }
  }

  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
  export let items = {
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

  export let state = {
    a: 1,
    b: "",
    c: 2
  };

  export let pages: string[] = [
    "<strong>Überschrift:</strong>blabla<br></br> <br>Seite 1</br>",
    "<strong>Überschrift</strong>",
  ];

  export function randomItem() {
    let randomIndex = Math.floor(Math.random() * items.Buchseiten.length);
    let randomItem = items.Buchseiten[randomIndex];
    if (dataForSave.pagecount < 6) {
      ƒS.Inventory.add(randomItem);
      items.Buchseiten.splice(randomIndex, 1);
      document.getElementById("pagecount").innerHTML = "Gesammelte Seiten" + " " + `${dataForSave.pagecount += 1}/6`;
      console.log("added", randomItem.name, `${dataForSave.pagecount}/6`);
    }
  }

  function hndItem(_event: CustomEvent): void {
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
            ƒS.Text.print(pages[0]);
          } else if (selectedItemArray.length > 0) {
            for (let i = 0; i <= document.getElementById("items").children.length; i++) {
              if (_event.detail == `Seite ${i}`) {
                console.log(`... with Seite ${i}`);
                if (selectedItemArray[0] != _event.detail) {
                  if (dataForSave.pagecount == 6) {
                    let itemsChild = document.getElementById("items").children;
                    let j = itemsChild.length;
                    while (j--) {
                      console.log("j =", j)
                      if (itemsChild[j].id == "Seite_1" || "Seite_2" || "Seite_3" || "Seite_4" || "Seite_5" || "Seite_6") {
                        itemsChild[j].parentNode.removeChild(itemsChild[j]);                      }
                    }
                    document.getElementById("combo").innerHTML = "Erstellt: Code";
                    ƒS.Inventory.add(items.Code);
                    codegenerator();
                  }
                } else {
                  document.getElementById("combo").innerHTML = "Nicht mit sich selbst kombinierbar";
                  selectedItemArray.splice(0, selectedItemArray.length);
                }
              }
            }
          }
          break;
      }
    }
  };

  function codegenerator () {
    for (let i = 0; i < items.Buchseiten.length; i++) {
      let codeArray = Array.from(items.Buchseiten[i].text);
      let randomIndex = Math.floor(Math.random() * items.Buchseiten[i].text.length);
      let randomSymbol = codeArray[randomIndex];
      var code = "";
      code += randomSymbol;  
    }
    console.log(code);
  }

  let counter = 0;

  function eventHandler(_event: MouseEvent) {
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

  function listen(_event: KeyboardEvent) {
    let nameItem = document.querySelectorAll("li > name");
    if (_event.code == "KeyC") {
      if (selectedItemArray.length == 0) {
        selectedItemArray.push(nameItem[counter].innerHTML);
        console.log(`combining ${selectedItemArray[0]} ...`)
        document.getElementById("combo").innerHTML = "Kombiniere ..."
      }
    }
  }

  document.addEventListener("keydown", hndKeypressForInventory);
  async function hndKeypressForInventory(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        if (!statusInventory) {
          console.log("open inventory");
          ƒS.Inventory.open();
          statusInventory = true;
          console.log(statusInventory);
        }
        else {
          console.log("close inventory");
          ƒS.Inventory.close();
          statusInventory = false;
          console.log(statusInventory);
        }
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        ƒS.Inventory.close();
        statusInventory = false;
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
    document.getElementById("inv").addEventListener("pointerdown", clickInventory);
    document.getElementById("items").addEventListener("pointerover", eventHandler);
    let scenes: ƒS.Scenes = [
      { scene: Scene_01, name: "Scene_01" },
      //  { scene: Scene_02, name: "Scene_02" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]")
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}