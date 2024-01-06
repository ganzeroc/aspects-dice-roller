
export class AspectMacros
{
    async RollAspects(PJDice, StuffDice) {
        //dans la barre de raccourcis macro, script : game.aspectmod.macros.RollAspects()
        const api = game.aspectmod.api;

        let rollString = [];
        let rollStringStuff = [];


        if(PJDice != null && PJDice !== 0) {                                                    
            rollString.push(PJDice);
        }
        console.log("RollString "+ rollString.join('+'));
        let rolls = await new Roll(rollString.join('+')).evaluate({async:true});

        let DataSomme = {
            rolls: this.assembleInspirationResults(rolls),
        }

        let rollData = {}

        if(StuffDice != undefined && StuffDice !== 0) {                                                    
            rollStringStuff.push(StuffDice);

            console.log("RollStringstuff "+ rollStringStuff.join('+'));
            let rollstuff = await new Roll(rollStringStuff.join('+')).evaluate({async:true});
    
            let DataSommeStuff = {
                rolls: this.assembleInspirationResults(rollstuff),
            }

            rollData = {
                formula: rolls.formula,
                rolls: this.assembleInspirationResults(rolls),
                rollstuff : this.assembleInspirationResults(rollstuff),
                myMessage: this.sommeAspects(DataSomme, DataSommeStuff),
                MessageResonnance: this.isResonnance(DataSomme)
            }
    
        }else{
            rollData = {
                formula: rolls.formula,
                rolls: this.assembleInspirationResults(rolls),
                myMessage: this.sommeAspects(DataSomme),
                MessageResonnance: this.isResonnance(DataSomme)
            }
        }
        




        const template = await renderTemplate(`${game.aspectmod.config.templatePath}/aspectroll.hbs`, rollData);

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
        // ChatMessage.create(chatData2);

    }

    async RollAspects2() {
        //dans la barre de raccourcis macro, script : game.aspectmod.macros.RollAspects()

        const api = game.aspectmod.api;
        let dialog_content = `  
        <div class="form-group aspectmod">
        <div class="dialogHeader">
                    <div class="dialogEntry"><label for="base" class="dialogEntry">dés base</label></div><div><input type="text" name="Base" value="3" class="inspirationInput"></div>
        </div>
        <div class="dialogHeader">
                    <div class="dialogEntry"><label for="E1" class="dialogEntry">dés E1</label></div><div><input type="text" name="E1" value="3" class="inspirationInput"></div>
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
                                                //AJOUTER LES AUTRES DES ICI

                                                let myRoll = "";

                                                if(!isNaN(basedice) || basedice !== 0) {                                                    
                                                    myRoll += "+" + basedice +"db";
                                                }
                                                if(!isNaN(e1dice) || e1dice !== 0) {                                                    
                                                    myRoll += "+" + e1dice +"de";
                                                }
                                                
                                                await this.RollAspects(myRoll);
                                            }
                },
                Cancel : {label : api.localize('CANCEL')}
            }  
        });
        x.options.width = 200;
        x.position.width = 300;
        
        x.render(true);
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

    sommeAspects(roll, rollstuff) {
        let Obacle = 0
        let Forme_Animale = 0
        let Element = 0
        var Result =[]

        for(const dice of roll.rolls) {
            var count = (dice.tooltip.match(/O/g) || []).length;
            Obacle +=count
            var count = (dice.tooltip.match(/A/g) || []).length;
            Forme_Animale +=count
            var count = (dice.tooltip.match(/E/g) || []).length;
            Element +=count
            console.log("tooltip "+ dice.tooltip)
            // console.log(Obacle)
        }
        if (rollstuff != undefined) {
            for(const dice of rollstuff.rolls) {
                var count = (dice.tooltip.match(/O/g) || []).length;
                Obacle +=count
                var count = (dice.tooltip.match(/A/g) || []).length;
                Forme_Animale +=count
                var count = (dice.tooltip.match(/E/g) || []).length;
                Element +=count
                console.log("tooltipstuff "+ dice.tooltip)
                // console.log(Obacle)
            }
        }

        Result.push("Obacle : " + Obacle.toString())
        Result.push("Forme Animale : " + Forme_Animale.toString())
        Result.push("Element : " + Element.toString() )
        console.log(Result)

        return Result;
    }

    isResonnance(roll) {
        let Obacle = "O"
        let Forme_Animale = "A"
        let Element = "E"
        var Result =[]

        for(const dice of roll.rolls) {
                if ( (dice.tooltip.match(/O/g) || []).length ==0){
                    Obacle = ""
                }
                if ( (dice.tooltip.match(/A/g) || []).length ==0){
                    Forme_Animale = ""
                }
                if ( (dice.tooltip.match(/E/g) || []).length ==0){
                    Element = ""
                }
                console.log("resonnance "+ Obacle + Forme_Animale+Element)
                // console.log(Obacle)
        }
        console.log("fin test resonnance "+ Obacle + Forme_Animale+Element)

        if (Obacle == "O"){
            Result.push("Il y a résonnance avec l'Obacle !! ")
            console.log("Il y a résonnance avec l'Obacle !!")
        }
        if (Forme_Animale == "A"){
            Result.push("Il y a résonnance avec la Forme Animale  !! ")
            console.log("Il y a résonnance avec la Forme Animale  !!")
        }
        if (Element == "E"){
            Result.push("Il y a résonnance avec l'Élément !! ")
            console.log("Il y a résonnance avec l'Élément !! ")
        }

        return Result;
    }
}