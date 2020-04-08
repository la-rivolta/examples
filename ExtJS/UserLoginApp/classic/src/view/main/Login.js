Ext.define('app.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'app.view.main.MainController',
        'app.view.main.MainModel'
    ],

    modelValidation: true,
    viewModel: {
        links: {
            userlink: {
                reference: 'app.model.Login',
                create: true
            }
        },
        type: 'main'
    },
    controller: 'login',
    bodyPadding: 200,
    title: {
        bind: '{name}'
    },
    ui: 'topPanel',
    closable: false,
    items: {
        xtype: 'form',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items: [
            {
                xtype: 'displayfield',
                value: 'Enter your login and password'
            },
            {
                xtype: 'textfield',
                name: 'username',
                emptyText: 'Login',
                bind: '{userlink.username}',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                emptyText: 'Password',
                bind: '{userlink.password}',
                allowBlank: false
            }, {
                xtype: 'button',
                text: 'Login',
                formBind: true,
                ui: 'greenButton',
                width: 170,
                listeners: {
                    click: 'onLoginClick'
                }
            }]
    }
});