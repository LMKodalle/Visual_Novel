namespace Ovajeh {
    export class Character {
        // Stats
        name: string;
        level: number;
        health: number;
        experience: number;
        type: string;
        defense: number;
        damage: number;
        items: Object[];
        weapon: Weapon;
        
        // Combat
        winRatio: number = 1.5;
        drawRatio: number = 1;
        effective: number = 1.5;
        equilibrium: number = 1;
        weak: number = 0.5;

        defend() {
            //
        };
        flee() {
            console.log(`${this.name} flees`);
            //
        };
        die() {
            console.log(`${this.name} does not exist anymore`); 
            //
        };
    }
}
