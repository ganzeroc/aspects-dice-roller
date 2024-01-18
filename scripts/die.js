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
            foreground: ['#ffffff'],
            background: ['#ffffff'],
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
            colorset:"BaseDie"
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
            foreground: ['#519e4b'],
            background: ['#519e4b'],
            outline: 'black',
            texture: 'none',
            edge: '#519e4b',
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
            colorset:"KDie"
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
            foreground: ['#5b78d9'],
            background: ['#5b78d9'],
            outline: 'black',
            texture: 'none',
            edge: '#5b78d9',
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
            colorset:"RDie"
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
            foreground: ['#97b4eb'],
            background: ['#97b4eb'],
            outline: 'black',
            texture: 'none',
            edge: '#97b4eb',
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
            colorset:"EDie"
        }
    
    }

}

export class ODie extends AspectDie {

    /** @override */
    static DENOMINATION = "o";

    /** @override */    
    get denomination() { return ODie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'ODie',
            description: 'ODie',
            category: 'Aspect',
            foreground: ['#fff399'],
            background: ['#fff399'],
            outline: 'black',
            texture: 'none',
            edge: '#fff399',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${ODie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ODie.DENOMINATION}12.webp`
            ],
            colorset:"ODie"
        }
    
    }

}

export class PDie extends AspectDie {

    /** @override */
    static DENOMINATION = "p";

    /** @override */    
    get denomination() { return PDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'PDie',
            description: 'PDie',
            category: 'Aspect',
            foreground: ['#f4e65f'],
            background: ['#f4e65f'],
            outline: 'black',
            texture: 'none',
            edge: '#f4e65f',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${PDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${PDie.DENOMINATION}12.webp`
            ],
            colorset:"PDie"
        }
    
    }

}

export class UDie extends AspectDie {

    /** @override */
    static DENOMINATION = "u";

    /** @override */    
    get denomination() { return UDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'UDie',
            description: 'UDie',
            category: 'Aspect',
            foreground: ['#ffbb5f'],
            background: ['#ffbb5f'],
            outline: 'black',
            texture: 'none',
            edge: '#ffbb5f',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${UDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${UDie.DENOMINATION}12.webp`
            ],
            colorset:"UDie"
        }
    
    }

}

export class ADie extends AspectDie {

    /** @override */
    static DENOMINATION = "a";

    /** @override */    
    get denomination() { return ADie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'ADie',
            description: 'ADie',
            category: 'Aspect',
            foreground: ['#d36969'],
            background: ['#d36969'],
            outline: 'black',
            texture: 'none',
            edge: '#d36969',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${ADie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ADie.DENOMINATION}12.webp`
            ],
            colorset:"ADie"
        }
    
    }

}

export class ZDie extends AspectDie {

    /** @override */
    static DENOMINATION = "z";

    /** @override */    
    get denomination() { return ZDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'ZDie',
            description: 'ZDie',
            category: 'Aspect',
            foreground: ['#b84141'],
            background: ['#b84141'],
            outline: 'black',
            texture: 'none',
            edge: '#b84141',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${ZDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${ZDie.DENOMINATION}12.webp`
            ],
            colorset:"ZDie"
        }
    
    }

}

export class SDie extends AspectDie {

    /** @override */
    static DENOMINATION = "s";

    /** @override */    
    get denomination() { return SDie.DENOMINATION; }

    static get diceSoNiceColorset() {
        return {
            name: 'SDie',
            description: 'SDie',
            category: 'Aspect',
            foreground: ['#9547d2'],
            background: ['#9547d2'],
            outline: 'black',
            texture: 'none',
            edge: '#9547d2',
        };
    }

    static get diceSoNiceDicePreset() { 
        return {
            type:`d${SDie.DENOMINATION}`,
            labels:[
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}1.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}2.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}3.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}4.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}5.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}6.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}7.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}8.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}9.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}10.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}11.webp`, 
                `${game.aspectmod.config.assetPath}/dice/FACES_${SDie.DENOMINATION}12.webp`
            ],
            colorset:"SDie"
        }
    
    }

}


