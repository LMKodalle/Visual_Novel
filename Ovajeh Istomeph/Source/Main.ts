namespace Ovajeh {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  // Transitions
  console.log("AUREA_NOVEL starting");
  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "./Images/Transitions/puzzle.png",
      edge: 1
    },
  }

  export let sound = {
    // Music
    backgroundTheme: "./Audio/ambient.wav",
    combatTheme: "./Audio/combat.wav",

    // Sound
    click: "",

    protagonist: {
      completion: [
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Female/Karen Cenon/completion_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Female/Karen Cenon/completion_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Female/Karen Cenon/completion_3_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Female/Karen Cenon/completion_4_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Female/Karen Cenon/completion_8_karen.wav"  // ?
      ],
      confirmation: [
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_3_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_4_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_5_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_6_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_7_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_8_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_9_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Female/Karen Cenon/confirmation_10_karen.wav"
      ],
      greeting: [
        "./Audio/Super Dialogue Audio Pack v1/3 - Greeting/Female/Karen Cenon/greeting_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/3 - Greeting/Female/Karen Cenon/greeting_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/3 - Greeting/Female/Karen Cenon/greeting_3_karen.wav"
      ],
      farewell: [
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Female/Karen Cenon/farewell_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Female/Karen Cenon/farewell_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Female/Karen Cenon/farewell_3_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Female/Karen Cenon/farewell_4_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Female/Karen Cenon/farewell_5_karen.wav"
      ],
      refusal: [
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_3_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_4_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_5_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_7_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_8_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_9_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Female/Karen Cenon/refusal_10_karen.wav"
      ],
      misc: [
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_1_karen.wav", // GAME OVER
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_2_karen.wav", // HUUUUU?!
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_3_karen.wav", // HU?
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_4_karen.wav", // WOOOH!
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_12_karen.wav", // hahahaha
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_13_karen.wav", // *Räusper*
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_17_karen.wav", // Hmmm *traurig*
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_19_karen.wav" // Huh? *erschrocken*
      ],
      damage: [
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_3_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_4_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_5_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_6_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_7_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_8_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_9_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Karen Cenon/damage_10_karen.wav",
      ],
      death: [
        "./Audio/Super Dialogue Audio Pack v1/8 - Death/Female/Karen Cenon/death_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/8 - Death/Female/Karen Cenon/death_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/8 - Death/Female/Karen Cenon/death_3_karen.wav",
      ],
      grunting: [
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_1_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_2_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_3_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_4_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_5_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_6_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_7_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_8_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_9_karen.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Karen Cenon/grunting_10_karen.wav",
      ]
    },
    enemy: {
      completion: [
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Male/Meghan Christian/completion_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Male/Meghan Christian/completion_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Male/Meghan Christian/completion_3_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Male/Meghan Christian/completion_4_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Male/Meghan Christian/completion_8_meghan.wav"  // ?
      ],
      confirmation: [
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_3_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_4_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_5_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_6_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_7_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_8_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_9_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/2 - Confirmation/Male/Meghan Christian/confirmation_10_meghan.wav"
      ],
      greeting: [
        "./Audio/Super Dialogue Audio Pack v1/3 - Greeting/Female/Meghan Christian/greeting_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/3 - Greeting/Female/Meghan Christian/greeting_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/3 - Greeting/Female/Meghan Christian/greeting_3_meghan.wav"
      ],
      farewell: [
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Male/Meghan Christian/farewell_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Male/Meghan Christian/farewell_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Male/Meghan Christian/farewell_3_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Male/Meghan Christian/farewell_4_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/4 - Farewell/Male/Meghan Christian/farewell_5_meghan.wav"
      ],
      refusal: [
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_3_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_4_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_5_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_7_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_8_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_9_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/5 - Refusal/Male/Meghan Christian/refusal_10_meghan.wav"
      ],
      misc: [
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_1_meghan.wav", // GAME OVER
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_2_meghan.wav", // HUUUUU?!
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_3_meghan.wav", // HU?
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_4_meghan.wav", // WOOOH!
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_12_meghan.wav", // hahahaha
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_13_meghan.wav", // *Räusper*
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_17_meghan.wav", // Hmmm *traurig*
        "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_19_meghan.wav" // Huh? *erschrocken*
      ],
      damage: [
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_3_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_4_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_5_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_6_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_7_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_8_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_9_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/7 - Damage/Female/Meghan Christian/damage_10_meghan.wav",
      ],
      death: [
        "./Audio/Super Dialogue Audio Pack v1/8 - Death/Female/Meghan Christian/death_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/8 - Death/Female/Meghan Christian/death_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/8 - Death/Female/Meghan Christian/death_3_meghan.wav",
      ],
      grunting: [
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_1_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_2_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_3_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_4_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_5_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_6_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_7_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_8_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_9_meghan.wav",
        "./Audio/Super Dialogue Audio Pack v1/9 - Grunting/Female/Meghan Christian/grunting_10_meghan.wav",
      ]
    }
  }
  // Locations
  export let location = {
    intro: {
      mansion: {
        name: "mansion",
        background: "./Images/Backgrounds/mansion.jpg"
      },
      bib: {
        name: "bib",
        background: "./Images/Backgrounds/mansion_bib.jpg"
      },
      bib_dark: {
        name: "bibdark",
        background: "./Images/Backgrounds/mansion_bib_dark.jpg"
      },
      mirror: {
        name: "mirror",
        background: "./Images/Backgrounds/mirror_room.jpg"
      },
      mirror_world: {
        name: "mirrorworld",
        background: "./Images/Backgrounds/mirror_room_dark.jpg"
      }
    },
  }

  // Characters
  export let characters = {
    narrator: {
      name: "Narrator"
    },
    protagonist: {
      name: "Hero",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        // Pfad als String angeben
        angry: "./Images/Characters/hero/hero_angry.png",
        happy: "./Images/Characters/hero/hero_happy.png",
        normal: "./Images/Characters/hero/hero_normal.png",
        sad: "./Images/Characters/hero/hero_sad.png",
        smile: "./Images/Characters/hero/hero_smile.png",
        shocked: "./Images/Characters/hero/hero_shocked.png",
      }
    },
    antagonist: {
      name: "Adam Ovajeh",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        // Pfad als String angeben
        angry: "./Images/Characters/Rune-Free-Pack/Girl_Evil.png",
      }
    },
    michela: {
      name: "Michela",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        // Pfad als String angeben
        angry: "./Images/Characters/michela/michela_angry.png",
        happy: "./Images/Characters/michela/michela_happy.png",
        normal: "./Images/Characters/michela/michela_normal.png",
        sad: "./Images/Characters/michela/michela_sad.png",
        smile: "./Images/Characters/michela/michela_smile.png",
        shocked: "./Images/Characters/michela/michela_shocked.png",
      }
    },
    inCombat: {
      name: "combat",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        attack1: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_1.png",
        attack2: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_2.png",
        attack3: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_3.png",
        attack4: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_4.png",
        attack5: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_5.png",
        attack6: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_6.png",
        attack7: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_7.png",
        attack8: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_8.png",
        attack9: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_9.png",
        attack10: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_10.png",
        attack11: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_11.png",
        attack12: "./Images/Characters/Individual Sprite/Attack/Warrior_Attack_12.png",
        dashAttack1: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_1.png",
        dashAttack2: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_2.png",
        dashAttack3: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_3.png",
        dashAttack4: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_4.png",
        dashAttack5: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_5.png",
        dashAttack6: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_6.png",
        dashAttack7: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_7.png",
        dashAttack8: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_8.png",
        dashAttack9: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_9.png",
        dashAttack10: "./Images/Characters/Individual Sprite/Dash Attack/Warrior_Dash-Attack_10.png",
        hurt1: "./Images/Characters/Individual Sprite/Hurt-Effect/Warrior_hurt_1.png",
        hurt2: "./Images/Characters/Individual Sprite/Hurt-Effect/Warrior_hurt_2.png",
        hurt3: "./Images/Characters/Individual Sprite/Hurt-Effect/Warrior_hurt_3.png",
        hurt4: "./Images/Characters/Individual Sprite/Hurt-Effect/Warrior_hurt_4.png"
      }
    }
  }

  // Animations
  export function canvasBottomEntry(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 160) },
      end: { translation: ƒS.positionPercent(80, 100) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function canvasBottomLeave(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 110) },
      end: { translation: ƒS.positionPercent(80, 200) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function damaged_1(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 100) },
      end: { translation: ƒS.positionPercent(22, 102) },
      duration: 0.05,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  }

  export function damaged_2(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(22, 102) },
      end: { translation: ƒS.positionPercent(20, 98) },
      duration: 0.05,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  }

  export function damaged_3(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 98) },
      end: { translation: ƒS.positionPercent(18, 102) },
      duration: 0.05,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  }

  export function damaged_4(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(18, 102) },
      end: { translation: ƒS.positionPercent(20, 100) },
      duration: 0.05,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  }

  export async function damage_Cycle() {
    for (let i = 0; i <= 2; i++) {
      await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.angry, damaged_1());
      await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.angry, damaged_2());
      await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.angry, damaged_3());
      await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.angry, damaged_4());
    }
  }

  export async function attackAnimation() {
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack1, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack2, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack3, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack4, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack5, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack6, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack7, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack8, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack9, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack10, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack11, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack12, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.attack1, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.update(0.1)
  }

  export async function dashAttackAnimation() {
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack1, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack2, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack3, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack4, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack5, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack6, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack7, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack8, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack9, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack10, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.dashAttack1, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.update(0.1)
  }

  export async function hurtAnimation() {
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.hurt1, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.hurt2, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.hurt3, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.Character.show(characters.inCombat, characters.inCombat.pose.hurt4, ƒS.positionPercent(50, 50));
    await ƒS.update(0.1)
    await ƒS.Character.hide(characters.inCombat);
    await ƒS.update(0.1)
  }

  // Main Code
  export let currentScene: string;
  export let visited_Scenes: String[] = [];
  export let gameMenu: ƒS.Menu;
  export let menu: boolean = true;
  export let statusInventory: boolean = false;
  export let selectedItemArray: any[] = [];
  export let counter = 0;
  export let enemy: Enemy;
  export let enemyArray: Enemy[] = [];
  export let player: Hero;
  export let hero_weapon: Weapon;
  export let enemy_weapon: Weapon;
  export let weapon_Class_Array: Weapon[] = [];
  export let ui_Open: boolean;
  let combine: any;
  let use: any;

  export function closeUI() {
    document.getElementsByName("div").forEach(meterStuff => meterStuff.hidden = true);
    document.getElementsByName("speech").forEach(meterStuff => meterStuff.hidden = true);
    ui_Open = false;
  }

  export function showUI() {
    if (currentScene == "combat") {
      document.getElementsByName("div").forEach(meterStuff => meterStuff.hidden = false);
      document.getElementsByName("speech").forEach(meterStuff => meterStuff.hidden = false);
    } else document.getElementsByName("speech").forEach(meterStuff => meterStuff.hidden = false);
    ui_Open = true;
  }

  export function visitScene(): boolean {
    ƒS.Speech.setTickerDelays(20, 1);
    if (save.visitedScenes.indexOf(currentScene) === -1) {
      save.visitedScenes.push(currentScene);
      console.log(`added ${currentScene} to first visited locations`);
      return false;
    } else {
      console.log(`${currentScene} was already visited before`);
      return true;
    }
  }

  export function mapListeners() {
    console.log("Listeners re-engaged");
    switch (currentScene) {
      case "intro":
        document.addEventListener("click", positions_intro);
        document.removeEventListener("click", positions_bibliothek);
        document.removeEventListener("click", positions_mirror_room);
        break;
      case "bibliothek":
        document.addEventListener("click", positions_bibliothek);
        document.removeEventListener("click", positions_intro);
        document.removeEventListener("click", positions_mirror_room);
        break;
      case "mirrorroom":
        document.addEventListener("click", positions_mirror_room)
        document.removeEventListener("click", positions_intro);
        document.removeEventListener("click", positions_bibliothek);
        break;
      case "combat":
        document.removeEventListener("click", positions_intro);
        document.removeEventListener("click", positions_bibliothek);
        document.removeEventListener("click", positions_mirror_room);
        break;
    }
  }


  // Save Data (Data for Save)
  export let save = {
    /*
    Hero Starting Stats ->
    level: 1,
    experience: 0,
    health: 100,
    type: "Human",
    defense: 100,
    damage: 1,
    */
    nameArray: function () {
      let name: string[] = ["Lucy", "Alice", "Cecile", "Camille", "Elise", "Zara", "Irene", "Mina"];
      let r = Math.floor(Math.random() * name.length);
      return name[r];
    },
    typeArray: function () {
      let type: string[] = ["Love", "Hate", "Dream", "Destruction"];
      let r = Math.floor(Math.random() * type.length);
      return type[r];
    },
    protagonist: player,
    pagecount: 0,
    code: "",
    weaponArray: weapon_Class_Array,
    visitedScenes: visited_Scenes
  };

  //document.getElementsByName("hero_health").forEach(meterStuff => meterStuff.hidden = true)

  export function hero_healthbar(_health: number) {
    let percentHealth = (50 + (save.protagonist.level * 50)) / 100;
    //console.log(percentHealth);
    let percentDmg = (_health / percentHealth);
    //console.log(percentDmg);
    (document.getElementById("herohealth") as HTMLMeterElement).value -= percentDmg;
    console.log(`${save.protagonist.name} health to ${(document.getElementById("herohealth") as HTMLMeterElement).value} %`);
  }

  export function hero_shieldbar(_health: number) {
    let percentShield = (80 + (save.protagonist.level * 20)) / 100;
    //console.log(percentHealth);
    let percentDmg = (_health / percentShield);
    //console.log(percentDmg);
    (document.getElementById("heroshield") as HTMLMeterElement).value -= percentDmg;
    console.log(`${save.protagonist.name} shield to ${(document.getElementById("heroshield") as HTMLMeterElement).value} %`);
  }

  export function enemy_healthbar(_health: number) {
    let percentHealth = enemy_startingHP / 100;
    //console.log(percentHealth);
    let percentDmg = (_health / percentHealth);
    //console.log(percentDmg);
    (document.getElementById("enemyhealth") as HTMLMeterElement).value -= percentDmg;
    console.log(`${enemy.name} health to ${(document.getElementById("enemyhealth") as HTMLMeterElement).value} %`);
  }

  export function enemy_shieldbar(_health: number) {
    let percentShield = enemy_startingSP / 100;
    //console.log(percentHealth);
    let percentDmg = (_health / percentShield);
    //console.log(percentDmg);
    (document.getElementById("enemyshield") as HTMLMeterElement).value -= percentDmg;
    console.log(`${enemy.name} shield to ${(document.getElementById("enemyshield") as HTMLMeterElement).value} %`);
  }

  export function weaponItem() {
    for (let i = 0; i < save.weaponArray.length; i++) {
      let weapon = {
        name: save.weaponArray[i].name,
        description: `Kampf`,
        examine: `Typ: ${save.weaponArray[i].weaponType}`,
        text: "Eine magische Waffe der Spiegelwelt, geschmiedet aus Sanchezium.",
        image: "./Images/Items/Export_64/SwordWood.png",
        static: true,
        handler: hndItem
      }
      //items.Combat.push(weapon);
      console.log(items.Combat);
      ƒS.Inventory.add(weapon);
    }
  }

  export function changeWeapon(_nameWeapon: string) {
    for (let i = 0; i < save.weaponArray.length; i++) {
      if (save.weaponArray[i].name == _nameWeapon) {
        save.protagonist.weapon = save.weaponArray[i];
        save.protagonist.type = save.weaponArray[i].weaponType;
        console.log(`equipped ${save.protagonist.weapon.name}`);
        console.log(`${save.protagonist.name}'s type changed to ${save.protagonist.type}`);
        console.log(save.protagonist);
      }
    }
  }

  // Menü
  let inGameMenu = {
    save: "Save",
    load: "Load",
    rules: "Controls",
    close: "Close"
  };

  export function clickInventory(_event: MouseEvent) {
    if (_event) {
      statusInventory = false;
      console.log(statusInventory);
      mapListeners();
      combine = undefined;
      if (currentScene == "combat") {
        combat();
      }
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
      case inGameMenu.rules:
        await ƒS.Text.print("<span>Inventar: Öffnen = 'I' Schließen = 'I' / 'ESC' / 'Close Button'</span><br> \
        <span>Menu: Öffnen = 'M' Schließen = 'M'</span><br><span>Hover über Items: Examine = 'E' Combine = 'C' Use = 'U'</span>")
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
        console.log("save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log("close");
          gameMenu.close();
          menu = false;
        }
        else {
          console.log("open");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }

  let hero_weapNameArray = ["Fäuste", "Messer", "Rostiger Nagel", "Schwert", "Dolch", "Axt", "Eisenstab", "Keule"];
  let hero_weapLetterArray = ['der Engel', 'der Finsternis', 'der Vernunft', 'des Todes', 'der Rache', 'des Himmels', 'des Teufels',
    'der Nacht', 'der Verdammnis', 'des Mondes', 'der Sonne', 'des Lichtes', 'des Hungers'];
  let enemy_weapNameArray = ["Fäuste", "Messer", "Rostiger Nagel", "Schwert", "Dolch", "Axt", "Eisenstab", "Keule"];
  let enemy_weapLetterArray = ['der Folter', 'der Geister', 'des Blutes', 'des Todes', 'der Rache', 'des Terrors', 'des Teufels',
    'der Nacht', 'der Verdammnis', 'des Mordes', 'des Sadisten', 'des Lords', 'des Hungers'];
  export let weaponCraft = {
    hero_name: function () {
      let nR = Math.floor(Math.random() * hero_weapNameArray.length);
      let lR = Math.floor(Math.random() * hero_weapLetterArray.length);
      let name = `${hero_weapNameArray[nR]} ${hero_weapLetterArray[lR]}`;
      hero_weapNameArray.splice(nR, 1), hero_weapLetterArray.splice(lR, 1);
      console.log(`hero weapon name: ${name}`);
      return name;
    },
    enemy_name: function () {
      let nR = Math.floor(Math.random() * enemy_weapNameArray.length);
      let lR = Math.floor(Math.random() * enemy_weapLetterArray.length);
      let name = `${enemy_weapNameArray[nR]} ${enemy_weapLetterArray[lR]}`;
      enemy_weapNameArray.splice(nR, 1), enemy_weapLetterArray.splice(lR, 1);
      console.log(`enemy weapon name: ${name}`);
      return name;
    },
    hero_damage: function () {
      let dR = Math.floor(Math.random() * (10 * save.protagonist.level)) + (5 * save.protagonist.level);
      console.log(`hero weapon damage: ${dR}`);
      return dR;
    },
    enemy_damage: function (_enemyLVL: number) {
      let dR = Math.floor(Math.random() * (8 * _enemyLVL)) + (2 * _enemyLVL);
      console.log(`enemy weapon damage: ${dR}`);
      return dR;
    },
    hero_rolls: function () {
      let rR = Math.floor(Math.random() * (save.protagonist.level + 1)) + 1;
      console.log(`hero weapon roll amount: ${rR}`);
      return rR;
    },
    enemy_rolls: function (_enemyLVL: number) {
      let rR = Math.floor(Math.random() * (_enemyLVL)) + 1;
      console.log(`enemy weapon roll amount: ${rR}`);
      return rR;
    },
    hero_miss: function () {
      let mR = (Math.floor(Math.random() * (6 - save.protagonist.level)) + 1) / 10;
      console.log(`hero weapon miss chance: ${mR}`);
      return mR;
    },
    enemy_miss: function (_enemyLVL: number) {
      let mR = (Math.floor(Math.random() * (8 - _enemyLVL)) + 2) / 10;
      console.log(`enemy weapon miss chance: ${mR}`);
      return mR;
    },
    hero_crit: function () {
      let cR = Math.floor(Math.random() * (15 - 11 + 1) + 11) / 10
      console.log(`hero weapon crit multiplier: ${cR}`);
      return cR;
    },
    enemy_crit: function (_enemyLVL: number) {
      let cR = Math.floor(Math.random() * (15 - 11 + 1) + 11) / 10;
      console.log(`enemy weapon crit multiplier: ${cR}`);
      return cR;
    }
  }
  // Items
  export let items = {
    Combat: [{
      name: "Lebenstrank",
      description: "Kampf",
      examine: "Die Flüssigkeit glitzert und leuchtet in roten Farbtönen",
      text: "Tränke des Lebens sind Meisterwerke der Alchemiekunst und gehören zu der Grundausrüstung jedes Wesens,\
      welches nach der Ewigkeit sehnt",
      image: "./Images/Items/Pots/Icon1.png",
      static: true,
      handler: hndItem
    },
    {
      name: "Essenz der Liebe",
      description: "Kampf",
      examine: "Eine selstsame Frucht, die unglaubliche Euphorie auslöst",
      text: "Jahrtausende alt ist dieses Obst und kann nur von Wesen mit außerordentlichen Verdauungsorganen verkraftet werden.\
    Essen auf eigene Gefahr, bei Erfolg ist der emotionale Gewinn immens",
      image: "./Images/Items/Pots/Icon25.png",
      static: true,
      handler: hndItem
    }
    ],
    Buchseiten: [{
      name: "Seite 1",
      description: "Lore",
      examine: "",
      text: "Die Möglichkeit, dass ein Parallel-Universum neben unserem existiert, ist gar nicht so unwahrscheinlich. Aber was ist mit einem Parallel-Universum überhaupt gemeint? Die simple Antwort könnte heißen, dass es lediglich eine Kopie unseres eigenen Kosmos ist. \
      Natürlich stößt der aktuelle Forschungsstand in diesem Bereich der Physik an seine Grenzen, daher sind die Meinungen dazu sehr unterschiedlich. Die komplexere Antwort könnte daher sein, dass es alle Möglichkeiten, die bislang hätten passieren können, in unendlich vielen Kopien unseres Universums tatsächlich passiert sind. \
      Ein anderer Verlauf der Geschichte der Menschheit wäre ein noch viel zu einfacher Ansatz. Jede noch so kleine mögliche Änderung des Zustandes könnte unbeschreibliche Auswirkungen auf die Zukunft haben.",
      image: "./Images/Items/Export_64/DocumentEmpty.png",
      static: true,
      handler: hndItem
    },
    {
      name: "Seite 2",
      description: "Lore",
      examine: "",
      text: "Der Schmetterlingseffekt hat enorme Auswirkungen, bei einer winzigen Veränderung. So kann die kleinste Änderung einer Entscheidung eines Menschen zu einer komplett anderen Lebenslaufbahn führen. Man kann davon ausgehen, dass bei unendlich vielen Parallelwelten, auch unendlich viele Versionen \
      des eigenen Ichs die Entscheidungen trafen, die für die unendlich vielen anderen Versionen als unmöglich wahrgenommen wurden. Wie viele Versionen von sich selbst würden wohl in der Lage sein, einfach die nackte Hand auf eine heiße Herdplatte zu legen, ohne groß nachzudenken. Ein vernünftiger Mensch würde sagen, \
      dass dies niemals in Frage käm, so ganz ohne Grund. Dabei ist es egal, wie vernünftig die Entscheidung ist, etwas zu tun. Selbst wenn nur eine Version in einer Trilliarde Version so etwas tun würde, wären es weiterhin unendlich viele Versionen, die es getan haben. Das ist das Problem mit Unendlichkeit, es ist egal wie \
      unwahrscheinlich die Möglichkeit ist, sie ist trotzdem garantiert.",
      image: "./Images/Items/Export_64/DocumentEmpty.png",
      static: true,
      handler: hndItem
    },
    {
      name: "Seite 3",
      description: "Lore",
      examine: "",
      text: "Wie unfair das wohl sein muss, eine Version seiner Selbst zu treffen und dann festzustellen, dass man es deutlich besser oder schlechter als sein eigenes Ich aus einer anderen Welt hat. Dann merkt man endlich, wie Wichtig das Equilibrium der Welten ist. Ein Zustand, in dem es keine Alternativen mehr gibt, sondern alle \
      am selben Strang ziehen. Wenn auf einmal Alles möglich wird. Wenn nurnoch Frieden herrscht und die Natur im Einklang mit sich leben und gedeihen kann. Was wäre, wenn man einen Neustart wagen könnte, abseits der unendlich vielen Universen? Eine Dimension, die durch alle Kosmen fließt und von überall aus zugänglich ist? \
      Was wäre nur der ungeheure Preis, den man für ewigen Frieden zahlen müsste?",
      image: "./Images/Items/Export_64/DocumentEmpty.png",
      static: true,
      handler: hndItem
    },
    {
      name: "Seite 4",
      description: "Lore",
      examine: "",
      text: "Niemals hätte ich für möglich gehalten, dass es eine Antwort auf all die Fragen gibt. Mein ganzes Leben lang habe ich die Ecken der Welt besucht, um eine Antwort zu finden. Um wenigstens einen winizig kleinen Hoffnungsschimmer zu erhalten. Ich war am Ende angelangt, doch dann habe ich einen tiefen Blick in mich selbst gewagt. \
      Ich erkannte, dass die Antwort immer bei mir war. Ich musste allerdings erst bis zum Ende reisen, bis ich einen Neuanfang finden konnte. Erst als ich bereit war Alles loszulassen und akzeptierte, dass ich versagt habe, erst dann habe ich meinen letzten Wunsch bekommen. \
      Das Nächste, was ich sah, war mein Sturz durch die Sterne. Aufgeladen mit unbeschreiblicher Energie, landete ich schließlich in dieser Welt. Ich war ganz allein, kein Leben weit und breit. Keine Farben und pure Stille, nur mich Selbst und mein Wille.",
      image: "./Images/Items/Export_64/DocumentEmpty.png",
      static: true,
      handler: hndItem
    },
    {
      name: "Seite 5",
      description: "Lore",
      examine: "",
      text: "Ich habe eine ganze Ewigkeit geruht, bis ich mich erinnern konnte. Mein Wunsch, der in Erfüllung ging und meine Verantwortung, die ich damit zu erfüllen hatte. Damit lösten sich endlich die Ketten des Schlafes und ich war frei. Mit nur einem Gedankenstrom erweckte ich ganze Flüsse und damit Leben. \
      Doch schnell wurd mir klar, dass es keine Entwicklung gab. Das Leben stand still, lediglich einfache Organismen, die in Frieden koexistierten. Mein Wunsch wurde zum Fluch und mir wurde klar, welch ungeheuren Preis ich dafür zahlen musste. Ich war gezwungen, der Wahrheit ins Auge zu sehen. Es muss Opfer geben, damit \
      Großes entstehen kann. Ich wurde wütend, ich wurde bitter. Ich war verdammt zu einer Ewigkeit des Stillstands. Jeder Organismus kümmerte in Einsamkeit vor sich rum. Es gab keinen Grund für Zusammenschluss, kein Grund zur Sorge. Keine einzige Zelle hat sich fortbewegt, keine wurde krank. Nichts wurde probiert, nichts wurde gelernt. \
      Es war die Hölle im Paradies. Doch ich war nicht zu mehr in der Lage, meine Kräfte waren gebunden an meine Werte.",
      image: "./Images/Items/Export_64/DocumentEmpty.png",
      static: true,
      handler: hndItem
    },
    {
      name: "Seite 6",
      description: "Lore",
      examine: "",
      text: "Lange habe ich in meinem Geiste verbracht und über eine Lösung philosophiert. Manchmal muss man zurück ans Ende, um neu zu starten. Am Ende meines weltlichen Lebens war ich bereit alles loszulassen, weil ich die Antwort für mich fand, als ich tief in meine Seele hinab blickte. Was ich dort fand hat mich in Rage versetzt. Es hat mich angewidert, ich wollte es los werden. \
      Denn was ich dort fand, war mich selbst. All meine Fehler, die mich kleinste Entscheidungen in große Katastrophen verwandeln ließen. Das Streben nach Perfektion, nach Frieden und Gesundheit, all das hat mich heruntergezogen. Als ich mich dazu entschied, dies alles hinter mir zu lassen, erst dann habe ich wirklich bekommen, was ich immer wollte. \
      Doch am Ende hat es mich wieder eingeholt. War es der Frieden zwischen Lebenwesen, den ich wirklich wollte? Oder war es doch der innere Frieden? Ich zögerte nicht lange und verspiegelte die Barrieren meiner Welt. Das Chaos brach aus, als sich die Organismen begannen selbst zu hassen und zu zerstören. \
      Manche begannen sich auf eine Weise zu verformen, die ich unmöglich hätte vorhersehen können. Ein paar dieser Kreaturen schafften auszubrechen, aber niemals ohne die Hilfe von außerhalb.",
      image: "./Images/Items/Export_64/DocumentEmpty.png",
      static: true,
      handler: hndItem
    }
    ],
    Code: {
      name: "Code",
      description: "Aus den markierten Buchstaben zusammengesetzt",
      examine: "Ein geheimer Code, der sich aus den markierten Buchstaben und Ziffern der einzelnen Seiten zusammensetzt",
      image: "./Images/Items/Export_64/Scroll.png",
      text: "",
      static: true,
      handler: hndItem
    },
    Stuhlbein: {
      name: "Stuhlbein",
      description: "Vom Stuhl abgebrochen",
      examine: 'Ein sehr qualitativ hochwertiges Holz wurde für Adams Lieblingsstuhl verwendet. Der Mann hat definitv Stil, nicht nur wenn es um die Einrichtung geht. \
      Ich wunder mich nur, ob die Inschrift: "Nimm micht mit", tatsächlich von Michela stammt. Nur sie allein wusste von dem beschädigten Stuhlbein. Aber warum würde sie \
      einen Hinweis ausgerechnet so hinterlassen. Vielleicht muss sie unbemerkt bleiben und kann so Nachrichten an mich allein hinterlassen. Das würde trotzdem nicht erklären \
      warum ich das gesamte Stuhlbein mitnehmen sollte, wohin überhaupt? Ich muss davon ausgehen, dass ich es noch für etwas benötigen werde, nur was?',
      image: "./Images/Items/PNG/Transperent/Icon40.png",
      text: "Was ist das nur für ein Holz? Es hat ungewöhnliche Fasern.",
      static: true,
      handler: hndItem
    },
    Buch: {
      name: "Buch",
      description: "Klassische Volkslieder auf Latein",
      examine: "Ungewöhnlich unbalanciert, das Gewicht stimmt auch nicht wirklich für ein Buch dieser Größe. Tatsächlich! \
      Die ersten Seiten sind lediglich ein Cover-Up. Danach kommen nur Fake-Seiten, die erste davon ist festgeklebt... Komisch. \
      Ich löse sie vorsichtig... Ein kleines Geheimfach!? Der Rest der Fake-Seiten wurde dafür ausgestanzt. Und was ist da drin?",
      image: "./Images/Items/Export_64/Tome.png",
      text: "vesperum requiem Musica post Franciscum Schubert: \
      Sol tranquillus est et pulcher, ipse in silva viridi requiescit! \
      Mira serenitas vespere dulciter flores oculos claudit. \
      Vela cadunt ultima, vesper abrumpitur ultima vesperi Mirabile vespertinum carmen sonat per tilia in cymiterio. \
      Mira vespera per Lindenfriedhof resonat.<br>Das ist wohl das langweiligste Buch, was Adam besitzt. Passt aber kein \
      bisschen zu ihm.",
      static: true,
      handler: hndItem
    },
    Taschenuhr: {
      name: "Taschenuhr",
      description: "Blaues Gehäuse mit Gravur",
      examine: "Ein leicht blau-metallisches Gehäuse, ziemlich leicht. Ich würde sie nicht gerade wertvoll einschätzen, aber \
      Adam sieht das wohl ganz anders. Die Gravur ist schwierig auszumachen, da sie bereits am verbleichen ist. Könnte ein Kasten sein, \
      oder ein Schachbrett. Doch nicht, ich erkenne viele Punkte in einem Gitter angeordnet. Habe ich das schonmal gesehen irgendwo? \
      Mal schauen, was das Ziffernblatt verrät... Hmmm, die Zeiger stehen alle still.", // 11/33/55
      image: "./Images/Items/Transperent/Icon11.png",
      text: "Diese Taschenuhr befand sich in Adams Buch über lateinische Volkslieder. Aber warum würde er sie so geheim halten?",
      examine2: "Natürlich! Die Zeiger stehen alle still und zeigen auf jeweils eine Zahl. Es ist 11:33 Uhr und 5 Sekunden vor der nächsten vollen Minute",
      static: true,
      handler: hndItem
    },
    Notiz: {
      name: "Notiz",
      description: "Text mit Zeichnung",
      examine: `Warum würde so eine Notiz im Couchspalt stecken? "Vergiss 'es' nicht"?... Was soll das nur bedeuten? Ist das Adams Handschrift? \
      Komm schon, was hast du nur gemacht Adam? Woran wolltest du dich erinnern? Dazu die Zeichnung: Einfach ein Rechteck mit etlichen Punkten. \
      Die Zeichnung ist kaum zu erkennen, als wurde sie mit einem spitzen Gegenstand eingeritzt. Da passt was nicht zusammen...`,
      image: "./Images/Items/1 Icons/Icons_29.png",
      text: `"Vergiss 'es' nicht"`,
      static: true,
      handler: hndItem
    },
    Lampenteil: {
      name: "Lampenteil",
      description: "Schlüsselähnliches Lampenstück",
      examine: "Dieses Stück einer Lampe ist aus Metall und könnte relativ einfach in eine Schlüsselform gebogen werden. Alleine würde dieses Stück allerdings nicht ausreichen",
      image: "./Images/Items/Transperent/Icon39.png",
      text: "Wo finde ich noch so ein ähnliches Stück?",
      static: true,
      handler: hndItem
    },
    Kaminteil: {
      name: "Kaminteil",
      description: "Schlüsselähnliches Kaminstück",
      examine: "Ein metallisches Teil des Kamingeschirrs. Es sind noch Reste der Kaminasche dran, welche dem Stückchen ein trübes Aussehen verpasst. \
      Zusammen mit einem weiteren Stück Metall könnte eine Art Dietrich oder Schlüssel gebastelt werden.",
      image: "./Images/Items/Transperent/Icon25.png",
      text: "Ohne ein zweites Stück nicht zu gebrauchen",
      static: true,
      handler: hndItem
    },
    Reißzwecke: {
      name: "Reißzwecke",
      description: "Klein und spitz",
      examine: 'Bei genauer Betrachtung kann man ein ganz bisschen altes getrocknetes Blut erkennen. Vielleicht sollte die Spitze vor nächster "Blutabnahme" noch gereinigt werden. Sicher ist sicher!',
      image: "./Images/Items/1 Icons/Icons_20.png",
      text: "Nützlich, oder doch nur Schrott?",
      static: true,
      handler: hndItem
    },
    Fackel: {
      name: "Fackel",
      description: "",
      examine: "Eine ungewöhnliche Fackel, die aus einem Stuhlbein und etwas Stoff gebaut wurde.",
      image: "./Images/Items/Transperent/Icon16.png",
      text: "Ein eher primitiver Weg, um Licht in die Dunkelheit zu bringen.",
      static: true,
      handler: hndItem
    },
    Opferfackel: {
      name: "Opferungsfackel",
      description: "",
      examine: "Die Fackel der Opferung! Nur mit Blut entfachbar und die einzige Möglichkeit, ein Monster der Spiegeldimension zu beschwören. Das Feuer ist atemberaubend. Es sprüht lauter Funken, so ähnlich wie eine Wunderkerze. Damit sollte man nicht zu nahe an leicht entflammbaren Gegenständen gehen.",
      image: "./Images/Items/Transperent/Icon49.png",
      text: "Wo könnte ich damit ein Feuer entfachen, ohne viel Zeit zu verlieren?",
      static: true,
      handler: hndItem
    },
    Schlüssel: {
      name: "Schlüssel",
      description: "",
      examine: "Damit könnt Michelas Zimmertür geknackt werden. Es ist allerdings kein perfekter Schlüsselersatz.",
      image: "./Images/Items/1 Icons/Icons_09.png",
      text: "Mit dem Aufschließen der Tür sollte ich nicht lange warten.",
      static: true,
      handler: hndItem
    },
    Zahn: {
      name: "Zahn",
      description: "Golden",
      examine: "Der Zahn war auf einmal unter dem Kopfkissen von Michelas Bett. Das Gold ist sehr rein, die Oberfläche spiegelt die Umgebung fast perfekt wieder. Auch vom Gewicht her müsste das Gold den maximalen Reinheitsgrad haben.",
      image: "./Images/Items/1 Icons/Icons_12.png",
      text: "Ich frage mich, wem dieser Zahn mal gehörte.",
      static: true,
      handler: hndItem
    },
    Blut: {
      name: "Blut",
      description: "Frisch und hellrot",
      examine: "Mit Hilfe der Reißzwecke abgenommen. Sollte nicht zu lange an der Luft bleiben, am Besten direkt weiterverwenden.",
      image: "./Images/Items/Pots/Icon13.png",
      text: "Sollte ich es zum Schreiben benutzen?",
      static: true,
      handler: hndItem
    },
    Blutsfeder: {
      name: "Blutsfeder",
      description: "",
      examine: "Diese engelhafte Feder funktioniert tadellos als Träger für das Blut. Damit zu unterzeichnen, sollte kein Problem darstellen.",
      image: "./Images/Items/1 Icons/Icons_41.png",
      text: "Die Federspitze trieft nur so vor Blut, obwohl gar nicht viel aufgebracht wurde.",
      static: true,
      handler: hndItem
    },
    Asche: {
      name: "Asche",
      description: "aus dem Kamin",
      examine: "Schön dreckig, aber echt alt.",
      image: "./Images/Items/1 Icons/Icons_32.png",
      text: "Der Kamin wurde lange nicht mehr sauber gemacht.",
      static: true,
      handler: hndItem
    },
    Scherbe: {
      name: "Scherbe",
      description: "vom Spiegel",
      examine: "Mein Spiegelbild wirkt komisch verzerrt.",
      image: "./Images/Items/1 Icons/Icons_11.png",
      text: "Sollte perfekt in Michelas Spiegel passen.",
      static: true,
      handler: hndItem
    },
    Feder: {
      name: "Feder",
      description: "",
      examine: "So ein wunderschöne Feder kann nur von einer mystischen Kreatur stammen. Die Federspitze ist super spitz und präzise, falls man damit Schreiben möchte.",
      image: "./Images/Items/1 Icons/Icons_27.png",
      text: "Eine silber-bläulich schimmernde Feder, die auf Michelas Fenstersims lag.",
      static: true,
      handler: hndItem
    },
    Stoff: {
      name: "Stoff",
      description: "mit Symbolen",
      examine: "Wirkt super entflammbar. Es sind viele kryptische Symbole eingezeichnet, dessen Bedeutung unklar ist.",
      image: "./Images/Items/1 Icons/Icons_36.png",
      text: "In einer von Michelas Schubladen unter dem Spiegel gefunden.",
      static: true,
      handler: hndItem
    },
    Spiegelessenz: {
      name: "Essenz",
      description: "der Spiegeldimension",
      examine: "Es ist pure Energie, jedoch gefüllt mit geplagten Seelen, die in Wehleiden aufschreien. Wenn man in die Essenz blickt, erkennt man seine dunkelste Seite. Ein groteskes Spiegelbild \
      von einem selbst, das vergeblich versucht auszubrechen. Je größer die Kraft der Spiegeldimension auf etwas herrscht, desto asynchroner erscheint einem sein Spiegelbild. Das würde den Effekt in Michelas Spiegel erklären. \
      Anscheinend ist die Essenz der Spiegeldimension das Endstadium, in welchem das Spiegelbild komplett unabhängig ist. Ein sehr gefährlicher Zustand mit unvorhersehbaren Ausgängen. Man kann sich nur vorstellen, was passieren würde, \
      wenn ein Wesen zu lange in die Essenz blickt.",
      image: "./Images/Items/1 Icons/Icons_26.png",
      text: "Damit sollte ich in der Lage sein, das Portal zur anderen Welt zu öffnen. Michela braucht meine Hilfe sofort!",
      static: true,
      handler: hndItem
    },
  };

  export let state = {
    a: 1,
    b: "",
    c: 2
  };

  export let pages: string[] = [ // Hier kommen die Seitentexte hin ->
    "NUR PLATZHALTER", "Die Möglichkeit, dass ein Parallel-Universum neben unserem existiert, ist gar nicht so unwahrscheinlich. Aber was ist mit einem Parallel-Universum überhaupt gemeint? Die simple Antwort könnte heißen, dass es lediglich eine Kopie unseres eigenen Kosmos ist. \
    Natürlich stößt der aktuelle Forschungsstand in diesem Bereich der Physik an seine Grenzen, daher sind die Meinungen dazu sehr unterschiedlich. Die komplexere Antwort könnte daher sein, dass es alle Möglichkeiten, die bislang hätten passieren können, in unendlich vielen Kopien unseres Universums tatsächlich passiert sind. \
    Ein anderer Verlauf der Geschichte der Menschheit wäre ein noch viel zu einfacher Ansatz. Jede noch so kleine mögliche Änderung des Zustandes könnte unbeschreibliche Auswirkungen auf die Zukunft haben.", // 1 
    "Der Schmetterlingseffekt hat enorme Auswirkungen, bei einer winzigen Veränderung. So kann die kleinste Änderung einer Entscheidung eines Menschen zu einer komplett anderen Lebenslaufbahn führen. Man kann davon ausgehen, dass bei unendlich vielen Parallelwelten, auch unendlich viele Versionen \
    des eigenen Ichs die Entscheidungen trafen, die für die unendlich vielen anderen Versionen als unmöglich wahrgenommen wurden. Wie viele Versionen von sich selbst würden wohl in der Lage sein, einfach die nackte Hand auf eine heiße Herdplatte zu legen, ohne groß nachzudenken. Ein vernünftiger Mensch würde sagen, \
    dass dies niemals in Frage käm, so ganz ohne Grund. Dabei ist es egal, wie vernünftig die Entscheidung ist, etwas zu tun. Selbst wenn nur eine Version in einer Trilliarde Version so etwas tun würde, wären es weiterhin unendlich viele Versionen, die es getan haben. Das ist das Problem mit Unendlichkeit, es ist egal wie \
    unwahrscheinlich die Möglichkeit ist, sie ist trotzdem garantiert.", "Wie unfair das wohl sein muss, eine Version seiner Selbst zu treffen und dann festzustellen, dass man es deutlich besser oder schlechter als sein eigenes Ich aus einer anderen Welt hat. Dann merkt man endlich, wie Wichtig das Equilibrium der Welten ist. Ein Zustand, in dem es keine Alternativen mehr gibt, sondern alle \
    am selben Strang ziehen. Wenn auf einmal Alles möglich wird. Wenn nurnoch Frieden herrscht und die Natur im Einklang mit sich leben und gedeihen kann. Was wäre, wenn man einen Neustart wagen könnte, abseits der unendlich vielen Universen? Eine Dimension, die durch alle Kosmen fließt und von überall aus zugänglich ist? \
    Was wäre nur der ungeheure Preis, den man für ewigen Frieden zahlen müsste?", "Niemals hätte ich für möglich gehalten, dass es eine Antwort auf all die Fragen gibt. Mein ganzes Leben lang habe ich die Ecken der Welt besucht, um eine Antwort zu finden. Um wenigstens einen winizig kleinen Hoffnungsschimmer zu erhalten. Ich war am Ende angelangt, doch dann habe ich einen tiefen Blick in mich selbst gewagt. \
    Ich erkannte, dass die Antwort immer bei mir war. Ich musste allerdings erst bis zum Ende reisen, bis ich einen Neuanfang finden konnte. Erst als ich bereit war Alles loszulassen und akzeptierte, dass ich versagt habe, erst dann habe ich meinen letzten Wunsch bekommen. \
    Das Nächste, was ich sah, war mein Sturz durch die Sterne. Aufgeladen mit unbeschreiblicher Energie, landete ich schließlich in dieser Welt. Ich war ganz allein, kein Leben weit und breit. Keine Farben und pure Stille, nur mich Selbst und mein Wille.", "Ich habe eine ganze Ewigkeit geruht, bis ich mich erinnern konnte. Mein Wunsch, der in Erfüllung ging und meine Verantwortung, die ich damit zu erfüllen hatte. Damit lösten sich endlich die Ketten des Schlafes und ich war frei. Mit nur einem Gedankenstrom erweckte ich ganze Flüsse und damit Leben. \
    Doch schnell wurd mir klar, dass es keine Entwicklung gab. Das Leben stand still, lediglich einfache Organismen, die in Frieden koexistierten. Mein Wunsch wurde zum Fluch und mir wurde klar, welch ungeheuren Preis ich dafür zahlen musste. Ich war gezwungen, der Wahrheit ins Auge zu sehen. Es muss Opfer geben, damit \
    Großes entstehen kann. Ich wurde wütend, ich wurde bitter. Ich war verdammt zu einer Ewigkeit des Stillstands. Jeder Organismus kümmerte in Einsamkeit vor sich rum. Es gab keinen Grund für Zusammenschluss, kein Grund zur Sorge. Keine einzige Zelle hat sich fortbewegt, keine wurde krank. Nichts wurde probiert, nichts wurde gelernt. \
    Es war die Hölle im Paradies. Doch ich war nicht zu mehr in der Lage, meine Kräfte waren gebunden an meine Werte.", "Lange habe ich in meinem Geiste verbracht und über eine Lösung philosophiert. Manchmal muss man zurück ans Ende, um neu zu starten. Am Ende meines weltlichen Lebens war ich bereit alles loszulassen, weil ich die Antwort für mich fand, als ich tief in meine Seele hinab blickte. Was ich dort fand hat mich in Rage versetzt. Es hat mich angewidert, ich wollte es los werden. \
    Denn was ich dort fand, war mich selbst. All meine Fehler, die mich kleinste Entscheidungen in große Katastrophen verwandeln ließen. Das Streben nach Perfektion, nach Frieden und Gesundheit, all das hat mich heruntergezogen. Als ich mich dazu entschied, dies alles hinter mir zu lassen, erst dann habe ich wirklich bekommen, was ich immer wollte. \
    Doch am Ende hat es mich wieder eingeholt. War es der Frieden zwischen Lebenwesen, den ich wirklich wollte? Oder war es doch der innere Frieden? Ich zögerte nicht lange und verspiegelte die Barrieren meiner Welt. Das Chaos brach aus, als sich die Organismen begannen selbst zu hassen und zu zerstören. \
    Manche begannen sich auf eine Weise zu verformen, die ich unmöglich hätte vorhersehen können. Ein paar dieser Kreaturen schafften auszubrechen, aber niemals ohne die Hilfe von außerhalb."
  ];

  export function randomItem(): void {
    let randomIndex = Math.floor(Math.random() * items.Buchseiten.length);
    let randomItem = items.Buchseiten[randomIndex];
    if (save.pagecount < 6) {
      ƒS.Inventory.add(randomItem);
      items.Buchseiten.splice(randomIndex, 1);
      document.getElementById("pagecount").innerHTML = "Gesammelte Seiten" + " " + `${save.pagecount += 1}/6`;
      console.log("added", randomItem.name, `${save.pagecount}/6`);
    }
  }

  export function codegenerator(): void {
    for (let i = 0; i < items.Buchseiten.length; i++) {
      var codeArray = Array.from(((items.Buchseiten[i].text.replaceAll('.', "x")).replaceAll(' ', 'y')).replaceAll(',', 'z'));
      let randomIndex = Math.floor(Math.random() * items.Buchseiten[i].text.length);
      let randomSymbol = codeArray[randomIndex];
      save.code += randomSymbol.toUpperCase();
    }
    console.log(save.code);
  }

  export async function codecheck() {
    let check = ƒS.Speech.getInput();
    if ((await check).toString() == save.code) {
      console.log("right code");
      sfx("complete");
      await say("happy", 'Hurra! Der Code hat funktioniert! Am Ende waren die Buchseiten doch mehr als hilfreich.')
      await say("smile", 'Die fehlende Spiegelscherbe. Hab ich mir doch fast gedacht!')
      await say("happy", 'Endlich halte ich den Schlüssel zu einer anderen Welt in meinen Händen! Jetzt brauche ich Antworten... Viele!')
      ƒS.Inventory.add(items.Scherbe);
      document.getElementById("Code").remove();
      save.protagonist.experience += 30
      checkExperience();
      sfx("complete");
      await ƒS.Text.print("Scherbe dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>30</span> XP</p>");
    } else {
      console.log("wrong code");
      sfx("no");
      await say("sad", 'Verdammt! Irgendwas übersehe ich.')
    }
  }

  export let gotWeapon = false;
  export async function numberCodeCheck() {
    let code = 113355;
    let check = ƒS.Speech.getInput();
    if (await check == code.toString()) {
      console.log("right code");
      sfx("complete");
      await say("happy", 'JAAAA! Endlich geschafft!')
      await say("shocked", 'Ach du grüne Neune! Ist das... Ist das eine Waffe?')
      await say("shocked", 'EINE WAFFE?! Hier in der Bibliothek?')
      await say("angry", 'Adam hat viel zu erklären! Die Waffe war also das "Es" auf der Notiz...')
      await say("normal", 'Hat wohl nicht viel gebracht, vergessen wurde sie trotzdem.')
      await say("sad", 'Ich kann nur nicht fassen, dass Adam damit was zu tun hat.')
      await say("shocked", 'Hat er Michela am Ende doch entführt?!')
      await say("angry", 'Eines ist klar! Wohin sie auch immer gegangen sind... In eine Parallelwelt oder wo auch immer...')
      await say("angry", 'Die Waffe wird dort wahrscheinlich sehr wertvoll sein. Wer weiß schon welche unheimlichen Dinge dort passieren könnten?')
      await say("normal", 'Ich nehme sie erstmal mit. So oder so werde ich Adam deshalb zur Rede stellen.')
      sfx("complete");
      document.getElementById("Taschenuhr").remove();
      document.getElementById("Notiz").remove();
      craftWeaponHero();
      save.protagonist.experience += 50;
      await ƒS.Text.print("Waffe dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>50</span> XP</p>")
      checkExperience();
      gotWeapon = true;
    } else {
      console.log("wrong code");
      sfx("no");
      await say("sad", 'Ein Versuch war es wert... Irgendwo muss ich den Code doch finden können.')
    }
  }

  async function hndItem(_event: CustomEvent) {
    // let itemsChild = document.getElementById("items").children;
    if (_event.type == "pointerup") {
      //console.log(_event);
      if (combine == undefined) {
        if (use == undefined) {
          switch (_event.detail) {
            case "Seite 1":
            case "Seite 2":
            case "Seite 3":
            case "Seite 4":
            case "Seite 5":
            case "Seite 6":
              console.log(Number(_event.detail.substring(6, 7)));
              ƒS.Text.print(pages[Number(_event.detail.substring(6, 7))]);
              break;
            case `${items.Asche.name}`:
              ƒS.Text.print(items.Asche.text);
              break;
            case `${items.Blut.name}`:
              ƒS.Text.print(items.Blut.text);
              break;
            case `${items.Blutsfeder.name}`:
              ƒS.Text.print(items.Blutsfeder.text);
              break;
            case `${items.Buch.name}`:
              ƒS.Text.print(items.Buch.text);
              break;
            case `${items.Code.name}`:
              ƒS.Text.print(save.code);
              break;
            case `${items.Fackel.name}`:
              ƒS.Text.print(items.Fackel.text);
              break;
            case `${items.Feder.name}`:
              ƒS.Text.print(items.Feder.text);
              break;
            case `${items.Kaminteil.name}`:
              ƒS.Text.print(items.Kaminteil.text);
              break;
            case `${items.Lampenteil.name}`:
              ƒS.Text.print(items.Lampenteil.text);
              break;
            case `${items.Notiz.name}`:
              ƒS.Text.print(items.Notiz.text);
              break;
            case `${items.Opferfackel.name}`:
              ƒS.Text.print(items.Opferfackel.text);
              break;
            case `${items.Reißzwecke.name}`:
              ƒS.Text.print(items.Reißzwecke.text);
              break;
            case `${items.Scherbe.name}`:
              ƒS.Text.print(items.Scherbe.text);
              break;
            case `${items.Schlüssel.name}`:
              ƒS.Text.print(items.Schlüssel.text);
              break;
            case `${items.Spiegelessenz.name}`:
              ƒS.Text.print(items.Spiegelessenz.text);
              break;
            case `${items.Stuhlbein.name}`:
              ƒS.Text.print(items.Stuhlbein.text);
              break;
            case `${items.Stoff.name}`:
              ƒS.Text.print(items.Stoff.text);
              break;
            case `${items.Taschenuhr.name}`:
              ƒS.Text.print(items.Taschenuhr.text);
              break;
            case `${items.Zahn.name}`:
              ƒS.Text.print(items.Zahn.text);
              break;
          }
        } else {
          switch (use) {
            case `${items.Asche.name}`:
            case `${items.Blut.name}`:
            case `${items.Buch.name}`:
            case `${items.Code.name}`:
            case `${items.Feder.name}`:
            case `${items.Kaminteil.name}`:
            case `${items.Lampenteil.name}`:
            case `${items.Notiz.name}`:
            case `${items.Opferfackel.name}`:
            case `${items.Reißzwecke.name}`:
            case `${items.Scherbe.name}`:
            case `${items.Schlüssel.name}`:
            case `${items.Spiegelessenz.name}`:
            case `${items.Stuhlbein.name}`:
            case `${items.Stoff.name}`:
            case `${items.Taschenuhr.name}`:
            case `${items.Zahn.name}`:
            case "Seite 1":
            case "Seite 2":
            case "Seite 3":
            case "Seite 4":
            case "Seite 5":
            case "Seite 6":
              sfx("no")
              await ƒS.Text.print(`${use} kann nicht mit ${_event.detail} benutzt werden<hr class="golden"></hr>`)
              use = undefined;
              break;
            case `${items.Blutsfeder.name}`:
              if (_event.detail == `${items.Fackel.name}`) {
                sfx("complete");
                document.getElementById("Blutsfeder").remove();
                document.getElementById("Fackel").remove();
                await ƒS.Text.print(`Erstellt: ${items.Opferfackel.name}<hr class="golden"></hr><br> + 30 XP`)
                ƒS.Inventory.add(items.Opferfackel);
                save.protagonist.experience += 30;
                checkExperience()
              }
              if (_event.detail == use) {
                sfx("no");
                await ƒS.Text.print(`${use} nicht mit sich selbst benutzbar<hr class="golden"></hr>`)
              } if (_event.detail !== `${items.Fackel.name}`) {
                sfx("no");
                await ƒS.Text.print(`${_event.detail} nicht mit ${items.Blutsfeder.name} benutzbar<hr class="golden"></hr>`)
              }
              use = undefined;
              break;
            case `${items.Fackel.name}`:
              if (_event.detail == `${items.Blutsfeder.name}`) {
                sfx("complete");
                document.getElementById("Blutsfeder").remove();
                document.getElementById("Fackel").remove();
                await ƒS.Text.print(`Erstellt: ${items.Opferfackel.name}<hr class="golden"></hr><br> + 30 XP`)
                ƒS.Inventory.add(items.Opferfackel);
                save.protagonist.experience += 30;
                checkExperience()
              }
              if (_event.detail == use) {
                sfx("no");
                await ƒS.Text.print(`${use} nicht mit sich selbst benutzbar<hr class="golden"></hr>`)
              }
              if (_event.detail !== `${items.Blutsfeder.name}`) {
                sfx("no");
                await ƒS.Text.print(`${_event.detail} nicht mit ${items.Fackel.name} benutzbar<hr class="golden"></hr>`)
              }
              use = undefined;
              break;
          }
        }
      } else {
        switch (combine) {
          case `${items.Asche.name}`:
          case `${items.Blutsfeder.name}`:
          case `${items.Buch.name}`:
          case `${items.Code.name}`:
          case `${items.Fackel.name}`:
          case `${items.Notiz.name}`:
          case `${items.Opferfackel.name}`:
          case `${items.Reißzwecke.name}`:
          case `${items.Scherbe.name}`:
          case `${items.Schlüssel.name}`:
          case `${items.Spiegelessenz.name}`:
          case `${items.Taschenuhr.name}`:
          case `${items.Zahn.name}`:
            sfx("no")
            await ƒS.Text.print(`${combine} kann nicht mit ${_event.detail} kombininiert werden<hr class="golden"></hr>`)
            combine = undefined;
            break;
          case `${items.Blut.name}`:
            if (_event.detail == `${items.Feder.name}`) {
              sfx("complete");
              document.getElementById("Blut").remove();
              document.getElementById("Feder").remove();
              await ƒS.Text.print(`Erstellt: ${items.Blutsfeder.name}<hr class="golden"></hr><br> + 20 XP`)
              ƒS.Inventory.add(items.Blutsfeder);
              save.protagonist.experience += 20;
              checkExperience()
            }
            if (_event.detail == combine) {
              sfx("no");
              await ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`)
            } if (_event.detail !== `${items.Feder.name}`) {
              sfx("no");
              await ƒS.Text.print(`${_event.detail} nicht mit ${items.Blut.name} kombinierbar<hr class="golden"></hr>`)
            }
            combine = undefined;
            break;
          case `${items.Feder.name}`:
            if (_event.detail == `${items.Blut.name}`) {
              sfx("complete");
              document.getElementById("Feder").remove();
              document.getElementById("Blut").remove();
              await ƒS.Text.print(`Erstellt: ${items.Blutsfeder.name}<hr class="golden"></hr><br> + 20 XP`)
              ƒS.Inventory.add(items.Blutsfeder);
              save.protagonist.experience += 20;
              checkExperience()
            }
            if (_event.detail == combine) {
              sfx("no");
              await ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`)
            } if (_event.detail !== `${items.Blut.name}`) {
              sfx("no");
              await ƒS.Text.print(`${_event.detail} nicht mit ${items.Feder.name} kombinierbar<hr class="golden"></hr>`)
            }
            combine = undefined;
            break;
          case `${items.Kaminteil.name}`:
            if (_event.detail == `${items.Lampenteil.name}`) {
              sfx("complete");
              document.getElementById("Kaminteil").remove();
              document.getElementById("Lampenteil").remove();
              await ƒS.Text.print(`Erstellt: ${items.Schlüssel.name}<hr class="golden"></hr><br> + 20 XP`)
              ƒS.Inventory.add(items.Schlüssel);
              save.protagonist.experience += 20;
              checkExperience()
              gotKey = true;
            }
            if (_event.detail == combine) {
              sfx("no");
              await ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`)
            } if (_event.detail !== `${items.Lampenteil.name}`) {
              sfx("no");
              await ƒS.Text.print(`${_event.detail} nicht mit ${items.Kaminteil.name} kombinierbar<hr class="golden"></hr>`)
            }
            combine = undefined;
            break;
          case `${items.Lampenteil.name}`:
            if (_event.detail == `${items.Kaminteil.name}`) {
              sfx("complete");
              document.getElementById("Lampenteil").remove();
              document.getElementById("Kaminteil").remove();
              await ƒS.Text.print(`Erstellt: ${items.Schlüssel.name}<hr class="golden"></hr><br> + 20 XP`)
              ƒS.Inventory.add(items.Schlüssel);
              save.protagonist.experience += 20;
              checkExperience()
              gotKey = true;
            }
            if (_event.detail == combine) {
              sfx("no");
              await ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`)
            } if (_event.detail !== `${items.Kaminteil.name}`) {
              sfx("no");
              await ƒS.Text.print(`${_event.detail} nicht mit ${items.Lampenteil.name} kombinierbar<hr class="golden"></hr>`)
            }
            combine = undefined;
            break;
          case `${items.Stuhlbein.name}`:
            if (_event.detail == `${items.Fackel.name}`) {
              sfx("complete");
              document.getElementById("Stuhlbein").remove();
              document.getElementById("Stoff").remove();
              await ƒS.Text.print(`Erstellt: ${items.Fackel.name}<hr class="golden"></hr><br> + 20 XP`)
              ƒS.Inventory.add(items.Fackel);
              save.protagonist.experience += 20;
              checkExperience()
            }
            if (_event.detail == combine) {
              sfx("no");
              await ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`)
            } if (_event.detail !== `${items.Stoff.name}`) {
              sfx("no");
              await ƒS.Text.print(`${_event.detail} nicht mit ${items.Stuhlbein.name} kombinierbar<hr class="golden"></hr>`)
            }
            combine = undefined;
            break;
          case `${items.Stoff.name}`:
            if (_event.detail == `${items.Stuhlbein.name}`) {
              sfx("complete");
              document.getElementById("Stoff").remove();
              document.getElementById("Stuhlbein").remove();
              await ƒS.Text.print(`Erstellt: ${items.Fackel.name}<hr class="golden"></hr><br> + 20 XP`)
              ƒS.Inventory.add(items.Fackel);
              save.protagonist.experience += 20;
              checkExperience()
            }
            if (_event.detail == combine) {
              sfx("no");
              await ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`)
            } if (_event.detail !== `${items.Stuhlbein.name}`) {
              sfx("no");
              await ƒS.Text.print(`${_event.detail} nicht mit ${items.Stoff.name} kombinierbar<hr class="golden"></hr>`)
            }
            combine = undefined;
            break;
          case "Seite 1":
          case "Seite 2":
          case "Seite 3":
          case "Seite 4":
          case "Seite 5":
          case "Seite 6":
            switch (_event.detail) {
              case "Seite 1":
              case "Seite 2":
              case "Seite 3":
              case "Seite 4":
              case "Seite 5":
              case "Seite 6":
                sfx("complete");
                document.getElementById("Seite_1").remove();
                document.getElementById("Seite_2").remove();
                document.getElementById("Seite_3").remove();
                document.getElementById("Seite_4").remove();
                document.getElementById("Seite_5").remove();
                document.getElementById("Seite_6").remove();
                await ƒS.Text.print(`Erstellt: ${items.Code.name}<hr class="golden"></hr><br> + 20 XP`)
                ƒS.Inventory.add(items.Code);
                save.protagonist.experience += 20;
                checkExperience()
                combine = undefined;
                break;
            }
            break;
        }
      }
    }
  }

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

  export async function listen(_event: KeyboardEvent) {
    let nameItem = document.querySelectorAll("li > name");
    switch (_event.code) {
      case "KeyC":
        if (combine == undefined) {
          if (use == undefined) {
            combine = nameItem[counter].innerHTML;
            ƒS.Text.print(`${combine} soll womit kombiniert werden?`)
          } else {
            use = undefined;
            combine = nameItem[counter].innerHTML;
            ƒS.Text.print(`${combine} soll womit kombiniert werden?`)
          }
        }
        console.log(combine);
        break;
      case "KeyE":
        console.log(`examining ${nameItem[counter].innerHTML} ...`);
        switch (nameItem[counter].innerHTML) {
          case "Seite 1":
            await ƒS.Text.print(`Auf der Seite ist "${save.code.substring(0, 1)}" besonders hervorgehoben.`);
            break;
          case "Seite 2":
            await ƒS.Text.print(`Auf der Seite ist "${save.code.substring(1, 2)}" besonders hervorgehoben.`);
            break;
          case "Seite 3":
            await ƒS.Text.print(`Auf der Seite ist "${save.code.substring(2, 3)}" besonders hervorgehoben.`);
            break;
          case "Seite 4":
            await ƒS.Text.print(`Auf der Seite ist "${save.code.substring(3, 4)}" besonders hervorgehoben.`);
            break;
          case "Seite 5":
            await ƒS.Text.print(`Auf der Seite ist "${save.code.substring(4, 5)}" besonders hervorgehoben.`);
            break;
          case "Seite 6":
            await ƒS.Text.print(`Auf der Seite ist "${save.code.substring(5, 6)}" besonders hervorgehoben.`);
            break;
          case `${items.Zahn.name}`:
            await ƒS.Text.print(`${items.Zahn.examine}`)
            break;
          case `${items.Stuhlbein.name}`:
            await ƒS.Text.print(`${items.Stuhlbein.examine}`)
            break;
          case `${items.Lampenteil.name}`:
            await ƒS.Text.print(`${items.Lampenteil.examine}`)
            break;
          case `${items.Kaminteil.name}`:
            await ƒS.Text.print(`${items.Kaminteil.examine}`)
            break;
          case `${items.Schlüssel.name}`:
            await ƒS.Text.print(`${items.Schlüssel.examine}`)
            break;
          case `${items.Scherbe.name}`:
            await ƒS.Text.print(`${items.Scherbe.examine}`)
            break;
          case `${items.Asche.name}`:
            await ƒS.Text.print(`${items.Asche.examine}`)
            break;
          case `${items.Blut.name}`:
            await ƒS.Text.print(`${items.Blut.examine}`)
            break;
          case `${items.Blutsfeder.name}`:
            await ƒS.Text.print(`${items.Blutsfeder.examine}`)
            break;
          case `${items.Fackel.name}`:
            await ƒS.Text.print(`${items.Fackel.examine}`)
            break;
          case `${items.Code.name}`:
            await ƒS.Text.print(`${items.Code.examine}`)
            break;
          case `${items.Feder.name}`:
            await ƒS.Text.print(`${items.Feder.examine}`)
            break;
          case `${items.Opferfackel.name}`:
            await ƒS.Text.print(`${items.Opferfackel.examine}`)
            break;
          case `${items.Schlüssel.name}`:
            await ƒS.Text.print(`${items.Schlüssel.examine}`)
            break;
          case `${items.Reißzwecke.name}`:
            await ƒS.Text.print(`${items.Reißzwecke.examine}`)
            break;
          case `${items.Spiegelessenz.name}`:
            await ƒS.Text.print(`${items.Spiegelessenz.examine}`)
            break;
          case `${items.Stoff.name}`:
            await ƒS.Text.print(`${items.Stoff.examine}`)
            break;
          case `${items.Buch.name}`:
            await ƒS.Text.print(`${items.Buch.examine}`)
            ƒS.Inventory.add(items.Taschenuhr);
            save.protagonist.experience += 20;
            await ƒS.Text.print("Taschenuhr dem Inventar hinzugefügt<hr class='golden'></hr><br><p>+ <span style='color: green'>20</span> XP</p>");
            checkExperience();
            document.getElementById("Buch").remove();
            await ƒS.Text.print("Buch aus dem Inventar gelöscht<hr class='golden'></hr>")
            break;
          case `${items.Taschenuhr.name}`:
            if (watchCheckable === false) {
              await ƒS.Text.print(`${items.Taschenuhr.examine}`)
            } else {
              await ƒS.Text.print(`${items.Taschenuhr.examine2}`);
            }
            break;
          case `${items.Notiz.name}`:
            await ƒS.Text.print(`${items.Notiz.examine}`)
            if (chair.visited === true) {
              await say("shocked", "Die Zeichnung wurde eingeritzt, wie die Inschrift am Stuhlbein! Das muss zusammenhängen.")
              await say("smile", 'Es ist bestimmt eine Botschaft von Michela, ich habs im Blut! Aber was soll die Zeichnung bedeuten?')
            }
            break;
          case `${items.Combat[0].name}`:
            await ƒS.Text.print(`${items.Combat[0].examine}`)
            break;
          case `${items.Combat[1].name}`:
            await ƒS.Text.print(`${items.Combat[1].examine}`)
            break;
          default:
            sfx("confirm");
            changeWeapon(nameItem[counter].innerHTML)
            await ƒS.Text.print(`${save.protagonist.weapon.name} wurde ausgerüstet<hr class="golden"></hr>`)
            break;
        }
        break;
      case "KeyU":
        if (use == undefined) {
          if (combine == undefined) {
            use = nameItem[counter].innerHTML;
            await ƒS.Text.print(`${use} soll womit benutzt werden?<br>Evt. musst du aus dem Inventar gehen (I)`)
          } else {
            combine = undefined;
            use = nameItem[counter].innerHTML;
            await ƒS.Text.print(`${use} soll womit benutzt werden?<br>Evt. musst du aus dem Inventar gehen (I)`)
          }
        }
        console.log(use);
        switch (nameItem[counter].innerHTML) {
          case `${items.Reißzwecke.name}`:
            if (checkForItems("Feder") === true) {
              sfx("complete");
              document.getElementById("Reißzwecke").remove();
              await say("sad", 'Autsch!')
              await ƒS.Text.print(`Erstellt: ${items.Blut.name}<hr class="golden"></hr><br> + 10 XP`)
              ƒS.Inventory.add(items.Blut);
              save.protagonist.experience += 10;
              checkExperience()
            } else {
              sfx("confirm");
              await say("smile", 'Vielleicht muss ich später noch etwas mit Blut unterzeichnen. Man kann nie genug vorbereitet sein.')
            }
            break;
          case `${items.Zahn.name}`:
            if (currentScene === "combat") {
              if (enemy.health <= 50) {
                document.getElementById("Zahn").remove();
                ƒS.Inventory.close();
                await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}</span>`, 'Ich bin gespannt, was die böse Fee davon hält.');
                {
                  await ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', 'Du hast ein wertvollen Tribut dabei! Ich nehme ihn an, im Tausch gegen die Essenz.');
                  await enemy.die()
                }
              } else { await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}</span>`, 'Jetzt noch nicht! Sie muss schwächer werden.'); }
            } else {
              await say("smile", "Vielleicht später!");
            }
            break;
        }
    }
  }

  document.addEventListener("click", using)
  export async function using(_event: MouseEvent) {

    if (statusInventory === false) {
      switch (use) {
        // ITEMS TO USE WHILE OUTSIDE INVENTORY

        // Asche
        case `${items.Asche.name}`:
          if (_event.x >= window1.xMin && _event.x <= window1.xMax) {
            if (_event.y >= window1.yMin && _event.y <= window1.yMax) {
              console.log("use works")
              sfx("complete");
              await say("shocked", "Wow! Ich lag tatsächlich richtig mit meiner Vermutung.")
              await say("smile", "Es ist eine Nachricht, aber schwierig zu lesen.")
              await say("normal", 'Hmmm, "Die Fackel der Opferung entfacht die Wahrheit".')
              await say("shocked", 'Jetzt ist die Katze eindeutig aus dem Sack! Das klingt nicht gerade nach einer normalen \
              Botschaft, mit der ich etwas anfangen könnte')
              await say("sad", "Langsam bezweifle ich, dass Michela mir diese Nachrichten hinterlässt...")
              await say("normal", 'Ich muss unbedingt mehr über diese "Fackel" herausfinden.')
              await say("normal", "Wenn ich einfach weiter diesen Botschaften folge, dann erschließt sich mir das Ganze bestimmt.");
              document.getElementById("Asche").remove();
              knowWindow = true;
              save.protagonist.experience += 10;
              checkExperience()
              sfx("complete");
              await ƒS.Text.print("Asche aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>")
              use = undefined;
            }
          } else {
            console.log("wrong use");
            sfx("no");
            use = undefined;
          }
          break;

        // Scherbe
        case `${items.Scherbe.name}`:
          // console.log(_event.target)
          if (_event.x >= mirror.xMin && _event.x <= mirror.xMax) {
            if (_event.y >= mirror.yMin && _event.y <= mirror.yMax) {
              console.log("use works")
              document.getElementById("Scherbe").remove();
              await say("smile", 'Sie passt perfekt!')
              await say("shocked", 'Moment, war da gerade etwas im Spiegel?');
              mirrorRepaired = true;
              save.protagonist.experience += 50;
              checkExperience()
              sfx("complete");
              await ƒS.Text.print("Scherbe aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>50</span> XP</p>")
              use = undefined;
            }
          } else {
            console.log("wrong use");
            sfx("no");
            use = undefined;
          }
          break;

        // Spiegelessenz
        case `${items.Spiegelessenz.name}`:
          // console.log(_event.target)
          if (_event.x >= mirror.xMin && _event.x <= mirror.xMax) {
            if (_event.y >= mirror.yMin && _event.y <= mirror.yMax) {
              console.log("use works")
              document.getElementById("Spiegelessenz").remove();
              await say("happy", 'Es hat funktioniert')
              await say("smile", 'Michela, ich komme!');
              save.protagonist.experience += 50;
              checkExperience()
              sfx("complete");
              await ƒS.Text.print("Spiegelessenz aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>50</span> XP</p>")
              use = undefined;
              mirrorOpened = true;
            }
          } else {
            console.log("wrong use");
            sfx("no");
            use = undefined;
          }
          break;

        // Schlüssel
        case `${items.Schlüssel.name}`:
          if (_event.x >= door2.xMin && _event.x <= door2.xMax) {
            if (_event.y >= door2.yMin && _event.y <= door2.yMax) {
              console.log("use works")
              doorOpen = true;
              sfx("complete");
              await say("happy", 'Und siehe da, die Tür ist endlich offen! Etwas Wichtiges muss in ihrem Zimmer sein. Nichts wie rein!');
              document.getElementById("Schlüssel").remove();
              save.protagonist.experience += 10;
              checkExperience()
              sfx("complete");
              await ƒS.Text.print("Schlüssel aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>")
              use = undefined;
            }
          } else {
            console.log("wrong use");
            sfx("no");
            use = undefined;
          }
          break;

        // Opferungsfackel
        case `${items.Opferfackel.name}`:
          if (_event.x >= kamin.xMin && _event.x <= kamin.xMax) {
            if (_event.y >= kamin.yMin && _event.y <= kamin.yMax) {
              if (gotWeapon === true) {
                console.log("use works")
                sfx("complete");
                await say("shocked", 'Es ist soweit!');
                document.getElementById("Opferungsfackel").remove();
                save.protagonist.experience += 30;
                checkExperience()
                await ƒS.Text.print("Opferungsfackel aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>30</span> XP</p>")
                use = undefined;
                ƒS.insert(Scene_Combat);
              } else {
                await say("angry", 'Ich habe die Waffe vergessen! Ich muss sie noch finden... Die Zeit reicht nicht mehr lange!')
              }
            }
          } else {
            console.log("wrong use");
            sfx("no");
            use = undefined;
          }

        // Blutsfeder
        case `${items.Blutsfeder.name}`:
          console.log("wrong use");
          sfx("no");
          use = undefined;
          break;

        // Fackel
        case `${items.Fackel.name}`:
          console.log("wrong use");
          sfx("no");
          use = undefined;
          break;

        // Zahn
        case `${items.Zahn.name}`:
          console.log("wrong use");
          sfx("no");
          use = undefined;
          break;
      }
    }
  }

  document.addEventListener("keydown", hndKeypressForInventory);
  async function hndKeypressForInventory(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        if (!statusInventory) {
          if (currentScene !== "combat") {
            if (ui_Open === false) {
              console.log("open inventory");
              document.removeEventListener("click", positions_intro);
              document.removeEventListener("click", positions_bibliothek);
              document.removeEventListener("click", positions_mirror_room);
              show_AllItems();
              ƒS.Inventory.open();
              statusInventory = true;
              console.log(statusInventory);
              console.log(document.querySelector("dialog[type=inventory]"));
            }
          }
        }
        else {
          console.log("close inventory");
          mapListeners()
          ƒS.Text.close();
          ƒS.Inventory.close();
          statusInventory = false;
          console.log(statusInventory);
          if (currentScene == "combat") {
            combat();
          }
          combine = undefined;
        }
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        mapListeners()
        ƒS.Text.close();
        ƒS.Inventory.close();
        statusInventory = false;
        if (currentScene == "combat") {
          combat();
        }
        combine = undefined;
        break;
    }
  }

  export function craftWeaponHero() {
    hero_weapon = new Weapon(save.protagonist.level, weaponCraft.hero_name(), weaponCraft.hero_damage(), weaponCraft.hero_rolls(), weaponCraft.hero_miss(), weaponCraft.hero_crit())
    save.protagonist.weapon = hero_weapon;
    save.weaponArray.push(hero_weapon);
    weaponItem();
    console.log(`crafted ${hero_weapon}`);
  }

  export function craftWeaponEnemy(_enemyLVL: number) {
    enemy_weapon = new Weapon(_enemyLVL, weaponCraft.enemy_name(), weaponCraft.enemy_damage(_enemyLVL), weaponCraft.enemy_rolls(_enemyLVL), weaponCraft.enemy_miss(_enemyLVL), weaponCraft.enemy_crit(_enemyLVL));
    console.log(`crafted ${enemy_weapon}`);
  }

  export function createPlayer(): void {
    //craftWeapon();
    save.protagonist = new Hero(save.nameArray(), 1, 100, 0, save.typeArray(), 100, 10, hero_weapon);
    console.log(save.protagonist);
  }

  export function checkExperience(): void {
    let levelcap_1: number = 350;
    let levelcap_2: number = 600;
    let levelcap_3: number = 1000;
    let levelcap_4: number = 1600;
    let extraXP: number;
    switch (save.protagonist.level) {
      case 1:
        if (save.protagonist.experience >= levelcap_1) {
          extraXP = (save.protagonist.experience - levelcap_1);
          console.log(`${save.protagonist.name} level increased / current XP: ${extraXP} from ${levelcap_2}`);
          levelUp(extraXP);
        }
        break;
      case 2:
        if (save.protagonist.experience >= levelcap_2) {
          extraXP = (save.protagonist.experience - levelcap_2);
          console.log(`${save.protagonist.name} level increased / current XP: ${extraXP} from ${levelcap_3}`);
          levelUp(extraXP);
        }
        break;
      case 3:
        if (save.protagonist.experience >= levelcap_3) {
          extraXP = (save.protagonist.experience - levelcap_3);
          console.log(`${save.protagonist.name} level increased / current XP: ${extraXP} from ${levelcap_4}`);
          levelUp(extraXP);
        }
        break;
      case 4:
        if (save.protagonist.experience >= levelcap_4) {
          extraXP = (save.protagonist.experience - levelcap_4);
          console.log(`${save.protagonist.name} level increased / current XP: ${extraXP} from ${Infinity}`);
          levelUp(extraXP);
        }
        break;
    }
  }

  export async function levelUp(_extraXP: number) {
    if (save.protagonist.level <= 5) {
      // Experience Update
      save.protagonist.experience = 0;
      save.protagonist.experience += _extraXP;
      // Level Update
      save.protagonist.level++;
      // Lebens Refresh/Update
      save.protagonist.health = 100;
      save.protagonist.health += 50;
      // Schild Refresh/Update
      save.protagonist.defense = 100;
      save.protagonist.defense += (save.protagonist.level * 20);
      // Schadens Buff
      save.protagonist.damage += (save.protagonist.level * 5);
      await ƒS.Text.print(`Glückwunsch!<hr class='golden'></hr><br><p>${save.protagonist.name} ist nun Level <span>${save.protagonist.level}</span></p>`)
    } else console.log(`max level of ${save.protagonist.level} reached`);
    console.log("stored", ƒS.Progress.data);
  }

  export var enemy_startingHP: number;
  export var enemy_startingSP: number;

  export function createEnemy(_enemy: string): void {
    let enemyLevel = Math.floor(Math.random() * (save.protagonist.level + 2)) + save.protagonist.level; // Gegner haben bis zu Player-Level + 2
    let enemyHealth = Math.floor(Math.random() * (enemyLevel * 60 + 1)) + (enemyLevel * 50); // Je höher das Level desto mehr Leben möglich
    let enemyDefense = Math.floor(Math.random() * (211 - enemyLevel * 10)) + (50 + enemyLevel * 5);
    let enemyExperience = Math.ceil(enemyLevel * 10 + (enemyHealth / 10 + enemyDefense / 5)); // XP scaled mit Level und Leben & Schild
    let enemyDamage = enemyLevel * 5;
    let enemyType = function () {
      let eT = ["Love", "Hate", "Dream", "Destruction"];
      let r = Math.floor(Math.random() * eT.length);
      return eT[r];
    }
    craftWeaponEnemy(enemyLevel);
    enemy = new Enemy(_enemy, enemyLevel, enemyHealth, enemyExperience, enemyType(), enemyDefense, enemyDamage, enemy_weapon); // CHANGE
    console.log(enemy);
    enemy_startingHP = enemyHealth;
    enemy_startingSP = enemyDefense;
  }

  export function input_1(): string {
    let status: string;
    if (`${save.protagonist.type}` === `${enemy.type}`) {
      status = "ausgeglichen";
    }
    switch (save.protagonist.type) {
      case "Love":
        switch (enemy.type) {
          case "Hate":
            status = "effektiv";
            break;
          case "Dream":
            status = "ausgeglichen";
            break;
          case "Destruction":
            status = "schwach";
            break;
        }
        break;
      case "Hate":
        switch (enemy.type) {
          case "Love":
            status = "schwach";
            break;
          case "Dream":
            status = "effektiv";
            break;
          case "Destruction":
            status = "ausgeglichen";
            break;
        }
        break;
      case "Dream":
        switch (enemy.type) {
          case "Love":
            status = "ausgeglichen";
            break;
          case "Hate":
            status = "schwach";
            break;
          case "Destruction":
            status = "effektiv";
            break;
        }
        break;
      case "Destruction":
        switch (enemy.type) {
          case "Love":
            status = "effektiv";
            break;
          case "Hate":
            status = "ausgeglichen";
            break;
          case "Dream":
            status = "schwach";
            break;
        }
        break;
    };
    (document.getElementById("input1") as HTMLInputElement).value =
      `${save.protagonist.name} (${save.protagonist.level}) (${save.protagonist.type}) vs ${enemy.name} (${enemy.level}) (${enemy.type}) = ${status}`;
    return status;
  }

  export function input_2(_heroDmg: number, _enemyDmg: number) {
    (document.getElementById("input2") as HTMLInputElement).value = `${save.protagonist.name}: ${_heroDmg} Schaden ${enemy.name}: ${_enemyDmg}`;
  }

  export function slider() {
    //console.log("0 very fast <-> 100 very slow");
    ƒS.Speech.setTickerDelays(Number((document.getElementById("slider") as HTMLInputElement).value), 1)
    document.getElementById("slider-value").innerHTML = (document.getElementById("slider") as HTMLInputElement).value
  }

  export async function startCombat(): Promise<void> {
    console.log("startCombat()");
    closeUI();
    // Engage Healthbars
    document.getElementById("hero-hp").innerHTML = `${save.protagonist.name} Leben`
    document.getElementById("hero-sp").innerHTML = `${save.protagonist.name} Schild`
    document.getElementById("enemy-hp").innerHTML = `${enemy.name} Leben`
    document.getElementById("enemy-sp").innerHTML = `${enemy.name} Schild`
    // Remove Inventar Eventlisteners
    //document.removeEventListener("keydown", hndKeypressForInventory);
    // Music

    //ƒS.insert(Scene_Combat); if (enemy.name) = show background x y

    // Animation
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(20, 100))
    await ƒS.Character.show(characters.antagonist, characters.antagonist.pose.angry, ƒS.positionPercent(80, 110))
    await ƒS.update(1);
    // Character Speech
    showUI();
    input_1();
    let enemy_speech = {
      jinn: ["Sieh an, ein kleines Menschenwesen... Bald gehört dein Blut mir!", "Ich kann spüren, wie dein Blut gefriert!"],
      sandmann: ["Na du, bereit für ein Nickerchen?", "Du wirkst müde... Schlaf gut träum süß!"],
      zahnfee: ["Hallo meine Kleine, warum so verbissen?", "Du siehst schockiert aus, sitzt ein Zahn locker?"],
      dämon: ["Muhahaha, der Festschmaus ist fast zubereitet!", "Ich bin hungrig auf Seelen! Gut, dass du gerade richtig kommst"],
      wassergeist: ["Oh, du bist ganz dehydriert... Wie wäre es mit einer kleinen Erfrischung?", "Du bist hier nicht erwünscht!\
      In diesen Gewässern wartet nur dein Tod!"]
    }
    let hero_speech = {
      jinn: "Das Einzige, was gleich bluten wird, bist du! Ich leihe mir nur ein bisschen Essenz von dir!",
      sandmann: "Erst wenn ich mit dir fertig bin, kann ich entspannt ruhen.",
      zahnfee: "Du willst einen Zahn? Dann hol ihn dir!",
      dämon: "Es endet hier und jetzt!",
      wassergeist: "Ein netten Pool hast du da, vielleicht geh ich später noch darin schwimmen."
    }
    let enemy_response = ["Du stirbst jetzt!", "Ich mach dich fertig!", "Das glaubst du doch selber nicht!", "Alles kommt mit einem Preis!",
      "Es ist gleich vorbei...", "Ich mache kurzen Prozess mit dir!", "Du hättest niemals herkommen sollen!", "Ich habe genug gehört!"]
    let enemy_r = Math.floor(Math.random() * 2);
    let enemy_respone_r = Math.floor(Math.random() * enemy_response.length);
    let hero_randomGreeting = Math.floor(Math.random() * sound.protagonist.greeting.length);
    switch (enemy.name) {
      case "Jinn":
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_speech.jinn[enemy_r]}`);
        ƒS.Sound.play(sound.protagonist.greeting[hero_randomGreeting], 1, false);
        await ƒS.Speech.tell(`${save.protagonist.name}`, `${hero_speech.jinn}`);
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_response[enemy_respone_r]}`);
        break;
      case "Sandmann":
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_speech.sandmann[enemy_r]}`);
        ƒS.Sound.play(sound.protagonist.greeting[hero_randomGreeting], 1, false);
        await ƒS.Speech.tell(`${save.protagonist.name}`, `${hero_speech.sandmann}`);
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_response[enemy_respone_r]}`);
        break;
      case "Zahnfee":
        await ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', `${enemy_speech.zahnfee[enemy_r]}`);
        ƒS.Sound.play(sound.protagonist.greeting[hero_randomGreeting], 1, false);
        await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}</span>`, `${hero_speech.zahnfee}`);
        await ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', `${enemy_response[enemy_respone_r]}`);
        break;
      case "Dämon":
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_speech.dämon[enemy_r]}`);
        ƒS.Sound.play(sound.protagonist.greeting[hero_randomGreeting], 1, false);
        await ƒS.Speech.tell(`${save.protagonist.name}`, `${hero_speech.dämon}`);
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_response[enemy_respone_r]}`);
        break;
      case "Wassergeist":
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_speech.wassergeist[enemy_r]}`);
        ƒS.Sound.play(sound.protagonist.greeting[hero_randomGreeting], 1, false);
        await ƒS.Speech.tell(`${save.protagonist.name}`, `${hero_speech.wassergeist}`);
        await ƒS.Speech.tell(`${enemy.name}`, `${enemy_response[enemy_respone_r]}`);
        break;
    }
    ƒS.Speech.setTickerDelays(10, 0);
    combat();
  }

  export async function combat(): Promise<void> {
    let combatOptions = {
      attack: "Angreifen",
      flee: "Fliehen",
      item: "Gegenstand"
    };
    let combatAction = await ƒS.Menu.getInput(combatOptions);
    let randomConfirm = Math.floor(Math.random() * sound.protagonist.confirmation.length);
    ƒS.Sound.play(sound.protagonist.confirmation[randomConfirm], 1, false);
    switch (combatAction) {
      case combatOptions.attack:
        console.log(`${save.protagonist.name} attacks ${enemy.name}`);
        await ƒS.Speech.tell(`${save.protagonist.name}`, `${combatAction}`);
        save.protagonist.attack();
        break;
      case combatOptions.flee:
        console.log(`${save.protagonist.name} tries to flee`);
        await ƒS.Speech.tell(`${save.protagonist.name}`, `${combatAction}`);
        save.protagonist.flee();
        break;
      case combatOptions.item:
        console.log(`${save.protagonist.name} chooses an item`);
        show_CombatItems();
        ƒS.Inventory.open();
        statusInventory = true;
        break;
    }
  }

  export function show_CombatItems() {
    console.log("show only combat items")
    let nameItem = document.querySelectorAll("li > description");
    for (let i = 0; i < nameItem.length; i++) {
      if (nameItem[i].innerHTML !== "Kampf") {
        nameItem[i].id = `${[i]}`;
        document.getElementById(`${[i]}`).parentElement.style.visibility = "hidden";
      }
    }
    document.getElementById("Zahn").style.visibility = "visible";
  }
  export function show_AllItems() {
    console.log("show all items")
    let nameItem = document.querySelectorAll("li");
    for (let i = 0; i < nameItem.length; i++) {
      document.getElementById(`${nameItem[i].id}`).style.visibility = "visible";
    }
  }

  export async function show_WeaponInfo() {
    let str = await ƒS.Text.print(`<strong>${save.protagonist.weapon.name}</strong><hr class="golden"><br><span style="color: red;">Schaden: </span>\
    <span>${save.protagonist.weapon.damage}</span><br><span style="color: blue;">Anzahl Würfe: </span><span>${save.protagonist.weapon.rolls}</span>\
    <br><span style="color: green;">Typ: </span><span>${save.protagonist.weapon.weaponType}</span><br><span style="color: darkred;">Miss Chance: </span>\
    <span>${save.protagonist.weapon.miss}</span><br><span style="color: darkblue;">Kritischer Schaden: </span><span>${save.protagonist.weapon.crit}</span>`)
    return str
  }

  export async function say(_pose: string, _text: string) {
    if (ui_Open == false) {
      showUI();
    }
    switch (_pose) {
      case "normal":
        //await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.update(0);
        break;
      case "smile":
        //await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.smile, ƒS.positionPercent(20, 100));
        await ƒS.update(0);
        break;
      case "happy":
        //await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(20, 100));
        await ƒS.update(0);
        break;
      case "angry":
        //await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.angry, ƒS.positionPercent(20, 100));
        await ƒS.update(0);
        break;
      case "shocked":
        //await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.shocked, ƒS.positionPercent(20, 100));
        await ƒS.update(0);
        break;
      case "sad":
        //await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.sad, ƒS.positionPercent(20, 100));
        await ƒS.update(0);
        break;
      default:
        break;
    }
    await ƒS.Speech.tell(`<span style="color: darkgreen">${save.protagonist.name}:</span>`, `${_text}`);
    await ƒS.Character.hide(characters.protagonist);
    await ƒS.update(0);
    closeUI()
  }

  export async function options(_option1: string, _option2: string): Promise<boolean> {
    // Remove Listeners while Option Menu
    document.removeEventListener("click", positions_intro);
    document.removeEventListener("click", positions_bibliothek);
    document.removeEventListener("click", positions_mirror_room);
    let options = {
      one: _option1,
      two: _option2
    };
    let decide = await ƒS.Menu.getInput(options);
    switch (decide) {
      // Add Listeners again
      case options.one:
        sfx("confirm");
        mapListeners()
        return true;
      case options.two:
        sfx("confirm");
        mapListeners()
        return false;
      default:
        return null;
    }
  }

  export function sfx(_sfx: string) {
    let randomConfirm = Math.floor(Math.random() * sound.protagonist.confirmation.length);
    let randomComplete = Math.floor(Math.random() * sound.protagonist.completion.length);
    let randomGreet = Math.floor(Math.random() * sound.protagonist.greeting.length);
    let randomBye = Math.floor(Math.random() * sound.protagonist.farewell.length);
    let randomNo = Math.floor(Math.random() * sound.protagonist.refusal.length);

    switch (_sfx) {
      case "confirm":
        ƒS.Sound.play(sound.protagonist.confirmation[randomConfirm], 0.5, false);
        break;
      case "complete":
        ƒS.Sound.play(sound.protagonist.completion[randomComplete], 0.5, false);
        break;
      case "greet":
        ƒS.Sound.play(sound.protagonist.greeting[randomGreet], 0.5, false);
        break;
      case "bye":
        ƒS.Sound.play(sound.protagonist.farewell[randomBye], 0.5, false);
        break;
      case "no":
        ƒS.Sound.play(sound.protagonist.refusal[randomNo], 0.5, false);
        break;
      case "ambient":
        //ƒS.Sound.play(sound.backgroundTheme, 0.1, true);
        ƒS.Sound.fade(sound.backgroundTheme, 0.1, 3, true);
        break;
      case "combat":
        ƒS.Sound.fade(sound.combatTheme, 0.1, 2, true);
    }
  }

  export async function charSheet() {
    // Farbe
    await ƒS.Text.print(`${save.protagonist.name}<hr class="golden"></hr><br><p>Level: <span>${save.protagonist.level}</span></p><br><p>Leben: <span>${save.protagonist.health}</span></p>\
    <br><p>Schild: <span>${save.protagonist.defense}</span></p><br><p>Typ: <span>${save.protagonist.type}</span></p><br><p>Erfahrung: <span>${save.protagonist.experience}</span></p><br><p>Schaden: <span>${save.protagonist.damage}</span></p>`);
  }

  export function checkForItems(_item: string) {
    let items = document.querySelectorAll("li");
    for (let i = 0; i < items.length; i++) {
      if (_item === items[i].id) {
        console.log(true)
        return true;
      }
    } console.log(false); return false
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
    document.getElementById("inv").addEventListener("pointerdown", clickInventory);
    document.getElementById("char").addEventListener("click", charSheet)
    document.getElementById("items").addEventListener("pointerover", eventHandler);
    document.getElementById("weapon-slot").addEventListener("click", show_WeaponInfo)
    //document.getElementById("save").classList.add("rpgui-button");
    //document.getElementById("load").classList.add("rpgui-button");
    //document.getElementById("close").classList.add("rpgui-button");
    //document.getElementById("rules").classList.add("rpgui-button");
    codegenerator();
    createPlayer();
    //hero_healthbar(null);
    let scenes: ƒS.Scenes = [
      // { scene: Scene_Combat, name: "Scene_Combat" }
      { scene: Scene_Intro, name: "Scene_Intro" },
      // { scene: Scene_Bibliothek, name: "Scene_Bibliothek" }
      // { scene: Scene_Mirror_Room, name: "Scene_Mirror_Room" },
      // { scene: Scene_Mirror_World, name: "Scene_Mirror_World" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    save = ƒS.Progress.setData(save, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}