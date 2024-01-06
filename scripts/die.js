export class AspectDie extends Die {    
    constructor(termData) {
        termData.faces=12;
        super(termData);
    }

  /** @inheritdoc */
    roll({minimize=false, maximize=false}={}) {
        const roll = {result: undefined, active: true};
        roll.result = Math.ceil((CONFIG.Dice.randomUniform() * this.faces));
        roll.tooltip = game.i18n.localize(game.aspectmod.config.i18nPath+`daspect_tooltip_${this.denomination}${roll.result}`);
        this.results.push(roll);
        return roll;
    }

    /* -------------------------------------------- */
    inspirationFromModifier(modifier) {
        console.log(`MODIFIERS ${modifier}`);
    }

    /** @inheritdoc */
    getResultCSS(result) {
        return [
            "aspectdie",
            this.constructor.name.toLowerCase()
        ];
    }    

    get denomination() { return AspectDie.DENOMINATION; }

    /** @override */
    static DENOMINATION = "b";

    /** @inheritdoc */
    static MODIFIERS = {
    };

    // /** @override */
    // get total(){
    //     return this.results.length;
    // }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {      
        return `<img src="${game.aspectmod.config.assetPath}/dice/FACES_${this.denomination}${result.result}.webp" data-tooltip="${result.tooltip}"/>`;
    }

}

export class BaseDie extends AspectDie {

    /** @override */
    static DENOMINATION = "b";

    /** @override */    
    get denomination() { return BaseDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'BaseDice',
            description: 'BaseDice',
            category: 'Aspect',
            foreground: ['#ecdfdf'],
            background: ['#ecdfdf'],
            outline: 'black',
            texture: 'none',
            edge: '#438e44',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${BaseDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${BaseDie.DENOMINATION}12.webp`
            ],
            // bumpMaps:[
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d1b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d2b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d3b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d4b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d5b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d6b.webp`
            // ],
            colorset:"BaseDice",
            system:"Aspect"
        }
    
    }

}


export class E1Die extends AspectDie {

    /** @override */
    static DENOMINATION = "e";

    /** @override */    
    get denomination() { return E1Die.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'E1Dice',
            description: 'E1Dice',
            category: 'Aspect',
            foreground: ['7084b4#'],
            background: ['#7084b4'],
            outline: 'black',
            texture: 'none',
            edge: '#438e44',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${E1Die.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${E1Die.DENOMINATION}12.webp`
            ],
            // bumpMaps:[
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d1b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d2b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d3b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d4b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d5b.webp`, 
            //     `${game.bithirmod.config.assetPath}/inspirationdice/i${E1Die.DENOMINATION}d6b.webp`
            // ],
            colorset:"E1Dice",
            system:"Aspect"
        }
    
    }

}


