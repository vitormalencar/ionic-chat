angular.module('starter.service', []).factory('Chats', function() {
    var chats = [
    {
        text: 'Oi Galera',
        time:  Date()
    }, {
        text: 'E awe cara =D ',
        time:  Date()
    },{
        text: 'Oi Galera',
        time:  Date()
    }, {
        text: 'E awe cara =D ',
        time:  Date()
    },{
        text: 'Oi Galera',
        time:  Date()
    }, {
        text: 'E awe cara =D ',
        time:  Date()
    },{
        text: 'Oi Galera',
        time:  Date()
    }, {
        text: 'E awe cara =D ',
        time:  Date()
    },{
        text: 'Oi Galera',
        time:  Date()
    }, {
        text: 'E awe cara =D ',
        time:  Date()
    },{
        text: 'Oi Galera',
        time:  Date()
    }, {
        text: 'E awe cara =D ',
        time:  Date()
    }, {
        text: 'Vamos que vamos ! ',
        time:  Date()
    }, {
        text: 'goiaba ou onibus',
        time:  Date()
    }, {
        text: '???????',
        time:  Date()
    }];
    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
