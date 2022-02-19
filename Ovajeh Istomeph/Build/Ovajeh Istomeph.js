"use strict";
var Ovajeh;
(function (Ovajeh) {
    async function protagonistCycle() {
        var currentProtagonistCycle;
        switch (Ovajeh.currentScene) {
            case "intro":
                currentProtagonistCycle = Ovajeh.hero.dialog.intro;
                break;
            case "bibliothek":
                currentProtagonistCycle = Ovajeh.hero.dialog.bibliothek;
                break;
            case "mirrorroom":
                currentProtagonistCycle = Ovajeh.hero.dialog.mirrorroom;
                break;
        }
        for (let i of Object.values(currentProtagonistCycle)) {
            for (let key in i) {
                // console.log("protagonist key is:", key);
                if (key == "mood") {
                    console.log("protagonist mood", i.mood.valueOf());
                    switch (i.mood.valueOf()) {
                        case "happy":
                            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.happy, Ovajeh.ƒS.positionPercent(20, 100));
                            await Ovajeh.ƒS.update(0);
                            break;
                        case "sad":
                            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                            await Ovajeh.ƒS.update(0);
                            break;
                        case "angry":
                            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, Ovajeh.ƒS.positionPercent(20, 100));
                            await Ovajeh.ƒS.update(0);
                            break;
                        case "normal":
                            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
                            await Ovajeh.ƒS.update(0);
                            break;
                        case "shocked":
                            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                            await Ovajeh.ƒS.update(0);
                            break;
                        case "smile":
                            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.smile, Ovajeh.ƒS.positionPercent(20, 100));
                            await Ovajeh.ƒS.update(0);
                            break;
                    }
                }
                if (key == "animation") {
                    console.log("protagonist animation:");
                }
                if (key == "text") {
                    console.log("protagonist line:", i.text.valueOf());
                    await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, i.text.valueOf());
                }
                if (key == "swap") {
                    // console.log(i.text.length)
                    Ovajeh.hero.dialog.intro.shift();
                }
            }
        }
    }
    Ovajeh.protagonistCycle = protagonistCycle;
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
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    class Character {
        // Stats
        name;
        level;
        health;
        experience;
        type;
        defense;
        damage;
        items;
        weapon;
        // Combat
        winRatio = 1.5;
        drawRatio = 1;
        effective = 1.5;
        equilibrium = 1;
        weak = 0.5;
        defend() {
            //
        }
        ;
        flee() {
            console.log(`${this.name} flees`);
            //
        }
        ;
        die() {
            console.log(`${this.name} does not exist anymore`);
            //
        }
        ;
    }
    Ovajeh.Character = Character;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    class Enemy extends Ovajeh.Character {
        constructor(_name, _level, _health, _experience, _type, _defense, _damage, _weapon) {
            super();
            //let healthbar = document.getElementById("enemyhealth").setAttribute('value', `${100}`);
            this.name = _name;
            this.level = _level;
            this.health = _health;
            this.experience = _experience;
            this.type = _type;
            this.defense = _defense;
            this.damage = _damage;
            // Items in Inventory
            this.items = [];
            // Equipped Weapon
            this.weapon = _weapon;
        }
        ;
        attack() {
            var attackMoves = {
                mighty_blow: "Mächtiger Schlag",
                // win: "Ausweich-Angriff"
                // lose: "Schneller Hieb"
                // draw: "Mächtiger Schlag" 
                leap_aside: "Ausweich-Angriff",
                // win: "Schneller Hieb"
                // lose: "Mächtiger Schlag"
                // draw: "Ausweich-Angriff"
                quick_slash: "Schneller Hieb",
                // win: "Mächtiger Schlag"
                // lose: "Ausweich-Angriff"
                // draw: "Schneller Hieb"
            };
            var r = Math.random(); // Ca. 1/3 Chance jeglichen Angriff zu casten
            if (r < 0.3) {
                return attackMoves.mighty_blow;
            }
            else if (r < 0.6) {
                return attackMoves.leap_aside;
            }
            else {
                return attackMoves.quick_slash;
            }
        }
        ;
        checkType() {
            // Love - Hate = effective < > weak
            // Love - Dream = equilibrium
            // Love - Destruction = weak < > effective
            // Hate - Dream = effective < > weak
            // Hate - Destruction = equilibrium
            // Dream - Destruction = effective < > weak
            let equilibrium = this.equilibrium;
            let effective = this.effective;
            let weak = this.weak;
            if (this.type == Ovajeh.save.protagonist.type) {
                console.log("equilibrium");
                return equilibrium;
            }
            else {
                switch (this.type) {
                    case "Love":
                        switch (Ovajeh.save.protagonist.type) {
                            case "Hate":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                            case "Dream":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Destruction":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                        }
                        break;
                    case "Hate":
                        switch (Ovajeh.save.protagonist.type) {
                            case "Love":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                            case "Dream":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                            case "Destruction":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                        }
                        break;
                    case "Dream":
                        switch (Ovajeh.save.protagonist.type) {
                            case "Love":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Hate":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                            case "Destruction":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                        }
                        break;
                    case "Destruction":
                        switch (Ovajeh.save.protagonist.type) {
                            case "Love":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                            case "Hate":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Dream":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                        }
                        break;
                }
                return equilibrium;
            }
        }
        async die() {
            await Ovajeh.ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', 'Ich lag falsch, du hast dir die Spiegelessenz verdient!');
            await Ovajeh.ƒS.Character.animate(Ovajeh.characters.antagonist, Ovajeh.characters.antagonist.pose.angry, Ovajeh.canvasBottomLeave());
            await Ovajeh.ƒS.update(0);
            Ovajeh.won = true;
            Ovajeh.save.protagonist.experience += this.experience;
            Ovajeh.checkExperience();
            this.drop();
            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Spiegelessenz);
            Ovajeh.save.protagonist.experience += 20;
            Ovajeh.checkExperience();
            await Ovajeh.ƒS.Text.print("Spiegelessenz dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>20</span> XP</p>");
            Ovajeh.ƒS.Sound.fade(Ovajeh.sound.combatTheme, 0, 1);
            Ovajeh.ƒS.insert(Ovajeh.Scene_Bibliothek);
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
            await Ovajeh.ƒS.update(0);
            await Ovajeh.say("happy", 'Ich habe es geschafft! Die Essenz muss ich sofort zu Michelas Spiegel bringen!');
        }
        drop() {
            let r = Math.floor(Math.random() * Ovajeh.items.Combat.length);
            let drop = Ovajeh.items.Combat[r];
            console.log(`${this.name} drops ${drop.name}`);
            Ovajeh.ƒS.Inventory.add(drop);
        }
        ;
    }
    Ovajeh.Enemy = Enemy;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    class Hero extends Ovajeh.Character {
        constructor(_name, _level, _health, _experience, _type, _defense, _damage, _weapon) {
            super();
            this.name = _name;
            this.level = _level;
            this.health = _health;
            this.experience = _experience;
            this.type = _type;
            this.defense = _defense;
            this.damage = _damage;
            // Items in Inventory
            this.items = [];
            // Equipped Weapon
            this.weapon = _weapon;
        }
        async attack() {
            let attackMoves = {
                mighty_blow: "Mächtiger Schlag",
                // win: "Ausweich-Angriff"
                // lose: "Schneller Hieb"
                // draw: "Mächtiger Schlag" 
                leap_aside: "Ausweich-Angriff",
                // win: "Schneller Hieb"
                // lose: "Mächtiger Schlag"
                // draw: "Ausweich-Angriff"
                quick_slash: "Schneller Hieb",
                // win: "Mächtiger Schlag"
                // lose: "Ausweich-Angriff"
                // draw: "Schneller Hieb"
            };
            let hero_randomGrunt = Math.floor(Math.random() * Ovajeh.sound.protagonist.grunting.length);
            // Player chooses Attack
            let attackAction = await Ovajeh.ƒS.Menu.getInput(attackMoves);
            // console.log(`player attacks with ${attackAction}`);
            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.grunting[hero_randomGrunt], 1, false);
            if (attackAction == "Ausweich-Angriff") {
                await Ovajeh.dashAttackAnimation();
            }
            else {
                await Ovajeh.attackAnimation();
            }
            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} benutzt ${attackAction}`);
            // Enemy reacts with Attack
            let enemyAttack = Ovajeh.enemy.attack();
            // console.log(`enemy attacks with ${enemyAttack}`);
            let enemy_randomGrunt = Math.floor(Math.random() * Ovajeh.sound.enemy.grunting.length);
            Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.grunting[enemy_randomGrunt], 1, false);
            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} benutzt ${enemyAttack}`);
            // Multiplier for Damage
            console.log(`checking ${this.type} vs ${Ovajeh.enemy.type}`);
            let hero_typeMultiplier = this.checkType();
            let enemy_typeMultiplier = Ovajeh.enemy.checkType();
            this.winRatio += this.weapon.winBonus;
            this.drawRatio += this.weapon.drawBonus;
            //console.log(this.winRatio, this.drawRatio);
            // Attack Damage gets calculated
            let hero_randomDmg = Math.floor(Math.random() * Ovajeh.sound.protagonist.damage.length);
            let enemy_randomDmg = Math.floor(Math.random() * Ovajeh.sound.enemy.damage.length);
            let hero_firstDmg;
            let enemy_firstDmg;
            let extraDmg = { hero: 0, enemy: 0 };
            let attackDmg = {
                hero: {
                    drawDmg: Math.floor(Math.random() * (this.damage * this.drawRatio + 1) + this.damage),
                    winDmg: Math.floor(Math.random() * (this.damage * this.winRatio + 1) + this.damage)
                },
                enemy: {
                    drawDmg: Math.floor(Math.random() * (Ovajeh.enemy.damage * Ovajeh.enemy.drawRatio + 1) + Ovajeh.enemy.damage),
                    winDmg: Math.floor(Math.random() * (Ovajeh.enemy.damage * Ovajeh.enemy.drawRatio + 1) + Ovajeh.enemy.damage)
                }
            };
            this.winRatio -= this.weapon.winBonus;
            this.drawRatio -= this.weapon.drawBonus;
            if (attackAction == enemyAttack) {
                console.log(`${attackAction} vs ${enemyAttack} = draw`);
                extraDmg.hero = attackDmg.hero.drawDmg * hero_typeMultiplier;
                hero_firstDmg = extraDmg.hero;
                extraDmg.enemy = attackDmg.enemy.drawDmg * enemy_typeMultiplier;
                enemy_firstDmg = extraDmg.enemy;
                console.log(`${this.name} deals ${attackDmg.hero.drawDmg} * ${hero_typeMultiplier} = ${Math.trunc(hero_firstDmg)}`, `${Ovajeh.enemy.name} deals ${attackDmg.enemy.drawDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} und ${Ovajeh.enemy.name} schlagen gleichzeitig zu`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.damage[enemy_randomDmg], 1, false);
                await Ovajeh.hurtAnimation();
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} macht ${Ovajeh.input_1()} ${Math.trunc(hero_firstDmg)} Schaden an ${Ovajeh.enemy.name}`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.damage[hero_randomDmg], 1, false);
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} macht ${Math.trunc(enemy_firstDmg)} Schaden an ${this.name}`);
            }
            else {
                switch (attackAction) {
                    case attackMoves.mighty_blow:
                        if (enemyAttack == attackMoves.leap_aside) {
                            console.log(`${attackAction} vs ${enemyAttack} = win + extra 50% damage`);
                            extraDmg.hero = (attackDmg.hero.winDmg * 1.5) * hero_typeMultiplier;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = 0;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals ${attackDmg.hero.winDmg} * ${hero_typeMultiplier} = ${Math.trunc(hero_firstDmg)}`, `${Ovajeh.enemy.name} deals = ${enemy_firstDmg}`);
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.damage[enemy_randomDmg], 1, false);
                            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} schlägt ${Ovajeh.enemy.name} und macht ${Ovajeh.input_1()} ${Math.trunc(hero_firstDmg)} Schaden`);
                        }
                        else {
                            console.log(`${attackAction} vs ${enemyAttack} = lose - extra 30% damage`);
                            extraDmg.hero = 0;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = (attackDmg.enemy.winDmg * 1.3) * enemy_typeMultiplier;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals = ${hero_firstDmg}`, `${Ovajeh.enemy.name} deals ${attackDmg.enemy.winDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.damage[hero_randomDmg], 1, false);
                            await Ovajeh.hurtAnimation();
                            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} schlägt ${this.name} und macht ${Math.trunc(enemy_firstDmg)} Schaden`);
                        }
                        break;
                    case attackMoves.leap_aside:
                        if (enemyAttack == attackMoves.quick_slash) {
                            console.log(`${attackAction} vs ${enemyAttack} = win`);
                            extraDmg.hero = (attackDmg.hero.winDmg * hero_typeMultiplier);
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = 0;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals ${attackDmg.hero.winDmg} * ${hero_typeMultiplier} = ${Math.trunc(hero_firstDmg)}`, `${Ovajeh.enemy.name} deals = ${enemy_firstDmg}`);
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.damage[enemy_randomDmg], 1, false);
                            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} schlägt ${Ovajeh.enemy.name} und macht ${Ovajeh.input_1()} ${Math.trunc(hero_firstDmg)} Schaden`);
                        }
                        else {
                            console.log(`${attackAction} vs ${enemyAttack} = lose`);
                            extraDmg.hero = 0;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = (attackDmg.enemy.winDmg * enemy_typeMultiplier);
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals = ${hero_firstDmg}`, `${Ovajeh.enemy.name} deals ${attackDmg.enemy.winDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.damage[hero_randomDmg], 1, false);
                            await Ovajeh.hurtAnimation();
                            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} schlägt ${this.name} und macht ${Math.trunc(enemy_firstDmg)} Schaden`);
                        }
                        break;
                    case attackMoves.quick_slash:
                        if (enemyAttack == attackMoves.mighty_blow) {
                            console.log(`${attackAction} vs ${enemyAttack} = win`);
                            extraDmg.hero = (attackDmg.hero.winDmg * hero_typeMultiplier);
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = 0;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals ${attackDmg.hero.winDmg} * ${hero_typeMultiplier} = ${hero_firstDmg}`, `${Ovajeh.enemy.name} deals = ${Math.trunc(hero_firstDmg)}`);
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.damage[enemy_randomDmg], 1, false);
                            await Ovajeh.hurtAnimation();
                            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} schlägt ${Ovajeh.enemy.name} und macht ${Ovajeh.input_1()} ${Math.trunc(hero_firstDmg)} Schaden`);
                        }
                        else {
                            console.log(`${attackAction} vs ${enemyAttack} = lose`);
                            extraDmg.hero = 0;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = (attackDmg.enemy.winDmg * enemy_typeMultiplier);
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals = ${hero_firstDmg}`, `${Ovajeh.enemy.name} deals ${attackDmg.enemy.winDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.damage[hero_randomDmg], 1, false);
                            await Ovajeh.hurtAnimation();
                            await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} schlägt ${this.name} und macht ${Math.trunc(enemy_firstDmg)} Schaden`);
                        }
                        break;
                }
            }
            // Weapon Damage
            //console.log(`${this.weapon.name} vs ${enemy.weapon.name}`);
            let hero_randomWeapDmg = Math.floor(Math.random() * Ovajeh.sound.protagonist.damage.length);
            let enemy_randomWeapDmg = Math.floor(Math.random() * Ovajeh.sound.enemy.damage.length);
            let hero_weaponDmg;
            let enemy_weaponDmg;
            if (hero_firstDmg > 0 && enemy_firstDmg > 0) {
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `Bonus Waffenschaden für Beide`);
                hero_weaponDmg = this.weapon.attack();
                enemy_weaponDmg = Ovajeh.enemy.weapon.attack();
            }
            else if (hero_firstDmg > 0) {
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `Bonus Waffenschaden für ${this.name}`);
                hero_weaponDmg = this.weapon.attack();
            }
            else {
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `Bonus Waffenschaden für ${Ovajeh.enemy.name}`);
                enemy_weaponDmg = Ovajeh.enemy.weapon.attack();
            }
            let hero_fullDmg = Math.floor(hero_firstDmg + hero_weaponDmg);
            let enemy_fullDmg = Math.floor(enemy_firstDmg + enemy_weaponDmg);
            //console.log([`${this.name} strikes ${hero_firstDmg} + ${hero_weaponDmg}`, `${enemy.name} strikes ${enemy_firstDmg} + ${enemy_weaponDmg}`])
            // Full Damage substracting from Health
            if (hero_fullDmg > 0) {
                Ovajeh.enemy.defense -= hero_fullDmg;
                let enemy_shieldbreak = Ovajeh.enemy.defense;
                if (Ovajeh.enemy.defense > 0) {
                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.damage[enemy_randomWeapDmg], 1, false);
                    await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} nimmt extra ${hero_weaponDmg} Waffenschaden für insgesamt ${hero_fullDmg} Schaden`);
                    console.log(`${Ovajeh.enemy.name} shield reduced to ${Ovajeh.enemy.defense}`);
                    Ovajeh.enemy_shieldbar(Math.abs(hero_fullDmg));
                }
                if (Math.sign(enemy_shieldbreak) === -1) {
                    document.getElementById("enemyshield").value = 0;
                    Ovajeh.enemy.defense = 0;
                    Ovajeh.enemy.health -= Math.abs(enemy_shieldbreak);
                    Ovajeh.enemy_healthbar(Math.abs(enemy_shieldbreak));
                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.damage[enemy_randomWeapDmg], 1, false);
                    await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} nimmt extra ${hero_weaponDmg} Waffenschaden für insgesamt ${hero_fullDmg} Schaden`);
                    console.log(`${Ovajeh.enemy.name} shield broken - ${Ovajeh.enemy.name} health reduced to ${Ovajeh.enemy.health}`);
                }
            }
            else {
                //await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} nimmt keinen extra Waffenschaden`);
                console.log(`${Ovajeh.enemy.name} took no damage`);
            }
            if (enemy_fullDmg > 0) {
                this.defense -= enemy_fullDmg;
                let hero_shieldbreak = this.defense;
                if (this.defense > 0) {
                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.damage[hero_randomWeapDmg], 1, false);
                    await Ovajeh.hurtAnimation();
                    await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} nimmt extra ${enemy_weaponDmg} Waffenschaden für insgesamt ${enemy_fullDmg} Schaden`);
                    console.log(`${this.name} shield reduced to ${this.defense}`);
                    Ovajeh.hero_shieldbar(Math.abs(enemy_fullDmg));
                }
                if (Math.sign(hero_shieldbreak) === -1) {
                    document.getElementById("heroshield").value = 0;
                    this.defense = 0;
                    this.health -= Math.abs(hero_shieldbreak);
                    Ovajeh.hero_healthbar(Math.abs(hero_shieldbreak));
                    await Ovajeh.hurtAnimation();
                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.damage[hero_randomWeapDmg], 1, false);
                    await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} nimmt extra ${enemy_weaponDmg} Waffenschaden für insgesamt ${enemy_fullDmg} Schaden`);
                    console.log(`${this.name} shield broken - ${this.name} health reduced to ${this.health}`);
                }
            }
            else {
                //await ƒS.Speech.tell('Kampfprotokoll', `${this.name} nimmt keinen extra Waffenschaden`);
                console.log(`${this.name} takes no damage`);
            }
            if (Ovajeh.enemy.health > 0 && this.health > 0) {
                Ovajeh.combat();
            }
            else if (Ovajeh.enemy.health <= 0) {
                let enemy_randomDeath = Math.floor(Math.random() * Ovajeh.sound.enemy.death.length);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.enemy.death[enemy_randomDeath], 1, false);
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${this.name} hat ${Ovajeh.enemy.name} besiegt!`);
                console.log(`${this.name} killed ${Ovajeh.enemy.name}`);
                Ovajeh.save.protagonist = this;
                Ovajeh.enemy.die();
            }
            else {
                let hero_randomDeath = Math.floor(Math.random() * Ovajeh.sound.protagonist.death.length);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.death[hero_randomDeath], 1, false);
                await Ovajeh.ƒS.Speech.tell('Kampfprotokoll', `${Ovajeh.enemy.name} hat ${this.name} besiegt!`);
                console.log(`${Ovajeh.enemy.name} killed ${this.name}`);
                await this.die();
            }
        }
        checkType() {
            // Love - Hate = effective < > weak
            // Love - Dream = equilibrium
            // Love - Destruction = weak < > effective
            // Hate - Dream = effective < > weak
            // Hate - Destruction = equilibrium
            // Dream - Destruction = effective < > weak
            let equilibrium = this.equilibrium;
            let effective = this.effective;
            let weak = this.weak;
            if (this.type == Ovajeh.enemy.type) {
                console.log("equilibrium");
                return equilibrium;
            }
            else {
                switch (this.type) {
                    case "Love":
                        switch (Ovajeh.enemy.type) {
                            case "Hate":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                            case "Dream":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Destruction":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                        }
                        break;
                    case "Hate":
                        switch (Ovajeh.enemy.type) {
                            case "Love":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                            case "Dream":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                            case "Destruction":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                        }
                        break;
                    case "Dream":
                        switch (Ovajeh.enemy.type) {
                            case "Love":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Hate":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                            case "Destruction":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                        }
                        break;
                    case "Destruction":
                        switch (Ovajeh.enemy.type) {
                            case "Love":
                                console.log(`${this.name} hit is effective`);
                                return effective;
                            case "Hate":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Dream":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                        }
                        break;
                }
                return equilibrium;
            }
        }
        async flee() {
            let fleeChance = Math.random();
            if (fleeChance > (Ovajeh.enemy.level / 10)) {
                console.log(`${this.name} successfully flees from ${Ovajeh.enemy.name}`);
                Ovajeh.save.protagonist.health = 100;
                Ovajeh.save.protagonist.defense = 50;
                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.antagonist);
                await Ovajeh.ƒS.update(2);
                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                await Ovajeh.ƒS.update(1);
                Ovajeh.ƒS.Sound.fade(Ovajeh.sound.combatTheme, 0, 1);
                Ovajeh.ƒS.insert(Ovajeh.Scene_Bibliothek);
                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Opferfackel);
                await Ovajeh.say("angry", "Ich kann es nicht fassen, dass ich mich zurückgezogen habe! Ich brauche die Essenz unbedingt!");
            }
            else {
                let penaltyDmg = Math.floor(Math.random() * (Ovajeh.enemy.level * 30));
                let hero_shieldbreak = (this.defense -= penaltyDmg);
                console.log(`${this.name} failed to flee from ${Ovajeh.enemy.name} and takes ${penaltyDmg} damage`);
                console.log(`${this.name} shield reduced to ${this.defense}`);
                if (hero_shieldbreak <= 0) {
                    this.defense = 0;
                    this.health += hero_shieldbreak;
                    console.log(`${this.name} shield broken - ${this.name} health reduced to ${this.health}`);
                }
                Ovajeh.combat();
            }
        }
        async die() {
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.antagonist);
            await Ovajeh.ƒS.update(2);
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
            await Ovajeh.ƒS.update(1);
            Ovajeh.ƒS.Sound.fade(Ovajeh.sound.combatTheme, 0, 1);
            Ovajeh.save.protagonist.health = 100;
            Ovajeh.save.protagonist.defense = 50;
            Ovajeh.ƒS.insert(Ovajeh.Scene_Bibliothek);
            await Ovajeh.say("shocked", 'Ich lebe noch! Gott sei Dank, aber ich fühle mich leicht geschwächt.');
            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Opferfackel);
        }
    }
    Ovajeh.Hero = Hero;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    Ovajeh.ƒ = FudgeCore;
    Ovajeh.ƒS = FudgeStory;
    // Transitions
    console.log("AUREA_NOVEL starting");
    Ovajeh.transition = {
        puzzle: {
            duration: 1,
            alpha: "./Images/Transitions/puzzle.png",
            edge: 1
        },
    };
    Ovajeh.sound = {
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
                "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Female/Karen Cenon/completion_8_karen.wav" // ?
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
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_1_karen.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_2_karen.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_3_karen.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_4_karen.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_12_karen.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_13_karen.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Female/Karen Cenon/miscellaneous_17_karen.wav",
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
                "./Audio/Super Dialogue Audio Pack v1/1 - Completion/Male/Meghan Christian/completion_8_meghan.wav" // ?
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
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_1_meghan.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_2_meghan.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_3_meghan.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_4_meghan.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_12_meghan.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_13_meghan.wav",
                "./Audio/Super Dialogue Audio Pack v1/6 - Miscellaneous/Male/Meghan Christian/miscellaneous_17_meghan.wav",
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
    };
    // Locations
    Ovajeh.location = {
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
    };
    // Characters
    Ovajeh.characters = {
        narrator: {
            name: "Narrator"
        },
        protagonist: {
            name: "Hero",
            origin: Ovajeh.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Ovajeh.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // Pfad als String angeben
                angry: "./Images/Characters/Rune-Free-Pack/Girl_Evil.png",
            }
        },
        michela: {
            name: "Michela",
            origin: Ovajeh.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Ovajeh.ƒS.ORIGIN.CENTER,
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
    };
    // Animations
    function canvasBottomEntry() {
        return {
            start: { translation: Ovajeh.ƒS.positionPercent(80, 160) },
            end: { translation: Ovajeh.ƒS.positionPercent(80, 100) },
            duration: 3,
            playmode: Ovajeh.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Ovajeh.canvasBottomEntry = canvasBottomEntry;
    function canvasBottomLeave() {
        return {
            start: { translation: Ovajeh.ƒS.positionPercent(80, 110) },
            end: { translation: Ovajeh.ƒS.positionPercent(80, 200) },
            duration: 3,
            playmode: Ovajeh.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Ovajeh.canvasBottomLeave = canvasBottomLeave;
    function damaged_1() {
        return {
            start: { translation: Ovajeh.ƒS.positionPercent(20, 100) },
            end: { translation: Ovajeh.ƒS.positionPercent(22, 102) },
            duration: 0.05,
            playmode: Ovajeh.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Ovajeh.damaged_1 = damaged_1;
    function damaged_2() {
        return {
            start: { translation: Ovajeh.ƒS.positionPercent(22, 102) },
            end: { translation: Ovajeh.ƒS.positionPercent(20, 98) },
            duration: 0.05,
            playmode: Ovajeh.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Ovajeh.damaged_2 = damaged_2;
    function damaged_3() {
        return {
            start: { translation: Ovajeh.ƒS.positionPercent(20, 98) },
            end: { translation: Ovajeh.ƒS.positionPercent(18, 102) },
            duration: 0.05,
            playmode: Ovajeh.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Ovajeh.damaged_3 = damaged_3;
    function damaged_4() {
        return {
            start: { translation: Ovajeh.ƒS.positionPercent(18, 102) },
            end: { translation: Ovajeh.ƒS.positionPercent(20, 100) },
            duration: 0.05,
            playmode: Ovajeh.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Ovajeh.damaged_4 = damaged_4;
    async function damage_Cycle() {
        for (let i = 0; i <= 2; i++) {
            await Ovajeh.ƒS.Character.animate(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, damaged_1());
            await Ovajeh.ƒS.Character.animate(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, damaged_2());
            await Ovajeh.ƒS.Character.animate(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, damaged_3());
            await Ovajeh.ƒS.Character.animate(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, damaged_4());
        }
    }
    Ovajeh.damage_Cycle = damage_Cycle;
    async function attackAnimation() {
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack1, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack2, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack3, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack4, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack5, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack6, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack7, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack8, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack9, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack10, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack11, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack12, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.attack1, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.update(0.1);
    }
    Ovajeh.attackAnimation = attackAnimation;
    async function dashAttackAnimation() {
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack1, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack2, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack3, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack4, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack5, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack6, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack7, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack8, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack9, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack10, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.dashAttack1, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.update(0.1);
    }
    Ovajeh.dashAttackAnimation = dashAttackAnimation;
    async function hurtAnimation() {
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.hurt1, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.hurt2, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.hurt3, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.inCombat, Ovajeh.characters.inCombat.pose.hurt4, Ovajeh.ƒS.positionPercent(50, 50));
        await Ovajeh.ƒS.update(0.1);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.inCombat);
        await Ovajeh.ƒS.update(0.1);
    }
    Ovajeh.hurtAnimation = hurtAnimation;
    Ovajeh.visited_Scenes = [];
    Ovajeh.menu = true;
    Ovajeh.statusInventory = false;
    Ovajeh.selectedItemArray = [];
    Ovajeh.counter = 0;
    Ovajeh.enemyArray = [];
    Ovajeh.weapon_Class_Array = [];
    let combine;
    let use;
    function closeUI() {
        document.getElementsByName("div").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementsByName("speech").forEach(meterStuff => meterStuff.hidden = true);
        Ovajeh.ui_Open = false;
    }
    Ovajeh.closeUI = closeUI;
    function showUI() {
        if (Ovajeh.currentScene == "combat") {
            document.getElementsByName("div").forEach(meterStuff => meterStuff.hidden = false);
            document.getElementsByName("speech").forEach(meterStuff => meterStuff.hidden = false);
        }
        else
            document.getElementsByName("speech").forEach(meterStuff => meterStuff.hidden = false);
        Ovajeh.ui_Open = true;
    }
    Ovajeh.showUI = showUI;
    function visitScene() {
        Ovajeh.ƒS.Speech.setTickerDelays(20, 1);
        if (Ovajeh.save.visitedScenes.indexOf(Ovajeh.currentScene) === -1) {
            Ovajeh.save.visitedScenes.push(Ovajeh.currentScene);
            console.log(`added ${Ovajeh.currentScene} to first visited locations`);
            return false;
        }
        else {
            console.log(`${Ovajeh.currentScene} was already visited before`);
            return true;
        }
    }
    Ovajeh.visitScene = visitScene;
    function mapListeners() {
        console.log("Listeners re-engaged");
        switch (Ovajeh.currentScene) {
            case "intro":
                document.addEventListener("click", Ovajeh.positions_intro);
                document.removeEventListener("click", Ovajeh.positions_bibliothek);
                document.removeEventListener("click", Ovajeh.positions_mirror_room);
                break;
            case "bibliothek":
                document.addEventListener("click", Ovajeh.positions_bibliothek);
                document.removeEventListener("click", Ovajeh.positions_intro);
                document.removeEventListener("click", Ovajeh.positions_mirror_room);
                break;
            case "mirrorroom":
                document.addEventListener("click", Ovajeh.positions_mirror_room);
                document.removeEventListener("click", Ovajeh.positions_intro);
                document.removeEventListener("click", Ovajeh.positions_bibliothek);
                break;
            case "combat":
                document.removeEventListener("click", Ovajeh.positions_intro);
                document.removeEventListener("click", Ovajeh.positions_bibliothek);
                document.removeEventListener("click", Ovajeh.positions_mirror_room);
                break;
        }
    }
    Ovajeh.mapListeners = mapListeners;
    // Save Data (Data for Save)
    Ovajeh.save = {
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
            let name = ["Lucy", "Alice", "Cecile", "Camille", "Elise", "Zara", "Irene", "Mina"];
            let r = Math.floor(Math.random() * name.length);
            return name[r];
        },
        typeArray: function () {
            let type = ["Love", "Hate", "Dream", "Destruction"];
            let r = Math.floor(Math.random() * type.length);
            return type[r];
        },
        protagonist: Ovajeh.player,
        pagecount: 0,
        code: "",
        weaponArray: Ovajeh.weapon_Class_Array,
        visitedScenes: Ovajeh.visited_Scenes
    };
    //document.getElementsByName("hero_health").forEach(meterStuff => meterStuff.hidden = true)
    function hero_healthbar(_health) {
        let percentHealth = (50 + (Ovajeh.save.protagonist.level * 50)) / 100;
        //console.log(percentHealth);
        let percentDmg = (_health / percentHealth);
        //console.log(percentDmg);
        document.getElementById("herohealth").value -= percentDmg;
        console.log(`${Ovajeh.save.protagonist.name} health to ${document.getElementById("herohealth").value} %`);
    }
    Ovajeh.hero_healthbar = hero_healthbar;
    function hero_shieldbar(_health) {
        let percentShield = (80 + (Ovajeh.save.protagonist.level * 20)) / 100;
        //console.log(percentHealth);
        let percentDmg = (_health / percentShield);
        //console.log(percentDmg);
        document.getElementById("heroshield").value -= percentDmg;
        console.log(`${Ovajeh.save.protagonist.name} shield to ${document.getElementById("heroshield").value} %`);
    }
    Ovajeh.hero_shieldbar = hero_shieldbar;
    function enemy_healthbar(_health) {
        let percentHealth = Ovajeh.enemy_startingHP / 100;
        //console.log(percentHealth);
        let percentDmg = (_health / percentHealth);
        //console.log(percentDmg);
        document.getElementById("enemyhealth").value -= percentDmg;
        console.log(`${Ovajeh.enemy.name} health to ${document.getElementById("enemyhealth").value} %`);
    }
    Ovajeh.enemy_healthbar = enemy_healthbar;
    function enemy_shieldbar(_health) {
        let percentShield = Ovajeh.enemy_startingSP / 100;
        //console.log(percentHealth);
        let percentDmg = (_health / percentShield);
        //console.log(percentDmg);
        document.getElementById("enemyshield").value -= percentDmg;
        console.log(`${Ovajeh.enemy.name} shield to ${document.getElementById("enemyshield").value} %`);
    }
    Ovajeh.enemy_shieldbar = enemy_shieldbar;
    function weaponItem() {
        for (let i = 0; i < Ovajeh.save.weaponArray.length; i++) {
            let weapon = {
                name: Ovajeh.save.weaponArray[i].name,
                description: `Kampf`,
                examine: `Typ: ${Ovajeh.save.weaponArray[i].weaponType}`,
                text: "Eine magische Waffe der Spiegelwelt, geschmiedet aus Sanchezium.",
                image: "./Images/Items/Export_64/SwordWood.png",
                static: true,
                handler: hndItem
            };
            //items.Combat.push(weapon);
            console.log(Ovajeh.items.Combat);
            Ovajeh.ƒS.Inventory.add(weapon);
        }
    }
    Ovajeh.weaponItem = weaponItem;
    function changeWeapon(_nameWeapon) {
        for (let i = 0; i < Ovajeh.save.weaponArray.length; i++) {
            if (Ovajeh.save.weaponArray[i].name == _nameWeapon) {
                Ovajeh.save.protagonist.weapon = Ovajeh.save.weaponArray[i];
                Ovajeh.save.protagonist.type = Ovajeh.save.weaponArray[i].weaponType;
                console.log(`equipped ${Ovajeh.save.protagonist.weapon.name}`);
                console.log(`${Ovajeh.save.protagonist.name}'s type changed to ${Ovajeh.save.protagonist.type}`);
                console.log(Ovajeh.save.protagonist);
            }
        }
    }
    Ovajeh.changeWeapon = changeWeapon;
    // Menü
    let inGameMenu = {
        save: "Save",
        load: "Load",
        rules: "Controls",
        close: "Close"
    };
    function clickInventory(_event) {
        if (_event) {
            Ovajeh.statusInventory = false;
            console.log(Ovajeh.statusInventory);
            mapListeners();
            combine = undefined;
            if (Ovajeh.currentScene == "combat") {
                combat();
            }
        }
    }
    Ovajeh.clickInventory = clickInventory;
    async function buttonFunctions(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Ovajeh.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Ovajeh.ƒS.Progress.load();
                break;
            case inGameMenu.rules:
                await Ovajeh.ƒS.Text.print("<span>Inventar: Öffnen = 'I' Schließen = 'I' / 'ESC' / 'Close Button'</span><br> \
        <span>Menu: Öffnen = 'M' Schließen = 'M'</span><br><span>Hover über Items: Examine = 'E' Combine = 'C' Use = 'U'</span>");
                break;
            case inGameMenu.close:
                Ovajeh.gameMenu.close();
                Ovajeh.menu = false;
                break;
        }
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Ovajeh.ƒ.KEYBOARD_CODE.F8:
                console.log("save");
                await Ovajeh.ƒS.Progress.save();
                break;
            case Ovajeh.ƒ.KEYBOARD_CODE.F9:
                console.log("load");
                await Ovajeh.ƒS.Progress.load();
                break;
            case Ovajeh.ƒ.KEYBOARD_CODE.M:
                if (Ovajeh.menu) {
                    console.log("close");
                    Ovajeh.gameMenu.close();
                    Ovajeh.menu = false;
                }
                else {
                    console.log("open");
                    Ovajeh.gameMenu.open();
                    Ovajeh.menu = true;
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
    Ovajeh.weaponCraft = {
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
            let dR = Math.floor(Math.random() * (10 * Ovajeh.save.protagonist.level)) + (5 * Ovajeh.save.protagonist.level);
            console.log(`hero weapon damage: ${dR}`);
            return dR;
        },
        enemy_damage: function (_enemyLVL) {
            let dR = Math.floor(Math.random() * (8 * _enemyLVL)) + (2 * _enemyLVL);
            console.log(`enemy weapon damage: ${dR}`);
            return dR;
        },
        hero_rolls: function () {
            let rR = Math.floor(Math.random() * (Ovajeh.save.protagonist.level + 1)) + 1;
            console.log(`hero weapon roll amount: ${rR}`);
            return rR;
        },
        enemy_rolls: function (_enemyLVL) {
            let rR = Math.floor(Math.random() * (_enemyLVL)) + 1;
            console.log(`enemy weapon roll amount: ${rR}`);
            return rR;
        },
        hero_miss: function () {
            let mR = (Math.floor(Math.random() * (6 - Ovajeh.save.protagonist.level)) + 1) / 10;
            console.log(`hero weapon miss chance: ${mR}`);
            return mR;
        },
        enemy_miss: function (_enemyLVL) {
            let mR = (Math.floor(Math.random() * (8 - _enemyLVL)) + 2) / 10;
            console.log(`enemy weapon miss chance: ${mR}`);
            return mR;
        },
        hero_crit: function () {
            let cR = Math.floor(Math.random() * (15 - 11 + 1) + 11) / 10;
            console.log(`hero weapon crit multiplier: ${cR}`);
            return cR;
        },
        enemy_crit: function (_enemyLVL) {
            let cR = Math.floor(Math.random() * (15 - 11 + 1) + 11) / 10;
            console.log(`enemy weapon crit multiplier: ${cR}`);
            return cR;
        }
    };
    // Items
    Ovajeh.items = {
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
      Mal schauen, was das Ziffernblatt verrät... Hmmm, die Zeiger stehen alle still.",
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
    Ovajeh.state = {
        a: 1,
        b: "",
        c: 2
    };
    Ovajeh.pages = [
        "NUR PLATZHALTER", "Die Möglichkeit, dass ein Parallel-Universum neben unserem existiert, ist gar nicht so unwahrscheinlich. Aber was ist mit einem Parallel-Universum überhaupt gemeint? Die simple Antwort könnte heißen, dass es lediglich eine Kopie unseres eigenen Kosmos ist. \
    Natürlich stößt der aktuelle Forschungsstand in diesem Bereich der Physik an seine Grenzen, daher sind die Meinungen dazu sehr unterschiedlich. Die komplexere Antwort könnte daher sein, dass es alle Möglichkeiten, die bislang hätten passieren können, in unendlich vielen Kopien unseres Universums tatsächlich passiert sind. \
    Ein anderer Verlauf der Geschichte der Menschheit wäre ein noch viel zu einfacher Ansatz. Jede noch so kleine mögliche Änderung des Zustandes könnte unbeschreibliche Auswirkungen auf die Zukunft haben.",
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
    function randomItem() {
        let randomIndex = Math.floor(Math.random() * Ovajeh.items.Buchseiten.length);
        let randomItem = Ovajeh.items.Buchseiten[randomIndex];
        if (Ovajeh.save.pagecount < 6) {
            Ovajeh.ƒS.Inventory.add(randomItem);
            Ovajeh.items.Buchseiten.splice(randomIndex, 1);
            document.getElementById("pagecount").innerHTML = "Gesammelte Seiten" + " " + `${Ovajeh.save.pagecount += 1}/6`;
            console.log("added", randomItem.name, `${Ovajeh.save.pagecount}/6`);
        }
    }
    Ovajeh.randomItem = randomItem;
    function codegenerator() {
        for (let i = 0; i < Ovajeh.items.Buchseiten.length; i++) {
            var codeArray = Array.from(((Ovajeh.items.Buchseiten[i].text.replaceAll('.', "x")).replaceAll(' ', 'y')).replaceAll(',', 'z'));
            let randomIndex = Math.floor(Math.random() * Ovajeh.items.Buchseiten[i].text.length);
            let randomSymbol = codeArray[randomIndex];
            Ovajeh.save.code += randomSymbol.toUpperCase();
        }
        console.log(Ovajeh.save.code);
    }
    Ovajeh.codegenerator = codegenerator;
    async function codecheck() {
        let check = Ovajeh.ƒS.Speech.getInput();
        if ((await check).toString() == Ovajeh.save.code) {
            console.log("right code");
            sfx("complete");
            await say("happy", 'Hurra! Der Code hat funktioniert! Am Ende waren die Buchseiten doch mehr als hilfreich.');
            await say("smile", 'Die fehlende Spiegelscherbe. Hab ich mir doch fast gedacht!');
            await say("happy", 'Endlich halte ich den Schlüssel zu einer anderen Welt in meinen Händen! Jetzt brauche ich Antworten... Viele!');
            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Scherbe);
            document.getElementById("Code").remove();
            Ovajeh.save.protagonist.experience += 30;
            checkExperience();
            sfx("complete");
            await Ovajeh.ƒS.Text.print("Scherbe dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>30</span> XP</p>");
        }
        else {
            console.log("wrong code");
            sfx("no");
            await say("sad", 'Verdammt! Irgendwas übersehe ich.');
        }
    }
    Ovajeh.codecheck = codecheck;
    Ovajeh.gotWeapon = false;
    async function numberCodeCheck() {
        let code = 113355;
        let check = Ovajeh.ƒS.Speech.getInput();
        if (await check == code.toString()) {
            console.log("right code");
            sfx("complete");
            await say("happy", 'JAAAA! Endlich geschafft!');
            await say("shocked", 'Ach du grüne Neune! Ist das... Ist das eine Waffe?');
            await say("shocked", 'EINE WAFFE?! Hier in der Bibliothek?');
            await say("angry", 'Adam hat viel zu erklären! Die Waffe war also das "Es" auf der Notiz...');
            await say("normal", 'Hat wohl nicht viel gebracht, vergessen wurde sie trotzdem.');
            await say("sad", 'Ich kann nur nicht fassen, dass Adam damit was zu tun hat.');
            await say("shocked", 'Hat er Michela am Ende doch entführt?!');
            await say("angry", 'Eines ist klar! Wohin sie auch immer gegangen sind... In eine Parallelwelt oder wo auch immer...');
            await say("angry", 'Die Waffe wird dort wahrscheinlich sehr wertvoll sein. Wer weiß schon welche unheimlichen Dinge dort passieren könnten?');
            await say("normal", 'Ich nehme sie erstmal mit. So oder so werde ich Adam deshalb zur Rede stellen.');
            sfx("complete");
            document.getElementById("Taschenuhr").remove();
            document.getElementById("Notiz").remove();
            craftWeaponHero();
            Ovajeh.save.protagonist.experience += 50;
            await Ovajeh.ƒS.Text.print("Waffe dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>50</span> XP</p>");
            checkExperience();
            Ovajeh.gotWeapon = true;
        }
        else {
            console.log("wrong code");
            sfx("no");
            await say("sad", 'Ein Versuch war es wert... Irgendwo muss ich den Code doch finden können.');
        }
    }
    Ovajeh.numberCodeCheck = numberCodeCheck;
    async function hndItem(_event) {
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
                            Ovajeh.ƒS.Text.print(Ovajeh.pages[Number(_event.detail.substring(6, 7))]);
                            break;
                        case `${Ovajeh.items.Asche.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Asche.text);
                            break;
                        case `${Ovajeh.items.Blut.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Blut.text);
                            break;
                        case `${Ovajeh.items.Blutsfeder.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Blutsfeder.text);
                            break;
                        case `${Ovajeh.items.Buch.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Buch.text);
                            break;
                        case `${Ovajeh.items.Code.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.save.code);
                            break;
                        case `${Ovajeh.items.Fackel.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Fackel.text);
                            break;
                        case `${Ovajeh.items.Feder.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Feder.text);
                            break;
                        case `${Ovajeh.items.Kaminteil.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Kaminteil.text);
                            break;
                        case `${Ovajeh.items.Lampenteil.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Lampenteil.text);
                            break;
                        case `${Ovajeh.items.Notiz.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Notiz.text);
                            break;
                        case `${Ovajeh.items.Opferfackel.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Opferfackel.text);
                            break;
                        case `${Ovajeh.items.Reißzwecke.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Reißzwecke.text);
                            break;
                        case `${Ovajeh.items.Scherbe.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Scherbe.text);
                            break;
                        case `${Ovajeh.items.Schlüssel.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Schlüssel.text);
                            break;
                        case `${Ovajeh.items.Spiegelessenz.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Spiegelessenz.text);
                            break;
                        case `${Ovajeh.items.Stuhlbein.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Stuhlbein.text);
                            break;
                        case `${Ovajeh.items.Stoff.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Stoff.text);
                            break;
                        case `${Ovajeh.items.Taschenuhr.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Taschenuhr.text);
                            break;
                        case `${Ovajeh.items.Zahn.name}`:
                            Ovajeh.ƒS.Text.print(Ovajeh.items.Zahn.text);
                            break;
                    }
                }
                else {
                    switch (use) {
                        case `${Ovajeh.items.Asche.name}`:
                        case `${Ovajeh.items.Blut.name}`:
                        case `${Ovajeh.items.Buch.name}`:
                        case `${Ovajeh.items.Code.name}`:
                        case `${Ovajeh.items.Feder.name}`:
                        case `${Ovajeh.items.Kaminteil.name}`:
                        case `${Ovajeh.items.Lampenteil.name}`:
                        case `${Ovajeh.items.Notiz.name}`:
                        case `${Ovajeh.items.Opferfackel.name}`:
                        case `${Ovajeh.items.Reißzwecke.name}`:
                        case `${Ovajeh.items.Scherbe.name}`:
                        case `${Ovajeh.items.Schlüssel.name}`:
                        case `${Ovajeh.items.Spiegelessenz.name}`:
                        case `${Ovajeh.items.Stuhlbein.name}`:
                        case `${Ovajeh.items.Stoff.name}`:
                        case `${Ovajeh.items.Taschenuhr.name}`:
                        case `${Ovajeh.items.Zahn.name}`:
                        case "Seite 1":
                        case "Seite 2":
                        case "Seite 3":
                        case "Seite 4":
                        case "Seite 5":
                        case "Seite 6":
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${use} kann nicht mit ${_event.detail} benutzt werden<hr class="golden"></hr>`);
                            use = undefined;
                            break;
                        case `${Ovajeh.items.Blutsfeder.name}`:
                            if (_event.detail == `${Ovajeh.items.Fackel.name}`) {
                                sfx("complete");
                                document.getElementById("Blutsfeder").remove();
                                document.getElementById("Fackel").remove();
                                await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Opferfackel.name}<hr class="golden"></hr><br> + 30 XP`);
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Opferfackel);
                                Ovajeh.save.protagonist.experience += 30;
                                checkExperience();
                            }
                            if (_event.detail == use) {
                                sfx("no");
                                await Ovajeh.ƒS.Text.print(`${use} nicht mit sich selbst benutzbar<hr class="golden"></hr>`);
                            }
                            if (_event.detail !== `${Ovajeh.items.Fackel.name}`) {
                                sfx("no");
                                await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Blutsfeder.name} benutzbar<hr class="golden"></hr>`);
                            }
                            use = undefined;
                            break;
                        case `${Ovajeh.items.Fackel.name}`:
                            if (_event.detail == `${Ovajeh.items.Blutsfeder.name}`) {
                                sfx("complete");
                                document.getElementById("Blutsfeder").remove();
                                document.getElementById("Fackel").remove();
                                await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Opferfackel.name}<hr class="golden"></hr><br> + 30 XP`);
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Opferfackel);
                                Ovajeh.save.protagonist.experience += 30;
                                checkExperience();
                            }
                            if (_event.detail == use) {
                                sfx("no");
                                await Ovajeh.ƒS.Text.print(`${use} nicht mit sich selbst benutzbar<hr class="golden"></hr>`);
                            }
                            if (_event.detail !== `${Ovajeh.items.Blutsfeder.name}`) {
                                sfx("no");
                                await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Fackel.name} benutzbar<hr class="golden"></hr>`);
                            }
                            use = undefined;
                            break;
                    }
                }
            }
            else {
                switch (combine) {
                    case `${Ovajeh.items.Asche.name}`:
                    case `${Ovajeh.items.Blutsfeder.name}`:
                    case `${Ovajeh.items.Buch.name}`:
                    case `${Ovajeh.items.Code.name}`:
                    case `${Ovajeh.items.Fackel.name}`:
                    case `${Ovajeh.items.Notiz.name}`:
                    case `${Ovajeh.items.Opferfackel.name}`:
                    case `${Ovajeh.items.Reißzwecke.name}`:
                    case `${Ovajeh.items.Scherbe.name}`:
                    case `${Ovajeh.items.Schlüssel.name}`:
                    case `${Ovajeh.items.Spiegelessenz.name}`:
                    case `${Ovajeh.items.Taschenuhr.name}`:
                    case `${Ovajeh.items.Zahn.name}`:
                        sfx("no");
                        await Ovajeh.ƒS.Text.print(`${combine} kann nicht mit ${_event.detail} kombininiert werden<hr class="golden"></hr>`);
                        combine = undefined;
                        break;
                    case `${Ovajeh.items.Blut.name}`:
                        if (_event.detail == `${Ovajeh.items.Feder.name}`) {
                            sfx("complete");
                            document.getElementById("Blut").remove();
                            document.getElementById("Feder").remove();
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Blutsfeder.name}<hr class="golden"></hr><br> + 20 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Blutsfeder);
                            Ovajeh.save.protagonist.experience += 20;
                            checkExperience();
                        }
                        if (_event.detail == combine) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`);
                        }
                        if (_event.detail !== `${Ovajeh.items.Feder.name}`) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Blut.name} kombinierbar<hr class="golden"></hr>`);
                        }
                        combine = undefined;
                        break;
                    case `${Ovajeh.items.Feder.name}`:
                        if (_event.detail == `${Ovajeh.items.Blut.name}`) {
                            sfx("complete");
                            document.getElementById("Feder").remove();
                            document.getElementById("Blut").remove();
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Blutsfeder.name}<hr class="golden"></hr><br> + 20 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Blutsfeder);
                            Ovajeh.save.protagonist.experience += 20;
                            checkExperience();
                        }
                        if (_event.detail == combine) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`);
                        }
                        if (_event.detail !== `${Ovajeh.items.Blut.name}`) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Feder.name} kombinierbar<hr class="golden"></hr>`);
                        }
                        combine = undefined;
                        break;
                    case `${Ovajeh.items.Kaminteil.name}`:
                        if (_event.detail == `${Ovajeh.items.Lampenteil.name}`) {
                            sfx("complete");
                            document.getElementById("Kaminteil").remove();
                            document.getElementById("Lampenteil").remove();
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Schlüssel.name}<hr class="golden"></hr><br> + 20 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Schlüssel);
                            Ovajeh.save.protagonist.experience += 20;
                            checkExperience();
                            Ovajeh.gotKey = true;
                        }
                        if (_event.detail == combine) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`);
                        }
                        if (_event.detail !== `${Ovajeh.items.Lampenteil.name}`) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Kaminteil.name} kombinierbar<hr class="golden"></hr>`);
                        }
                        combine = undefined;
                        break;
                    case `${Ovajeh.items.Lampenteil.name}`:
                        if (_event.detail == `${Ovajeh.items.Kaminteil.name}`) {
                            sfx("complete");
                            document.getElementById("Lampenteil").remove();
                            document.getElementById("Kaminteil").remove();
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Schlüssel.name}<hr class="golden"></hr><br> + 20 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Schlüssel);
                            Ovajeh.save.protagonist.experience += 20;
                            checkExperience();
                            Ovajeh.gotKey = true;
                        }
                        if (_event.detail == combine) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`);
                        }
                        if (_event.detail !== `${Ovajeh.items.Kaminteil.name}`) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Lampenteil.name} kombinierbar<hr class="golden"></hr>`);
                        }
                        combine = undefined;
                        break;
                    case `${Ovajeh.items.Stuhlbein.name}`:
                        if (_event.detail == `${Ovajeh.items.Fackel.name}`) {
                            sfx("complete");
                            document.getElementById("Stuhlbein").remove();
                            document.getElementById("Stoff").remove();
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Fackel.name}<hr class="golden"></hr><br> + 20 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Fackel);
                            Ovajeh.save.protagonist.experience += 20;
                            checkExperience();
                        }
                        if (_event.detail == combine) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`);
                        }
                        if (_event.detail !== `${Ovajeh.items.Stoff.name}`) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Stuhlbein.name} kombinierbar<hr class="golden"></hr>`);
                        }
                        combine = undefined;
                        break;
                    case `${Ovajeh.items.Stoff.name}`:
                        if (_event.detail == `${Ovajeh.items.Stuhlbein.name}`) {
                            sfx("complete");
                            document.getElementById("Stoff").remove();
                            document.getElementById("Stuhlbein").remove();
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Fackel.name}<hr class="golden"></hr><br> + 20 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Fackel);
                            Ovajeh.save.protagonist.experience += 20;
                            checkExperience();
                        }
                        if (_event.detail == combine) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${combine} nicht mit sich selbst kombinierbar<hr class="golden"></hr>`);
                        }
                        if (_event.detail !== `${Ovajeh.items.Stuhlbein.name}`) {
                            sfx("no");
                            await Ovajeh.ƒS.Text.print(`${_event.detail} nicht mit ${Ovajeh.items.Stoff.name} kombinierbar<hr class="golden"></hr>`);
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
                                await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Code.name}<hr class="golden"></hr><br> + 20 XP`);
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Code);
                                Ovajeh.save.protagonist.experience += 20;
                                checkExperience();
                                combine = undefined;
                                break;
                        }
                        break;
                }
            }
        }
    }
    function eventHandler(_event) {
        let container = document.querySelector("#items");
        let highlightedItems = container.querySelectorAll("li");
        for (let i = 0; i < highlightedItems.length; i++) {
            if (_event.target == highlightedItems[i]) {
                document.addEventListener("keydown", listen);
                Ovajeh.counter = i;
            }
        }
        if (_event.target == container) {
            document.removeEventListener("keydown", listen);
        }
    }
    async function listen(_event) {
        let nameItem = document.querySelectorAll("li > name");
        switch (_event.code) {
            case "KeyC":
                if (combine == undefined) {
                    if (use == undefined) {
                        combine = nameItem[Ovajeh.counter].innerHTML;
                        Ovajeh.ƒS.Text.print(`${combine} soll womit kombiniert werden?`);
                    }
                    else {
                        use = undefined;
                        combine = nameItem[Ovajeh.counter].innerHTML;
                        Ovajeh.ƒS.Text.print(`${combine} soll womit kombiniert werden?`);
                    }
                }
                console.log(combine);
                break;
            case "KeyE":
                console.log(`examining ${nameItem[Ovajeh.counter].innerHTML} ...`);
                switch (nameItem[Ovajeh.counter].innerHTML) {
                    case "Seite 1":
                        await Ovajeh.ƒS.Text.print(`Auf der Seite ist "${Ovajeh.save.code.substring(0, 1)}" besonders hervorgehoben.`);
                        break;
                    case "Seite 2":
                        await Ovajeh.ƒS.Text.print(`Auf der Seite ist "${Ovajeh.save.code.substring(1, 2)}" besonders hervorgehoben.`);
                        break;
                    case "Seite 3":
                        await Ovajeh.ƒS.Text.print(`Auf der Seite ist "${Ovajeh.save.code.substring(2, 3)}" besonders hervorgehoben.`);
                        break;
                    case "Seite 4":
                        await Ovajeh.ƒS.Text.print(`Auf der Seite ist "${Ovajeh.save.code.substring(3, 4)}" besonders hervorgehoben.`);
                        break;
                    case "Seite 5":
                        await Ovajeh.ƒS.Text.print(`Auf der Seite ist "${Ovajeh.save.code.substring(4, 5)}" besonders hervorgehoben.`);
                        break;
                    case "Seite 6":
                        await Ovajeh.ƒS.Text.print(`Auf der Seite ist "${Ovajeh.save.code.substring(5, 6)}" besonders hervorgehoben.`);
                        break;
                    case `${Ovajeh.items.Zahn.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Zahn.examine}`);
                        break;
                    case `${Ovajeh.items.Stuhlbein.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Stuhlbein.examine}`);
                        break;
                    case `${Ovajeh.items.Lampenteil.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Lampenteil.examine}`);
                        break;
                    case `${Ovajeh.items.Kaminteil.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Kaminteil.examine}`);
                        break;
                    case `${Ovajeh.items.Schlüssel.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Schlüssel.examine}`);
                        break;
                    case `${Ovajeh.items.Scherbe.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Scherbe.examine}`);
                        break;
                    case `${Ovajeh.items.Asche.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Asche.examine}`);
                        break;
                    case `${Ovajeh.items.Blut.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Blut.examine}`);
                        break;
                    case `${Ovajeh.items.Blutsfeder.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Blutsfeder.examine}`);
                        break;
                    case `${Ovajeh.items.Fackel.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Fackel.examine}`);
                        break;
                    case `${Ovajeh.items.Code.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Code.examine}`);
                        break;
                    case `${Ovajeh.items.Feder.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Feder.examine}`);
                        break;
                    case `${Ovajeh.items.Opferfackel.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Opferfackel.examine}`);
                        break;
                    case `${Ovajeh.items.Schlüssel.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Schlüssel.examine}`);
                        break;
                    case `${Ovajeh.items.Reißzwecke.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Reißzwecke.examine}`);
                        break;
                    case `${Ovajeh.items.Spiegelessenz.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Spiegelessenz.examine}`);
                        break;
                    case `${Ovajeh.items.Stoff.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Stoff.examine}`);
                        break;
                    case `${Ovajeh.items.Buch.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Buch.examine}`);
                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Taschenuhr);
                        Ovajeh.save.protagonist.experience += 20;
                        await Ovajeh.ƒS.Text.print("Taschenuhr dem Inventar hinzugefügt<hr class='golden'></hr><br><p>+ <span style='color: green'>20</span> XP</p>");
                        checkExperience();
                        document.getElementById("Buch").remove();
                        await Ovajeh.ƒS.Text.print("Buch aus dem Inventar gelöscht<hr class='golden'></hr>");
                        break;
                    case `${Ovajeh.items.Taschenuhr.name}`:
                        if (Ovajeh.watchCheckable === false) {
                            await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Taschenuhr.examine}`);
                        }
                        else {
                            await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Taschenuhr.examine2}`);
                        }
                        break;
                    case `${Ovajeh.items.Notiz.name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Notiz.examine}`);
                        if (Ovajeh.chair.visited === true) {
                            await say("shocked", "Die Zeichnung wurde eingeritzt, wie die Inschrift am Stuhlbein! Das muss zusammenhängen.");
                            await say("smile", 'Es ist bestimmt eine Botschaft von Michela, ich habs im Blut! Aber was soll die Zeichnung bedeuten?');
                        }
                        break;
                    case `${Ovajeh.items.Combat[0].name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Combat[0].examine}`);
                        break;
                    case `${Ovajeh.items.Combat[1].name}`:
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.items.Combat[1].examine}`);
                        break;
                    default:
                        sfx("confirm");
                        changeWeapon(nameItem[Ovajeh.counter].innerHTML);
                        await Ovajeh.ƒS.Text.print(`${Ovajeh.save.protagonist.weapon.name} wurde ausgerüstet<hr class="golden"></hr>`);
                        break;
                }
                break;
            case "KeyU":
                if (use == undefined) {
                    if (combine == undefined) {
                        use = nameItem[Ovajeh.counter].innerHTML;
                        await Ovajeh.ƒS.Text.print(`${use} soll womit benutzt werden?<br>Evt. musst du aus dem Inventar gehen (I)`);
                    }
                    else {
                        combine = undefined;
                        use = nameItem[Ovajeh.counter].innerHTML;
                        await Ovajeh.ƒS.Text.print(`${use} soll womit benutzt werden?<br>Evt. musst du aus dem Inventar gehen (I)`);
                    }
                }
                console.log(use);
                switch (nameItem[Ovajeh.counter].innerHTML) {
                    case `${Ovajeh.items.Reißzwecke.name}`:
                        if (checkForItems("Feder") === true) {
                            sfx("complete");
                            document.getElementById("Reißzwecke").remove();
                            await say("sad", 'Autsch!');
                            await Ovajeh.ƒS.Text.print(`Erstellt: ${Ovajeh.items.Blut.name}<hr class="golden"></hr><br> + 10 XP`);
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Blut);
                            Ovajeh.save.protagonist.experience += 10;
                            checkExperience();
                        }
                        else {
                            sfx("confirm");
                            await say("smile", 'Vielleicht muss ich später noch etwas mit Blut unterzeichnen. Man kann nie genug vorbereitet sein.');
                        }
                        break;
                    case `${Ovajeh.items.Zahn.name}`:
                        if (Ovajeh.currentScene === "combat") {
                            if (Ovajeh.enemy.health <= 50) {
                                document.getElementById("Zahn").remove();
                                Ovajeh.ƒS.Inventory.close();
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}</span>`, 'Ich bin gespannt, was die böse Fee davon hält.');
                                {
                                    await Ovajeh.ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', 'Du hast ein wertvollen Tribut dabei! Ich nehme ihn an, im Tausch gegen die Essenz.');
                                    await Ovajeh.enemy.die();
                                }
                            }
                            else {
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}</span>`, 'Jetzt noch nicht! Sie muss schwächer werden.');
                            }
                        }
                        else {
                            await say("smile", "Vielleicht später!");
                        }
                        break;
                }
        }
    }
    Ovajeh.listen = listen;
    document.addEventListener("click", using);
    async function using(_event) {
        if (Ovajeh.statusInventory === false) {
            switch (use) {
                // ITEMS TO USE WHILE OUTSIDE INVENTORY
                // Asche
                case `${Ovajeh.items.Asche.name}`:
                    if (_event.x >= Ovajeh.window1.xMin && _event.x <= Ovajeh.window1.xMax) {
                        if (_event.y >= Ovajeh.window1.yMin && _event.y <= Ovajeh.window1.yMax) {
                            console.log("use works");
                            sfx("complete");
                            await say("shocked", "Wow! Ich lag tatsächlich richtig mit meiner Vermutung.");
                            await say("smile", "Es ist eine Nachricht, aber schwierig zu lesen.");
                            await say("normal", 'Hmmm, "Die Fackel der Opferung entfacht die Wahrheit".');
                            await say("shocked", 'Jetzt ist die Katze eindeutig aus dem Sack! Das klingt nicht gerade nach einer normalen \
              Botschaft, mit der ich etwas anfangen könnte');
                            await say("sad", "Langsam bezweifle ich, dass Michela mir diese Nachrichten hinterlässt...");
                            await say("normal", 'Ich muss unbedingt mehr über diese "Fackel" herausfinden.');
                            await say("normal", "Wenn ich einfach weiter diesen Botschaften folge, dann erschließt sich mir das Ganze bestimmt.");
                            document.getElementById("Asche").remove();
                            Ovajeh.knowWindow = true;
                            Ovajeh.save.protagonist.experience += 10;
                            checkExperience();
                            sfx("complete");
                            await Ovajeh.ƒS.Text.print("Asche aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            use = undefined;
                        }
                    }
                    else {
                        console.log("wrong use");
                        sfx("no");
                        use = undefined;
                    }
                    break;
                // Scherbe
                case `${Ovajeh.items.Scherbe.name}`:
                    // console.log(_event.target)
                    if (_event.x >= Ovajeh.mirror.xMin && _event.x <= Ovajeh.mirror.xMax) {
                        if (_event.y >= Ovajeh.mirror.yMin && _event.y <= Ovajeh.mirror.yMax) {
                            console.log("use works");
                            document.getElementById("Scherbe").remove();
                            await say("smile", 'Sie passt perfekt!');
                            await say("shocked", 'Moment, war da gerade etwas im Spiegel?');
                            Ovajeh.mirrorRepaired = true;
                            Ovajeh.save.protagonist.experience += 50;
                            checkExperience();
                            sfx("complete");
                            await Ovajeh.ƒS.Text.print("Scherbe aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>50</span> XP</p>");
                            use = undefined;
                        }
                    }
                    else {
                        console.log("wrong use");
                        sfx("no");
                        use = undefined;
                    }
                    break;
                // Spiegelessenz
                case `${Ovajeh.items.Spiegelessenz.name}`:
                    // console.log(_event.target)
                    if (_event.x >= Ovajeh.mirror.xMin && _event.x <= Ovajeh.mirror.xMax) {
                        if (_event.y >= Ovajeh.mirror.yMin && _event.y <= Ovajeh.mirror.yMax) {
                            console.log("use works");
                            document.getElementById("Spiegelessenz").remove();
                            await say("happy", 'Es hat funktioniert');
                            await say("smile", 'Michela, ich komme!');
                            Ovajeh.save.protagonist.experience += 50;
                            checkExperience();
                            sfx("complete");
                            await Ovajeh.ƒS.Text.print("Spiegelessenz aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>50</span> XP</p>");
                            use = undefined;
                            Ovajeh.mirrorOpened = true;
                        }
                    }
                    else {
                        console.log("wrong use");
                        sfx("no");
                        use = undefined;
                    }
                    break;
                // Schlüssel
                case `${Ovajeh.items.Schlüssel.name}`:
                    if (_event.x >= Ovajeh.door2.xMin && _event.x <= Ovajeh.door2.xMax) {
                        if (_event.y >= Ovajeh.door2.yMin && _event.y <= Ovajeh.door2.yMax) {
                            console.log("use works");
                            Ovajeh.doorOpen = true;
                            sfx("complete");
                            await say("happy", 'Und siehe da, die Tür ist endlich offen! Etwas Wichtiges muss in ihrem Zimmer sein. Nichts wie rein!');
                            document.getElementById("Schlüssel").remove();
                            Ovajeh.save.protagonist.experience += 10;
                            checkExperience();
                            sfx("complete");
                            await Ovajeh.ƒS.Text.print("Schlüssel aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            use = undefined;
                        }
                    }
                    else {
                        console.log("wrong use");
                        sfx("no");
                        use = undefined;
                    }
                    break;
                // Opferungsfackel
                case `${Ovajeh.items.Opferfackel.name}`:
                    if (_event.x >= Ovajeh.kamin.xMin && _event.x <= Ovajeh.kamin.xMax) {
                        if (_event.y >= Ovajeh.kamin.yMin && _event.y <= Ovajeh.kamin.yMax) {
                            if (Ovajeh.gotWeapon === true) {
                                console.log("use works");
                                sfx("complete");
                                await say("shocked", 'Es ist soweit!');
                                document.getElementById("Opferungsfackel").remove();
                                Ovajeh.save.protagonist.experience += 30;
                                checkExperience();
                                await Ovajeh.ƒS.Text.print("Opferungsfackel aus dem Inventar gelöscht<hr class='golden'></hr> <br><p>+ <span style='color: green'>30</span> XP</p>");
                                use = undefined;
                                Ovajeh.ƒS.insert(Ovajeh.Scene_Combat);
                            }
                            else {
                                await say("angry", 'Ich habe die Waffe vergessen! Ich muss sie noch finden... Die Zeit reicht nicht mehr lange!');
                            }
                        }
                    }
                    else {
                        console.log("wrong use");
                        sfx("no");
                        use = undefined;
                    }
                // Blutsfeder
                case `${Ovajeh.items.Blutsfeder.name}`:
                    console.log("wrong use");
                    sfx("no");
                    use = undefined;
                    break;
                // Fackel
                case `${Ovajeh.items.Fackel.name}`:
                    console.log("wrong use");
                    sfx("no");
                    use = undefined;
                    break;
                // Zahn
                case `${Ovajeh.items.Zahn.name}`:
                    console.log("wrong use");
                    sfx("no");
                    use = undefined;
                    break;
            }
        }
    }
    Ovajeh.using = using;
    document.addEventListener("keydown", hndKeypressForInventory);
    async function hndKeypressForInventory(_event) {
        switch (_event.code) {
            case Ovajeh.ƒ.KEYBOARD_CODE.I:
                if (!Ovajeh.statusInventory) {
                    if (Ovajeh.currentScene !== "combat") {
                        if (Ovajeh.ui_Open === false) {
                            console.log("open inventory");
                            document.removeEventListener("click", Ovajeh.positions_intro);
                            document.removeEventListener("click", Ovajeh.positions_bibliothek);
                            document.removeEventListener("click", Ovajeh.positions_mirror_room);
                            show_AllItems();
                            Ovajeh.ƒS.Inventory.open();
                            Ovajeh.statusInventory = true;
                            console.log(Ovajeh.statusInventory);
                            console.log(document.querySelector("dialog[type=inventory]"));
                        }
                    }
                }
                else {
                    console.log("close inventory");
                    mapListeners();
                    Ovajeh.ƒS.Text.close();
                    Ovajeh.ƒS.Inventory.close();
                    Ovajeh.statusInventory = false;
                    console.log(Ovajeh.statusInventory);
                    if (Ovajeh.currentScene == "combat") {
                        combat();
                    }
                    combine = undefined;
                }
                break;
            case Ovajeh.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                mapListeners();
                Ovajeh.ƒS.Text.close();
                Ovajeh.ƒS.Inventory.close();
                Ovajeh.statusInventory = false;
                if (Ovajeh.currentScene == "combat") {
                    combat();
                }
                combine = undefined;
                break;
        }
    }
    function craftWeaponHero() {
        Ovajeh.hero_weapon = new Ovajeh.Weapon(Ovajeh.save.protagonist.level, Ovajeh.weaponCraft.hero_name(), Ovajeh.weaponCraft.hero_damage(), Ovajeh.weaponCraft.hero_rolls(), Ovajeh.weaponCraft.hero_miss(), Ovajeh.weaponCraft.hero_crit());
        Ovajeh.save.protagonist.weapon = Ovajeh.hero_weapon;
        Ovajeh.save.weaponArray.push(Ovajeh.hero_weapon);
        weaponItem();
        console.log(`crafted ${Ovajeh.hero_weapon}`);
    }
    Ovajeh.craftWeaponHero = craftWeaponHero;
    function craftWeaponEnemy(_enemyLVL) {
        Ovajeh.enemy_weapon = new Ovajeh.Weapon(_enemyLVL, Ovajeh.weaponCraft.enemy_name(), Ovajeh.weaponCraft.enemy_damage(_enemyLVL), Ovajeh.weaponCraft.enemy_rolls(_enemyLVL), Ovajeh.weaponCraft.enemy_miss(_enemyLVL), Ovajeh.weaponCraft.enemy_crit(_enemyLVL));
        console.log(`crafted ${Ovajeh.enemy_weapon}`);
    }
    Ovajeh.craftWeaponEnemy = craftWeaponEnemy;
    function createPlayer() {
        //craftWeapon();
        Ovajeh.save.protagonist = new Ovajeh.Hero(Ovajeh.save.nameArray(), 1, 100, 0, Ovajeh.save.typeArray(), 100, 10, Ovajeh.hero_weapon);
        console.log(Ovajeh.save.protagonist);
    }
    Ovajeh.createPlayer = createPlayer;
    function checkExperience() {
        let levelcap_1 = 350;
        let levelcap_2 = 600;
        let levelcap_3 = 1000;
        let levelcap_4 = 1600;
        let extraXP;
        switch (Ovajeh.save.protagonist.level) {
            case 1:
                if (Ovajeh.save.protagonist.experience >= levelcap_1) {
                    extraXP = (Ovajeh.save.protagonist.experience - levelcap_1);
                    console.log(`${Ovajeh.save.protagonist.name} level increased / current XP: ${extraXP} from ${levelcap_2}`);
                    levelUp(extraXP);
                }
                break;
            case 2:
                if (Ovajeh.save.protagonist.experience >= levelcap_2) {
                    extraXP = (Ovajeh.save.protagonist.experience - levelcap_2);
                    console.log(`${Ovajeh.save.protagonist.name} level increased / current XP: ${extraXP} from ${levelcap_3}`);
                    levelUp(extraXP);
                }
                break;
            case 3:
                if (Ovajeh.save.protagonist.experience >= levelcap_3) {
                    extraXP = (Ovajeh.save.protagonist.experience - levelcap_3);
                    console.log(`${Ovajeh.save.protagonist.name} level increased / current XP: ${extraXP} from ${levelcap_4}`);
                    levelUp(extraXP);
                }
                break;
            case 4:
                if (Ovajeh.save.protagonist.experience >= levelcap_4) {
                    extraXP = (Ovajeh.save.protagonist.experience - levelcap_4);
                    console.log(`${Ovajeh.save.protagonist.name} level increased / current XP: ${extraXP} from ${Infinity}`);
                    levelUp(extraXP);
                }
                break;
        }
    }
    Ovajeh.checkExperience = checkExperience;
    async function levelUp(_extraXP) {
        if (Ovajeh.save.protagonist.level <= 5) {
            // Experience Update
            Ovajeh.save.protagonist.experience = 0;
            Ovajeh.save.protagonist.experience += _extraXP;
            // Level Update
            Ovajeh.save.protagonist.level++;
            // Lebens Refresh/Update
            Ovajeh.save.protagonist.health = 100;
            Ovajeh.save.protagonist.health += 50;
            // Schild Refresh/Update
            Ovajeh.save.protagonist.defense = 100;
            Ovajeh.save.protagonist.defense += (Ovajeh.save.protagonist.level * 20);
            // Schadens Buff
            Ovajeh.save.protagonist.damage += (Ovajeh.save.protagonist.level * 5);
            await Ovajeh.ƒS.Text.print(`Glückwunsch!<hr class='golden'></hr><br><p>${Ovajeh.save.protagonist.name} ist nun Level <span>${Ovajeh.save.protagonist.level}</span></p>`);
        }
        else
            console.log(`max level of ${Ovajeh.save.protagonist.level} reached`);
        console.log("stored", Ovajeh.ƒS.Progress.data);
    }
    Ovajeh.levelUp = levelUp;
    function createEnemy(_enemy) {
        let enemyLevel = Math.floor(Math.random() * (Ovajeh.save.protagonist.level + 2)) + Ovajeh.save.protagonist.level; // Gegner haben bis zu Player-Level + 2
        let enemyHealth = Math.floor(Math.random() * (enemyLevel * 60 + 1)) + (enemyLevel * 50); // Je höher das Level desto mehr Leben möglich
        let enemyDefense = Math.floor(Math.random() * (211 - enemyLevel * 10)) + (50 + enemyLevel * 5);
        let enemyExperience = Math.ceil(enemyLevel * 10 + (enemyHealth / 10 + enemyDefense / 5)); // XP scaled mit Level und Leben & Schild
        let enemyDamage = enemyLevel * 5;
        let enemyType = function () {
            let eT = ["Love", "Hate", "Dream", "Destruction"];
            let r = Math.floor(Math.random() * eT.length);
            return eT[r];
        };
        craftWeaponEnemy(enemyLevel);
        Ovajeh.enemy = new Ovajeh.Enemy(_enemy, enemyLevel, enemyHealth, enemyExperience, enemyType(), enemyDefense, enemyDamage, Ovajeh.enemy_weapon); // CHANGE
        console.log(Ovajeh.enemy);
        Ovajeh.enemy_startingHP = enemyHealth;
        Ovajeh.enemy_startingSP = enemyDefense;
    }
    Ovajeh.createEnemy = createEnemy;
    function input_1() {
        let status;
        if (`${Ovajeh.save.protagonist.type}` === `${Ovajeh.enemy.type}`) {
            status = "ausgeglichen";
        }
        switch (Ovajeh.save.protagonist.type) {
            case "Love":
                switch (Ovajeh.enemy.type) {
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
                switch (Ovajeh.enemy.type) {
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
                switch (Ovajeh.enemy.type) {
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
                switch (Ovajeh.enemy.type) {
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
        }
        ;
        document.getElementById("input1").value =
            `${Ovajeh.save.protagonist.name} (${Ovajeh.save.protagonist.level}) (${Ovajeh.save.protagonist.type}) vs ${Ovajeh.enemy.name} (${Ovajeh.enemy.level}) (${Ovajeh.enemy.type}) = ${status}`;
        return status;
    }
    Ovajeh.input_1 = input_1;
    function input_2(_heroDmg, _enemyDmg) {
        document.getElementById("input2").value = `${Ovajeh.save.protagonist.name}: ${_heroDmg} Schaden ${Ovajeh.enemy.name}: ${_enemyDmg}`;
    }
    Ovajeh.input_2 = input_2;
    function slider() {
        //console.log("0 very fast <-> 100 very slow");
        Ovajeh.ƒS.Speech.setTickerDelays(Number(document.getElementById("slider").value), 1);
        document.getElementById("slider-value").innerHTML = document.getElementById("slider").value;
    }
    Ovajeh.slider = slider;
    async function startCombat() {
        console.log("startCombat()");
        closeUI();
        // Engage Healthbars
        document.getElementById("hero-hp").innerHTML = `${Ovajeh.save.protagonist.name} Leben`;
        document.getElementById("hero-sp").innerHTML = `${Ovajeh.save.protagonist.name} Schild`;
        document.getElementById("enemy-hp").innerHTML = `${Ovajeh.enemy.name} Leben`;
        document.getElementById("enemy-sp").innerHTML = `${Ovajeh.enemy.name} Schild`;
        // Remove Inventar Eventlisteners
        //document.removeEventListener("keydown", hndKeypressForInventory);
        // Music
        //ƒS.insert(Scene_Combat); if (enemy.name) = show background x y
        // Animation
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, Ovajeh.ƒS.positionPercent(20, 100));
        await Ovajeh.ƒS.Character.show(Ovajeh.characters.antagonist, Ovajeh.characters.antagonist.pose.angry, Ovajeh.ƒS.positionPercent(80, 110));
        await Ovajeh.ƒS.update(1);
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
        };
        let hero_speech = {
            jinn: "Das Einzige, was gleich bluten wird, bist du! Ich leihe mir nur ein bisschen Essenz von dir!",
            sandmann: "Erst wenn ich mit dir fertig bin, kann ich entspannt ruhen.",
            zahnfee: "Du willst einen Zahn? Dann hol ihn dir!",
            dämon: "Es endet hier und jetzt!",
            wassergeist: "Ein netten Pool hast du da, vielleicht geh ich später noch darin schwimmen."
        };
        let enemy_response = ["Du stirbst jetzt!", "Ich mach dich fertig!", "Das glaubst du doch selber nicht!", "Alles kommt mit einem Preis!",
            "Es ist gleich vorbei...", "Ich mache kurzen Prozess mit dir!", "Du hättest niemals herkommen sollen!", "Ich habe genug gehört!"];
        let enemy_r = Math.floor(Math.random() * 2);
        let enemy_respone_r = Math.floor(Math.random() * enemy_response.length);
        let hero_randomGreeting = Math.floor(Math.random() * Ovajeh.sound.protagonist.greeting.length);
        switch (Ovajeh.enemy.name) {
            case "Jinn":
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_speech.jinn[enemy_r]}`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[hero_randomGreeting], 1, false);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.save.protagonist.name}`, `${hero_speech.jinn}`);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_response[enemy_respone_r]}`);
                break;
            case "Sandmann":
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_speech.sandmann[enemy_r]}`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[hero_randomGreeting], 1, false);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.save.protagonist.name}`, `${hero_speech.sandmann}`);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_response[enemy_respone_r]}`);
                break;
            case "Zahnfee":
                await Ovajeh.ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', `${enemy_speech.zahnfee[enemy_r]}`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[hero_randomGreeting], 1, false);
                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}</span>`, `${hero_speech.zahnfee}`);
                await Ovajeh.ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', `${enemy_response[enemy_respone_r]}`);
                break;
            case "Dämon":
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_speech.dämon[enemy_r]}`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[hero_randomGreeting], 1, false);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.save.protagonist.name}`, `${hero_speech.dämon}`);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_response[enemy_respone_r]}`);
                break;
            case "Wassergeist":
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_speech.wassergeist[enemy_r]}`);
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[hero_randomGreeting], 1, false);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.save.protagonist.name}`, `${hero_speech.wassergeist}`);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.enemy.name}`, `${enemy_response[enemy_respone_r]}`);
                break;
        }
        Ovajeh.ƒS.Speech.setTickerDelays(10, 0);
        combat();
    }
    Ovajeh.startCombat = startCombat;
    async function combat() {
        let combatOptions = {
            attack: "Angreifen",
            flee: "Fliehen",
            item: "Gegenstand"
        };
        let combatAction = await Ovajeh.ƒS.Menu.getInput(combatOptions);
        let randomConfirm = Math.floor(Math.random() * Ovajeh.sound.protagonist.confirmation.length);
        Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.confirmation[randomConfirm], 1, false);
        switch (combatAction) {
            case combatOptions.attack:
                console.log(`${Ovajeh.save.protagonist.name} attacks ${Ovajeh.enemy.name}`);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.save.protagonist.name}`, `${combatAction}`);
                Ovajeh.save.protagonist.attack();
                break;
            case combatOptions.flee:
                console.log(`${Ovajeh.save.protagonist.name} tries to flee`);
                await Ovajeh.ƒS.Speech.tell(`${Ovajeh.save.protagonist.name}`, `${combatAction}`);
                Ovajeh.save.protagonist.flee();
                break;
            case combatOptions.item:
                console.log(`${Ovajeh.save.protagonist.name} chooses an item`);
                show_CombatItems();
                Ovajeh.ƒS.Inventory.open();
                Ovajeh.statusInventory = true;
                break;
        }
    }
    Ovajeh.combat = combat;
    function show_CombatItems() {
        console.log("show only combat items");
        let nameItem = document.querySelectorAll("li > description");
        for (let i = 0; i < nameItem.length; i++) {
            if (nameItem[i].innerHTML !== "Kampf") {
                nameItem[i].id = `${[i]}`;
                document.getElementById(`${[i]}`).parentElement.style.visibility = "hidden";
            }
        }
        document.getElementById("Zahn").style.visibility = "visible";
    }
    Ovajeh.show_CombatItems = show_CombatItems;
    function show_AllItems() {
        console.log("show all items");
        let nameItem = document.querySelectorAll("li");
        for (let i = 0; i < nameItem.length; i++) {
            document.getElementById(`${nameItem[i].id}`).style.visibility = "visible";
        }
    }
    Ovajeh.show_AllItems = show_AllItems;
    async function show_WeaponInfo() {
        let str = await Ovajeh.ƒS.Text.print(`<strong>${Ovajeh.save.protagonist.weapon.name}</strong><hr class="golden"><br><span style="color: red;">Schaden: </span>\
    <span>${Ovajeh.save.protagonist.weapon.damage}</span><br><span style="color: blue;">Anzahl Würfe: </span><span>${Ovajeh.save.protagonist.weapon.rolls}</span>\
    <br><span style="color: green;">Typ: </span><span>${Ovajeh.save.protagonist.weapon.weaponType}</span><br><span style="color: darkred;">Miss Chance: </span>\
    <span>${Ovajeh.save.protagonist.weapon.miss}</span><br><span style="color: darkblue;">Kritischer Schaden: </span><span>${Ovajeh.save.protagonist.weapon.crit}</span>`);
        return str;
    }
    Ovajeh.show_WeaponInfo = show_WeaponInfo;
    async function say(_pose, _text) {
        if (Ovajeh.ui_Open == false) {
            showUI();
        }
        switch (_pose) {
            case "normal":
                //await ƒS.Character.hide(characters.protagonist);
                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
                await Ovajeh.ƒS.update(0);
                break;
            case "smile":
                //await ƒS.Character.hide(characters.protagonist);
                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.smile, Ovajeh.ƒS.positionPercent(20, 100));
                await Ovajeh.ƒS.update(0);
                break;
            case "happy":
                //await ƒS.Character.hide(characters.protagonist);
                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.happy, Ovajeh.ƒS.positionPercent(20, 100));
                await Ovajeh.ƒS.update(0);
                break;
            case "angry":
                //await ƒS.Character.hide(characters.protagonist);
                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.angry, Ovajeh.ƒS.positionPercent(20, 100));
                await Ovajeh.ƒS.update(0);
                break;
            case "shocked":
                //await ƒS.Character.hide(characters.protagonist);
                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                await Ovajeh.ƒS.update(0);
                break;
            case "sad":
                //await ƒS.Character.hide(characters.protagonist);
                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                await Ovajeh.ƒS.update(0);
                break;
            default:
                break;
        }
        await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, `${_text}`);
        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
        await Ovajeh.ƒS.update(0);
        closeUI();
    }
    Ovajeh.say = say;
    async function options(_option1, _option2) {
        // Remove Listeners while Option Menu
        document.removeEventListener("click", Ovajeh.positions_intro);
        document.removeEventListener("click", Ovajeh.positions_bibliothek);
        document.removeEventListener("click", Ovajeh.positions_mirror_room);
        let options = {
            one: _option1,
            two: _option2
        };
        let decide = await Ovajeh.ƒS.Menu.getInput(options);
        switch (decide) {
            // Add Listeners again
            case options.one:
                sfx("confirm");
                mapListeners();
                return true;
            case options.two:
                sfx("confirm");
                mapListeners();
                return false;
            default:
                return null;
        }
    }
    Ovajeh.options = options;
    function sfx(_sfx) {
        let randomConfirm = Math.floor(Math.random() * Ovajeh.sound.protagonist.confirmation.length);
        let randomComplete = Math.floor(Math.random() * Ovajeh.sound.protagonist.completion.length);
        let randomGreet = Math.floor(Math.random() * Ovajeh.sound.protagonist.greeting.length);
        let randomBye = Math.floor(Math.random() * Ovajeh.sound.protagonist.farewell.length);
        let randomNo = Math.floor(Math.random() * Ovajeh.sound.protagonist.refusal.length);
        switch (_sfx) {
            case "confirm":
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.confirmation[randomConfirm], 0.5, false);
                break;
            case "complete":
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.completion[randomComplete], 0.5, false);
                break;
            case "greet":
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[randomGreet], 0.5, false);
                break;
            case "bye":
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.farewell[randomBye], 0.5, false);
                break;
            case "no":
                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.refusal[randomNo], 0.5, false);
                break;
            case "ambient":
                //ƒS.Sound.play(sound.backgroundTheme, 0.1, true);
                Ovajeh.ƒS.Sound.fade(Ovajeh.sound.backgroundTheme, 0.1, 3, true);
                break;
            case "combat":
                Ovajeh.ƒS.Sound.fade(Ovajeh.sound.combatTheme, 0.1, 2, true);
        }
    }
    Ovajeh.sfx = sfx;
    async function charSheet() {
        // Farbe
        await Ovajeh.ƒS.Text.print(`${Ovajeh.save.protagonist.name}<hr class="golden"></hr><br><p>Level: <span>${Ovajeh.save.protagonist.level}</span></p><br><p>Leben: <span>${Ovajeh.save.protagonist.health}</span></p>\
    <br><p>Schild: <span>${Ovajeh.save.protagonist.defense}</span></p><br><p>Typ: <span>${Ovajeh.save.protagonist.type}</span></p><br><p>Erfahrung: <span>${Ovajeh.save.protagonist.experience}</span></p><br><p>Schaden: <span>${Ovajeh.save.protagonist.damage}</span></p>`);
    }
    Ovajeh.charSheet = charSheet;
    function checkForItems(_item) {
        let items = document.querySelectorAll("li");
        for (let i = 0; i < items.length; i++) {
            if (_item === items[i].id) {
                console.log(true);
                return true;
            }
        }
        console.log(false);
        return false;
    }
    Ovajeh.checkForItems = checkForItems;
    window.addEventListener("load", start);
    function start(_event) {
        Ovajeh.gameMenu = Ovajeh.ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
        document.getElementById("inv").addEventListener("pointerdown", clickInventory);
        document.getElementById("char").addEventListener("click", charSheet);
        document.getElementById("items").addEventListener("pointerover", eventHandler);
        document.getElementById("weapon-slot").addEventListener("click", show_WeaponInfo);
        //document.getElementById("save").classList.add("rpgui-button");
        //document.getElementById("load").classList.add("rpgui-button");
        //document.getElementById("close").classList.add("rpgui-button");
        //document.getElementById("rules").classList.add("rpgui-button");
        codegenerator();
        createPlayer();
        //hero_healthbar(null);
        let scenes = [
            // { scene: Scene_Combat, name: "Scene_Combat" }
            { scene: Ovajeh.Scene_Intro, name: "Scene_Intro" },
            // { scene: Scene_Bibliothek, name: "Scene_Bibliothek" }
            // { scene: Scene_Mirror_Room, name: "Scene_Mirror_Room" },
            // { scene: Scene_Mirror_World, name: "Scene_Mirror_World" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Ovajeh.save = Ovajeh.ƒS.Progress.setData(Ovajeh.save, uiElement);
        // start the sequence
        Ovajeh.ƒS.Progress.go(scenes);
    }
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    // Positions
    Ovajeh.kamin = {
        xMax: 915,
        xMin: 550,
        yMax: 680,
        yMin: 445,
        visited: false,
    };
    Ovajeh.couch = {
        xMax: 300,
        xMin: 100,
        yMax: 740,
        yMin: 580,
        visited: false,
    };
    Ovajeh.secret1 = {
        xMax: 420,
        xMin: 330,
        yMax: 650,
        yMin: 585,
        visited: false,
    };
    Ovajeh.carpet = {
        xMax: 1240,
        xMin: 565,
        yMax: 745,
        yMin: 690,
        visited: false,
    };
    Ovajeh.door = {
        xMax: 240,
        xMin: 115,
        yMax: 570,
        yMin: 70,
        visited: false,
    };
    Ovajeh.booksRR = {
        xMax: 1345,
        xMin: 1225,
        yMax: 555,
        yMin: 115,
        visited: false,
    };
    Ovajeh.booksR = {
        xMax: 1190,
        xMin: 980,
        yMax: 530,
        yMin: 175,
        visited: false,
    };
    Ovajeh.booksL = {
        xMax: 470,
        xMin: 275,
        yMax: 525,
        yMin: 175,
        visited: false,
    };
    Ovajeh.table = {
        xMax: 420,
        xMin: 295,
        yMax: 745,
        yMin: 645,
        visited: false,
    };
    Ovajeh.ashesFound = false;
    Ovajeh.kaminKnow = false;
    Ovajeh.kaminteil = false;
    Ovajeh.carpetCheck = false;
    Ovajeh.watchCheckable = false;
    Ovajeh.gotAshes = false;
    Ovajeh.won = false;
    // CLICKABLE POSITIONS
    async function positions_bibliothek(_event) {
        console.log(_event.x, _event.y);
        if (Ovajeh.ui_Open === false) {
            // Kamin
            if (_event.x >= Ovajeh.kamin.xMin && _event.x <= Ovajeh.kamin.xMax) {
                if (_event.y >= Ovajeh.kamin.yMin && _event.y <= Ovajeh.kamin.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.kamin.visited == false) {
                        console.log("kamin a");
                        Ovajeh.kamin.visited = true;
                        await Ovajeh.say("normal", "Der Kamin war echt lange nicht mehr an. Das Holz ist noch tadellos.");
                        await Ovajeh.say("sad", "Wenn ich mich richtig erinnere, war er sogar fast 2 Jahre nicht mehr an...");
                        await Ovajeh.say("smile", 'Wenn Adam wieder hier ist, dann sollten wir den Kamin definitv mal wieder in Betrieb nehmen. Den alten Zeiten zuliebe');
                        if (Ovajeh.knowDoor === true) {
                            await Ovajeh.say("smile", 'Hmmm, mir fällt gerade das Metallgeschirr dort im Kamin besonders ins Auge.');
                            await Ovajeh.say("normal", 'Ich werde den Gedanken nicht los, dass ich daraus vielleicht einen Schlüssel basteln könnte.');
                            await Ovajeh.say("normal", 'Beim genaueren Betrachten wird mir allerdings klar, dass dieses Teil niemals ausreichen würde.');
                            await Ovajeh.say("normal", 'Naja was solls, ich finde schon eine Lösung.');
                            Ovajeh.kaminKnow = true;
                        }
                        if (Ovajeh.windowNotice === true) {
                            await Ovajeh.say("normal", 'So viel alte Asche liegt noch drin. Das muss echt mal sauber gemacht werden');
                            await Ovajeh.say("normal", 'Ich entferne einfach mal ein bisschen, dann wirkt der Kamin wieder etwas lebendiger.');
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Asche);
                            Ovajeh.gotAshes = true;
                            await Ovajeh.ƒS.Text.print("Asche dem Inventar hinzugefügt <hr class='golden'>");
                        }
                    }
                    else {
                        console.log("kamin b");
                        if (Ovajeh.gotKey === false) {
                            if (Ovajeh.kaminKnow === true && Ovajeh.kaminteil === false) {
                                await Ovajeh.say("normal", 'Hmmm, ich bin mir nicht sicher, ob ich für das Metallteil wirklich Verwendung finde.');
                                if (Ovajeh.lampenteil === true) {
                                    await Ovajeh.say("happy", 'Aber ja natürlich, ich sehe es jetzt! Mit dem Lampenteil verbunden könnte es klappen.');
                                    Ovajeh.ƒS.Inventory.add(Ovajeh.items.Kaminteil);
                                    Ovajeh.kaminteil = true;
                                    Ovajeh.save.protagonist.experience += 10;
                                    Ovajeh.checkExperience();
                                    Ovajeh.sfx("complete");
                                    await Ovajeh.ƒS.Text.print("Kaminteil dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                }
                                else {
                                    await Ovajeh.say("normal", 'Ich weiß nicht, bestimmt gibt es noch etwas Besseres.');
                                }
                            }
                            else {
                                if (Ovajeh.kaminteil === true) {
                                    await Ovajeh.say("happy", 'Ich liebe diesen Kamin! Danke, dass du mir buchstäblich den Weg öffnest.');
                                }
                                else {
                                    await Ovajeh.say("smile", 'Ach ja... die warmen Kaminfeuer vermisse ich wirklich sehr.');
                                }
                            }
                        }
                        else if (Ovajeh.won === false) {
                            await Ovajeh.say("smile", 'Am liebsten würde ich ihn jetzt anzünden.');
                        }
                        if (Ovajeh.windowNotice === true) {
                            if (Ovajeh.gotAshes === false) {
                                await Ovajeh.say("normal", 'Viel zu viel Asche liegt noch im Kamin von früher. Da hat sich ganz schön was angehäuft.');
                                await Ovajeh.say("normal", 'Ich kann ihn nicht einfach so lassen. Es geht ja ganz schnell...');
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Asche);
                                await Ovajeh.ƒS.Text.print("Asche dem Inventar hinzugefügt <hr class='golden'>");
                                Ovajeh.gotAshes = true;
                            }
                        }
                        if (Ovajeh.checkForItems("Opferungsfackel") === true) {
                            await Ovajeh.say("normal", 'Das ist es! Der perfekte Ort, um das Feuer zu entzünden. Dadurch fackel ich nicht gleich das gesamte Haus mit ab.');
                            await Ovajeh.say("angry", 'Also dann, ich habe nicht mehr viel Zeit! Ich sollte das Kaminholz jetzt anzünden.');
                        }
                        if (Ovajeh.won === true) {
                            await Ovajeh.say("smile", 'Unglaublich, dass ich auf eigene Faust eine Kreatur der Spiegelwelt besiegt habe!');
                        }
                    }
                } // if y
            } // if x
            // Couch
            if (_event.x >= Ovajeh.couch.xMin && _event.x <= Ovajeh.couch.xMax) {
                if (_event.y >= Ovajeh.couch.yMin && _event.y <= Ovajeh.couch.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.couch.visited == false) {
                        console.log("couch a");
                        Ovajeh.couch.visited = true;
                        await Ovajeh.say("normal", 'Komisch, die Couch so leer zu sehen.');
                        await Ovajeh.say("sad", "Ich bin echt erschöpft...");
                        await Ovajeh.say("sad", "Wann findet diese Ungewissheit endlich ein Ende?");
                        await Ovajeh.say("smile", "Wenn ich mich kurz hinlege um zu verschnaufen, sollte glaube nichts Schlimmes passieren.");
                        if (await Ovajeh.options("Hinlegen", "Jetzt nicht") === true) {
                            await Ovajeh.say("happy", "Ach ja, das tut gut! Seit zwei Tagen habe ich kaum Schlaf bekommen.");
                            await Ovajeh.say("normal", '... ... ... Ich sollte wieder aufstehen...');
                            if (await Ovajeh.options("Etwas weiter dösen", "Aufstehen") === true) {
                                await Ovajeh.say("shocked", 'Oh man bin ich müde! Ich bin viel zu schlapp.');
                                await Ovajeh.say('normal', 'Egal, ich brauch das...');
                                await Ovajeh.say("normal", "... ... ...");
                                await Ovajeh.say("angry", 'Jetzt ist aber genug! Ich darf nicht die ganze Zeit schlafen.');
                                if (await Ovajeh.options("Noch eine Runde", "Aufstehen") === true) {
                                    await Ovajeh.say("sad", 'Ich armes Stück Elend, wie lange denn noch, bis ich wieder einigermaßen ausgeruht bin?');
                                    await Ovajeh.say("normal", '... ... ...');
                                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                    await Ovajeh.say("shocked", '...?!');
                                    await Ovajeh.say("shocked", 'Ich glaube da ist ein kleiner Zettel im Spalt! Moment...');
                                    Ovajeh.ƒS.Inventory.add(Ovajeh.items.Notiz);
                                    Ovajeh.save.protagonist.experience += 10;
                                    Ovajeh.checkExperience();
                                    await Ovajeh.ƒS.Text.print("Notiz dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                    await Ovajeh.say("smile", 'Wer hätt gedacht, dass ich beim Schlafen fündig werden. Endlich!');
                                }
                                else {
                                    await Ovajeh.say("smile", 'Nein, ich muss endlich weiter suchen. So verlockend es auch ist.');
                                }
                            }
                            else {
                                await Ovajeh.say("happy", 'Weiter geht die Suche!');
                            }
                        }
                        else {
                            await Ovajeh.say("normal", "Was habe ich mir auch dabei gedacht? Es gibt jetzt Wichtigeres.");
                        }
                    }
                    else {
                        console.log("couch b");
                        await Ovajeh.say("normal", 'Ich sollte mir nichts vormachen. Wenn ich so müde wie jetzt bin, habe ich auch etwas Schlaf verdient.');
                        if (await Ovajeh.options("Nochmal hinlegen", "Aufstehen") === true) {
                            await Ovajeh.say("normal", 'Jetzt schlaf ich aber wirklich bis ich ausgeruht bin.');
                            await Ovajeh.say("normal", '... ... ...');
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                            await Ovajeh.say("shocked", '...?!');
                            await Ovajeh.say("shocked", 'Da ist ein Stückchen Papier im Couchspalt! Ich träume wahrscheinlich. Doch nicht, es ist eine Notiz!');
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Notiz);
                            Ovajeh.save.protagonist.experience += 10;
                            Ovajeh.checkExperience();
                            await Ovajeh.ƒS.Text.print("Notiz dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            await Ovajeh.say("happy", 'War doch eine gute Entscheidung, mich kurz hinzulegen! Ich höre ab sofort auf mein Bauchgefühl.');
                        }
                        else {
                            await Ovajeh.say("sad", "Warum folter ich mich so sehr?");
                        }
                    }
                } // if y
            } // if x
            // Secret
            if (_event.x >= Ovajeh.secret1.xMin && _event.x <= Ovajeh.secret1.xMax) {
                if (_event.y >= Ovajeh.secret1.yMin && _event.y <= Ovajeh.secret1.yMax) {
                    if (Ovajeh.secret1.visited == false) {
                        if (Ovajeh.checkForItems("Taschenuhr") == true && Ovajeh.checkForItems("Notiz")) {
                            console.log("secret a");
                            Ovajeh.sfx("confirm");
                            Ovajeh.secret1.visited = true;
                            await Ovajeh.say("happy", "Ein Geheimfach! Viele kleine Löcher, genau wie die Zeichnung oder Gravur angedeutet haben.");
                            await Ovajeh.say("normal", 'Was zum Teufel verheimlichst du mir, Adam?');
                            await Ovajeh.say("angry", 'Es war die ganze Zeit über vor meiner Nase und ich habe es nie mitbekommen.');
                            await Ovajeh.say("shocked", 'Ich hoffe es ist nichts Schlimmes! Vielleicht ist das Alles ein großes Missverständnis.');
                            await Ovajeh.say("angry", 'Die Zeit rennt, ich sollte es jetzt einfach öffnen und nachschauen.');
                            await Ovajeh.say("normal", '...');
                            await Ovajeh.say("shocked", 'Oh verdammt! Ein Zahlencode ist gefordert...');
                            await Ovajeh.say('sad', 'Wie konnt ich auch nur so naiv sein und denken, dass sich der Inhalt einfach so präsentiert...');
                            await Ovajeh.say("normal", 'Ich muss dringend nachdenken, wie ich nun an diesen Code gelange.');
                            Ovajeh.watchCheckable = true;
                        }
                    }
                    else {
                        if (Ovajeh.gotWeapon === false) {
                            console.log("secret b");
                            await Ovajeh.say("normal", 'Ich probiere mal...');
                            Ovajeh.showUI();
                            Ovajeh.numberCodeCheck();
                        }
                        else
                            await Ovajeh.say("normal", 'Los ich muss weiter! Da ist nichts mehr drin.');
                    }
                } // if y
            } // if x
            // Carpet
            if (_event.x >= Ovajeh.carpet.xMin && _event.x <= Ovajeh.carpet.xMax) {
                if (_event.y >= Ovajeh.carpet.yMin && _event.y <= Ovajeh.carpet.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.carpet.visited == false) {
                        console.log("carpet a");
                        Ovajeh.carpet.visited = true;
                        await Ovajeh.say("smile", 'Ein sehr schöner Teppich. Ich habe mir nie Gedanken gemacht, wie aufwendig es wohl war, ihn herzustellen.');
                        if (Ovajeh.booksL.visited === true && Ovajeh.booksR.visited === true) {
                            await Ovajeh.say("smile", 'Wenn ich gerade so oder so schon auf der Suche nach weiteren Buchseiten bin...');
                            await Ovajeh.say("normal", 'Buchseiten sind flach, der Teppich ist flach... Ich sollte definitiv mal nachschauen.');
                            await Ovajeh.say("normal", '...');
                            await Ovajeh.say("happy", 'Es war ja klar! Peinlich, dass ich nicht früher den Boden überprüft habe...');
                            Ovajeh.randomItem();
                            Ovajeh.save.protagonist.experience += 5;
                            Ovajeh.checkExperience();
                            Ovajeh.sfx("complete");
                            Ovajeh.carpetCheck = true;
                            await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                        }
                    }
                    else {
                        console.log("carpet b");
                        if (Ovajeh.carpetCheck === true) {
                            await Ovajeh.say("smile", 'Ich bin mir absolut sicher, dass da nichts mehr drunter liegt.');
                        }
                        else if (Ovajeh.booksL.visited === false && Ovajeh.booksR.visited === false) {
                            await Ovajeh.say("smile", 'Die Teppichfarbe ist einfach traumhaft! Nur schade, dass er momentan keinen Nutzen für mich hat.');
                        }
                        if (Ovajeh.booksL.visited === true && Ovajeh.booksR.visited === true) {
                            if (Ovajeh.carpetCheck === false) {
                                await Ovajeh.say("smile", 'Wenn ich gerade so oder so schon auf der Suche nach weiteren Buchseiten bin...');
                                await Ovajeh.say("normal", 'Buchseiten sind flach, der Teppich ist flach... Ich sollte definitiv mal nachschauen.');
                                await Ovajeh.say("normal", '...');
                                await Ovajeh.say("happy", 'Es war ja klar! Peinlich, dass ich nicht früher den Boden überprüft habe...');
                                Ovajeh.randomItem();
                                Ovajeh.save.protagonist.experience += 5;
                                Ovajeh.checkExperience();
                                Ovajeh.sfx("complete");
                                Ovajeh.carpetCheck = true;
                                await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                            }
                        }
                    }
                } // if y
            } // if x
            // Door
            if (_event.x >= Ovajeh.door.xMin && _event.x <= Ovajeh.door.xMax) {
                if (_event.y >= Ovajeh.door.yMin && _event.y <= Ovajeh.door.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.door.visited == false) {
                        console.log("door a");
                        Ovajeh.door.visited = true;
                        if (await Ovajeh.options("Treppenhaus", "Hier bleiben") === true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Intro);
                        }
                    }
                    else {
                        console.log("door b");
                        if (await Ovajeh.options("Treppenhaus", "Hier bleiben") === true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Intro);
                        }
                    }
                } // if y
            } // if x
            // BooksRR
            if (_event.x >= Ovajeh.booksRR.xMin && _event.x <= Ovajeh.booksRR.xMax) {
                if (_event.y >= Ovajeh.booksRR.yMin && _event.y <= Ovajeh.booksRR.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.booksRR.visited == false) {
                        console.log("booksrr a");
                        Ovajeh.booksRR.visited = true;
                        await Ovajeh.say("normal", 'So, dann schauen wir mal... Ich mochte die Bücher in diesem Regal nicht so gerne');
                        if (Ovajeh.booksR.visited === true) {
                            await Ovajeh.say("smile", 'Im Vergleich zu den Büchern aus meinem Lieblingsregal natürlich.');
                            await Ovajeh.say("happy", 'Aber dagegen sind die meisten Bücher schlecht! Ich liebe einfach Fiktion, weniger Wissenschaftliches');
                        }
                        await Ovajeh.say("normal", 'Hier befinden sich hauptsächlich Lexikas und andere Lernbücher geballt mit enorm viel Wissen.');
                        if (Ovajeh.booksL.visited === true && Ovajeh.booksR.visited === true) {
                            await Ovajeh.say("smile", 'Bestimmt finde ich hier nicht nur eine einzige Buchseite, sondern gleich zwei!');
                            await Ovajeh.say("happy", 'Ich mache nur Scherze! Mir ist überhaupt nicht klar, nach welchem System die Seiten platziert wurden.');
                            await Ovajeh.say("smile", 'Wenn es überhaupt ein "System gibt. Aber am ehesten würde ich sie in einem Bücherregal erwarten.');
                        }
                        Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                        await Ovajeh.say("shocked", '...');
                        await Ovajeh.say("normal", 'Also ein Buch über Volkslieder auf Lateinisch habe ich noch am wenigsten von Adam erwartet.');
                        await Ovajeh.say("smile", 'Ich will nicht sagen, dass er unmusikalisch wäre...');
                        await Ovajeh.say("happy", 'Das wäre nämlich eine komplette Untertreibung!');
                        await Ovajeh.say("smile", 'Wenn er singt... Ach ich habe genug gelästert. Adam ist was manche Dinge angeht, sehr komisch.');
                        await Ovajeh.say("shocked", 'Manchmal könnte man meinen, dass er ein Alien oder so ist.');
                        await Ovajeh.say("normal", 'Ehrlich gesagt bin ich mir inzwischen gar nicht mehr sicher, was er in Wirklichkeit ist.');
                        await Ovajeh.say("smile", 'Ich schau mir das Buch mal an, Latein habe ich noch nie gelesen.');
                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Buch);
                        Ovajeh.save.protagonist.experience += 5;
                        Ovajeh.sfx("complete");
                        await Ovajeh.ƒS.Text.print("Buch dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    }
                    else {
                        console.log("booksrr b");
                    }
                } // if y
            } // if x
            // BooksR
            if (_event.x >= Ovajeh.booksR.xMin && _event.x <= Ovajeh.booksR.xMax) {
                if (_event.y >= Ovajeh.booksR.yMin && _event.y <= Ovajeh.booksR.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.booksR.visited == false) {
                        console.log("booksr a");
                        Ovajeh.booksR.visited = true;
                        await Ovajeh.say("happy", 'Die besten Bücher befinden sich in diesem Regal hier.');
                        await Ovajeh.say("smile", 'Allein die Fantasy Romane habe ich etliche Male durchgelesen.');
                        await Ovajeh.say("smile", 'Manchmal versank ich so tief in den Geschichten, dass sie sich so unfassbar echt anfühlten.');
                        await Ovajeh.say("happy", 'Adam meinte immer, ich wäre beim Lesen bloß eingeschlafen und hätte es vergessen.');
                        if (Ovajeh.booksL.visited === true) {
                            await Ovajeh.say("normal", 'Hmmm, ist das da wieder eine lose Buchseite zwischen den Bänden?');
                            await Ovajeh.say("smile", 'Aha! Gut, dann hätte ich noch eine gefunden. Vielleicht macht der erste Text jetzt mehr Sinn.');
                            await Ovajeh.say("normal", 'Nein, da muss noch mehr sein. Ich sollte nach solchen losen Buchseiten Ausschau halten.');
                        }
                        else {
                            await Ovajeh.say("shocked", 'Da passt etwas nicht! Eine lose Buchseite? Was macht die dort zwischen?');
                            await Ovajeh.say("normal", 'Ich sollte sie mir definitv mal genauer anschauen.');
                        }
                        Ovajeh.randomItem();
                        Ovajeh.save.protagonist.experience += 5;
                        Ovajeh.checkExperience();
                        Ovajeh.sfx("complete");
                        await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    }
                    else {
                        console.log("booksr b");
                        await Ovajeh.say("smile", 'Jetzt stimmt wieder alles! Keine losen Seiten mehr.');
                    }
                } // if y
            } // if x
            // BooksL
            if (_event.x >= Ovajeh.booksL.xMin && _event.x <= Ovajeh.booksL.xMax) {
                if (_event.y >= Ovajeh.booksL.yMin && _event.y <= Ovajeh.booksL.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.booksL.visited == false) {
                        console.log("booksl a");
                        Ovajeh.booksL.visited = true;
                        await Ovajeh.say("smile", 'Ich liebe den Geruch der Bücher! Alle stehen schön geordnet da.');
                        await Ovajeh.say("shocked", 'Ja wer hätte es denn gedacht? Da ragt doch tatsächlich eine lose Seite hervor!');
                        if (Ovajeh.booksR.visited === true) {
                            await Ovajeh.say("normal", 'Komischerweise schon die nächste lose Buchseite. Wie viele gibt es denn davon?');
                            await Ovajeh.say("shocked", 'Langsam bekomme ich das Gefühl, dass Adam uns viel mehr verheimlicht hat, als ich dachte.');
                            await Ovajeh.say("angry", 'Er hat besser eine gute Erklärung dafür!');
                        }
                        else {
                            await Ovajeh.say("normal", 'Sie ist aus einem Buch herausgerissen worden. Ich sollte sie mir mal genauer anschauen.');
                        }
                        Ovajeh.randomItem();
                        Ovajeh.save.protagonist.experience += 5;
                        Ovajeh.checkExperience();
                        Ovajeh.sfx("complete");
                        await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    }
                    else {
                        console.log("booksl b");
                        await Ovajeh.say("smile", 'Viele dieser Bücher habe ich schonmal durchgelesen. Mir würde sofort auffallen, wenn etwas Neues dabei wäre.');
                    }
                } // if y
            } // if x
            // Table
            if (_event.x >= Ovajeh.table.xMin && _event.x <= Ovajeh.table.xMax) {
                if (_event.y >= Ovajeh.table.yMin && _event.y <= Ovajeh.table.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.table.visited == false) {
                        console.log("table a");
                        Ovajeh.table.visited = true;
                        await Ovajeh.say("smile", 'Ein antiker und sehr teurer Tisch. Nicht, dass das irgendwie weiterhelfen würde, aber...');
                        await Ovajeh.say("shocked", 'Sieh mal einer an, was haben wir denn da? Eine... Reißzwecke?');
                        await Ovajeh.say("sad", 'Ich hatte eigentlich auf etwas Interessantes gehofft.');
                        await Ovajeh.say("normal", 'Auf der anderen Seite sollte ich wohl erstmal alles einstecken, was aus der Reihe tanzt.');
                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Reißzwecke);
                        Ovajeh.save.protagonist.experience += 10;
                        Ovajeh.checkExperience();
                        Ovajeh.sfx("complete");
                        await Ovajeh.ƒS.Text.print("Reißzwecke dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                    }
                    else {
                        console.log("table b");
                        await Ovajeh.say("normal", 'Hier gibt es nichts mehr zu entdecken...');
                    }
                } // if y
            } // if x
        } // if ui_Open
    } // function
    Ovajeh.positions_bibliothek = positions_bibliothek;
    // Scene Bibliothek
    async function Scene_Bibliothek() {
        Ovajeh.currentScene = "bibliothek";
        console.log(`current scene: ${Ovajeh.currentScene}`);
        Ovajeh.sfx("ambient");
        Ovajeh.mapListeners();
        Ovajeh.closeUI();
        await Ovajeh.ƒS.Location.show(Ovajeh.location.intro.bib);
        await Ovajeh.ƒS.update(0);
        if (Ovajeh.visitScene() === false) {
            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
            await Ovajeh.ƒS.update(1);
            Ovajeh.showUI();
            await Ovajeh.protagonistCycle();
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
            await Ovajeh.ƒS.update(1);
            Ovajeh.closeUI();
        }
        else {
            await Ovajeh.say('normal', 'Irgendwas muss hier doch sein.');
            await Ovajeh.ƒS.update(Ovajeh.transition.puzzle.duration, Ovajeh.transition.puzzle.alpha, Ovajeh.transition.puzzle.edge);
        }
    }
    Ovajeh.Scene_Bibliothek = Scene_Bibliothek;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    async function Scene_Combat() {
        Ovajeh.currentScene = "combat";
        console.log(`current scene: ${Ovajeh.currentScene}`);
        Ovajeh.ƒS.Sound.fade(Ovajeh.sound.backgroundTheme, 0, 1);
        Ovajeh.sfx("combat");
        Ovajeh.mapListeners();
        Ovajeh.visitScene();
        await Ovajeh.ƒS.Location.show(Ovajeh.location.intro.bib_dark);
        Ovajeh.ƒS.update(0);
        // Combat
        Ovajeh.createEnemy("Zahnfee");
        Ovajeh.startCombat();
    }
    Ovajeh.Scene_Combat = Scene_Combat;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    // Positions
    Ovajeh.chair = {
        xMax: 1200,
        xMin: 1000,
        yMax: 660,
        yMin: 470,
        visited: false,
        linesA: [{
                pose: "smile", text: "Adams Lieblings-Stuhl! Naja, drauf gesessen hat er eigentlich kaum. Er war ihm zu morsch, deshalb hat er ihn hier zur Dekoration hingestellt."
            }, {
                pose: "normal", text: "Ich weiß noch, als Michela und ich Fangen im Haus spielten und ich beim Vorbeilaufen am rechten Stuhlbein hängen blieb und gestolpert bin..."
            }, {
                pose: "", text: "Adam hat es nie erfahren, aber dabei ist das Stuhlbein abgeknickt. Michela hat es zum Glück wieder einigermaßen gerade gerückt und mit Kleber befestigt."
            },
        ]
    };
    Ovajeh.door1 = {
        xMax: 550,
        xMin: 310,
        yMax: 625,
        yMin: 390,
        visited: false,
        linesA: [{}]
    };
    Ovajeh.door2 = {
        xMax: 1450,
        xMin: 1250,
        yMax: 600,
        yMin: 330,
        visited: false,
        linesA: [{}]
    };
    Ovajeh.lamp = {
        xMax: 1295,
        xMin: 1150,
        yMax: 250,
        yMin: 55,
        visited: false,
        linesA: [{}]
    };
    Ovajeh.steps = {
        xMax: 790,
        xMin: 540,
        yMax: 700,
        yMin: 410,
        visited: false,
        linesA: [{}]
    };
    Ovajeh.window1 = {
        xMax: 460,
        xMin: 355,
        yMax: 300,
        yMin: 120,
        visited: false,
        linesA: [{}]
    };
    Ovajeh.carpetAgain = false;
    Ovajeh.carpetNo = false;
    Ovajeh.carpetDone = false;
    Ovajeh.lampenteil = false;
    Ovajeh.knowDoor = false;
    Ovajeh.doorOpen = false;
    Ovajeh.windowNotice = false;
    Ovajeh.gotKey = false;
    Ovajeh.knowWindow = false;
    // CLICKABLE POSITIONS
    async function positions_intro(_event) {
        // console.log(_event.x, _event.y)
        let hero_randomConfirm = Math.floor(Math.random() * Ovajeh.sound.protagonist.confirmation.length);
        if (Ovajeh.ui_Open === false) {
            if (_event.x >= Ovajeh.chair.xMin && _event.x <= Ovajeh.chair.xMax) {
                if (_event.y >= Ovajeh.chair.yMin && _event.y <= Ovajeh.chair.yMax) {
                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.confirmation[hero_randomConfirm], 0.5, false);
                    if (Ovajeh.chair.visited == false) {
                        console.log("chair a");
                        Ovajeh.chair.visited = true;
                        await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
                        await Ovajeh.ƒS.update(0);
                        Ovajeh.showUI();
                        for (let i = 0; i < Ovajeh.chair.linesA.length; i++) {
                            await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, Ovajeh.chair.linesA[i].text);
                            switch (Ovajeh.chair.linesA[i].pose) {
                                case "normal":
                                    await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                    await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
                                    await Ovajeh.ƒS.update(0);
                                    break;
                                case "smile":
                                    await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                    await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.smile, Ovajeh.ƒS.positionPercent(20, 100));
                                    await Ovajeh.ƒS.update(0);
                                    break;
                                case "happy":
                                    await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                    await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.happy, Ovajeh.ƒS.positionPercent(20, 100));
                                    await Ovajeh.ƒS.update(0);
                                    break;
                            }
                        }
                        let options = {
                            one: "Weiter untersuchen",
                            two: "In Ruhe lassen"
                        };
                        let decide = await Ovajeh.ƒS.Menu.getInput(options);
                        switch (decide) {
                            case options.one:
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Huh? Daran kann ich mich gar nicht erinnern!');
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Jemand hat mit einem Messer etwas in das Stuhlbein geritzt: "Nimm mich mit".');
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Das muss ein Zeichen sein! Vielleicht von Michela? Jetzt glaubst du mir aber, dass hier etwas nicht stimmt!');
                                let options1 = {
                                    one: "Stuhlbein nehmen",
                                    two: "In Ruhe lassen"
                                };
                                let decide1 = await Ovajeh.ƒS.Menu.getInput(options1);
                                switch (decide1) {
                                    case options1.one:
                                        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                        await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                                        await Ovajeh.ƒS.update(0);
                                        await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Ich hoffe Adam wird mir nicht allzu böse sein... Auf Wiedersehen, Herr Stuhl!');
                                        Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[6], 0.5);
                                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Stuhlbein);
                                        Ovajeh.save.protagonist.experience += 10;
                                        Ovajeh.checkExperience();
                                        await Ovajeh.ƒS.Text.print("Stuhlbein dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                        break;
                                    case options1.two:
                                        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                        await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                                        await Ovajeh.ƒS.update(0);
                                        await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Ich kann das Adam nicht antun... Aber ich muss!');
                                        Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[6], 0.5);
                                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Stuhlbein);
                                        Ovajeh.save.protagonist.experience += 10;
                                        Ovajeh.checkExperience();
                                        await Ovajeh.ƒS.Text.print("Stuhlbein dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                        break;
                                }
                                break;
                            case options.two:
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Ich sollte weiterschauen.');
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Moment mal!');
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Ich glaubs ja nicht, da wurde etwas in das Stuhlbein geritzt! Da steht: "Nimm mich mit".');
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkgreen">${Ovajeh.save.protagonist.name}:</span>`, 'Das muss ein Zeichen sein! Aber warum das Stuhlbein? Trotzdem sollte ich es erstmal mitnehmen.');
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Stuhlbein);
                                Ovajeh.save.protagonist.experience += 10;
                                Ovajeh.checkExperience();
                                Ovajeh.sfx("complete");
                                await Ovajeh.ƒS.Text.print("Stuhlbein dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                break;
                        }
                        ;
                        await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                        await Ovajeh.ƒS.update(0);
                        Ovajeh.closeUI();
                    }
                    else {
                        console.log("chair b");
                        await Ovajeh.say("normal", "Ich glaube an dem Stuhl möchte ich nicht noch mehr kaputt machen");
                        await Ovajeh.say("sad", "Bitte bitte sei mir nicht böse Adam!");
                    }
                }
            }
            ;
            if (_event.x >= Ovajeh.door1.xMin && _event.x <= Ovajeh.door1.xMax) {
                if (_event.y >= Ovajeh.door1.yMin && _event.y <= Ovajeh.door1.yMax) {
                    if (Ovajeh.door1.visited == false) {
                        Ovajeh.door1.visited = true;
                        console.log("door 1 a");
                        Ovajeh.sfx("confirm");
                        await Ovajeh.say("normal", 'Hey! da geht es zu Adams "Bibliothek"... was eigentlich nur sein Arbeitszimmer ist. Mit vielen Büchern halt...');
                        await Ovajeh.say("happy", 'Als Kind bin ich dort so gerne gewesen und habe mir jedes einzelne Buch angeschaut und sehr viele davon auch komplett gelesen.');
                        await Ovajeh.say("normal", 'Inzwischen war ich länger nicht mehr drin. Außer natürlich vor Kurzem, um nach Adam und Michela zu suchen...');
                        if (Ovajeh.chair.visited === true) {
                            await Ovajeh.say("shocked", 'Aber na klar! Aufgrund des neuen Hinweises auf dem Stuhlbein, sollte ich nochmal hereingehen und vielleicht hat sich inzwischen etwas geändert');
                            if (await Ovajeh.options("In Adams Arbeitszimmer gehen", "Noch nicht") == true) {
                                await Ovajeh.say("smile", "Auf geht's!");
                                Ovajeh.ƒS.insert(Ovajeh.Scene_Bibliothek);
                            }
                            else {
                                await Ovajeh.say("normal", 'Wahrscheinlich besser, wenn ich hier erstmal alles unter die Lupe nehme.');
                            }
                        }
                        else {
                            await Ovajeh.say('normal', "Es spricht natürlich nichts dagegen, trotzdem nochmal nachzuschauen.");
                            if (await Ovajeh.options("In Adams Arbeitszimmer gehen", "Noch nicht") == true) {
                                await Ovajeh.say("normal", "Hoffentlich finde ich etwas.");
                                Ovajeh.ƒS.insert(Ovajeh.Scene_Bibliothek);
                            }
                            else {
                                await Ovajeh.say("normal", 'Wahrscheinlich Zeitverschwendung...');
                            }
                        }
                    }
                    else {
                        console.log("door 2 b");
                        Ovajeh.sfx("confirm");
                        if (await Ovajeh.options("In Adams Arbeitszimmer gehen", "Noch nicht") == true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Bibliothek);
                        }
                        else {
                            await Ovajeh.say("normal", 'Ich bin wohl noch nicht ganz fertig.');
                        }
                    }
                }
            }
            if (_event.x >= Ovajeh.door2.xMin && _event.x <= Ovajeh.door2.xMax) {
                if (_event.y >= Ovajeh.door2.yMin && _event.y <= Ovajeh.door2.yMax) {
                    if (Ovajeh.door2.visited == false) {
                        Ovajeh.door2.visited = true;
                        console.log("door 2 a");
                        Ovajeh.sfx("confirm");
                        await Ovajeh.say("smile", 'Das ist Michelas Schlafzimmer...');
                        await Ovajeh.say("sad", "Oh man, ich kann es gar nicht fassen, dass sie auf einmal weg ist. Ich gebe sie aber niemals auf!");
                        await Ovajeh.say("smile", 'Ihr Zimmer ist immer wahnsinnig aufgeräumt, selbst die Polizei hat nichts Verdächtiges gefunden.');
                        if (Ovajeh.chair.visited === true) {
                            await Ovajeh.say("shocked", 'Ja genau! Vielleicht hat sie ebenso kleine unscheinbare Hinweise hinterlassen, wie am Stuhlbein!');
                            await Ovajeh.say("happy", 'Sie wusste über uns und den Stuhl Bescheid, ich muss unbedingt nochmal in ihr Zimmer!');
                            if (await Ovajeh.options("In Michelas Zimmer gehen", "Später") == true) {
                                await Ovajeh.say("smile", "Schnell hinein und schauen!");
                                await Ovajeh.say("shocked", "...");
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.say("angry", 'Es ist... VERSCHLOSSEN? Wie kann das denn sein? Ihre Tür ist sonst nie verschlossen!');
                                await Ovajeh.say("normal", 'Ich muss den Schlüssel zu ihrem Zimmer finden, sofort!');
                                Ovajeh.knowDoor = true;
                            }
                            else {
                                await Ovajeh.say("normal", "Vielleicht doch noch nicht, ich sollte aber schnell machen!");
                            }
                        }
                        else {
                            await Ovajeh.say("sad", 'Vor ihrer Tür so zu stehen, gibt mir Gänsehaut.');
                            await Ovajeh.say("normal", 'Ja, ich reiß mich zusammen. Vielleicht war der Hinweis die gesamte Zeit über vor meiner Nase.');
                            if (await Ovajeh.options("In Michelas Zimmer gehen", "Später") == true) {
                                await Ovajeh.say("normal", "Es führt nichts daran vorbei, wenn ich sie finden will.");
                                await Ovajeh.say("shocked", "...");
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.say("shocked", 'Das ist ja komisch... Nein, funktioniert immernoch nicht. Die Tür ist einfach verschlossen!');
                                await Ovajeh.say("normal", 'Michelas Tür ist sonst nie verschlossen, sie vertraut uns Beiden sehr.');
                                await Ovajeh.say("normal", 'Die Polizei kann es nicht gewesen sein. Ich habe sie aus dem Zimmer herausgehen sehen und keiner hat die Tür zugemacht.');
                                await Ovajeh.say("shocked", 'Ich wüsste nicht einmal, wo überhaupt der Schlüssel sein könnte.');
                                await Ovajeh.say("smile", 'Ich habs doch gleich gesagt, dass hier etwas Paranormales stattgefunden hat.');
                                await Ovajeh.say("normal", "Aber warum sollte ihre Tür verschlossen sein? ...");
                                await Ovajeh.say("shocked", 'Außer jemand möchte uns von ihrem Zimmer fern halten. Oh Gott! Ich muss sofort den Schlüssel finden!');
                                Ovajeh.knowDoor = true;
                            }
                            else {
                                await Ovajeh.say("normal", "Ich fühl mich wohl noch nicht ganz bereit.");
                            }
                        }
                    }
                    else {
                        console.log("door 2 b");
                        Ovajeh.sfx("confirm");
                        if (Ovajeh.doorOpen === true) {
                            if (await Ovajeh.options("Eintreten", 'Noch nicht') === true) {
                                Ovajeh.ƒS.insert(Ovajeh.Scene_Mirror_Room);
                            }
                            else {
                                await Ovajeh.say("normal", 'Am Besten überprüfe ich nochmal, ob ich hier alles gefunden habe.');
                            }
                        }
                        else {
                            if (Ovajeh.knowDoor === true) {
                                if (Ovajeh.checkForItems("Schlüssel") == true) {
                                    await Ovajeh.say("happy", 'Ich schätze mal der große Augenblick ist gekommen, in dem ich die Tür endlich knacken werde! Worauf warte ich noch?');
                                }
                                else {
                                    if (Ovajeh.checkForItems("Lampenteil") == true || Ovajeh.checkForItems("Kaminteil") == true) {
                                        await Ovajeh.say("sad", 'Ohne ein zweites Stück kann ich keine Schlüsselalternative basteln.');
                                        await Ovajeh.say("normal", "Ich wette, dass irgendwo in der Nähe etwas Brauchbares zu finden ist.");
                                    }
                                    else {
                                        await Ovajeh.say("sad", 'Es ist mir ein Mysterium, warum die Tür auf magische Art und Weise verschlossen ist.');
                                        await Ovajeh.say("normal", 'Besser ich finde einen alternativen Schlüssel, weil ich nicht weiß, ob es überhaupt jemals einen gab.');
                                    }
                                }
                            }
                            else {
                                if (await Ovajeh.options("In Michelas Zimmer gehen", "Später") == true) {
                                    await Ovajeh.say("normal", "Hätte ich schon längst machen sollen.");
                                    await Ovajeh.say("shocked", "Was soll das denn?...");
                                    Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                    await Ovajeh.say("shocked", 'Warum ist ihre Tür verschlossen? Das kann gar nicht sein!');
                                    await Ovajeh.say("normal", 'Ich habe noch nie erlebt, dass ihre Tür verschlossen war.');
                                    await Ovajeh.say("normal", 'Die Polizei hat die Tür auch nicht angrührt, das habe ich mitbekommen.');
                                    await Ovajeh.say("shocked", 'Aber auf einmal ist sie zu und ich komme nicht rein.');
                                    await Ovajeh.say("normal", "So viele Fragen, die sich mir gerade stellen. Ich muss irgendwie die Tür aufbekommen.");
                                    await Ovajeh.say("shocked", 'Hoffentlich habe ich das Zeitfenster nicht verpasst eben, in dem die Tür noch offen war.');
                                    await Ovajeh.say("angry", 'Ich musste ja ausgerechnet noch was anderes machen...');
                                    Ovajeh.knowDoor = true;
                                }
                                else {
                                    await Ovajeh.say("sad", 'Ich weiß nicht, vielleicht muss ich mich vorher noch mal sammeln.');
                                }
                            }
                        }
                    }
                }
            }
            if (_event.x >= Ovajeh.lamp.xMin && _event.x <= Ovajeh.lamp.xMax) {
                if (_event.y >= Ovajeh.lamp.yMin && _event.y <= Ovajeh.lamp.yMax) {
                    if (Ovajeh.lamp.visited == false) {
                        Ovajeh.lamp.visited = true;
                        console.log("lamp a");
                        Ovajeh.sfx("confirm");
                        await Ovajeh.say("smile", 'Ach ja, die Lampe fand ich noch nie wirklich schön. Sie macht wenigstens, was sie soll.');
                        await Ovajeh.say("happy", "Als Michela noch klein war, hat sie ernsthaft versucht, zur Lampe hochzuspringen, um sich dann an ihr festzuhalten.");
                        await Ovajeh.say("smile", 'Natürlich ging das nur für kurze Zeit gut, bis die Lampe plötzlich ein Stückchen hinuntersackte...');
                        await Ovajeh.say("happy", "Michelas Gesicht ist noch nie so blass gewesen, als sie vor Schreck die Lampe losließ.");
                        await Ovajeh.say("normal", "Unfassbar, an welche Dinge man sich erinnern kann, wenn man Orts- oder Gegenstands-bezogen denkt.");
                        await Ovajeh.say("sad", "Jetzt merke ich erst richtig, wie sehr ich gerade mit Michela reden will.");
                        await Ovajeh.say("sad", 'Wir waren nicht gerade einfach... Aber Adam hat uns trotzdem so sehr Lieb gehabt.');
                        await Ovajeh.say("happy", "Er ist wirklich der freundlichste Mensch, den ich kenne.");
                        await Ovajeh.say("normal", "Allerdings hat er nie viel von sich und seiner Vergangenheit erzählt. Zurückblicked gesehen war uns das damals aber auch egal.");
                        await Ovajeh.say("happy", "Wir haben ihn trotzdem lieb, er hat uns alles gegeben, was wir brauchten.");
                        await Ovajeh.say("smile", "Ich meine, allein schon in so einem großen Herrenhaus aufzuwachsen, das hat viele schöne Kindheitserinnerungen geprägt.");
                        if (Ovajeh.knowDoor === true) {
                            await Ovajeh.say("shocked", "Interessant, wie sehr das unterste Stückchen der Lampe nach einem Schlüsselteil aussieht!");
                            await Ovajeh.say("sad", 'Leider nicht ganz ausreichend, um als Schlüsselersatz zu funtionieren.');
                            if (Ovajeh.kaminKnow === true) {
                                await Ovajeh.say("smile", 'Aber gerade kommt mir wieder in den Sinn, dass ich das Stückchen gut in Verbindung mit etwas anderem verwenden kann.');
                                await Ovajeh.say("happy", 'Endlich könnte ich Michelas Tür knacken! Außer irgendetwas Unvorhersehbares kommt dazwischen.');
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Lampenteil);
                                Ovajeh.lampenteil = true;
                                Ovajeh.save.protagonist.experience += 10;
                                Ovajeh.checkExperience();
                                Ovajeh.sfx("complete");
                                await Ovajeh.ƒS.Text.print("Lampenteil dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            }
                        }
                    }
                    else {
                        console.log("lamp b");
                        Ovajeh.sfx("confirm");
                        if (Ovajeh.lampenteil === false) {
                            if (Ovajeh.chair.visited === true) {
                                await Ovajeh.say("normal", "Anscheinend kann man nicht gründlich genug schauen, wenn die Hinweise so unscheinbar wie bislang sind");
                                if (Ovajeh.knowDoor === true) {
                                    await Ovajeh.say("shocked", "Das Lampenstück ganz unten sieht einem Schlüssel verdammt ähnlich!");
                                    await Ovajeh.say("normal", 'Ich bräuchte aber noch eine weitere Komponente, damit ich Michelas Zimmertür knacken kann.');
                                    if (Ovajeh.kaminKnow === true) {
                                        await Ovajeh.say("smile", 'Perfekt, ich wüsste auch bereits, wo ich das andere Stück herbekommen könnte.');
                                        await Ovajeh.say("happy", 'Wenn ich beide Teile habe, kann ich vielleicht endlich Zugang zu neuen Antworten finden.');
                                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Lampenteil);
                                        Ovajeh.lampenteil = true;
                                        Ovajeh.save.protagonist.experience += 10;
                                        Ovajeh.checkExperience();
                                        Ovajeh.sfx("complete");
                                        await Ovajeh.ƒS.Text.print("Lampenteil dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                    }
                                }
                            }
                            else
                                await Ovajeh.say("normal", "Ich möchte diese Lampe nicht noch länger anschauen, als nötig.");
                        }
                        else {
                            await Ovajeh.say('happy', 'Die Lampe hat ihren Zweck erfüllt. Dennoch ist sie kein bisschen hübscher dadurch geworden.');
                        }
                    }
                }
            }
            if (_event.x >= Ovajeh.window1.xMin && _event.x <= Ovajeh.window1.xMax) {
                if (_event.y >= Ovajeh.window1.yMin && _event.y <= Ovajeh.window1.yMax) {
                    console.log(_event.x, _event.y);
                    if (Ovajeh.window1.visited == false) {
                        Ovajeh.window1.visited = true;
                        console.log("window a");
                        Ovajeh.sfx("confirm");
                        await Ovajeh.say("normal", "Draußen herrscht außergewöhnlich viel Nebel.");
                        await Ovajeh.say("sad", "Ehrlich gesagt war ich die letzten Tage gar nicht mehr außer Haus.");
                        await Ovajeh.say("normal", "Ich möchte einfach nicht riskieren, dass Michela und Adam wieder auftauchen und ich nicht da bin.");
                        await Ovajeh.say("normal", "Aber das Wetter war eigentlich nicht besonders auffällig bis jetzt.");
                        if (Ovajeh.chair.visited === true) {
                            await Ovajeh.say("shocked", "Der Nebel war genauso plötzlich da, wie die Inschrift!");
                            await Ovajeh.say("normal", "Ich sollte auf weitere solcher Ungwöhnlichkeiten Acht geben.");
                        }
                    }
                    else {
                        console.log("window b");
                        Ovajeh.sfx("confirm");
                        if (Ovajeh.knowWindow === false) {
                            if (Ovajeh.checkForItems("Asche") === false) {
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.say("shocked", 'Igitt! Da ist ja ziemlich viel Dreck an der rechten unteren Ecke');
                                if (await Ovajeh.options("Genauer anschauen", "Igitt") === true) {
                                    await Ovajeh.say("shocked", "Interessant! Vielleicht halluziniere ich gerade, aber der Dreck scheint eine perfekte Form zu bilden.");
                                    await Ovajeh.say("normal", 'Könnte ein Buchstabe sein, oder eine Zahl...');
                                    Ovajeh.windowNotice = true;
                                    if (Ovajeh.chair.visited === true) {
                                        await Ovajeh.say("smile", 'Also den Umständen entsprechend ist dies nicht gerade uninteressant.');
                                        await Ovajeh.say("normal", "Wie beim Stuhlbein könnte hier die Liebe zum Detail genau richtig sein.");
                                        await Ovajeh.say("smile", 'Ich will damit nicht sagen, dass ich die Fensterscheibe mit Dreck einschmieren sollte...');
                                        await Ovajeh.say("happy", 'Aber vielleicht sollte ich es machen und schauen ob dann mehr zu erkennen ist.');
                                    }
                                    else {
                                        await Ovajeh.say("normal", 'Naja, vielleicht nicht genau das, wonach ich suche. Ich behalte es mal im Hinterkopf');
                                    }
                                }
                                else {
                                    await Ovajeh.say("angry", 'Was mache ich hier auch und schaue mir den Dreck an den Fensterscheiben an.');
                                    await Ovajeh.say('normal', 'Ich wünschte, dass ich aus Dreck Gold machen könnte, also im Symbolischen Sinne.');
                                }
                            }
                            else {
                                await Ovajeh.say('smile', 'Jetzt könnte ich endlich die Botschaft entziffern. Worauf warte ich noch?');
                            }
                        }
                        else {
                            await Ovajeh.say("normal", "Nebel überall. Ich glaube der geht so schnell nicht wieder weg. Genauso wie der Dreck, igitt.");
                        }
                    }
                }
            }
            if (_event.x >= Ovajeh.steps.xMin && _event.x <= Ovajeh.steps.xMax) {
                if (_event.y >= Ovajeh.steps.yMin && _event.y <= Ovajeh.steps.yMax) {
                    console.log(_event.x, _event.y);
                    if (Ovajeh.steps.visited == false) {
                        Ovajeh.steps.visited = true;
                        console.log("steps a");
                        Ovajeh.sfx("confirm");
                        await Ovajeh.say("sad", 'Oh je, ich habe keine guten Erinnerungen an diese Treppen. Vor einigen Jahren bin ich dort gestürzt...');
                        await Ovajeh.say("shocked", 'Ich bin voll auf den Hinterkopf gefallen und musst sofort ins Krankenhaus.');
                        await Ovajeh.say("angry", 'Der blöde "Teppich" war viel zu locker und deshalb bin ich beim Hochgehen damit weggerutscht!');
                        await Ovajeh.say("normal", 'Vielleicht hatte ich einfach Pech, aber davor saß der Teppich immer bombenfest.');
                        await Ovajeh.say("sad", 'Ich habe ehrlich gedacht, Michela hätte ihn extra lose gemacht, um mir eins auszuwischen.');
                        await Ovajeh.say("sad", 'Wie konnte ich sowas nur denken... Wir waren ja keine Kinder mehr, die einander Streiche spielen.');
                        await Ovajeh.say("normal", 'Jedoch dachte ich, sie wäre extrem wütend gewesen, weil ich ihr meine Meinung zu ihrem damaligen Freund gesagt habe.');
                        await Ovajeh.say('angry', "Gabriel... Er hat ihr überhaupt nicht gut getan und das wollte Michela einfach nicht sehen.");
                        await Ovajeh.say('shocked', "Sie hat sich von ihm ausnutzen lassen und er hatte wenig Interesse an ihr als Person.");
                        await Ovajeh.say('normal', "Er hatte mit ihr Schluss gemacht, kurz nachdem ich ihr das klar machen wollte...");
                        await Ovajeh.say("sad", 'Sie hatte mich deshalb im Verdacht und war stinksauer. Ich würde aber sowas nie machen.');
                        await Ovajeh.say("normal", 'Das danach der Teppich auf einmal locker war, hatte mich schon stutzig gemacht.');
                        await Ovajeh.say("normal", 'Michela hat mir geschworen, dass sie es nicht war.');
                        await Ovajeh.say("normal", "Adam war irgendwie komisch drauf deswegen, aber bestimmt hatte er sich nur unglaubliche Sorgen gemacht.");
                        await Ovajeh.say("smile", "Er liegt sehr an seiner Einrichtung, aber auch unserer Sicherheit.");
                        await Ovajeh.say("normal", 'Ich deute wahrscheinlich zu viel hinein in Kleinigkeiten.');
                    }
                    else {
                        console.log("steps b");
                        Ovajeh.sfx("confirm");
                        if (Ovajeh.carpetDone === false) {
                            if (Ovajeh.booksL.visited === true || Ovajeh.booksR.visited === true) {
                                if (Ovajeh.carpetAgain === false && Ovajeh.carpetNo === false) {
                                    await Ovajeh.say("normal", 'Also wenn ich mehr von diesen Buchseiten finden will, sollte ich wirklich jeden Fleck umdrehen.');
                                    await Ovajeh.say("normal", 'Je mehr Seiten ich finden kann, desto mehr erfahre ich vielleicht, womit ich es hier zu tun habe.');
                                    if (await Ovajeh.options("Teppich anheben", "Nichts machen") === true) {
                                        await Ovajeh.say("angry", "Beim Lockern des Teppichs bekomme ich direkt Flashbacks an meinen blöden Sturz.");
                                        await Ovajeh.say("normal", 'Aber dann wollen wir mal schauen...');
                                        await Ovajeh.say("normal", "...");
                                        await Ovajeh.say("normal", "...");
                                        await Ovajeh.say("sad", 'Alles umsonst... Warum dachte ich auch, dass ich hier was finden werde?');
                                        Ovajeh.carpetAgain = true;
                                    }
                                    else {
                                        await Ovajeh.say("normal", 'Ehrlich gesagt habe ich gerade keine Lust, diesen Staubfänger anzuheben.');
                                        await Ovajeh.say("angry", 'Nochmal verletze ich mich nicht wegen dem!');
                                        Ovajeh.carpetNo = true;
                                    }
                                }
                                if (Ovajeh.carpetAgain === true && Ovajeh.carpetNo === false) {
                                    await Ovajeh.say("normal", 'Ach was solls... Ich habe noch nicht alle Stufen abgesucht, ganz oben war ich noch nicht.');
                                    await Ovajeh.say("sad", 'Irgendwie wollt ich es nicht wahrhaben, aber ich hatte wohl eine Angst gegen diese Stufen entwickelt nach dem Unfall.');
                                    await Ovajeh.say("shocked", 'Wenn ich mir das so vor Augen führe, habe ich tatsächlich ein unwohles Gefühl solange ich auf dieser Treppe stehe.');
                                    await Ovajeh.say("smile", 'Okay, ich pack das schon! Ich werde einfach extra vorsichtig vorgehen.');
                                    await Ovajeh.say("normal", '...');
                                    await Ovajeh.say("shocked", 'Oh nein! Meine Angst vor der Treppe hätte mich davon abgehalten, eine weitere Buchseite zu finden!');
                                    await Ovajeh.say("happy", 'Ich bin so froh, dass ich über mich hinauswachsen konnte!');
                                    // Der Unfall ihrer Eltern hat sie unbewusst sehr ängstlich/vorsichtig gemacht. Jeder noch so kleine Unfall hinterlässt langfristige psychische Folgen
                                    Ovajeh.randomItem();
                                    Ovajeh.save.protagonist.experience += 5;
                                    Ovajeh.checkExperience();
                                    Ovajeh.sfx("complete");
                                    Ovajeh.carpetDone = true;
                                    await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                                }
                                if (Ovajeh.carpetAgain === false && Ovajeh.carpetNo === true) {
                                    await Ovajeh.say("normal", 'Okay okay... Ich schaue am Besten doch mal drunter.');
                                    if (await Ovajeh.options("Teppich doch anheben", "Wieder nichts machen") === true) {
                                        await Ovajeh.say("angry", "Glaub mir Teppich, ich werde nicht sanft mit dir umgehen!");
                                        await Ovajeh.say("normal", 'Oh man, hoffentlich bereue ich meine Worte nicht.');
                                        await Ovajeh.say("normal", "Und los gehts... Langsam den Teppich lösen und anheben... so weit so gut.");
                                        await Ovajeh.say("normal", "...");
                                        await Ovajeh.say("angry", 'Ich wusste es, was für eine reine Zeitverschwendung. Was habe ich mir nur gedacht.');
                                        Ovajeh.carpetAgain = true;
                                    }
                                    else {
                                        await Ovajeh.say("shocked", 'Ich kann es einfach nicht... habe ich etwa Angst wieder zu stürzen?');
                                        await Ovajeh.say("normal", 'Nah, ich glaube nicht. Mir ist einfach bewusst, dass hier nichts zu finden ist.');
                                    }
                                }
                                if (Ovajeh.carpetAgain === true && Ovajeh.carpetNo === true) {
                                    await Ovajeh.say("angry", 'Ich kann es nicht glauben, dass ich ernsthaft nochmal darüber nachdenke...');
                                    await Ovajeh.say("sad", 'Ehrlich gesagt habe ich beim ersten Mal nicht bis zur obersten Stufe hin untersucht.');
                                    await Ovajeh.say("shocked", 'Verdammt nochmal! Ich habe tatsächlich unbewusste Angst vor dieser Treppe!');
                                    await Ovajeh.say("normal", 'Ich habe mir selber was vorgelogen und dachte, dass ich meine Ängste im Griff habe.');
                                    await Ovajeh.say("sad", 'Besonders vor so einer "harmlosen" Treppe... Na dann fange ich diesmal einfach oben an.');
                                    await Ovajeh.say("normal", 'Mal schauen...');
                                    await Ovajeh.say("happy", 'Oha, tatsächlich eine weitere Buchseite! Ich komme der Sache hoffentlich immer näher.');
                                    Ovajeh.randomItem();
                                    Ovajeh.save.protagonist.experience += 5;
                                    Ovajeh.checkExperience();
                                    Ovajeh.sfx("complete");
                                    Ovajeh.carpetDone = true;
                                    await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                                }
                            }
                            else {
                                await Ovajeh.say("normal", 'Diese Stufen und Ich... Wir sind wie Wasser und Öl.');
                                await Ovajeh.say("angry", "Mir schmerzt der Kopf schon beim bloßen Gedanken, die Treppe hoch- oder runterzugehen.");
                            }
                        }
                        else {
                            await Ovajeh.say("smile", 'Endlich kann ich meinen Frieden mit der Treppe schließen');
                        }
                    }
                }
            }
        } // if ui_Open
    } // function
    Ovajeh.positions_intro = positions_intro;
    // Scene Intro
    async function Scene_Intro() {
        Ovajeh.currentScene = "intro";
        console.log(`current scene: ${Ovajeh.currentScene}`);
        Ovajeh.sfx("ambient");
        Ovajeh.mapListeners();
        Ovajeh.closeUI();
        await Ovajeh.ƒS.Location.show(Ovajeh.location.intro.mansion);
        await Ovajeh.ƒS.update(0);
        if (Ovajeh.visitScene() === false) {
            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.happy, Ovajeh.ƒS.positionPercent(20, 100));
            await Ovajeh.ƒS.update(1);
            Ovajeh.showUI();
            let hero_randomGreeting = Math.floor(Math.random() * Ovajeh.sound.protagonist.greeting.length);
            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.greeting[hero_randomGreeting], 1, false);
            await Ovajeh.protagonistCycle();
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
            await Ovajeh.ƒS.update(1);
            Ovajeh.closeUI();
        }
        else if (Ovajeh.won === false) {
            await Ovajeh.say("normal", 'Irgendwas Neues?');
        }
        else {
            await Ovajeh.say("shocked", 'Los los! Ich muss mich beeilen und schnell zu Michelas Spiegel gelangen!');
        }
    }
    Ovajeh.Scene_Intro = Scene_Intro;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    // Positions
    Ovajeh.bed = {
        xMax: 565,
        xMin: 230,
        yMax: 600,
        yMin: 295,
        visited: false,
    };
    Ovajeh.picture = {
        xMax: 705,
        xMin: 630,
        yMax: 345,
        yMin: 230,
        visited: false,
    };
    Ovajeh.mirror = {
        xMax: 1355,
        xMin: 1200,
        yMax: 485,
        yMin: 225,
        visited: false,
    };
    Ovajeh.schubladen = {
        xMax: 1390,
        xMin: 1075,
        yMax: 640,
        yMin: 490,
        visited: false,
    };
    Ovajeh.window2 = {
        xMax: 1130,
        xMin: 980,
        yMax: 400,
        yMin: 80,
        visited: false,
    };
    Ovajeh.secret2 = {
        xMax: 940,
        xMin: 875,
        yMax: 480,
        yMin: 425,
        visited: false,
    };
    Ovajeh.exit1 = {
        xMax: 185,
        xMin: 0,
        yMax: 740,
        yMin: 0,
        visited: false,
    };
    Ovajeh.exit2 = {
        xMax: 1235,
        xMin: 700,
        yMax: 740,
        yMin: 650,
        visited: false,
    };
    Ovajeh.mirrorRepaired = false;
    Ovajeh.mirrorOpened = false;
    Ovajeh.michelaVisited = false;
    // CLICKABLE POSITIONS
    async function positions_mirror_room(_event) {
        //console.log(_event.x, _event.y)
        if (Ovajeh.ui_Open === false) {
            // Bed
            if (_event.x >= Ovajeh.bed.xMin && _event.x <= Ovajeh.bed.xMax) {
                if (_event.y >= Ovajeh.bed.yMin && _event.y <= Ovajeh.bed.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.bed.visited == false) {
                        console.log("bed a");
                        Ovajeh.bed.visited = true;
                        await Ovajeh.say("smile", 'Michela hat mit Abstand das beste Bett von uns. Sie braucht ihre zwölf Stunden Schlaf.');
                        await Ovajeh.say("happy", 'Ach ja... Sie war öfters schlecht gelaunt, aber wehe sie hatte ihren vollen Schlaf nicht!');
                        await Ovajeh.say("smile", 'Ich bin ihr morgens deshalb meistens aus dem Weg gegangen, aber das war in Ordnung für sie.');
                        await Ovajeh.say("smile", 'Vielleicht lege ich mich ganz kurz mal hin und verschnaufe.');
                        await Ovajeh.say("normal", 'Ich versuche positiv zu bleiben, aber der Stress erhöht sich mit jedem neuen Hinweis, den ich finde.');
                        await Ovajeh.say("shocked", 'Irgendwie hatte ich immer gehofft, dass eines Tages Paranormale Dinge passieren und ich dabei sein werde.');
                        await Ovajeh.say("sad", 'Aber nicht so... Eine andere Welt? Das ist viel auf einmal zu verarbeiten.');
                        await Ovajeh.say("shocked", 'Was ist nur, wenn Michela und Adam beide in Gefahr sind? Werde ich in der Lage sein, sie zu retten? Für sie zu kämpfen?');
                        await Ovajeh.say('sad', 'Vor einigen Tagen war Alles noch so simpel... Verglichen mit dem hier');
                        await Ovajeh.say('sad', 'Ich wünschte, dass ich einschlafen könnte und beim Aufwachen ist wieder Alles wie früher...');
                        if (await Ovajeh.options("Hinlegen", "Weiter Suchen") === true) {
                            await Ovajeh.say('normal', 'ZZZZZzzz... Zzz... zz...');
                            await Ovajeh.say('normal', 'Hey! Da ist irgendein spitzer Gegenstand unter dem Kopfkissen.');
                            Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                            await Ovajeh.say('shocked', 'Ein goldener Zahn? Was macht der unter dem Kopfkissen?');
                            await Ovajeh.say('shocked', "Ich hätte schwören können, dass der beim Einschlafen noch nicht da war!");
                            await Ovajeh.say('normal', 'Wie als hätte sich die Zahnfee umentschieden, aber den Zahn trotzdem wertvoller gemacht.');
                            await Ovajeh.say('smile', 'Ach ich Spinnerin... Ich nehme ihn erstmal mit, bis ich weiß, was ich damit anfangen soll.');
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Zahn);
                            Ovajeh.save.protagonist.experience += 10;
                            Ovajeh.checkExperience();
                            Ovajeh.sfx("complete");
                            await Ovajeh.ƒS.Text.print("Zahn dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                            if (Ovajeh.checkForItems("Feder") === true) {
                                await Ovajeh.say("normal", 'Hmmm, erst die Feder, jetzt der Zahn. Erst nichts und dann sind die Dinge plötzlich da.');
                                await Ovajeh.say("normal", "Ich weiß nichtmal ob mir das Alles helfen soll, oder am Ende sogar in die Irre führt.");
                                await Ovajeh.say("shocked", 'Was ist wenn ich in eine Falle gelockt werde, genauso wie Adam und Michela?');
                                await Ovajeh.say("normal", 'Egal was kommt, ich muss mich vorbereiten. Aber aufgeben werde ich nie!');
                            }
                        }
                        else {
                            await Ovajeh.say("normal", 'War ein schöner Gedanke, aber ich kann mir jetzt nicht leisten, einzuschlafen.');
                        }
                    }
                    else {
                        console.log("bed b");
                        if (Ovajeh.checkForItems("Zahn") === false) {
                            await Ovajeh.say("smile", 'Ach was solls, ein paar Minuten werden schon nicht schaden.');
                            if (await Ovajeh.options("Hinlegen", "Weiter Suchen") === true) {
                                await Ovajeh.say('normal', 'ZZZz... Zzz... zz...');
                                await Ovajeh.say('normal', 'Ich habe das Gefühl, dass unter dem Kissen irgendwas Spitzes liegt.');
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.say('shocked', 'Es ist ein Zahn! Komplett vergoldet, wow! Aber...');
                                await Ovajeh.say('shocked', "Aber ich könnte schwören, dass ich im Halbschlaf das Kissen gewendet hatte und zu der Zeit noch kein Zahn drunter lag.");
                                await Ovajeh.say('normal', 'Macht sich die Zahnfee einen Spaß? Inzwischen würde ich sogar fast glauben, dass es sie wirklich gibt.');
                                await Ovajeh.say('smile', 'Aber dafür ist ihr Konzept zu komisch. Warum sollte sie die Zähne von Kindern im Austausch für ein Geschenk wollen?');
                                await Ovajeh.say("smile", 'Also wenn übernatürliche Wesen existieren, dann sind es bestimmt Geister und Dämonen, aber keine Zahnfee.');
                                await Ovajeh.say("normal", 'Ich stecke ihn erstmal ein. Wahrscheinlich werde ich ihn später brauchen.');
                                Ovajeh.ƒS.Inventory.add(Ovajeh.items.Zahn);
                                Ovajeh.save.protagonist.experience += 10;
                                Ovajeh.checkExperience();
                                Ovajeh.sfx("complete");
                                await Ovajeh.ƒS.Text.print("Zahn dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                                if (Ovajeh.checkForItems("Feder") === true) {
                                    await Ovajeh.say("normal", 'Ob das plötzliche Auftauchen der Dinge, wie die Feder oder jetzt der Zahn, etwas miteinander zu tun hat?');
                                    await Ovajeh.say("normal", "Wenn es aus einer anderen Welt kommt, dann sollte ich vielleicht eher vorsichtig sein, wohin mich das Ganze führt.");
                                    await Ovajeh.say("shocked", 'Was ist wenn ich in die Irre geführt werde, oder sogar in eine Falle? Wer rettet mich dann?');
                                    await Ovajeh.say("normal", 'Darüber habe ich noch nicht nachgedacht, aber jetzt wird mir klar, dass ich mich auf das Schlimmste vorbereiten sollte.');
                                }
                            }
                            else {
                                await Ovajeh.say("sad", 'Ich mach mich noch kaputt...');
                            }
                        }
                        else {
                            await Ovajeh.say("smile", 'Verlockend, aber ich will nicht noch so ein Zahn.');
                        }
                    }
                } // if y
            } // if x
            // Picture
            if (_event.x >= Ovajeh.picture.xMin && _event.x <= Ovajeh.picture.xMax) {
                if (_event.y >= Ovajeh.picture.yMin && _event.y <= Ovajeh.picture.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.picture.visited == false) {
                        console.log("picture a");
                        Ovajeh.picture.visited = true;
                        await Ovajeh.say("smile", 'Michela hatte schon immer einen schrägen Sinn für Humor. Ein umgedrehtes Hufeisen?');
                        await Ovajeh.say("normal", 'Das ganze Glück fällt ja einfach wieder raus!');
                        await Ovajeh.say("smile", 'Sie hat ständig Witze darüber gemacht, wie viel Pech sie nur hat.');
                        await Ovajeh.say("normal", 'Adam und ich wussten, dass es ihre Methode war, mit ihrer traumatischen Vergangenheit klar zu kommen');
                        await Ovajeh.say("happy", 'Aber in der jetztigen Situation brauchen wir viel Glück, also drehe ich das Bild einfach auf den Kopf!');
                        await Ovajeh.say("smile", '...');
                        await Ovajeh.say("smile", 'Schon viel besser. Ich glaube, so herum war das Bild ursprünglich auch angedacht');
                        Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                        await Ovajeh.say("shocked", 'Whoops! Was ist da denn gerade heruntergefallen?');
                        await Ovajeh.say("shocked", 'Eine Buchseite! Hinter dem Bild war sie versteckt.');
                        await Ovajeh.say("normal", 'Beim Umdrehen muss sie durch die Öffnung im Rahmen geschlitten sein. Jemand hat sie geplant versteckt.');
                        await Ovajeh.say("normal", 'Hoffentlich hilft sie mir weiter beim Auflösen der Botschaften.');
                        Ovajeh.randomItem();
                        Ovajeh.save.protagonist.experience += 5;
                        Ovajeh.checkExperience();
                        Ovajeh.sfx("complete");
                        await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                    }
                    else {
                        console.log("picture b");
                        await Ovajeh.say("smile", 'Das Hufeisen hat sofort Glück beschert. Hoffentlich nicht nur einmal.');
                    }
                } // if y
            } // if x
            // Mirror
            if (_event.x >= Ovajeh.mirror.xMin && _event.x <= Ovajeh.mirror.xMax) {
                if (_event.y >= Ovajeh.mirror.yMin && _event.y <= Ovajeh.mirror.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.mirror.visited == false) {
                        console.log("mirror a");
                        Ovajeh.mirror.visited = true;
                        await Ovajeh.say("shocked", 'Dem Spiegel fehlt ein Stück! Das ist mir bislang noch gar nicht aufgefallen.');
                        await Ovajeh.say("normal", 'Es ist aber auch sehr einfach zu übersehen.');
                        if (Ovajeh.mirrorRepaired === false) {
                            await Ovajeh.say('shocked', 'Ich weiß nicht genau, aber irgendwas stimmt nicht ganz mit meinem Spiegelbild.');
                            await Ovajeh.say("shocked", 'Es ist fast so, als würde es sich leicht zeitversetzt bewegen.');
                        }
                        if (Ovajeh.checkForItems("Scherbe")) {
                            await Ovajeh.say("normal", 'Michelas Spiegel muss wohl ein Portal zu der Spiegeldimension sein.');
                            await Ovajeh.say("normal", 'Es wird Zeit, den Schritt in eine andere Welt zu wagen.');
                        }
                        else {
                            await Ovajeh.say("sad", 'Ohne die exakt passende Scherbe kann ich den Spiegel nicht reparieren');
                            await Ovajeh.say("normal", 'Ich muss unbedingt herausfinden, was mit meinem Spiegelbild los ist.');
                        }
                    }
                    else {
                        console.log("mirror b");
                        if (Ovajeh.mirrorRepaired === false) {
                            await Ovajeh.say("shocked", 'Ich glaube, da war gerade jemand hinter mir im Spiegel!');
                            await Ovajeh.say("shocked", 'Eine dunkle Gestalt! Oh nein, hier stimmt was ganz und gar nicht!');
                        }
                        else if (Ovajeh.mirrorOpened === false) {
                            if (Ovajeh.michelaVisited === false) {
                                await Ovajeh.say("normal", "... Hmmm ...");
                                Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                                await Ovajeh.say("shocked", "!!!!!!!!");
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.animate(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.smile, Ovajeh.canvasBottomEntry());
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, `Hallo ${Ovajeh.save.protagonist.name}! Du hast bestimmt viele Fragen.`);
                                Ovajeh.showUI();
                                await Ovajeh.say("happy", 'Michela! Ich bin so verdammt froh dich zu sehen! Und wie ich Fragen habe! Du und Adam haben ganz schön was zu erzählen.');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.happy, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.happy, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Ich freue mich auch sehr dich zu sehen! Das bedeutet, dass du meinen Hinweisen richtig gefolgt bist.");
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.sad, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Am liebsten würde ich dir alles erzählen, aber die Zeit drängt und ich bin in großer Gefahr!");
                                await Ovajeh.say("shocked", 'Oh mein Gott! Geht es dir gut!? Was ist mit Adam? Wie kann ich zu euch gelangen, um euch zu retten?');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.angry, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Adam... Er ist der Grund, weshalb ich hier gefangen bin! Ich konnte es auch nicht fassen, aber du musst mir jetzt genau zuhören!");
                                await Ovajeh.say("sad", 'Adam hat dich entführt!? Ich hatte schon so eine Vermutung, aber konnte es mir nicht zusammenreimen.');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.sad, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Er ist in Wirklichkeit nicht die Person, die er all die Jahre vorgab zu sein.");
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.shocked, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Ich erkläre dir alles wenn du hier drüben bist, jetzt musst du so schnell wie möglich das Portal öffnen bevor es zu spät ist!");
                                await Ovajeh.say("shocked", 'Zu spät? Was meinst du damit?! Werden wir dann nicht beide gefangen sein?');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.angry, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Es ist Adam! Sobald er herausfindet, dass ich dir im Geheimen Botschaften übermittelt habe...");
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.shocked, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Dann wird er alles in Gang setzen, um jede Verbindung zu dieser Welt zu schließen!");
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Damit wir beide eine Chance haben, musst du unbedingt seine Waffe mitnehmen! Du hast sie doch hoffentlich gefunden?");
                                if (Ovajeh.gotWeapon === true) {
                                    await Ovajeh.say("sad", 'Eine Chance? Du machst mir extrem viel Angst gerade! Aber ja, ich habe die Waffe gefunden. Was hat das zu bedeuten?');
                                    Ovajeh.showUI();
                                    await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                                    await Ovajeh.ƒS.update(0);
                                }
                                else {
                                    await Ovajeh.say("sad", 'Waffe? Davon höre ich zum ersten Mal! Ich werde sie noch finden, versprochen! Aber lediglich eine Chance? Oh je...');
                                    Ovajeh.showUI();
                                    await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.sad, Ovajeh.ƒS.positionPercent(20, 100));
                                    await Ovajeh.ƒS.update(0);
                                }
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.sad, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Ja, es ist schwer zu glauben... Aber du musst mir vertrauen.");
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.shocked, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Oh nein! Es ist gleich zu spät! Um das Portal zu öffnen, musst du eine Kreatur aus dieser Dimension beschwören.");
                                await Ovajeh.say("shocked", 'Ich weiß aber gar nicht wie das gehen soll! Nichts davon stand auf den Buchseiten...');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Du musst mit einer Fackel der Opferung ein Feuer entzünden und die Kreatur besiegen, um ihre Essenz zu erlangen. Damit wird sich das Spiegelportal öffnen!");
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.normal, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Das Stuhlbein ist aus Holz der Spiegeldimension und auf dem Stoff sind magische Symbole eingraviert.");
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Zusammen bilden sie die Grundlage für die Opferungsfackel. Doch entfachen lässt sie sich nur mit Blut!");
                                await Ovajeh.say("shocked", 'Die Fackel sollte kein Problem sein, aber gegen ein Monster aus einer anderen Dimension zu kämpfen?!');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.say("normal", 'Mir ist bewusst was auf dem Spiel steht. Ich werde die Waffe in die Hand nehmen und mit der Essenz zurückkehren.');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.say("smile", 'Ich verspreche es dir! Bitte bring dich nicht noch mehr in Gefahr.');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.smile, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.smile, Ovajeh.ƒS.positionPercent(80, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, "Das ist meine Schwester! Ich wusste, dass ich auf dich zähl... ...");
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
                                await Ovajeh.ƒS.update(1);
                                await Ovajeh.say("shocked", '...');
                                Ovajeh.showUI();
                                await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.shocked, Ovajeh.ƒS.positionPercent(20, 100));
                                await Ovajeh.ƒS.update(0);
                                await Ovajeh.say("shocked", 'Michela?! Oh nein, ich muss mich unbedingt beeilen!');
                                await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
                                await Ovajeh.ƒS.update(0);
                            }
                            else {
                                await Ovajeh.say("sad", 'Ich habe die Verbindung zu ihr verloren... Sie wird sich nicht wieder melden. Ich muss zu ihr so schnell es geht!');
                            }
                        }
                        else {
                            await Ovajeh.say("smile", 'Es wird Zeit...');
                            if (await Ovajeh.options("Spiegelwelt betreten", "Noch nicht") === true) {
                                Ovajeh.ƒS.insert(Ovajeh.Scene_Mirror_World);
                            }
                            else {
                                await Ovajeh.say("normal", 'Ich überprüfe noch schnell was, dann nichts wie rein in das Portal.');
                            }
                        }
                    }
                } // if y
            } // if x
            // Schubladen
            if (_event.x >= Ovajeh.schubladen.xMin && _event.x <= Ovajeh.schubladen.xMax) {
                if (_event.y >= Ovajeh.schubladen.yMin && _event.y <= Ovajeh.schubladen.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.schubladen.visited == false) {
                        console.log("schubladen a");
                        Ovajeh.schubladen.visited = true;
                        if (await Ovajeh.options("Schubladen öffnen", "Privatsphäre beibehalten") === true) {
                            await Ovajeh.say("normal", 'Hmmm, Kleidung über Kleidung...');
                            await Ovajeh.say('smile', '...');
                            if (Ovajeh.booksL.visited === true || Ovajeh.booksR.visited === true || Ovajeh.picture.visited === true) {
                                await Ovajeh.say("happy", 'Aha! Hätte nicht gedacht, dass ich eine weitere Buchseite in Michelas Schubladen finde.');
                            }
                            else {
                                await Ovajeh.say("normal", 'Eine Buchseite, komisch. Was macht sowas versteckt unter Michelas Kleidung?');
                            }
                            Ovajeh.randomItem();
                            Ovajeh.save.protagonist.experience += 5;
                            Ovajeh.checkExperience();
                            Ovajeh.sfx("complete");
                            await Ovajeh.ƒS.Text.print("Buchseite dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>5</span> XP</p>");
                            await Ovajeh.say("normal", 'Sieh mal einer an, das Stückchen Stoff unter der Buchseite sieht interessant aus.');
                            await Ovajeh.say("smile", 'Super weich und elegant. Aber die Symbole sind mir fremd. Besser nehm ich den Stoff erstmal mit.');
                            Ovajeh.ƒS.Inventory.add(Ovajeh.items.Stoff);
                            Ovajeh.save.protagonist.experience += 10;
                            Ovajeh.checkExperience();
                            Ovajeh.sfx("complete");
                            await Ovajeh.ƒS.Text.print("Stoff dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                        }
                    }
                    else {
                        console.log("schubladen b");
                        await Ovajeh.say("smile", 'Vielleicht überrede ich Michela mal, mir ein paar von ihren tausend Klamotten zu leihen');
                    }
                } // if y
            } // if x
            // Window
            if (_event.x >= Ovajeh.window2.xMin && _event.x <= Ovajeh.window2.xMax) {
                if (_event.y >= Ovajeh.window2.yMin && _event.y <= Ovajeh.window2.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.window2.visited == false) {
                        console.log("window a");
                        Ovajeh.window2.visited = true;
                        await Ovajeh.say("normal", '...');
                        await Ovajeh.say("normal", 'Was liegt dort auf dem Fenstersims?');
                        await Ovajeh.say("happy", 'Eine wunderschöne Feder, wow! Ich habe noch nie in meinem Leben so eine Feder gesehen.');
                        await Ovajeh.say("smile", 'Es könnte die Feder eines Engels sein, so atemberaubend sieht sie aus.');
                        await Ovajeh.say('smile', 'Sie liegt dort definitv nicht ohne Grund, ich muss nur herausfinden, wofür ich sie brauche.');
                        if (Ovajeh.checkForItems("Zahn") === true) {
                            await Ovajeh.say("normal", 'Es tauchen immer wieder Dinge plötzlich auf, genauso wie der Zahn und jetzt die Feder.');
                            await Ovajeh.say("normal", "Entweder irgendwer oder -was möchte mir ernsthaft helfen die andere Welt zu finden, oder mich komplett in die Irre führen");
                            await Ovajeh.say("shocked", 'Oh nein! Vielleicht sogar in eine Falle? Darüber habe ich noch gar nicht wirklich nachgedacht!');
                            await Ovajeh.say("normal", 'Ich muss aufmerksam bleiben und mich auf das Schlimmste gefasst machen. Vorher gebe ich nicht auf!');
                        }
                        Ovajeh.ƒS.Inventory.add(Ovajeh.items.Feder);
                        Ovajeh.save.protagonist.experience += 10;
                        Ovajeh.checkExperience();
                        Ovajeh.sfx("complete");
                        await Ovajeh.ƒS.Text.print("Feder dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>10</span> XP</p>");
                    }
                    else {
                        console.log("window b");
                        await Ovajeh.say("normal", 'Draußen ist nichts zu sehen weit und breit. Ich glaube aber nicht, dass ich noch so eine Feder finde.');
                    }
                } // if y
            } // if x
            // Secret
            if (_event.x >= Ovajeh.secret2.xMin && _event.x <= Ovajeh.secret2.xMax) {
                if (_event.y >= Ovajeh.secret2.yMin && _event.y <= Ovajeh.secret2.yMax) {
                    if (Ovajeh.secret2.visited == false) {
                        console.log("secret a");
                        Ovajeh.secret2.visited = true;
                        Ovajeh.ƒS.Sound.play(Ovajeh.sound.protagonist.misc[2], 0.5);
                        if (Ovajeh.secret1.visited === true) {
                            await Ovajeh.say("shocked", 'Noch ein Geheimfach, in Michelas Zimmer! Von allen Plätzen im Haus, hätte ich hier eins am wenigsten vermutet!');
                            await Ovajeh.say("normal", 'Ohne Beweise will ich zu keinem Urteil springen, bestimmt gibt es eine gute Erklärung.');
                            await Ovajeh.say("angry", "Es ist wieder ein Code gefordert, verdammt! Diesmal sogar eine Sechs-stellige Buchstabenabfolge.");
                            await Ovajeh.say("sad", 'Das wäre noch viel unmöglicher zu erraten, als beim Zahlencode.');
                        }
                        else {
                            await Ovajeh.say("shocked", "Was ist... Ein Fach eingebaut in der Wand! Ein Geheimfach könnte man sagen.");
                            await Ovajeh.say("angry", 'Ich kann es nicht glauben, es wird ein Code aus Sechs Buchstaben gefordert!');
                            await Ovajeh.say("sad", 'Wie soll ich da nur jemals drankommen? Ich kann den Code unmöglich erraten.');
                        }
                        await Ovajeh.say("normal", 'Habe ich etwas übersehen? Ich sollte mir nochmal alles genau anschauen.');
                    }
                    else {
                        console.log("secret b");
                        Ovajeh.sfx("confirm");
                        if (Ovajeh.mirrorRepaired === false) {
                            if (Ovajeh.checkForItems("Scherbe") === false) {
                                if (Ovajeh.checkForItems("Code") == true) {
                                    await Ovajeh.say("smile", "Ich sollte alles haben, was ich benötige");
                                    Ovajeh.showUI();
                                    Ovajeh.codecheck();
                                }
                                else {
                                    await Ovajeh.say("normal", 'Ich bin mir nicht sicher, ob ich den richtigen Code herausgefunden habe.');
                                    Ovajeh.showUI();
                                    Ovajeh.codecheck();
                                }
                            }
                            else
                                await Ovajeh.say("normal", 'Außer der Scherbe war dort nichts mehr drin.');
                        }
                        else {
                            await Ovajeh.say("smile", 'Also eines ist klar, bis jetzt ist noch keine neue Spiegelscherbe drin.');
                        }
                    }
                } // if y
            } // if x
            // Exit 1
            if (_event.x >= Ovajeh.exit1.xMin && _event.x <= Ovajeh.exit1.xMax) {
                if (_event.y >= Ovajeh.exit1.yMin && _event.y <= Ovajeh.exit1.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.exit1.visited == false) {
                        console.log("exit1 a");
                        Ovajeh.exit1.visited = true;
                        await Ovajeh.say("normal", 'Da gehts wieder zurück zum Treppenhaus.');
                        if (await Ovajeh.options("Treppenhaus", "Bleiben") === true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Intro);
                        }
                        else {
                            await Ovajeh.say("normal", 'Ich sollte mich erstmal auf diesen Raum konzentrieren');
                        }
                    }
                    else {
                        console.log("exit1 b");
                        if (await Ovajeh.options("Treppenhaus", "Bleiben") === true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Intro);
                        }
                        else {
                            await Ovajeh.say("normal", 'Erstmal bleib ich hier.');
                        }
                    }
                } // if y
            } // if x
            // Exit 2
            if (_event.x >= Ovajeh.exit2.xMin && _event.x <= Ovajeh.exit2.xMax) {
                if (_event.y >= Ovajeh.exit2.yMin && _event.y <= Ovajeh.exit2.yMax) {
                    Ovajeh.sfx("confirm");
                    if (Ovajeh.exit2.visited == false) {
                        console.log("exit2 a");
                        Ovajeh.exit2.visited = true;
                        await Ovajeh.say("normal", 'Soll ich wieder zurück?');
                        if (await Ovajeh.options("Treppenhaus", "Bleiben") === true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Intro);
                        }
                        else {
                            await Ovajeh.say("normal", 'Besser ich suche hier noch weiter.');
                        }
                    }
                    else {
                        console.log("exit2 b");
                        if (await Ovajeh.options("Treppenhaus", "Bleiben") === true) {
                            Ovajeh.ƒS.insert(Ovajeh.Scene_Intro);
                        }
                        else {
                            await Ovajeh.say("normal", 'Noch nicht.');
                        }
                    }
                } // if y
            } // if x
        } // if ui_Open
    } // function
    Ovajeh.positions_mirror_room = positions_mirror_room;
    // Scene Mirror Room
    async function Scene_Mirror_Room() {
        Ovajeh.currentScene = "mirrorroom";
        console.log(`current scene: ${Ovajeh.currentScene}`);
        Ovajeh.sfx("ambient");
        Ovajeh.mapListeners();
        Ovajeh.closeUI();
        await Ovajeh.ƒS.Location.show(Ovajeh.location.intro.mirror);
        await Ovajeh.ƒS.update(0);
        if (Ovajeh.visitScene() === false) {
            await Ovajeh.ƒS.Character.show(Ovajeh.characters.protagonist, Ovajeh.characters.protagonist.pose.normal, Ovajeh.ƒS.positionPercent(20, 100));
            await Ovajeh.ƒS.update(1);
            Ovajeh.showUI();
            await Ovajeh.protagonistCycle();
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.protagonist);
            await Ovajeh.ƒS.update(1);
            Ovajeh.closeUI();
        }
        else if (Ovajeh.won === false) {
            await Ovajeh.say("normal", 'Hat sich nichts geändert.');
        }
        else {
            await Ovajeh.say("shocked", 'Schnell, das Portal! Ich muss es sofort öffnen, es geht um jede Sekunde!');
        }
    }
    Ovajeh.Scene_Mirror_Room = Scene_Mirror_Room;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    // Scene Mirror Room
    async function Scene_Mirror_World() {
        Ovajeh.currentScene = "mirrorworld";
        console.log(`current scene: ${Ovajeh.currentScene}`);
        Ovajeh.ƒS.Sound.fade(Ovajeh.sound.backgroundTheme, 0, 1);
        Ovajeh.sfx("combat");
        Ovajeh.mapListeners();
        Ovajeh.closeUI();
        await Ovajeh.ƒS.Location.show(Ovajeh.location.intro.mirror_world);
        await Ovajeh.ƒS.update(0);
        if (Ovajeh.visitScene() === false) {
            await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.smile, Ovajeh.ƒS.positionPercent(50, 100));
            await Ovajeh.ƒS.update(2);
            await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, `${Ovajeh.save.protagonist.name}! Du hast es geschafft!`);
            await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, 'Sag mir eins...');
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
            await Ovajeh.ƒS.Character.show(Ovajeh.characters.michela, Ovajeh.characters.michela.pose.angry, Ovajeh.ƒS.positionPercent(50, 100));
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
            await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, 'Wirst du in der Lage sein das größte Übel zu besiegen? ...');
            await Ovajeh.ƒS.Speech.tell(`<span style="color: darkblue">Michela</span>`, 'Wirst du in der Lage sein... ADAM zu töten!?');
            await Ovajeh.ƒS.Character.hide(Ovajeh.characters.michela);
            await Ovajeh.ƒS.update(2);
            await Ovajeh.ƒS.Text.print("TO BE CONTINUED...");
        }
    }
    Ovajeh.Scene_Mirror_World = Scene_Mirror_World;
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    // Characters
    Ovajeh.hero = {
        name: "Hero",
        dialog: {
            intro: [{ mood: "", text: "" }],
            bibliothek: [{ mood: "", text: "" }],
            mirrorroom: [{ mood: "", text: "" }]
        }
    };
    Ovajeh.michela = {
        name: "Michela",
        dialog: {
        //intro: [{mood: "", animation: "", text: "", swap: ""}],
        //map1: [{mood: "", animation: "", text: "", swap: ""}],
        //map2: [{mood: "", animation: "", text: "", swap: ""}]
        }
    };
    /* Notizen
    */
    // Narration
    // await ƒS.Text.print("Hier kommt Narration"); 
    // Dialog
    Ovajeh.hero.dialog.intro = [
        { mood: "smile", text: "Hey du! Willkommen zu meiner Geschichte." },
        { mood: "happy", text: "Du siehst meinen Namen auf der linken Seite, dieser ändert sich mit jedem Playthrough." },
        { mood: "smile", text: "Nicht nur mein Name ist zufällig generiert, sondern viele andere Dinge auch!" },
        { mood: "normal", text: "Aber mal ehrlich, diese Visual Novel soll nicht wie alle anderen sein..." },
        { mood: "smile", text: "Deshalb wurde extrem viel Zeit in die Programmierung gesteckt." },
        { mood: "sad", text: "Leider gab es eine Deadline einzuhalten, also sind manche Dinge nicht ganz so wie erhofft." },
        { mood: "smile", text: "Spiel diese Visual Novel im maximierten Browser (ohne Console offen), damit die Bildkoordinaten passen." },
        { mood: "", text: "Damit du nicht ausversehen irgendwo zu früh drauf klickst, drücke den Dialog am Besten nur mit der Leertaste weg, oder klicke ganz am Bildrand links oder rechts" },
        { mood: "happy", text: "Das ist richtig, du klickst auf Details im Bild, um mehr zu erfahren!" },
        { mood: "smile", text: "Aber jetzt noch nicht, erst möchte ich dir erzählen, worum es geht." },
        { mood: "normal", text: "Eigentlich komme ich nicht von hier, ich wurde adoptiert als ich noch klein war." },
        { mood: "sad", text: "Meine Eltern starben in einem Auto-Unfall..." },
        { mood: "shocked", text: "Ich habe mir damals die Schuld gegeben, weil ich meine Eltern wegen einer Kleinigkeit aufgehalten habe..." },
        { mood: "sad", text: "Wären sie etwas früher losgefahren, hätte der Unfall vielleicht nie stattgefunden." },
        { mood: "normal", text: "Ich konnte einfach nicht aufhören, darüber nachzudenken... Bis Adam kam." },
        { mood: "smile", text: "Adam ist mein Adoptiv-Vater. Er hat mir gezeigt, wie ich wieder zu positiven Gedanken komme." },
        { mood: "normal", text: "Dazu musste ich endlich akzeptieren, dass ich nichts an der Vergangenheit ändern kann..." },
        { mood: "angry", text: "Die Schuld liegt nicht bei mir, sondern dem betrunkenen Mistkerl, der die rote Ampel überquert hat \
        und geradewegs in das Auto meiner Eltern gecrasht ist." },
        { mood: "sad", text: "Ich kann es trotzdem nicht fassen, dass sie einfach weg sind..." },
        { mood: "", text: "Meine Gedanken drehen sich gerade nurnoch um diesen Moment..." },
        { mood: "shocked", text: "Warum?! Oh meine Güte, ich bin ganz durcheinander..." },
        { mood: "sad", text: "Adam ist seit zwei Tagen spurlos verschwunden, mitsamt meiner Schwester Michela." },
        { mood: "", text: "Deshalb kommen ständig die Gedanken an meine Eltern wieder... Das Gefühl der Einsamkeit..." },
        { mood: "shocked", text: "Wie?!" },
        { mood: "normal", text: "Tut mir Leid, ich muss mich wieder sammeln, du hast Recht." },
        { mood: "smile", text: "Danke, dass du da bist! Wir sollten uns auf die jetzige Situation konzentrieren, genau." },
        { mood: "normal", text: "Also der Polizei habe ich bereits alles erzählt, naja eigentlich gar nichts..." },
        { mood: "", text: "Es gibt einfach keinen Grund, warum sie weg sein sollten. Keiner von ihnen hat eine Nachricht oder ähnliches hinterlassen." },
        { mood: "sad", text: "Einfach spurlos verschwunden, von einem Moment auf den anderen. Das Komische ist... All ihre Sachen sind noch hier." },
        { mood: "shocked", text: "Entführt? Niemals! Ich habe sie Sekunden vor ihrem Verschwinden noch im Haus gehört." },
        { mood: "normal", text: "Ich glaube, dass sie noch hier sind... also nicht 'hier' hier. Ja ich weiß... die Polizei hält mich auch für verrückt." },
        { mood: "angry", text: "Die glauben ernsthaft, ich hätte etwas damit zu tun! Die glauben, das Alles ist nur ein blöder Streich!" },
        { mood: "normal", text: "Keiner von denen kennt Adam und Michela so wie ich. Beide würden mich niemals so im Stich lassen." },
        { mood: "happy", text: "Du glaubst mir? Das ist lieb von dir!" },
        { mood: "smile", text: "Nur Glaube allein bringt uns hier nicht weiter. Wir sollten im Haus nach Hinweisen suchen!" },
        { mood: "happy", text: "Danke, dass du für mich da bist und mir Suchen hilfst! Am Besten fangen wir gleich hier sofort an." },
        { mood: "", text: "Klick einfach auf interessante Bereiche des Raumes und ich schaue sie mir mal genauer an." },
    ];
    Ovajeh.hero.dialog.bibliothek = [
        { mood: "smile", text: 'Irgendwie steigt jedes Mal ein Gefühl der Euphorie auf, wenn ich in die "Bibliothek" eintrete' },
        { mood: "happy", text: "Ich liebe den Duft der vielen Bücher, vermischt mit dem leicht verbrannten Geruch des Kaminholzes, der weiterhin in der Luft liegt." },
        { mood: "smile", text: "Dazu kommt pure Nostalgie, die Erinnerungen an kalte Wintertage, an denen ich mit Adam vor dem Kaminfeuer saß und Bücher las." },
        { mood: "happy", text: "Als Kind habe ich auch gerne auf dem wunderschönen Teppich gespielt, während Adam auf der Couch gemütlich lag und Zeitung gelesen hat." },
        { mood: "smile", text: "Die Bib war quasi unser liebster Aufenthaltsraum... und das bedeutet viel in so einem riesigen Haus." },
        { mood: "sad", text: "Michela war da jedoch anderer Meinung... Sie fand Bücher und Kaminfeuer immer langweilig." },
        { mood: "normal", text: "Meistens war sie in ihrem Zimmer, oder außer Haus. Sie mochte das Haus anscheinend nicht so gerne..." },
        { mood: "shocked", text: "Einmal meinte sie sogar, dass es unheimlich ist! Unheimlich?!" },
        { mood: "normal", text: "Ich glaube sie vermisste einfach ihre alte Heimat und kam mit der Umstellung auf so ein Luxus nicht ganz klar." },
        { mood: "sad", text: "Ich konnte sie aber gut verstehen... Sie wollte einfach nur ihre Eltern wiederhaben, statt unnötigen Luxus." },
        { mood: "", text: "Ich wollte auch nichts lieber als meine Eltern zurück..." },
        { mood: "normal", text: "Adam machte mir aber früh klar, dass ich weder Schuld an dem Tod meiner Eltern hatte, noch meine Zukunft mit ständiger Trauer verbringen sollte." },
        { mood: "angry", text: "Michela fand das gar nicht gut, dass er ihr vorschrieb, ob und wann sie Trauern durfte." },
        { mood: "normal", text: "Das war nicht fair von ihr, Adam hatte nur gute Intentionen." },
        { mood: "smile", text: "Zumindest konnte er zu ihr durchdringen, als sie etwas älter wurde." },
        { mood: "shocked", text: "Oh man, wie lange ich wieder über sowas nachdenke, während Beide in Gefahr sein könnten." },
        { mood: "normal", text: "Okay, reiß dich zusammen! Vielleicht finde ich doch etwas und alles wird wieder wie früher!" },
        { mood: "", text: "Ich sollte mir alles nochmal gründlich anschauen." },
    ];
    Ovajeh.hero.dialog.mirrorroom = [
        { mood: "smile", text: "Bin ich erleichtert! Ich dachte schon ich würde etwas Schlimmes vorfinden." },
        { mood: "normal", text: "Es sieht genauso aus, wie ich es zuletzt gesehen habe..." },
        { mood: "normal", text: "..." },
        { mood: "shocked", text: "Okay ich nehm das zurück! Das Fenster ist ganz offen, was eben noch nicht der Fall war." },
        { mood: "", text: "Ich war mir ziemlich sicher, dass das Fenster verschlossen war." },
        { mood: "", text: "Sogar die Polizei meinte, dass es keine Anzeichen auf einen Einbruch gab." },
        { mood: "normal", text: "Ich frage mich wie lange das Fenster schon auf war. Ansonsten hätte ich ja gleich von draußen ins Zimmer gelangen können." },
        { mood: "shocked", text: "Es kann aber erst kurz bevor ich die Tür geöffnet habe, aufgegangen sein." },
        { mood: "normal", text: "Normalerweise hörte man immer ein kleines Windpfeifen, sobald Michela ihr Fenster aufgemacht hatte zum Lüften." },
        { mood: "normal", text: "Ich sollte direkt mal nachschauen, ob Michela oder Adam vielleicht wieder eine versteckte Botschaft hinterlassen haben." },
    ];
    //michela.dialog.intro = []
    // Raw
    // Options
})(Ovajeh || (Ovajeh = {}));
var Ovajeh;
(function (Ovajeh) {
    class Weapon {
        level;
        name;
        damage;
        rolls;
        rollsArray;
        miss;
        crit;
        weaponType;
        winBonus;
        drawBonus;
        constructor(_level, _name, _damage, _rolls, _miss, _crit) {
            this.level = _level;
            this.name = _name;
            this.damage = _damage;
            this.rolls = _rolls;
            this.rollsArray = [];
            this.miss = _miss;
            this.crit = _crit;
            this.weaponType = this.type();
            this.winBonus = this.random_winBonus();
            this.drawBonus = this.random_drawBonus();
        }
        random_winBonus() {
            return (Math.floor(Math.random() * (10 - 2 + 1) + 2) / 10);
        }
        random_drawBonus() {
            return (Math.floor(Math.random() * (5 - 1 + 1) + 1) / 10);
        }
        type() {
            let wT = ["Love", "Hate", "Dream", "Destruction"];
            let r = Math.floor(Math.random() * wT.length);
            return wT[r];
        }
        attack() {
            this.rollsArray.splice(0, this.rollsArray.length);
            for (let i = 0; i <= this.rolls; i++) {
                let r = Math.floor(Math.random() * (((Math.E * this.level) * this.damage) + 1)) + 1;
                this.rollsArray.push(r);
                //console.log(r);
            }
            ;
            let maxDmg = Math.max.apply(null, this.rollsArray);
            let minDmg = Math.min.apply(null, this.rollsArray);
            console.log(`minimal damage: ${minDmg} / maximal damage: ${maxDmg}`);
            let hit = Math.random();
            if (hit < this.miss) {
                console.log("missed weapon damage");
                return 0;
            }
            else if (hit > this.miss) {
                let dmg = Math.random();
                if (dmg < 0.3) {
                    console.log(`minimal weapon damage -> ${minDmg}`);
                    return minDmg;
                }
                else if (dmg > 0.7) {
                    console.log(`maximal weapon damage -> ${maxDmg}`);
                    return maxDmg;
                }
                else {
                    console.log(`critical weapon damage -> ${Math.ceil(maxDmg * this.crit)}`);
                    return Math.ceil(maxDmg * this.crit);
                }
            }
        }
    }
    Ovajeh.Weapon = Weapon;
})(Ovajeh || (Ovajeh = {}));
//# sourceMappingURL=Ovajeh%20Istomeph.js.map