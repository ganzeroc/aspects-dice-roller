export class AspectMacros
{
    async RollAspects(PJDice, StuffDice, NivO, NivA, NivE) {
        //dans la barre de raccourcis macro, script : game.aspectmod.macros.RollAspects(1db,1de,1dk,1dr)
        const api = game.aspectmod.api;

        let rollString = [];
        let DiceNumber = 0

        if(PJDice != null && PJDice !== 0) {                                                    
            rollString.push(PJDice);

            for (let char of PJDice) {
                const possibleNum = parseInt(char);
                if (!Number.isNaN(possibleNum)) {
                    DiceNumber+=possibleNum
                };
              }
        }

        if(StuffDice != undefined && StuffDice !== 0) {                                                    
            rollString.push(StuffDice);
        }
        
        let rolls = await new Roll(rollString.join('+')).evaluate({async:true});

        let DataSomme = {
            rolls: this.assembleResults(rolls),
        }

        let rollData = {}


        rollData = {
            formula: rolls.formula,
            rolls: this.assembleResultsDepAr(rolls, 0, DiceNumber),
            rollstuff : this.assembleResultsDepAr(rolls, DiceNumber, DataSomme.rolls.length), 
            myMessage: this.sommeAspects(DataSomme, NivO, NivA, NivE),
            MessageResonnance: this.isResonnance(DataSomme, DiceNumber, NivO, NivA, NivE)
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

    }


    // async RollAspectsARCH(PJDice, StuffDice, NivO, NivA, NivE) {
    //     //dans la barre de raccourcis macro, script : game.aspectmod.macros.RollAspects(1db,1de,1dk,1dr)
    //     const api = game.aspectmod.api;

    //     let rollString = [];
    //     let rollStringStuff = [];

    //     if(PJDice != null && PJDice !== 0) {                                                    
    //         rollString.push(PJDice);
    //     }
        
    //     let rolls = await new Roll(rollString.join('+')).evaluate({async:true});

    //     let DataSomme = {
    //         rolls: this.assembleResults(rolls),
    //     }

    //     let rollData = {}

    //     if(StuffDice != undefined && StuffDice !== 0) {                                                    
    //         rollStringStuff.push(StuffDice);

    //         let rollstuff = await new Roll(rollStringStuff.join('+')).evaluate({async:true});
    
    //         let DataSommeStuff = {
    //             rolls: this.assembleResults(rollstuff),
    //         }

    //         rollData = {
    //             formula: rolls.formula,
    //             rolls: this.assembleResults(rolls),
    //             rollstuff : this.assembleResults(rollstuff),
    //             myMessage: this.sommeAspectsARCH(DataSomme, DataSommeStuff, NivO, NivA, NivE),
    //             MessageResonnance: this.isResonnanceARCH(DataSomme, NivO, NivA, NivE)
    //         }
    
    //     }else{
    //         rollData = {
    //             formula: rolls.formula,
    //             rolls: this.assembleResults(rolls),
    //             myMessage: this.sommeAspectsARCH(DataSomme,"0", NivO, NivA, NivE),
    //             MessageResonnance: this.isResonnanceARCH(DataSomme, NivO, NivA, NivE)
    //         }
    //     }
        
    //     const template = await renderTemplate(`${game.aspectmod.config.templatePath}/aspectroll.hbs`, rollData);

    //     let chatData = {
    //         user: game.user.id,
    //         speaker: ChatMessage.getSpeaker({ 
    //         alias: api.localize('DBase_results')
    //         }),
    //         type: CONST.CHAT_MESSAGE_TYPES.ROLL,
    //         roll: JSON.stringify(rolls),
    //         rollMode: game.settings.get('core', 'rollMode'),
    //         content: template,
    //     };

    //     if(game.modules.get("dice-so-nice")?.active ) {
    //         const dsnsettings = game.user.getFlag("dice-so-nice", "settings");

    //         if(!dsnsettings || dsnsettings.hideAfterRoll) {
    //             if(!dsnsettings) {
    //                 await game.user.setFlag('dice-so-nice', 'settings', game.dice3d.constructor.CONFIG() );
    //             }
    //             const timeout = parseInt(game.user.getFlag("dice-so-nice", "settings").timeBeforeHide);
    //             if(isNaN(timeout) ) {
    //                 return;
    //             }
    //             // Not persisted - just change in-memory value for the time it takes to make the
    //             // roll and the time it takes before dsn tries to clear the dices from the display
    //             game.user.getFlag("dice-so-nice", "settings").hideAfterRoll = false;
    //             setTimeout(() => { 
    //                     game.user.getFlag("dice-so-nice", "settings").hideAfterRoll = true;
    //                 },
    //                 timeout+500
    //             );
    //         }
    //     }
    //     ChatMessage.create(chatData);

    // }


    
    // async RollAspects2() {
    //     //dans la barre de raccourcis macro, script : game.aspectmod.macros.RollAspects()

    //     const api = game.aspectmod.api;
    //     let dialog_content = `  
    //     <div class="form-group aspectmod">
    //     <div class="dialogHeader">
    //                 <div class="dialogEntry"><label for="base" class="dialogEntry">dés base</label></div><div><input type="text" name="Base" value="3" class="inspirationInput"></div>
    //     </div>
    //     <div class="dialogHeader">
    //                 <div class="dialogEntry"><label for="E1" class="dialogEntry">dés E1</label></div><div><input type="text" name="E1" value="3" class="inspirationInput"></div>
    //     </div>
    //     <br/>
    //     </div>`;
    //     let x = new Dialog({
    //         title: api.localize('DBase_title'),
    //         content : dialog_content,
    //         buttons : 
    //         {
    //             Ok :{ label : api.localize('OK'), callback : async (html) => {             
    //                                             let basedice = parseInt(html.find("input[name='Base'")[0].value);
    //                                             let e1dice = parseInt(html.find("input[name='E1'")[0].value);
    //                                             //AJOUTER LES AUTRES DES ICI

    //                                             let myRoll = "";

    //                                             if(!isNaN(basedice) || basedice !== 0) {                                                    
    //                                                 myRoll += "+" + basedice +"db";
    //                                             }
    //                                             if(!isNaN(e1dice) || e1dice !== 0) {                                                    
    //                                                 myRoll += "+" + e1dice +"de";
    //                                             }
                                                
    //                                             await this.RollAspects(myRoll);
    //                                         }
    //             },
    //             Cancel : {label : api.localize('CANCEL')}
    //         }  
    //     });
    //     x.options.width = 200;
    //     x.position.width = 300;
        
    //     x.render(true);
    // }


    assembleResults(rolls) {
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

    resultat(rolls) {
        let assembledResults = [];
        for(const dice of rolls.dice) {
            for(const result of dice.results) {
                console.log(result.result)
                assembledResults.push(result.result);
            }
        }
        return assembledResults;
    }

    assembleResultsDepAr(rolls, NbrDep, NbrFin) {
        let assembledResults = [];
        let myCount = 0
        
        for(const dice of rolls.dice) {
            for(const result of dice.results) {
                if (NbrDep<=myCount & myCount<NbrFin){
                    result.css = dice.getResultCSS(result).join(' ');
                    result.img = dice.getResultLabel(result);
                    assembledResults.push(result);
                }
                myCount +=1
            }
        }
        return assembledResults;
    }

    // sommeAspectsARCH(roll, rollstuff, myNivO, myNivA, myNivE) {
    //     let Obacle = 0
    //     let Forme_Animale = 0
    //     let Element = 0
    //     var Result =[]

    //     for(const dice of roll.rolls) {
    //         var count = (dice.tooltip.match(/O/g) || []).length;
    //         Obacle +=count
    //         var count = (dice.tooltip.match(/A/g) || []).length;
    //         Forme_Animale +=count
    //         var count = (dice.tooltip.match(/E/g) || []).length;
    //         Element +=count
    //     }
    //     if (rollstuff != undefined) {
    //         for(const dice of rollstuff.rolls) {
    //             var count = (dice.tooltip.match(/O/g) || []).length;
    //             Obacle +=count
    //             var count = (dice.tooltip.match(/A/g) || []).length;
    //             Forme_Animale +=count
    //             var count = (dice.tooltip.match(/E/g) || []).length;
    //             Element +=count
    //         }
    //     }

    //     if (myNivO != undefined & myNivO !=0){
    //         if (Obacle>=myNivO){
    //             Result.push("Test Obacle : C'est un succès ! Ecart test : +"+(Obacle - myNivO).toString())
    //         }else{
    //             Result.push("Test Obacle : C'est un échec ! Ecart test : "+(Obacle - myNivO).toString())
    //         }
    //     }
    //     if (myNivA != undefined & myNivA !=0){
    //         if (Forme_Animale>=myNivA){
    //             Result.push("Test Forme Animale : C'est un succès ! Ecart test : +"+(Forme_Animale - myNivA).toString())
    //         }else{
    //             Result.push("Test Forme Animale : C'est un échec ! Ecart test : "+(Forme_Animale - myNivA).toString())
    //         }
    //     }
    //     if (myNivE != undefined & myNivE !=0){
    //         if (Element>=myNivE){
    //             Result.push("Test Élément : C'est un succès ! Ecart test : +"+(Element - myNivE).toString())
    //         }else{
    //             Result.push("Test Élément : C'est un échec ! Ecart test : "+(Element - myNivE).toString())
    //         }
    //     }
    //     Result.push("Obacle : " + Obacle.toString())
    //     Result.push("Forme Animale : " + Forme_Animale.toString())
    //     Result.push("Element : " + Element.toString() )


    //     return Result;
    // }

    sommeAspects(roll, myNivO, myNivA, myNivE) {
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
        }

        if (myNivO != undefined & myNivO !=0){
            if (Obacle>=myNivO){
                Result.push("Test Obacle : C'est un succès ! Ecart test : +"+(Obacle - myNivO).toString())
            }else{
                Result.push("Test Obacle : C'est un échec ! Ecart test : "+(Obacle - myNivO).toString())
            }
        }
        if (myNivA != undefined & myNivA !=0){
            if (Forme_Animale>=myNivA){
                Result.push("Test Forme Animale : C'est un succès ! Ecart test : +"+(Forme_Animale - myNivA).toString())
            }else{
                Result.push("Test Forme Animale : C'est un échec ! Ecart test : "+(Forme_Animale - myNivA).toString())
            }
        }
        if (myNivE != undefined & myNivE !=0){
            if (Element>=myNivE){
                Result.push("Test Élément : C'est un succès ! Ecart test : +"+(Element - myNivE).toString())
            }else{
                Result.push("Test Élément : C'est un échec ! Ecart test : "+(Element - myNivE).toString())
            }
        }
        Result.push("Obacle : " + Obacle.toString())
        Result.push("Forme Animale : " + Forme_Animale.toString())
        Result.push("Element : " + Element.toString() )

        return Result;
    }

    // isResonnanceARCH(roll, myNivO, myNivA, myNivE) {
        // var Result =[]
        // let NbrResonnance = 3

        // console.log("lenght" + roll.rolls.length + roll.length<NbrResonnance)
        // if (roll.length<NbrResonnance){
        //     NbrResonnance=roll.length
        // }    

        // let Obacle = 0
        // let Forme_Animale = 0
        // let Element = 0

        // for(const dice of roll.rolls) {
        //         if ( myNivO!=undefined & myNivO>0 & (dice.tooltip.match(/O/g) || []).length > 0){
        //             Obacle+=1
        //         }
        //         else if ((dice.tooltip.match(/O/g) || []).length > 0){
        //             Obacle +=1
        //         }
        //         if ( myNivA!=undefined & myNivA>0 &(dice.tooltip.match(/A/g) || []).length >0){
        //             Forme_Animale+=1
        //         } else if ((dice.tooltip.match(/A/g) || []).length > 0){
        //             Forme_Animale +=1
        //         }
        //         if ( myNivE!=undefined & myNivE>0 &(dice.tooltip.match(/E/g) || []).length >0){
        //             Element+=1
        //         }  else if ((dice.tooltip.match(/E/g) || []).length > 0){
        //             Element +=1
        //         }
        // }

        // if (myNivO == undefined & myNivE == undefined & myNivA == undefined){
        //     if (Obacle >= NbrResonnance){
        //         Result.push("Il y a résonnance avec l'Obacle !! ")
        //     }
        //     if (Forme_Animale >= NbrResonnance){
        //         Result.push("Il y a résonnance avec la Forme Animale  !! ")
        //     }
        //     if (Element >= NbrResonnance){
        //         Result.push("Il y a résonnance avec l'Élément !! ")
        //     }
        // }else{
        //     if (Obacle >= NbrResonnance & myNivO != undefined & myNivO >0){
        //         Result.push("Il y a résonnance avec l'Obacle !! ")
        //     }
        //     if (Forme_Animale >= NbrResonnance & myNivA != undefined & myNivA >0){
        //         Result.push("Il y a résonnance avec la Forme Animale  !! ")
        //     }
        //     if (Element >= NbrResonnance & myNivE != undefined & myNivE >0){
        //         Result.push("Il y a résonnance avec l'Élément !! ")
        //     }
        // }

        // return Result;
    // }

    isResonnance(roll, Nbr, myNivO, myNivA, myNivE) {
        var Result =[]
        let NbrResonnance = 3

        if (Nbr<NbrResonnance){
            NbrResonnance=Nbr
        }    

        let Obacle = 0
        let Forme_Animale = 0
        let Element = 0
        let Count = 0

        for(const dice of roll.rolls) {
            if (Count<Nbr){
                if ( myNivO!=undefined & myNivO>0 & (dice.tooltip.match(/O/g) || []).length > 0){
                    Obacle+=1
                }
                else if ((dice.tooltip.match(/O/g) || []).length > 0){
                    Obacle +=1
                }
                if ( myNivA!=undefined & myNivA>0 &(dice.tooltip.match(/A/g) || []).length >0){
                    Forme_Animale+=1
                } else if ((dice.tooltip.match(/A/g) || []).length > 0){
                    Forme_Animale +=1
                }
                if ( myNivE!=undefined & myNivE>0 &(dice.tooltip.match(/E/g) || []).length >0){
                    Element+=1
                }  else if ((dice.tooltip.match(/E/g) || []).length > 0){
                    Element +=1
                }

                Count+=1
            }
        }

        if (myNivO == undefined & myNivE == undefined & myNivA == undefined){
            if (Obacle >= NbrResonnance){
                Result.push("Il y a résonnance avec l'Obacle !! ")
            }
            if (Forme_Animale >= NbrResonnance){
                Result.push("Il y a résonnance avec la Forme Animale  !! ")
            }
            if (Element >= NbrResonnance){
                Result.push("Il y a résonnance avec l'Élément !! ")
            }
        }else{
            if (Obacle >= NbrResonnance & myNivO != undefined & myNivO >0){
                Result.push("Il y a résonnance avec l'Obacle !! ")
            }
            if (Forme_Animale >= NbrResonnance & myNivA != undefined & myNivA >0){
                Result.push("Il y a résonnance avec la Forme Animale  !! ")
            }
            if (Element >= NbrResonnance & myNivE != undefined & myNivE >0){
                Result.push("Il y a résonnance avec l'Élément !! ")
            }
        }

        return Result;
    }

    async RollComp(PJDice, NbrAdvantage, compDices, CaracTest) {
        //dans la barre de raccourcis macro, script : game.aspectmod.macros.RollAspects(1db,1de,1dk,1dr)
        const api = game.aspectmod.api;

        let rollString = [];
        let DiceNumber = 0

        if(PJDice != null && PJDice !== 0) {                                                    
            rollString.push(PJDice);

            for (let char of PJDice) {
                const possibleNum = parseInt(char);
                if (!Number.isNaN(possibleNum)) {  // mettre valeur absolue
                    DiceNumber+=possibleNum
                };
            }
        }

        if(NbrAdvantage != undefined && NbrAdvantage !== 0) {                                                    
            rollString.push(NbrAdvantage + "dB");
        }


        if(compDices != undefined && compDices !== 0) {                                                    
            rollString.push(compDices);

            for (let char of compDices) {
                const possibleNum = parseInt(char);
                if (!Number.isNaN(possibleNum)) {
                    DiceNumber+=possibleNum
                };
            }
        }
        
        let rolls = await new Roll(rollString.join('+')).evaluate({async:true});

        let Arrayresults = this.resultat(rolls);

        if (NbrAdvantage>=0){
            Arrayresults.sort(function(a, b) {
                return a - b;
            });
        }else{
            Arrayresults.sort(function(a, b) {
                return b - a;
            });
        }

        let Nombresucces = 0
        let tempCount = 0

        for(const resu of Arrayresults) {
            if (tempCount< DiceNumber){
                if (resu<= CaracTest){
                    Nombresucces+=1
                }
                
            }
            tempCount+=1
        }

        let rollData = {}


        rollData = {
            formula: rolls.formula,
            Difficulte : "La difficulté du test est de : "+CaracTest,
            rolls: this.assembleResults(rolls),
            myMessage: "Il y a "+ Nombresucces + " succès !!",
        }
    
        
        const template = await renderTemplate(`${game.aspectmod.config.templatePath}/comproll.hbs`, rollData);

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

}