
export class AspectMacros
{
    async RollAspects() {
        //
        const api = game.aspectmod.api;
        let dialog_content = `  
        <div class="form-group aspectmod">
        <div class="dialogHeader">
                    <div class="dialogEntry"><label for="base" class="dialogEntry">Location dice</label></div><div><input type="text" name="Base" value="1" class="inspirationInput"></div>
        </div>
        <div class="dialogHeader">
                    <div class="dialogEntry"><label for="E1" class="dialogEntry">Event dice</label></div><div><input type="text" name="E1" value="1" class="inspirationInput"></div>
        </div>
        <br/>
        </div>`;
        let x = new Dialog({
            title: api.localize('DBase_title'),
            content : dialog_content,
            buttons : 
            {
                Ok :{ label : api.localize('OK'), callback : async (html) => {             
                                                let basedice = parseInt(html.find("input[name='Base'")[0].value);
                                                let e1dice = parseInt(html.find("input[name='E1'")[0].value);
                                                let rollString = [];
                                                if(!isNaN(basedice) || basedice !== 0) {                                                    
                                                    rollString.push(`${basedice}dB`);
                                                }
                                                if(!isNaN(e1dice) || e1dice !== 0) {                                                    
                                                    rollString.push(`${e1dice}dE`);
                                                }
                                                
                                                console.log("RollString "+ rollString.join('+'));
                                                let rolls = await new Roll(rollString.join('+')).evaluate({async:true});
                                                let rollData = {
                                                    formula: rolls.formula,
                                                    rolls: this.assembleInspirationResults(rolls)
                                                }
                                                const template = await renderTemplate(`${game.aspectmod.config.templatePath}/aspectroll.hbs`, rollData);

                                                // Once we go to non-API version of DsN, then set this in chatData: type: CONST.CHAT_MESSAGE_TYPES.ROLL,
                                                let chatData = {
                                                    user: game.user.id,
                                                    speaker: ChatMessage.getSpeaker({ 
                                                    alias: api.localize('DBase_results')
                                                    }),
                                                    type: CONST.CHAT_MESSAGE_TYPES.ROLL,
                                                    roll: JSON.stringify(rolls),
                                                    rollMode: game.settings.get('core', 'rollMode'),
                                                    content: template,
                                                };
                                                if(game.modules.get("dice-so-nice")?.active ) {
                                                    const dsnsettings = game.user.getFlag("dice-so-nice", "settings");

                                                    if(!dsnsettings || dsnsettings.hideAfterRoll) {
                                                        if(!dsnsettings) {
                                                            await game.user.setFlag('dice-so-nice', 'settings', game.dice3d.constructor.CONFIG() );
                                                        }
                                                        const timeout = parseInt(game.user.getFlag("dice-so-nice", "settings").timeBeforeHide);
                                                        if(isNaN(timeout) ) {
                                                            return;
                                                        }
                                                        // Not persisted - just change in-memory value for the time it takes to make the
                                                        // roll and the time it takes before dsn tries to clear the dices from the display
                                                        game.user.getFlag("dice-so-nice", "settings").hideAfterRoll = false;
                                                        setTimeout(() => { 
                                                                game.user.getFlag("dice-so-nice", "settings").hideAfterRoll = true;
                                                            },
                                                            timeout+500
                                                        );
                                                    }
                                                }
                                                ChatMessage.create(chatData);
                                            }
                },
                Cancel : {label : api.localize('CANCEL')}
            }  
        });
        x.options.width = 200;
        x.position.width = 300;
        
        x.render(true);
    }

    testroll(){
        rollString.push(`${3}dB`)
    }

    assembleInspirationResults(rolls) {
        let assembledResults = [];
        for(const dice of rolls.dice) {
            for(const result of dice.results) {
                result.css = dice.getResultCSS(result).join(' ');
                result.img = dice.getResultLabel(result);
                assembledResults.push(result);
            }
        }
        return assembledResults;
    }
}