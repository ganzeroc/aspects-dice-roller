import { ASPECTMODCONF } from './config.js';
import { AspectMacros } from './lib/libmacros.js';
import { BaseDie, E1Die } from './die.js';
import { AspectApi } from './api.js';

const moduleId = 'aspects-dice-roller';


Hooks.once('init', async function() {    

    game.settings.register(moduleId, 'moduleVersion', {
        name: 'Module Version',
        scope: 'world',
        config: false,
        type: String,
        default: '0',
    });
    
    // Dice
    CONFIG.Dice.terms[BaseDie.DENOMINATION] = BaseDie;
    CONFIG.Dice.terms[E1Die.DENOMINATION] = E1Die;

    game.aspectmod = {
        config: ASPECTMODCONF,
        macros: new AspectMacros(),
        api: new AspectApi()
    };

});


Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addColorset(BaseDie.diceSoNiceColorset);
    dice3d.addDicePreset(BaseDie.diceSoNiceDicePreset);
    dice3d.addColorset(E1Die.diceSoNiceColorset);
    dice3d.addDicePreset(E1Die.diceSoNiceDicePreset);

});