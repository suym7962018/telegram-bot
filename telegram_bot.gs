//自动回复
function doPost(e) {
    var update = JSON.parse(e.postData.contents);
    
    // Make sure this is update is a type message
    if (update.hasOwnProperty('message')) {
        var msg = update.message;
        var chatId = msg.chat.id;
        
        // Make sure the update is a command.
        if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {
            
            // If the user sends the /quote command
            if (msg.text == '/start') {
                var payload = {
                    'method': 'sendMessage',
                    'chat_id': String(chatId),
                    'text': '\
                    Welcome To Follo Community!\n\n\
                    Kindly refer to the Pinned Message, our new activity!!!!🔥🔥\n\n\
                    🎉 Follo 🎉   is a Decentralized Location Big Data Platform.\n\n\
                    🎈 With Blockchain Technology, Follo devoted to realizing the confirmation of Data Right, Privacy Protection and Data Transaction.\n\n\
                    👉 Follo aims to build a Decentralized Ecosystem based on the Quantifiable Data from individuals, cars and in the future, IoT included.\n\n\
                    🙋‍♀️ We dedicate ourselves to protecting your privacy!\n\n\
                    Follo Official Website: www.follo.one\n\
                    Follo White paper:  http://www.follo.one/FolloEN.pdf\n\
                    Follo Twitter: https://twitter.com/Follo_official\n\
                    Follo Medium: https://medium.com/@folloofficial\n',
                    //'parse_mode': 'HTML'
                }
                
                var data = {
                    "method": "post",
                    "payload": payload
                }
            }
            if (msg.text == '/1') {
                var payload = {
                    'method': 'sendMessage',
                    'chat_id': String(chatId),
                    'text': 'Follo Official Website: www.follo.one',
                    //'parse_mode': 'HTML'
                }
                
                var data = {
                    "method": "post",
                    "payload": payload
                }
            }
            // Replace with your token
            var API_TOKEN = '886146248:AAEFF5CmTra9boB0Z_Hm7NQmqLB_dOwcO0c';
            UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
            
        }
    }
}

//在群内定时发送消息
function AutoSendMessage() {
    var payload = {
        'method': 'sendMessage',
        'chat_id': '-1001201977744',
        'text': '\
        Welcome To Follo Community!\n\n\
        Kindly refer to the Pinned Message, our new activity!!!!🔥🔥\n\n\
        🎉 Follo 🎉   is a Decentralized Location Big Data Platform.\n\n\
        🎈 With Blockchain Technology, Follo devoted to realizing the confirmation of Data Right, Privacy Protection and Data Transaction.\n\n\
        👉 Follo aims to build a Decentralized Ecosystem based on the Quantifiable Data from individuals, cars and in the future, IoT included.\n\n\
        🙋‍♀️ We dedicate ourselves to protecting your privacy!\n\n\
        Follo Official Website: www.follo.one\n\
        Follo White paper:  http://www.follo.one/FolloEN.pdf\n\
        Follo Twitter: https://twitter.com/Follo_official\n\
        Follo Medium: https://medium.com/@folloofficial\n',
    }
    
    var data = {
        "method": "post",
        "payload": payload
    }
    
    var API_TOKEN = '886146248:AAEFF5CmTra9boB0Z_Hm7NQmqLB_dOwcO0c';
    UrlFetchApp.fetch('https://api.telegram.org/bot' + API_TOKEN + '/', data);
}
