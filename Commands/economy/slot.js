const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy');
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");

module.exports = { 
    name: "slot",  
    desc: "play slot game", 
    alias: ["slot"],
    category: "economy",  
    react: "π°", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        var today = new Date();
        if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
            if (text == 'help') return m.reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have πͺ100 in your wallet\n\n*3:* If you don't have money in wallet then πwithdraw from your bankπ¦\n\n*4:* If you don't have π€ money in your π¦bank too then use economy features to πgain money`)
            if (text == 'money') return m.reply(`*1:* Small Win --> +πͺ20\n\n*2:* Small Lose --> -πͺ20\n\n*3:* Big Win --> +πͺ100\n\n*4:* Big Lose --> -πͺ50\n\n*5:* π JackPot --> +πͺ1000`)
            const fruit1= ["π₯₯", "π", "π"]
            const fruit2 = ["π", "π", "π₯₯"]
            const fruit3 = ["π", "π₯₯", "π"]
            const fruit4 = "π"
            const lose = ['*You suck at playing this game*\n\n_--> π-π₯₯-π_', '*Totally out of line*\n\n_--> π₯₯-π-π_', '*Are you a newbie?*\n\n_--> π-π-π₯₯_']
            const smallLose = ['*You cannot harvest coconut π₯₯ in a pineapple π farm*\n\n_--> π>π₯₯<π_', '*Apples and Coconut are not best Combo*\n\n_--> π>π₯₯<π_', '*Coconuts and Apple are not great deal*\n\n_--> π₯₯>π<π₯₯_']
            const won = ['*You harvested a basket of*\n\n_--> π+π+π_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> π₯₯+π₯₯+π₯₯_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> π+π+π_']
            const near = ['*Wow, you were so close to winning pineapples*\n\n_--> π-π+π_', '*Hmmm, you were so close to winning Apples*\n\n_--> π+π-π_']
            const jack = ['*π₯³ JackPot π€*\n\n_--> πΓπΓπΓπ_', '*π JaaackPooot!*\n\n_--> π₯₯Γπ₯₯Γπ₯₯Γπ₯₯_', '*π You Just hit a jackpot worth πͺ1000*']
            const user = m.sender
            const cara = "cara"
            const k = 100
            const balance1  = await eco.balance(user, cara)
            if (k > balance1.wallet) return m.reply(`You are going to be spinning on your wallet, you need at least πͺ100`);
            const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
            const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
            const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
            //const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
            const mess1 = lose[Math.floor(Math.random() * lose.length)];
            const mess2 = won[Math.floor(Math.random() * won.length)];
            const mess3 = near[Math.floor(Math.random() * near.length)];
            const mess4 = jack[Math.floor(Math.random() * jack.length)];
            const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
            if(text.split(' ')[0]){
let value = text.split(' ')[0]
const balance = await eco.balance(m.sender, cara)
console.log(balance.wallet)
if(value<=balance.wallet){
    const deduff = Math.floor(Math.random() * value)
    if ((f1 !== f2) && f2 !== f3){
        const deduct1 = await eco.deduct(user, cara, deduff);
        return m.reply(`${mess1}\n\n*Big Lose -->* _πͺ${deduff}_`)
     }
     else if ((f1 == f2) && f2 == f3){
        const give1 = await eco.give(user, cara, deduff/2);
        return m.reply(`${mess2}\n*_Little Jackpot -->* _πͺ${deduff/2}_`)
     }
     else if ((f1 == f2) && f2 !== f3){
        const give2 = await eco.give(user, cara, deduff);
        return m.reply(`${mess3}\n*Small Win -->* _πͺ${deduff}_`)
     }
     else if ((f1 !== f2) && f1 == f3){
        const deduct2 = await eco.deduct(user, cara, deduff);
        return m.reply(`${mess5}\n\n*Small Lose -->* _πͺ${deduff}_`)
     }
     else if ((f1 !== f2) && f2 == f3){
        const give4 = eco.give(user, cara, deduff);
        return m.reply(`${mess3}\n\n*Small Win -->* _πͺ${deduff}_`)
     }
     else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
        const give5 = eco.give(user, cara, deduff*20);
        return m.reply(`${mess4}\n\n_π JackPot --> _πͺ${deduff*20}_`)
     }
     else {
        return m.reply(`Do you understand what you are doing?`)
     }

} else{
    return m.reply('You don\'t have enough π°amount in yourπ wallet.\n- Please don\'t provide π€amount.')
}
            }
            if ((f1 !== f2) && f2 !== f3){
               const deduct1 = await eco.deduct(user, cara, 50);
                      m.reply(`${mess1}\n\n*Big Lose -->* _πͺ50_`)
            }
            else if ((f1 == f2) && f2 == f3){
               const give1 = await eco.give(user, cara, 100);
                     m.reply(`${mess2}\n*_Little Jackpot -->* _πͺ100_`)
            }
            else if ((f1 == f2) && f2 !== f3){
               const give2 = await eco.give(user, cara, 20);
                     m.reply(`${mess3}\n*Small Win -->* _πͺ20_`)
            }
            else if ((f1 !== f2) && f1 == f3){
               const deduct2 = await eco.deduct(user, cara, 20);
                     m.reply(`${mess5}\n\n*Small Lose -->* _πͺ20_`)
            }
            else if ((f1 !== f2) && f2 == f3){
               const give4 = eco.give(user, cara, 20);
                     m.reply(`${mess3}\n\n*Small Win -->* _πͺ20_`)
            }
            else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
               const give5 = eco.give(user, cara, 1000);
                    m.reply(`${mess4}\n\n_π JackPot --> _πͺ1000_`)
            }
            else {
                    m.reply(`Do you understand what you are doing?`)
            }
         }
         else{
                m.reply(`*You can only play this game during weekends*\n\n*πΏ Friday*\n*π Saturday*\n*π Sunday*`)
         }
    }
}