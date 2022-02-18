namespace Ovajeh {
    export class Weapon {

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

        constructor(_level: number, _name: string, _damage: number, _rolls: number, _miss: number, _crit: number) {
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

        random_winBonus(): number {
            return (Math.floor(Math.random() * (10 - 2 + 1) + 2) / 10);
        }

        random_drawBonus(): number {
            return (Math.floor(Math.random() * (5 - 1 + 1) + 1) / 10);
        }
        
        type() {
            let wT = ["Love", "Hate", "Dream", "Destruction"];
            let r = Math.floor(Math.random() * wT.length);
            return wT[r];
        }

        attack() {
            this.rollsArray.splice(0, this.rollsArray.length)
            for (let i: number = 0; i <= this.rolls; i++) {
                let r: number = Math.floor(Math.random() * (((Math.E * this.level) * this.damage) + 1)) + 1;
                this.rollsArray.push(r);
                //console.log(r);
            };
            let maxDmg = Math.max.apply(null, this.rollsArray);
            let minDmg = Math.min.apply(null, this.rollsArray);
            console.log(`minimal damage: ${minDmg} / maximal damage: ${maxDmg}`);
            let hit = Math.random();
            if (hit < this.miss) {
                console.log("missed weapon damage");
                return 0;
            } else if (hit > this.miss) {
                let dmg = Math.random();
                if (dmg < 0.3) {
                    console.log(`minimal weapon damage -> ${minDmg}`);
                    return minDmg;
                } else if (dmg > 0.7) {
                    console.log(`maximal weapon damage -> ${maxDmg}`);
                    return maxDmg;
                } else {
                    console.log(`critical weapon damage -> ${Math.ceil(maxDmg * this.crit)}`);
                    return Math.ceil(maxDmg * this.crit);
                }
            }
        }
    }
}