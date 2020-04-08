Ext.define('app.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.main.List',
        'app.view.main.FormAdd'

    ],

    controller: 'main',
    viewModel: 'main',

    items: [
        {
            title: {
                bind: '{name}'
            },
            ui: 'mainPanel',
            items: [
                {
                    margin: 20,
                    width: 130,
                    xtype: 'button',
                    ui: 'greenButton',
                    text: 'Exit',
                    listeners: {
                        click: 'onLogoffClick'
                    }
                },
                {
                    margin: 20,
                    width: 130,
                    xtype: 'button',
                    ui: 'greenButton',
                    text: '+ Add user',
                    listeners: {
                        click: 'onShowFormadd'
                    }

                },
                {
                    xtype: 'formadd'
                },
                {
                    xtype: 'mainlist'
                }
            ]
        }]
});
