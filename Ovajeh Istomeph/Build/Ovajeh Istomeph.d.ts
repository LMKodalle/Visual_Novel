declare namespace Ovajeh {
    function protagonistCycle(): Promise<void>;
}
declare namespace Ovajeh {
    class Character {
        name: string;
        level: number;
        health: number;
        experience: number;
        type: string;
        defense: number;
        damage: number;
        items: Object[];
        weapon: Weapon;
        winRatio: number;
        drawRatio: number;
        effective: number;
        equilibrium: number;
        weak: number;
        defend(): void;
        flee(): void;
        die(): void;
    }
}
declare namespace Ovajeh {
    class Enemy extends Character {
        constructor(_name: string, _level: number, _health: number, _experience: number, _type: string, _defense: number, _damage: number, _weapon: Weapon);
        attack(): string;
        checkType(): number;
        die(): Promise<void>;
        drop(): void;
    }
}
declare namespace Ovajeh {
    class Hero extends Character {
        constructor(_name: string, _level: number, _health: number, _experience: number, _type: string, _defense: number, _damage: number, _weapon: Weapon);
        attack(): Promise<void>;
        checkType(): number;
        flee(): Promise<void>;
        die(): Promise<void>;
    }
}
declare namespace Ovajeh {
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
        combatTheme: string;
        click: string;
        protagonist: {
            completion: string[];
            confirmation: string[];
            greeting: string[];
            farewell: string[];
            refusal: string[];
            misc: string[];
            damage: string[];
            death: string[];
            grunting: string[];
        };
        enemy: {
            completion: string[];
            confirmation: string[];
            greeting: string[];
            farewell: string[];
            refusal: string[];
            misc: string[];
            damage: string[];
            death: string[];
            grunting: string[];
        };
    };
    export let location: {
        intro: {
            mansion: {
                name: string;
                background: string;
            };
            bib: {
                name: string;
                background: string;
            };
            bib_dark: {
                name: string;
                background: string;
            };
            mirror: {
                name: string;
                background: string;
            };
            mirror_world: {
                name: string;
                background: string;
            };
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
                normal: string;
                sad: string;
                smile: string;
                shocked: string;
            };
        };
        antagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
            };
        };
        michela: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                normal: string;
                sad: string;
                smile: string;
                shocked: string;
            };
        };
        inCombat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                attack1: string;
                attack2: string;
                attack3: string;
                attack4: string;
                attack5: string;
                attack6: string;
                attack7: string;
                attack8: string;
                attack9: string;
                attack10: string;
                attack11: string;
                attack12: string;
                dashAttack1: string;
                dashAttack2: string;
                dashAttack3: string;
                dashAttack4: string;
                dashAttack5: string;
                dashAttack6: string;
                dashAttack7: string;
                dashAttack8: string;
                dashAttack9: string;
                dashAttack10: string;
                hurt1: string;
                hurt2: string;
                hurt3: string;
                hurt4: string;
            };
        };
    };
    export function canvasBottomEntry(): ƒS.AnimationDefinition;
    export function canvasBottomLeave(): ƒS.AnimationDefinition;
    export function damaged_1(): ƒS.AnimationDefinition;
    export function damaged_2(): ƒS.AnimationDefinition;
    export function damaged_3(): ƒS.AnimationDefinition;
    export function damaged_4(): ƒS.AnimationDefinition;
    export function damage_Cycle(): Promise<void>;
    export function attackAnimation(): Promise<void>;
    export function dashAttackAnimation(): Promise<void>;
    export function hurtAnimation(): Promise<void>;
    export let currentScene: string;
    export let visited_Scenes: String[];
    export let gameMenu: ƒS.Menu;
    export let menu: boolean;
    export let statusInventory: boolean;
    export let selectedItemArray: any[];
    export let counter: number;
    export let enemy: Enemy;
    export let enemyArray: Enemy[];
    export let player: Hero;
    export let hero_weapon: Weapon;
    export let enemy_weapon: Weapon;
    export let weapon_Class_Array: Weapon[];
    export let ui_Open: boolean;
    export function closeUI(): void;
    export function showUI(): void;
    export function visitScene(): boolean;
    export function mapListeners(): void;
    export let save: {
        nameArray: () => string;
        typeArray: () => string;
        protagonist: Hero;
        pagecount: number;
        code: string;
        weaponArray: Weapon[];
        visitedScenes: String[];
    };
    export function hero_healthbar(_health: number): void;
    export function hero_shieldbar(_health: number): void;
    export function enemy_healthbar(_health: number): void;
    export function enemy_shieldbar(_health: number): void;
    export function weaponItem(): void;
    export function changeWeapon(_nameWeapon: string): void;
    export function clickInventory(_event: MouseEvent): void;
    export let weaponCraft: {
        hero_name: () => string;
        enemy_name: () => string;
        hero_damage: () => number;
        enemy_damage: (_enemyLVL: number) => number;
        hero_rolls: () => number;
        enemy_rolls: (_enemyLVL: number) => number;
        hero_miss: () => number;
        enemy_miss: (_enemyLVL: number) => number;
        hero_crit: () => number;
        enemy_crit: (_enemyLVL: number) => number;
    };
    export let items: {
        Combat: {
            name: string;
            description: string;
            examine: string;
            text: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        }[];
        Buchseiten: {
            name: string;
            description: string;
            examine: string;
            text: string;
            image: string;
            static: boolean;
            handler: typeof hndItem;
        }[];
        Code: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Stuhlbein: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Buch: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Taschenuhr: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            examine2: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Notiz: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Lampenteil: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Kaminteil: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Reißzwecke: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Fackel: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Opferfackel: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Schlüssel: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Zahn: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Blut: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Blutsfeder: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Asche: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Scherbe: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Feder: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Stoff: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
            static: boolean;
            handler: typeof hndItem;
        };
        Spiegelessenz: {
            name: string;
            description: string;
            examine: string;
            image: string;
            text: string;
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
    export function codegenerator(): void;
    export function codecheck(): Promise<void>;
    export let gotWeapon: boolean;
    export function numberCodeCheck(): Promise<void>;
    function hndItem(_event: CustomEvent): Promise<void>;
    export function listen(_event: KeyboardEvent): Promise<void>;
    export function using(_event: MouseEvent): Promise<void>;
    export function craftWeaponHero(): void;
    export function craftWeaponEnemy(_enemyLVL: number): void;
    export function createPlayer(): void;
    export function checkExperience(): void;
    export function levelUp(_extraXP: number): Promise<void>;
    export var enemy_startingHP: number;
    export var enemy_startingSP: number;
    export function createEnemy(_enemy: string): void;
    export function input_1(): string;
    export function input_2(_heroDmg: number, _enemyDmg: number): void;
    export function slider(): void;
    export function startCombat(): Promise<void>;
    export function combat(): Promise<void>;
    export function show_CombatItems(): void;
    export function show_AllItems(): void;
    export function show_WeaponInfo(): Promise<void>;
    export function say(_pose: string, _text: string): Promise<void>;
    export function options(_option1: string, _option2: string): Promise<boolean>;
    export function sfx(_sfx: string): void;
    export function charSheet(): Promise<void>;
    export function checkForItems(_item: string): boolean;
    export {};
}
declare namespace Ovajeh {
    let kamin: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let couch: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let secret1: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let carpet: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let door: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let booksRR: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let booksR: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let booksL: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let table: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let ashesFound: boolean;
    let kaminKnow: boolean;
    let kaminteil: boolean;
    let carpetCheck: boolean;
    let watchCheckable: boolean;
    let gotAshes: boolean;
    let won: boolean;
    function positions_bibliothek(_event: MouseEvent): Promise<void>;
    function Scene_Bibliothek(): ƒS.SceneReturn;
}
declare namespace Ovajeh {
    function Scene_Combat(): ƒS.SceneReturn;
}
declare namespace Ovajeh {
    let chair: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
        linesA: {
            pose: string;
            text: string;
        }[];
    };
    let door1: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
        linesA: {}[];
    };
    let door2: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
        linesA: {}[];
    };
    let lamp: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
        linesA: {}[];
    };
    let steps: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
        linesA: {}[];
    };
    let window1: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
        linesA: {}[];
    };
    let carpetAgain: boolean;
    let carpetNo: boolean;
    let carpetDone: boolean;
    let lampenteil: boolean;
    let knowDoor: boolean;
    let doorOpen: boolean;
    let windowNotice: boolean;
    let gotKey: boolean;
    let knowWindow: boolean;
    function positions_intro(_event: MouseEvent): Promise<void>;
    function Scene_Intro(): ƒS.SceneReturn;
}
declare namespace Ovajeh {
    let bed: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let picture: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let mirror: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let schubladen: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let window2: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let secret2: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let exit1: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let exit2: {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        visited: boolean;
    };
    let mirrorRepaired: boolean;
    let mirrorOpened: boolean;
    let michelaVisited: boolean;
    function positions_mirror_room(_event: MouseEvent): Promise<void>;
    function Scene_Mirror_Room(): ƒS.SceneReturn;
}
declare namespace Ovajeh {
    function Scene_Mirror_World(): ƒS.SceneReturn;
}
declare namespace Ovajeh {
    let hero: {
        name: string;
        dialog: {
            intro: {
                mood: string;
                text: string;
            }[];
            bibliothek: {
                mood: string;
                text: string;
            }[];
            mirrorroom: {
                mood: string;
                text: string;
            }[];
        };
    };
    let michela: {
        name: string;
        dialog: {};
    };
}
declare namespace Ovajeh {
    class Weapon {
        level: number;
        name: string;
        damage: number;
        rolls: number;
        rollsArray: number[];
        miss: number;
        crit: number;
        weaponType: string;
        winBonus: number;
        drawBonus: number;
        constructor(_level: number, _name: string, _damage: number, _rolls: number, _miss: number, _crit: number);
        random_winBonus(): number;
        random_drawBonus(): number;
        type(): string;
        attack(): any;
    }
}
