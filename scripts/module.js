import { ASPECTMODCONF } from './config.js';
import { AspectMacros } from './lib/libmacros.js';
import { BaseDie, EDie, KDie, RDie } from './die.js';
import { AspectApi } from './api.js';

const moduleId = 'aspects-dice-roller';
const adventurePack = `${moduleId}.aspects-mods`;
const adventureName = "Required Dices for Aspect";

Hooks.once('init', async function() {    

    game.settings.register(moduleId, 'moduleVersion', {
        name: 'Module Version',
        scope: 'world',
        config: false,
        type: String,
        default: '0',
    });

    game.settings.register(moduleId, 'devMessageVersionNumber', {
        name: 'Development message version',
        scope: 'world',
        config: false,
        type: String,
        default: '0',
    });
    
    // Dice
    CONFIG.Dice.terms[BaseDie.DENOMINATION] = BaseDie;
    CONFIG.Dice.terms[EDie.DENOMINATION] = EDie;
    CONFIG.Dice.terms[KDie.DENOMINATION] = KDie;
    CONFIG.Dice.terms[RDie.DENOMINATION] = RDie;

    game.aspectmod = {
        config: ASPECTMODCONF,
        macros: new AspectMacros(),
        api: new AspectApi()
    };

});

Hooks.once('ready', async function() {  
        // ModuleImport();
        // sendDevMessage();
    // game.worldbuilding.info(`Module[${moduleId}] ready hook complete`);
});


export async function ModuleImport() {
    //
    // Imports all assets in the Adventure Collection.  
    // Will overwrite existing assets. 
    //
    const moduleVersion = game.modules.get(moduleId)?.version;
    // if(!foundry.utils.isNewerVersion(moduleVersion, game.settings.get(moduleId, 'moduleVersion') ) ) {
    //     game.worldbuilding.info(`moduleVersion[${moduleVersion}] is not newer than moduleVersion setting[${game.settings.get(moduleId, 'moduleVersion')}]`);
    //     return;
    // }

    const id = Hooks.on('importAdventure', (adventure, formData, created, updated) => {
        // console.log('adventure',adventure,'formData',formData,'created',created,'updated',updated)
        if (adventure.name === adventureName) {
            // game.worldbuilding.log(`Removing hook[${id}]`);
            Hooks.off('importAdventure', id);
            if(created || updated) {
                game.settings.set(moduleId, 'moduleVersion', moduleVersion);                
                ui.notifications.notify(`Import of ${adventureName} Complete`);
                return;
            } else {
                return ui.notifications.warn(`There was a problem with the Import of ${adventureName}`);
            }
        }
    });

    const pack = game.packs.get(adventurePack);
    const adventureId = pack.index.find(a => a.name === adventureName)?._id;    
    const adventure = await pack.getDocument(adventureId);
    await adventure.sheet.render(true);
};

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addColorset(BaseDie.diceSoNiceColorset);
    dice3d.addDicePreset(BaseDie.diceSoNiceDicePreset);    
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addColorset(EDie.diceSoNiceColorset);
    dice3d.addDicePreset(EDie.diceSoNiceDicePreset);
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addColorset(RDie.diceSoNiceColorset);
    dice3d.addDicePreset(RDie.diceSoNiceDicePreset);
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addColorset(KDie.diceSoNiceColorset);
    dice3d.addDicePreset(KDie.diceSoNiceDicePreset);
});
