const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
 const fs = require("fs");


module.exports = { 

    name: "wallet",  
    desc: "Shows Wallet.",
    alias: ["wallet"], 
    category: "economy",  
    react: "π°", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        let user = m.sender 
         const cara = "cara"
         const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         let buttons = [
            {
              buttonId: `${prefix}deposit`,
              buttonText: { displayText: "Deposit" },
              type: 1,
            },
            {
                buttonId: `${prefix}Bank`,
              buttonText: { displayText: "Bankπ¦" },
              type: 1,

            },
          ];
          let buttonMessage = {
            text: `π *${m.pushName}'s Purse:*\n\n_πͺ${balance.wallet}_`,
            footer: `*Miku Nakano*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }