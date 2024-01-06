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
            name: 'BaseDie',
            description: 'BaseDie',
            category: 'Aspect',
            foreground: ['#ecdfdf'],
            background: ['#ecdfdf'],
            outline: 'black',
            texture: 'none',
            edge: '#ffffff',
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
            colorset:"BaseDie",
            system:"Aspect"
        }
    
    }

}

export class KDie extends AspectDie {

    /** @override */
    static DENOMINATION = "k";

    /** @override */    
    get denomination() { return KDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'KDie',
            description: 'KDie',
            category: 'Aspect',
            foreground: ['#ecdfdf'],
            background: ['#ecdfdf'],
            outline: 'black',
            texture: 'none',
            edge: '#93c87b',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${KDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${KDie.DENOMINATION}12.webp`
            ],
            colorset:"KDie",
            system:"Aspect"
        }
    
    }

}

export class RDie extends AspectDie {

    /** @override */
    static DENOMINATION = "r";

    /** @override */    
    get denomination() { return RDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'RDie',
            description: 'RDie',
            category: 'Aspect',
            foreground: ['#ecdfdf'],
            background: ['#ecdfdf'],
            outline: 'black',
            texture: 'none',
            edge: '#98B6FE',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${RDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${RDie.DENOMINATION}12.webp`
            ],
            colorset:"RDie",
            system:"Aspect"
        }
    
    }

}


export class EDie extends AspectDie {

    /** @override */
    static DENOMINATION = "e";

    /** @override */    
    get denomination() { return EDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'EDie',
            description: 'EDie',
            category: 'Aspect',
            foreground: ['#ecdfdf'],
            background: ['#ecdfdf'],
            outline: 'black',
            texture: 'none',
            edge: '#c0cfeb',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${EDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${EDie.DENOMINATION}12.webp`
            ],
            colorset:"EDie",
            system:"Aspect"
        }
    
    }

}


