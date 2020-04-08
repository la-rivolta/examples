Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    name: 'app',

    defaultToken: 'login',

    launch: function () {
        var loggedIn;

        loggedIn = localStorage.getItem("Logon");

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

    }

});
