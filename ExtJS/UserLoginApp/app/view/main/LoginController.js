Ext.define('app.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        this.redirectTo('home');
        this.getView().destroy();
        Ext.create('app.view.main.Main', {
            renderTo: Ext.getBody()
        });
        localStorage.setItem("Logon", true);

    }
});