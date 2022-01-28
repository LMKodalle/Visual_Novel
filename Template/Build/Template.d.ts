declare namespace Template {
    function protagonistCycle(): Promise<void>;
    function antagonistCycle(): Promise<void>;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    export let sound: {
        backgroundTheme: string;
        click: string;
    };
    export let location: {
        bedroom: {
            name: string;
            background: string;
        };
    };
    export let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
                excited: string;
                veryangry: string;
                pleased: string;
            };
        };
        antagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
                sleepy: string;
            };
        };
        michela: {
            name: string;
        };
    };
    export function weirdAnime(): ƒS.AnimationDefinition;
    export function canvasRightEntry(): ƒS.AnimationDefinition;
    export let dataForSave: {
        namePlayer: string;
        points: number;
        pagecount: number;
    };
    export let currentScene: string;
    export function clickInventory(_event: MouseEvent): void;
    export let items: {
        Buchseiten: {
            name: string;
            description: string;
            investigate: string;
            text: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        }[];
        Code: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Fackel: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Schlüssel: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Seelenenergie: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Messer: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Zahn: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Salz: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Blut: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Engelsfeder: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Weihwasser: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Schlafsand: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Fläschchen: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Schaufel: {
            name: string;
            description: string;
            investigate: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        };
    };
    export let state: {
        a: number;
        b: string;
        c: number;
    };
    export let pages: string[];
    export function randomItem(): void;
    function hndItem(_event: CustomEvent): void;
    export {};
}
declare namespace Template {
    function Scene_01(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene_02(): ƒS.SceneReturn;
}
declare namespace Template {
    let hero: {
        name: string;
        level: number;
        items: number;
        dialog: {
            intro: {
                mood: string;
                animation: string;
                text: string;
                swap: string;
            }[];
            room1: {
                mood: string;
                animation: string;
                text: string;
                swap: string;
            }[];
            room2: {
                mood: string;
                animation: string;
                text: string;
                swap: string;
            }[];
        };
    };
    let villain: {
        name: string;
        dialog: {
            intro: {
                mood: string;
                animation: string;
                text: string;
                swap: string;
            }[];
            room1: {
                mood: string;
                animation: string;
                text: string;
                swap: string;
            }[];
            room2: {
                mood: string;
                animation: string;
                text: string;
                swap: string;
            }[];
        };
    };
}
