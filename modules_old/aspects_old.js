// import {DieAspectsB} from './die_Old.js';
// import {DieAspectsAA} from './die_Old.js';
// import {DieAspectsA} from './die_Old.js';
// import {DieAspectsEE} from './die_Old.js';
// import {DieAspectsE} from './die_Old.js';
// import {DieAspectsOO} from './die_Old.js';
// import {DieAspectsO} from './die_Old.js';
// import {DieAspectsAE} from './die_Old.js';
// import {DieAspectsAO} from './die_Old.js';
// import {DieAspectsOE} from './die_Old.js';

// Hooks.once("init", async function () {
//     CONFIG.Dice.terms["b"] = DieAspectsB;
// 	CONFIG.Dice.terms["a"] = DieAspectsA;
// 	CONFIG.Dice.terms["z"] = DieAspectsAA;
// 	CONFIG.Dice.terms["e"] = DieAspectsE;
// 	CONFIG.Dice.terms["r"] = DieAspectsEE;
// 	CONFIG.Dice.terms["o"] = DieAspectsO;
// 	CONFIG.Dice.terms["p"] = DieAspectsOO;
// 	CONFIG.Dice.terms["s"] = DieAspectsAE;
// 	CONFIG.Dice.terms["k"] = DieAspectsOE;
// 	CONFIG.Dice.terms["u"] = DieAspectsAO;
// });


// Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
//     let message = game.messages.get(chatMessageID);
//     if(message.isAuthor){
//         let FA = 0;
//         let Elt = 0;
//         let Obc = 0;
//         let AspRoll = false;
//         message.roll.dice.forEach(dice => {
//             if(dice instanceof DieAspectsB){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             FA++;
//                             break;
//                         case 6:
//                             Obc++;
//                             break;
//                         case 7:
//                             Elt++;
//                             break;
//                         case 8:
//                             FA++;
//                             break;
//                         case 9:
//                             Elt++;
//                             break;
//                         case 10:
//                             Obc++;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsA){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             FA++;
//                             break;
//                         case 6:
//                             Obc++;
//                             break;
//                         case 7:
//                             Elt++;
//                             break;
//                         case 8:
//                             FA++;
//                             break;
//                         case 9:
//                             FA++;
//                             break;
//                         case 10:
//                             FA+=2;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsAA){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc++;
//                             break;
//                         case 3:
//                             Elt++;
//                             break;
//                         case 4:
//                             FA+=3;
//                             break;
//                         case 5:
//                             FA++;
//                             break;
//                         case 6:
//                             FA++;
//                             break;
//                         case 7:
//                             FA++;
//                             break;
//                         case 8:
//                             FA++;
//                             break;
//                         case 9:
//                             FA+=2;
//                             break;
//                         case 10:
//                             FA+=3;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsE){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             FA++;
//                             break;
//                         case 6:
//                             Obc++;
//                             break;
//                         case 7:
//                             Elt++;
//                             break;
//                         case 8:
//                             Elt++;
//                             break;
//                         case 9:
//                             Elt++;
//                             break;
//                         case 10:
//                             Elt+=2;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsEE){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc++;
//                             break;
//                         case 3:
//                             Elt+=3;
//                             break;
//                         case 4:
//                             FA++;
//                             break;
//                         case 5:
//                             Elt++;
//                             break;
//                         case 6:
//                             Elt++;
//                             break;
//                         case 7:
//                             Elt++;
//                             break;
//                         case 8:
//                             Elt++;
//                             break;
//                         case 9:
//                             Elt+=2;
//                             break;
//                         case 10:
//                             Elt+=3;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsO){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             FA++;
//                             break;
//                         case 6:
//                             Obc++;
//                             break;
//                         case 7:
//                             Elt++;
//                             break;
//                         case 8:
//                             Obc++;
//                             break;
//                         case 9:
//                             Obc++;
//                             break;
//                         case 10:
//                             Obc+=2;
//                             break;
//                     }
//                 });
//             }
// 			if(dice instanceof DieAspectsOO){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             Obc++;
//                             break;
//                         case 6:
//                             Obc++;
//                             break;
//                         case 7:
//                             Obc++;
//                             break;
//                         case 8:
//                             Obc++;
//                             break;
//                         case 9:
//                             Obc+=2;
//                             break;
//                         case 10:
//                             Obc+=3;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsAO){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             FA++;
//                             break;
//                         case 6:
//                             Obc++;
//                             break;
//                         case 7:
//                             FA++;
//                             break;
//                         case 8:
//                             Obc++;
//                             break;
//                         case 9:
//                             FA+=2;
//                             break;
//                         case 10:
//                             Obc+=2;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsAE){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             Elt++;
//                             break;
//                         case 6:
//                             FA++;
//                             break;
//                         case 7:
//                             Elt++;
//                             break;
//                         case 8:
//                             FA++;
//                             break;
//                         case 9:
//                             FA+=2;
//                             break;
//                         case 10:
//                             Elt+=2;
//                             break;
//                     }
//                 });
//             }
//             if(dice instanceof DieAspectsOE){
//                 AspRoll = true;
//                 dice.results.forEach(res => {
//                     switch(res.result){
//                         case 1:
//                             FA++;
// 							Obc++;
// 							Elt++;
//                             break;
//                         case 2:
//                             Obc+=2;
//                             break;
//                         case 3:
//                             Elt+=2;
//                             break;
//                         case 4:
//                             FA+=2;
//                             break;
//                         case 5:
//                             Obc++;
//                             break;
//                         case 6:
//                             Elt++;
//                             break;
//                         case 7:
//                             Obc++;
//                             break;
//                         case 8:
//                             Elt++;
//                             break;
//                         case 9:
//                             Obc+=2;
//                             break;
//                         case 10:
//                             Elt+=2;
//                             break;
//                     }
//                 });
//             }

//         });
        
//         if(AspRoll){
//             ChatMessage.create({
//                 content: `<b>FA:</b> ${FA}<br><b>Elt:</b> ${Elt}<br><b>Obc:</b> ${Obc}`,
//                 whisper: message.data.whisper,
//                 blind: message.data.blind
//             });
//         }
//     }
// });


// Hooks.once('diceSoNiceReady', (dice3d) => {
// 	dice3d.addColorset({
//     name: 'base',
//     description: 'Base',
//     category: 'Colors',
//     foreground: ['#ecdfdf'],
//     background: ['#ecdfdf'],
//     outline: 'black',
//     texture: 'none',
//   });
//   dice3d.addColorset({
//     name: 'lightred',
//     description: 'LightRed',
//     category: 'Colors',
//     foreground: ['#e25d4e'],
//     background: ['#e25d4e'],
//     outline: 'black',
//     texture: 'none',
//   });
//   dice3d.addColorset({
//     name: 'darkred',
//     description: 'DarkRed',
//     category: 'Colors',
//     foreground: ['#98281b'],
//     background: ['#98281b'],
//     outline: 'black',
//     texture: 'none',
//   });
//   dice3d.addColorset({
//     name: 'lightblue',
//     description: 'LightBlue',
//     category: 'Colors',
//     foreground: ['7084b4#'],
//     background: ['#7084b4'],
//     outline: 'black',
//     texture: 'none',
//   });
  
//   dice3d.addColorset({
//     name: 'darkblue',
//     description: 'DarkBlue',
//     category: 'Colors',
//     foreground: ['#33486b'],
//     background: ['#33486b'],
//     outline: 'black',
//     texture: 'none',
//   });
//    dice3d.addColorset({
//     name: 'lightyellow',
//     description: 'LightYellow',
//     category: 'Colors',
//     foreground: ['#ffe666'],
//     background: ['#ffe666'],
//     outline: 'black',
//     texture: 'none',
//   });
  
//   dice3d.addColorset({
//     name: 'darkyellow',
//     description: 'DarkYellow',
//     category: 'Colors',
//     foreground: ['#E6C100'],
//     background: ['#E6C100'],
//     outline: 'black',
//     texture: 'none',
//   });
//   dice3d.addColorset({
//     name: 'purple',
//     description: 'Purple',
//     category: 'Colors',
//     foreground: ['#6438a5'],
//     background: ['#6438a5'],
//     outline: 'black',
//     texture: 'none',
//   });
//   dice3d.addColorset({
//     name: 'orange',
//     description: 'Orange',
//     category: 'Colors',
//     foreground: ['#d88a43'],
//     background: ['#d88a43'],
//     outline: 'black',
//     texture: 'none',
//   });
//   dice3d.addColorset({
//     name: 'green',
//     description: 'Green',
//     category: 'Colors',
//     foreground: ['#5b9d74'],
//     background: ['#5b9d74'],
//     outline: 'black',
//     texture: 'none',
//   });
  
//     dice3d.addSystem({id:"aspects",name:"Aspects"},true);
// 	dice3d.addDicePreset({
//       type:"db",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5A.png', 
//         'modules/aspects-dice-roller/images/6O.png', 
//         'modules/aspects-dice-roller/images/7E.png', 
//         'modules/aspects-dice-roller/images/8A.png', 
//         'modules/aspects-dice-roller/images/9E.png', 
//         'modules/aspects-dice-roller/images/10O.png'

//       ],
// 	  colorset: 'base',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"da",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5A.png', 
//         'modules/aspects-dice-roller/images/6O.png', 
//         'modules/aspects-dice-roller/images/7E.png', 
//         'modules/aspects-dice-roller/images/8A.png', 
//         'modules/aspects-dice-roller/images/9A.png', 
//         'modules/aspects-dice-roller/images/10AA.png'

//       ],
//       colorset: 'lightred',
//       system:"aspects"
//     });
// dice3d.addDicePreset({
//       type:"dz",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2O.png', 
//         'modules/aspects-dice-roller/images/3E.png', 
//         'modules/aspects-dice-roller/images/4AAA.png', 
//         'modules/aspects-dice-roller/images/5A.png', 
//         'modules/aspects-dice-roller/images/6A.png', 
//         'modules/aspects-dice-roller/images/7A.png', 
//         'modules/aspects-dice-roller/images/8A.png', 
//         'modules/aspects-dice-roller/images/9AA.png', 
//         'modules/aspects-dice-roller/images/10AAA.png'

//       ],
//       colorset: 'darkred',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"de",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5A.png', 
//         'modules/aspects-dice-roller/images/6O.png', 
//         'modules/aspects-dice-roller/images/7E.png', 
//         'modules/aspects-dice-roller/images/8E.png', 
//         'modules/aspects-dice-roller/images/9E.png', 
//         'modules/aspects-dice-roller/images/10EE.png'

//       ],
//       colorset: 'lightblue',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"dr",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2O.png', 
//         'modules/aspects-dice-roller/images/3EEE.png', 
//         'modules/aspects-dice-roller/images/4A.png', 
//         'modules/aspects-dice-roller/images/5E.png', 
//         'modules/aspects-dice-roller/images/6E.png', 
//         'modules/aspects-dice-roller/images/7E.png', 
//         'modules/aspects-dice-roller/images/8E.png', 
//         'modules/aspects-dice-roller/images/9EE.png', 
//         'modules/aspects-dice-roller/images/10EEE.png'

//       ],
//       colorset: 'darkblue',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"do",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5A.png', 
//         'modules/aspects-dice-roller/images/6O.png', 
//         'modules/aspects-dice-roller/images/7E.png', 
//         'modules/aspects-dice-roller/images/8O.png', 
//         'modules/aspects-dice-roller/images/9O.png', 
//         'modules/aspects-dice-roller/images/10OO.png'

//       ],
//       colorset: 'lightyellow',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"dp",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OOO.png', 
//         'modules/aspects-dice-roller/images/3E.png', 
//         'modules/aspects-dice-roller/images/4A.png', 
//         'modules/aspects-dice-roller/images/5O.png', 
//         'modules/aspects-dice-roller/images/6O.png', 
//         'modules/aspects-dice-roller/images/7O.png', 
//         'modules/aspects-dice-roller/images/8O.png', 
//         'modules/aspects-dice-roller/images/9OO.png', 
//         'modules/aspects-dice-roller/images/10OOO.png'

//       ],
//       colorset: 'darkyellow',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"du",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5A.png', 
//         'modules/aspects-dice-roller/images/6O.png', 
//         'modules/aspects-dice-roller/images/7A.png', 
//         'modules/aspects-dice-roller/images/8O.png', 
//         'modules/aspects-dice-roller/images/9AA.png', 
//         'modules/aspects-dice-roller/images/10OO.png'

//       ],
//       colorset: 'orange',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"ds",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5E.png', 
//         'modules/aspects-dice-roller/images/6A.png', 
//         'modules/aspects-dice-roller/images/7E.png', 
//         'modules/aspects-dice-roller/images/8A.png', 
//         'modules/aspects-dice-roller/images/9AA.png', 
//         'modules/aspects-dice-roller/images/10EE.png'

//       ],
//       colorset: 'purple',
//       system:"aspects"
//     });
// 	dice3d.addDicePreset({
//       type:"dk",
//       labels:[
//         'modules/aspects-dice-roller/images/1AOE.png', 
//         'modules/aspects-dice-roller/images/2OO.png', 
//         'modules/aspects-dice-roller/images/3EE.png', 
//         'modules/aspects-dice-roller/images/4AA.png', 
//         'modules/aspects-dice-roller/images/5O.png', 
//         'modules/aspects-dice-roller/images/6E.png', 
//         'modules/aspects-dice-roller/images/7O.png', 
//         'modules/aspects-dice-roller/images/8E.png', 
//         'modules/aspects-dice-roller/images/9OO.png', 
//         'modules/aspects-dice-roller/images/10EE.png'

//       ],
//       colorset: 'green',
//       system:"aspects"
//     });
// });