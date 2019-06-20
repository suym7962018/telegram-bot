function doPost(e){
    var body = JSON.parse(e.postData.contents);
    
    
    
    var payload = preparePayload(body);
    var data = {
        "method": "post",
        "contentType": 'application/json',
        "payload": JSON.stringify(payload),
    }
    
    var API_TOKEN = '886146248:AAEFF5CmTra9boB0Z_Hm7NQmqLB_dOwcO0c';
    UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
    
}

function preparePayload(body) {
    var payload;
    
    //按键回复
    if (body.callback_query) {
        payload = {
            "method": "sendMessage",
            "chat_id": body.callback_query.message.chat.id,
        };
       if(body.callback_query.data === "/bonus1"){
           payload.text = "Follo selects 5 lucky users and sends our LAND RIGHT TOKEN to users who join our group from 2000-5000.\n" +
                           "Here the usernames!!! @crypkekolas @badalsen @shamriyas87 @Radcat44 @Azam987  Congratulations!!!\n" +
                           "All the LAND RIGHT TOKEN will be handed out in July (When we begin to pre-sale our LAND RIGHT TOKEN)";
           return payload;
       }

       if(body.callback_query.data === "/bonus2"){
           payload.text = "To thank for your contribution, Follo decides to launch a new Bounty Activity with 200,000 FOL Tokens (~$1000)!\n\n" +
                           "a. 1-3, each one rewards 20k Tokens (~$100);\n" +
                           "b. 4-6, each one rewards 14k Tokens (~$70);\n" +
                           "c. 7-10, each one rewards 10k Tokens (~$50);\n\n" +
                           "Last, Follo choose 5 lucky users and reward 6k Tokens (~$30).";

           return payload;
       }
        
       if(body.callback_query.data === "/class1"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQADtagxGxuNEFRr58VbNqTo-nxO9jIABP3cQlcfwZZq-YYEAAEC";

           return payload;
       }

       if(body.callback_query.data === "/class2"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQAD16gxG3a3EVTwepnnI7IyWrTv3zIABHKMlvdoHp2D3H0EAAEC";

           return payload;
       }

       if(body.callback_query.data === "/class3"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQAD2KgxG3a3EVRa2AfEOBegH9lo3jIABCcwwIkHOWs4zA0GAAEC";

           return payload;
       }

       if(body.callback_query.data === "/class4"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQAD2agxG3a3EVS4VwmHzJtywCJe9jIABEUtBOgQkUVshoAEAAEC";

           return payload;
       }

       if(body.callback_query.data === "/class5"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQADtqgxGxuNEFTN2MF6rFFBEYPx3zIABL6DWF8EP6Tk-XsEAAEC";

           return payload;
       }

       if(body.callback_query.data === "/class6"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQAD2qgxG3a3EVS-8dueVJhXufJR9jIABLvs2dLVVK80o4QEAAEC";

           return payload;
       }

       if(body.callback_query.data === "/question1"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQADuagxG_lXEFSN9OGwXoL_obpR9jIABCxDAveXMB-fl3oEAAEC";
           payload.caption = "Follo’s first Q&A Section has finished on 30th May.\n" +
                             "Follo decides to give 10 people a token of $20 each. After the AIRDROP ends, Follo will send to their address together.";

           return payload;
       }

       if(body.callback_query.data === "/question2"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQADtKgxGxuNEFTzh5mqaThgBGLw3zIABLbLYnxbR-HolIAEAAEC";
           payload.caption = "Follo’s second Q&A Section has finished on 6th June. \n" +
                             "Follo decides to give 7 people 5000 FOL Tokens (~$25) each. After the AIRDROP ends, Follo will send to their address together.";

           return payload;
       }
       
       if(body.callback_query.data === "/question3"){
           payload.method = "sendPhoto";
           payload.photo = "AgADBQADlagxG1b9WFRJhvjzuaRua0aB-TIABKS5Au6QMBIIpg4AAgI";
           payload.caption = "Follo's third Q&A Section has finished! \n" +
                             "Follo decides to give 5 people 5000 FOL Tokens (~25$) each. After the airdrop ends, we will send their together~";

           return payload;
       }

    }
    else if (body.message) {
        body.message.chat.id = body.message.chat.id + '';
    
        //进群欢迎
        if (body.message.new_chat_member) {
            payload = {
                "method": "sendMessage",
                "chat_id": body.message.chat.id,
                "text": "default",
                //"parse_mode": "Markdown",
            }
            
            payload.text = "@" + body.message.new_chat_member.username + "  Welcome! Please PM me, Thanks.";
            return payload;
        }

        //回复命令
        if(body.message.text) {
            payload = {
                "method": "sendMessage",
                "chat_id": body.message.chat.id,
                "text": "default",
                //"parse_mode": "Markdown",
            }
            
            //群里艾特bot
            //if(body.message.text.endsWith("@FolloCommunityBot")) {
            if((body.message.text.indexOf("/") === 0) && (body.message.chat.type === "supergroup")) {
                payload.text = "@" + body.message.from.username + " , please PM me, thank you!";
                return payload;
            }
            
            //私聊命令
            if(body.message.text === "/start"){
                payload.text = "Hi, I'm the FOLLO Bot. Send /commands  to get started!";
                return payload;
            }
            if(body.message.text === "/commands"){
                payload.text = "Availible commands: \n" +
                "/help\n" +
                "/website\n" +
                "/whitepaper\n" +
                "/twitter\n" +
                "/medium\n" +
                "/facebook\n" +
                "/reddit\n" +
                "/instagram\n" +
                "/airdrop\n" +
                "/follonews\n" +
                "/balance\n" +
                "/keywords\n" +
                "/bounty\n" +
                "/suggestion\n";
                return payload;
            }
            if(body.message.text === "/help"){
                payload.text = "Try to use /keywords to REPLY. More QUESTIONS please write a ticket to  @FolloOne ";
                return payload;
            }
            if(body.message.text === "/website"){
                payload.text = "http://www.follo.one/";
                return payload;
            }
            if(body.message.text === "/whitepaper"){
                payload.text = "http://www.follo.one/FolloEN.pdf";
                return payload;
            }
            if(body.message.text === "/twitter"){
                payload.text = "https://twitter.com/Follo_official";
                return payload;
            }
            if(body.message.text === "/medium"){
                payload.text = "https://medium.com/@folloofficial";
                return payload;
            }
            if(body.message.text === "/facebook"){
                payload.text = "https://www.facebook.com/folloofficial/";
                return payload;
            }
            if(body.message.text === "/reddit"){
                payload.text = "https://www.reddit.com/r/FolloCommunity/";
                return payload;
            }
            if(body.message.text === "/instagram"){
                payload.text = "https://www.instagram.com/follo_official/";
                return payload;
            }
            if(body.message.text === "/airdrop"){
                payload.text = "https://twitter.com/Follo_official/status/1131884590380007424";
                return payload;
            }
            if(body.message.text === "/follonews"){
                payload.text = "https://t.me/Follo_News";
                return payload;
            }
            if(body.message.text === "/keywords"){
                payload.text = "/poi \n" +
                "/fol \n" +
                "/ecosystem \n" +
                "/distribution \n" +
                "/exchange \n" +
                "/referral \n";
                
                var command9 = [
                                "/poi",
                                "/fol",
                                "/ecosystem",
                                "/distribution",
                                "/exchange",
                                "/referral"
                                ];
                
                var replyKeyboardMarkup = {};
                replyKeyboardMarkup.keyboard = [];
                replyKeyboardMarkup.resize_keyboard = false;
                replyKeyboardMarkup.one_time_keyboard = true;
                replyKeyboardMarkup.selective = true;
                
                var count = 0;
                for (var i = 0; i < command9.length / 3; i++) {
                    var keyboardRow = [];
                    for (var j = 0; j < 3; j++) {
                        var keyboardButton = {
                        text: command9[i * 3 + j],
                        };
                        count++;
                        keyboardRow.push(keyboardButton);
                        if (count >= command9.length) {
                            break;
                        }
                        
                    }
                    replyKeyboardMarkup.keyboard.push(keyboardRow);
                }
                payload.reply_markup = replyKeyboardMarkup;
                
                return payload;
            }
            if(body.message.text === "/bounty"){
                payload.text = "/bonus \n" +
                "/class \n" +
                "/question \n";
                
                var command9 = [
                                "/bonus",
                                "/class",
                                "/question"
                                ];
                
                var replyKeyboardMarkup = {};
                replyKeyboardMarkup.keyboard = [];
                replyKeyboardMarkup.resize_keyboard = false;
                replyKeyboardMarkup.one_time_keyboard = true;
                replyKeyboardMarkup.selective = true;
                
                var count = 0;
                for (var i = 0; i < command9.length / 3; i++) {
                    var keyboardRow = [];
                    for (var j = 0; j < 3; j++) {
                        var keyboardButton = {
                        text: command9[i * 3 + j],
                        };
                        count++;
                        keyboardRow.push(keyboardButton);
                        if (count >= command9.length) {
                            break;
                        }
                        
                    }
                    replyKeyboardMarkup.keyboard.push(keyboardRow);
                }
                payload.reply_markup = replyKeyboardMarkup;
                return payload;
            }
            //not work
            if(body.message.text === "/suggestion"){
                payload.text = "If you have any suggestions, please write a ticket to  @FolloOne ";
                return payload;
            }

            if(body.message.text === "/poi"){
                payload.text = "POI Token, which we will pre-sell in July, is based on ERC721 protocol, like the right of different POIs, which will help you make money through many ways.\n"
                + "CHECK MORE please click 👉 https://link.medium.com/QZqda3tVrX";
                return payload;
            }
            if(body.message.text === "/fol"){
                payload.text = "FOL is the Token which will circulate in Follo Ecosystem and will be listed on Exchanges.";
                return payload;
            }
            if(body.message.text === "/ecosystem"){
                payload.method = "sendPhoto",
                payload.photo = "AgADBQADrKgxG3L6EFS5YZktFyOsVQlX9jIABLvH_GUoP2W7xYUEAAEC";
                return payload;
            }
            if(body.message.text === "/distribution"){
                payload.text = "Aug 2019";
                return payload;
            }
            if(body.message.text === "/exchange"){
                payload.text = "More details we will announce in August, THANKS FOR FOLLO us!!!";
                return payload;
            }
            if(body.message.text === "/balance"){
                payload.text = "For now, you can't see your balance. We record the lucky users of every bounty activity, don’t worry~";
                return payload;
            }
            //not work
            if(body.message.text === "/referral"){
                payload.text = "You just need to write down the referral’s username. We will check whether the referral and the referee match each other and whether they both finish the steps according to our pinned tweet on the distribution day.";
                return payload;
            }
            if(body.message.text === "/bonus"){
                payload.text = "Follo bonus will share the latest activity, know more and earn your money.";
                var inlineKeyboardMarkup = {};
                inlineKeyboardMarkup.inline_keyboard = [];
                var keyboardRow = [];
                var keyboardButton1 = {
                text: "05/24-06/02/2019",
                callback_data: "/bonus1"
                };
                
                var keyboardButton2 = {
                text: "06/05-06/10/2019",
                callback_data: "/bonus2"
                };
                
                keyboardRow.push(keyboardButton1);
                keyboardRow.push(keyboardButton2);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow);
                //inlineKeyboardMarkup.inline_keyboard.push(keyboardRow2);
                payload.reply_markup = inlineKeyboardMarkup;
                return payload;
            }
            if(body.message.text === "/class"){
                payload.text = "Follo class will update in Follo News, SHARE you everything about Follo.";
                var inlineKeyboardMarkup = {};
                inlineKeyboardMarkup.inline_keyboard = [];
                var keyboardRow = [];
                var keyboardButton1 = {
                text: "06/03/2019 Core Team Introduction",
                callback_data: "/class1"
                };
                var keyboardRow2 = [];
                var keyboardButton2 = {
                text: "06/04/2019 What is POI",
                callback_data: "/class2"
                };
                var keyboardRow3 = [];
                var keyboardButton3 = {
                text: "06/05/2019 What is LAND RIGHT TOKEN",
                callback_data: "/class3"
                };
                var keyboardRow4 = [];
                var keyboardButton4 = {
                text: "06/06/2019 Composition of Follo Ecosystem",
                callback_data: "/class4"
                };
                var keyboardRow5 = [];
                var keyboardButton5 = {
                text: "06/07/2019 Differences between FOL Token and POI Token",
                callback_data: "/class5"
                };
                var keyboardRow6 = [];
                var keyboardButton6 = {
                text: "06/11/2019 How POI Tokens make money",
                callback_data: "/class6"
                };
                
                keyboardRow.push(keyboardButton1);
                keyboardRow2.push(keyboardButton2);
                keyboardRow3.push(keyboardButton3);
                keyboardRow4.push(keyboardButton4);
                keyboardRow5.push(keyboardButton5);
                keyboardRow6.push(keyboardButton6);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow2);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow3);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow4);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow5);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow6);
                payload.reply_markup = inlineKeyboardMarkup;
                
                return payload;
            }
            if(body.message.text === "/question"){
                payload.text = "Follo will hold a Q&A Section every week, join us and get your bonus.";
                var inlineKeyboardMarkup = {};
                inlineKeyboardMarkup.inline_keyboard = [];
                var keyboardRow = [];
                var keyboardButton1 = {
                text: "05/30/2019",
                callback_data: "/question1"
                };
                
                //var keyboardRow2 = [];
                var keyboardButton2 = {
                text: "06/06/2019",
                callback_data: "/question2"
                };
                
                var keyboardButton3 = {
                text: "06/13/2019",
                callback_data: "/question3"
                };
                
                keyboardRow.push(keyboardButton1);
                keyboardRow.push(keyboardButton2);
                keyboardRow.push(keyboardButton3);
                inlineKeyboardMarkup.inline_keyboard.push(keyboardRow);
                //inlineKeyboardMarkup.inline_keyboard.push(keyboardRow2);
                payload.reply_markup = inlineKeyboardMarkup;
                return payload;
            }
        }
    }
    
}
