namespace Ovajeh {
    export class Hero extends Character {

        constructor(_name: string, _level: number, _health: number, _experience: number, _type: string, _defense: number, _damage: number, _weapon: Weapon) {
            super();
            this.name = _name;
            this.level = _level;
            this.health = _health;
            this.experience = _experience;
            this.type = _type;
            this.defense = _defense;
            this.damage = _damage

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

            let hero_randomGrunt = Math.floor(Math.random() * sound.protagonist.grunting.length);
            // Player chooses Attack
            let attackAction = await ƒS.Menu.getInput(attackMoves);
            // console.log(`player attacks with ${attackAction}`);
            ƒS.Sound.play(sound.protagonist.grunting[hero_randomGrunt], 1, false);
            if (attackAction == "Ausweich-Angriff") {
                await dashAttackAnimation();
            } else {
                await attackAnimation();
            }

            await ƒS.Speech.tell('Kampfprotokoll', `${this.name} benutzt ${attackAction}`);

            // Enemy reacts with Attack
            let enemyAttack = enemy.attack();
            // console.log(`enemy attacks with ${enemyAttack}`);
            let enemy_randomGrunt = Math.floor(Math.random() * sound.enemy.grunting.length);
            ƒS.Sound.play(sound.enemy.grunting[enemy_randomGrunt], 1, false);
            await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} benutzt ${enemyAttack}`);

            // Multiplier for Damage
            console.log(`checking ${this.type} vs ${enemy.type}`);
            let hero_typeMultiplier = this.checkType();
            let enemy_typeMultiplier = enemy.checkType();
            this.winRatio += this.weapon.winBonus;
            this.drawRatio += this.weapon.drawBonus;
            //console.log(this.winRatio, this.drawRatio);

            // Attack Damage gets calculated
            let hero_randomDmg = Math.floor(Math.random() * sound.protagonist.damage.length);
            let enemy_randomDmg = Math.floor(Math.random() * sound.enemy.damage.length);
            let hero_firstDmg;
            let enemy_firstDmg;
            let extraDmg = { hero: 0, enemy: 0 };
            let attackDmg = {
                hero: {
                    drawDmg: Math.floor(Math.random() * (this.damage * this.drawRatio + 1) + this.damage),
                    winDmg: Math.floor(Math.random() * (this.damage * this.winRatio + 1) + this.damage)
                },
                enemy: {
                    drawDmg: Math.floor(Math.random() * (enemy.damage * enemy.drawRatio + 1) + enemy.damage),
                    winDmg: Math.floor(Math.random() * (enemy.damage * enemy.drawRatio + 1) + enemy.damage)
                }
            }

            this.winRatio -= this.weapon.winBonus;
            this.drawRatio -= this.weapon.drawBonus;

            if (attackAction == enemyAttack) {
                console.log(`${attackAction} vs ${enemyAttack} = draw`);
                extraDmg.hero = attackDmg.hero.drawDmg * hero_typeMultiplier;
                hero_firstDmg = extraDmg.hero;
                extraDmg.enemy = attackDmg.enemy.drawDmg * enemy_typeMultiplier;
                enemy_firstDmg = extraDmg.enemy;
                console.log(`${this.name} deals ${attackDmg.hero.drawDmg} * ${hero_typeMultiplier} = ${Math.trunc(hero_firstDmg)}`, `${enemy.name} deals ${attackDmg.enemy.drawDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                await ƒS.Speech.tell('Kampfprotokoll', `${this.name} und ${enemy.name} schlagen gleichzeitig zu`);
                ƒS.Sound.play(sound.enemy.damage[enemy_randomDmg], 1, false);
                await hurtAnimation();
                await ƒS.Speech.tell('Kampfprotokoll', `${this.name} macht ${input_1()} ${Math.trunc(hero_firstDmg)} Schaden an ${enemy.name}`);
                ƒS.Sound.play(sound.protagonist.damage[hero_randomDmg], 1, false);
                await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} macht ${Math.trunc(enemy_firstDmg)} Schaden an ${this.name}`);
            } else {
                switch (attackAction) {
                    case attackMoves.mighty_blow:
                        if (enemyAttack == attackMoves.leap_aside) {
                            console.log(`${attackAction} vs ${enemyAttack} = win + extra 50% damage`);
                            extraDmg.hero = (attackDmg.hero.winDmg * 1.5) * hero_typeMultiplier;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = 0;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals ${attackDmg.hero.winDmg} * ${hero_typeMultiplier} = ${Math.trunc(hero_firstDmg)}`, `${enemy.name} deals = ${enemy_firstDmg}`);
                            ƒS.Sound.play(sound.enemy.damage[enemy_randomDmg], 1, false);

                            await ƒS.Speech.tell('Kampfprotokoll', `${this.name} schlägt ${enemy.name} und macht ${input_1()} ${Math.trunc(hero_firstDmg)} Schaden`);
                        } else {
                            console.log(`${attackAction} vs ${enemyAttack} = lose - extra 30% damage`);
                            extraDmg.hero = 0;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = (attackDmg.enemy.winDmg * 1.3) * enemy_typeMultiplier;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals = ${hero_firstDmg}`, `${enemy.name} deals ${attackDmg.enemy.winDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                            ƒS.Sound.play(sound.protagonist.damage[hero_randomDmg], 1, false);
                            await hurtAnimation();
                            await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} schlägt ${this.name} und macht ${Math.trunc(enemy_firstDmg)} Schaden`);
                        }
                        break;
                    case attackMoves.leap_aside:
                        if (enemyAttack == attackMoves.quick_slash) {
                            console.log(`${attackAction} vs ${enemyAttack} = win`);
                            extraDmg.hero = (attackDmg.hero.winDmg * hero_typeMultiplier);
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = 0;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals ${attackDmg.hero.winDmg} * ${hero_typeMultiplier} = ${Math.trunc(hero_firstDmg)}`, `${enemy.name} deals = ${enemy_firstDmg}`);
                            ƒS.Sound.play(sound.enemy.damage[enemy_randomDmg], 1, false);

                            await ƒS.Speech.tell('Kampfprotokoll', `${this.name} schlägt ${enemy.name} und macht ${input_1()} ${Math.trunc(hero_firstDmg)} Schaden`);
                        } else {
                            console.log(`${attackAction} vs ${enemyAttack} = lose`);
                            extraDmg.hero = 0;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = (attackDmg.enemy.winDmg * enemy_typeMultiplier);
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals = ${hero_firstDmg}`, `${enemy.name} deals ${attackDmg.enemy.winDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                            ƒS.Sound.play(sound.protagonist.damage[hero_randomDmg], 1, false);
                            await hurtAnimation();
                            await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} schlägt ${this.name} und macht ${Math.trunc(enemy_firstDmg)} Schaden`);
                        }
                        break;
                    case attackMoves.quick_slash:
                        if (enemyAttack == attackMoves.mighty_blow) {
                            console.log(`${attackAction} vs ${enemyAttack} = win`);
                            extraDmg.hero = (attackDmg.hero.winDmg * hero_typeMultiplier);
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = 0;
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals ${attackDmg.hero.winDmg} * ${hero_typeMultiplier} = ${hero_firstDmg}`, `${enemy.name} deals = ${Math.trunc(hero_firstDmg)}`);
                            ƒS.Sound.play(sound.enemy.damage[enemy_randomDmg], 1, false);
                            await hurtAnimation();
                            await ƒS.Speech.tell('Kampfprotokoll', `${this.name} schlägt ${enemy.name} und macht ${input_1()} ${Math.trunc(hero_firstDmg)} Schaden`);
                        } else {
                            console.log(`${attackAction} vs ${enemyAttack} = lose`);
                            extraDmg.hero = 0;
                            hero_firstDmg = extraDmg.hero;
                            extraDmg.enemy = (attackDmg.enemy.winDmg * enemy_typeMultiplier);
                            enemy_firstDmg = extraDmg.enemy;
                            console.log(`${this.name} deals = ${hero_firstDmg}`, `${enemy.name} deals ${attackDmg.enemy.winDmg} * ${enemy_typeMultiplier} = ${Math.trunc(enemy_firstDmg)}`);
                            ƒS.Sound.play(sound.protagonist.damage[hero_randomDmg], 1, false);
                            await hurtAnimation();
                            await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} schlägt ${this.name} und macht ${Math.trunc(enemy_firstDmg)} Schaden`);
                        }
                        break;
                }
            }

            // Weapon Damage
            //console.log(`${this.weapon.name} vs ${enemy.weapon.name}`);
            let hero_randomWeapDmg = Math.floor(Math.random() * sound.protagonist.damage.length);
            let enemy_randomWeapDmg = Math.floor(Math.random() * sound.enemy.damage.length);

            let hero_weaponDmg;
            let enemy_weaponDmg;
            if (hero_firstDmg > 0 && enemy_firstDmg > 0) {
                await ƒS.Speech.tell('Kampfprotokoll', `Bonus Waffenschaden für Beide`);
                hero_weaponDmg = this.weapon.attack();
                enemy_weaponDmg = enemy.weapon.attack();
            } else if (hero_firstDmg > 0) {
                await ƒS.Speech.tell('Kampfprotokoll', `Bonus Waffenschaden für ${this.name}`);
                hero_weaponDmg = this.weapon.attack();
            } else {
                await ƒS.Speech.tell('Kampfprotokoll', `Bonus Waffenschaden für ${enemy.name}`);
                enemy_weaponDmg = enemy.weapon.attack();
            }

            let hero_fullDmg = Math.floor(hero_firstDmg + hero_weaponDmg);
            let enemy_fullDmg = Math.floor(enemy_firstDmg + enemy_weaponDmg);
            //console.log([`${this.name} strikes ${hero_firstDmg} + ${hero_weaponDmg}`, `${enemy.name} strikes ${enemy_firstDmg} + ${enemy_weaponDmg}`])

            // Full Damage substracting from Health
            if (hero_fullDmg > 0) {
                enemy.defense -= hero_fullDmg;
                let enemy_shieldbreak = enemy.defense;

                if (enemy.defense > 0) {
                    ƒS.Sound.play(sound.enemy.damage[enemy_randomWeapDmg], 1, false);
                    await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} nimmt extra ${hero_weaponDmg} Waffenschaden für insgesamt ${hero_fullDmg} Schaden`);
                    console.log(`${enemy.name} shield reduced to ${enemy.defense}`);
                    enemy_shieldbar(Math.abs(hero_fullDmg));
                }
                if (Math.sign(enemy_shieldbreak) === -1) {
                    (document.getElementById("enemyshield") as HTMLMeterElement).value = 0;
                    enemy.defense = 0;
                    enemy.health -= Math.abs(enemy_shieldbreak);
                    enemy_healthbar(Math.abs(enemy_shieldbreak));
                    ƒS.Sound.play(sound.enemy.damage[enemy_randomWeapDmg], 1, false);
                    await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} nimmt extra ${hero_weaponDmg} Waffenschaden für insgesamt ${hero_fullDmg} Schaden`);
                    console.log(`${enemy.name} shield broken - ${enemy.name} health reduced to ${enemy.health}`)
                }
            } else {
                //await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} nimmt keinen extra Waffenschaden`);
                console.log(`${enemy.name} took no damage`);
            }

            if (enemy_fullDmg > 0) {
                this.defense -= enemy_fullDmg;
                let hero_shieldbreak = this.defense;

                if (this.defense > 0) {
                    ƒS.Sound.play(sound.protagonist.damage[hero_randomWeapDmg], 1, false);
                    await hurtAnimation();
                    await ƒS.Speech.tell('Kampfprotokoll', `${this.name} nimmt extra ${enemy_weaponDmg} Waffenschaden für insgesamt ${enemy_fullDmg} Schaden`);
                    console.log(`${this.name} shield reduced to ${this.defense}`);
                    hero_shieldbar(Math.abs(enemy_fullDmg));
                }
                if (Math.sign(hero_shieldbreak) === -1) {
                    (document.getElementById("heroshield") as HTMLMeterElement).value = 0;
                    this.defense = 0;
                    this.health -= Math.abs(hero_shieldbreak);
                    hero_healthbar(Math.abs(hero_shieldbreak));
                    await hurtAnimation();
                    ƒS.Sound.play(sound.protagonist.damage[hero_randomWeapDmg], 1, false);
                    await ƒS.Speech.tell('Kampfprotokoll', `${this.name} nimmt extra ${enemy_weaponDmg} Waffenschaden für insgesamt ${enemy_fullDmg} Schaden`);
                    console.log(`${this.name} shield broken - ${this.name} health reduced to ${this.health}`)
                }
            } else {
                //await ƒS.Speech.tell('Kampfprotokoll', `${this.name} nimmt keinen extra Waffenschaden`);
                console.log(`${this.name} takes no damage`);
            }

            if (enemy.health > 0 && this.health > 0) {
                combat();
            } else if (enemy.health <= 0) {
                let enemy_randomDeath = Math.floor(Math.random() * sound.enemy.death.length);
                ƒS.Sound.play(sound.enemy.death[enemy_randomDeath], 1, false);
                await ƒS.Speech.tell('Kampfprotokoll', `${this.name} hat ${enemy.name} besiegt!`);
                console.log(`${this.name} killed ${enemy.name}`);
                save.protagonist = this;
                enemy.die();
            } else {
                let hero_randomDeath = Math.floor(Math.random() * sound.protagonist.death.length);
                ƒS.Sound.play(sound.protagonist.death[hero_randomDeath], 1, false);
                await ƒS.Speech.tell('Kampfprotokoll', `${enemy.name} hat ${this.name} besiegt!`);
                console.log(`${enemy.name} killed ${this.name}`);
                await this.die();
            }
        }

        checkType(): number {
            // Love - Hate = effective < > weak
            // Love - Dream = equilibrium
            // Love - Destruction = weak < > effective
            // Hate - Dream = effective < > weak
            // Hate - Destruction = equilibrium
            // Dream - Destruction = effective < > weak
            let equilibrium = this.equilibrium;
            let effective = this.effective;
            let weak = this.weak;

            if (this.type == enemy.type) {
                console.log("equilibrium");
                return equilibrium;
            } else {
                switch (this.type) {
                    case "Love":
                        switch (enemy.type) {
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
                        switch (enemy.type) {
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
                        switch (enemy.type) {
                            case "Love":
                                console.log(`${this.name} hit is equilibrium`);
                                return equilibrium;
                            case "Hate":
                                console.log(`${this.name} hit is weak`);
                                return weak;
                            case "Destruction":
                                console.log(`${this.name} hit is effective`);
                                return effective
                        }
                        break;
                    case "Destruction":
                        switch (enemy.type) {
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
            if (fleeChance > (enemy.level / 10)) {
                console.log(`${this.name} successfully flees from ${enemy.name}`);
                save.protagonist.health = 100
                save.protagonist.defense = 50
                await ƒS.Character.hide(characters.antagonist);
                await ƒS.update(2);
                await ƒS.Character.hide(characters.protagonist);
                await ƒS.update(1);
                ƒS.Sound.fade(sound.combatTheme, 0, 1)
                ƒS.insert(Scene_Bibliothek)
                ƒS.Inventory.add(items.Opferfackel)
                await say("angry", "Ich kann es nicht fassen, dass ich mich zurückgezogen habe! Ich brauche die Essenz unbedingt!")
            } else {
                let penaltyDmg = Math.floor(Math.random() * (enemy.level * 30));
                let hero_shieldbreak = (this.defense -= penaltyDmg);

                console.log(`${this.name} failed to flee from ${enemy.name} and takes ${penaltyDmg} damage`);
                console.log(`${this.name} shield reduced to ${this.defense}`)
                if (hero_shieldbreak <= 0) {
                    this.defense = 0;
                    this.health += hero_shieldbreak;
                    console.log(`${this.name} shield broken - ${this.name} health reduced to ${this.health}`);
                }
                combat();
            }
        }

        async die() {
            await ƒS.Character.hide(characters.antagonist);
            await ƒS.update(2);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(1);
            ƒS.Sound.fade(sound.combatTheme, 0, 1)
            save.protagonist.health = 100
            save.protagonist.defense = 50
            ƒS.insert(Scene_Bibliothek);
            await say("shocked", 'Ich lebe noch! Gott sei Dank, aber ich fühle mich leicht geschwächt.')
            ƒS.Inventory.add(items.Opferfackel);
        }
    }
}