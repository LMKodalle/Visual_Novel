namespace Ovajeh {
    export class Enemy extends Character {

        constructor(_name: string, _level: number, _health: number, _experience: number, _type: string, _defense: number, _damage: number, _weapon: Weapon) {
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
        };

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
            } else {
                return attackMoves.quick_slash;
            }
        };

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

            if (this.type == save.protagonist.type) {
                console.log("equilibrium");
                return equilibrium;
            } else {
                switch (this.type) {
                    case "Love":
                        switch (save.protagonist.type) {
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
                        switch (save.protagonist.type) {
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
                        switch (save.protagonist.type) {
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
                        switch (save.protagonist.type) {
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
            await ƒS.Speech.tell('<span style="color: darkred">Zahnfee</span>', 'Ich lag falsch, du hast dir die Spiegelessenz verdient!');
            await ƒS.Character.animate(characters.antagonist, characters.antagonist.pose.angry, canvasBottomLeave());
            await ƒS.update(0);
            won = true;
            save.protagonist.experience += this.experience;
            checkExperience();
            this.drop();
            ƒS.Inventory.add(items.Spiegelessenz)
            save.protagonist.experience += 20;
            checkExperience()
            await ƒS.Text.print("Spiegelessenz dem Inventar hinzugefügt <hr class='golden'></hr> <br><p>+ <span style='color: green'>20</span> XP</p>")
            ƒS.Sound.fade(sound.combatTheme, 0, 1)
            ƒS.insert(Scene_Bibliothek);
            await ƒS.Character.hide(characters.protagonist);
            await ƒS.update(0);
            await say("happy", 'Ich habe es geschafft! Die Essenz muss ich sofort zu Michelas Spiegel bringen!')
        }

        drop() {
            let r = Math.floor(Math.random() * items.Combat.length);
            let drop = items.Combat[r];
            console.log(`${this.name} drops ${drop.name}`);
            ƒS.Inventory.add(drop);
        };
    }
}