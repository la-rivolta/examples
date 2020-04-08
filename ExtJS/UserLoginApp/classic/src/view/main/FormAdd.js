Ext.define('app.view.main.FormAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'formadd',

    requires: [
        'app.view.main.FormAddController'
    ],
    controller: 'formadd',
    layout: {type: 'hbox'},
    bodyPadding: 10,
    hidden: true,
    items: [
        {
            xtype: 'textfield',
            emptyText: 'First name',
            name: 'firstname',
            margin: 10,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            emptyText: 'Last name',
            name: 'lastname',
            margin: 10,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            emptyText: 'Age',
            name: 'age',
            margin: 10,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            vtype: 'email',
            emptyText: 'Email',
            name: 'email',
            margin: 10,
            allowBlank: false
        },
        {
            xtype: 'button',
            name: 'Add',
            text: '+ Add user',
            ui: 'greenButton',
            margin: 10,
            formBind: true,
            listeners: {
                click: 'add'
            }
        },
        {
            xtype: 'button',
            name: 'Cancel',
            text: 'Cancel',
            ui: 'greenButton',
            handler: 'Cancel',
            margin: 10,
            listeners: {
                click: 'cancel'
            }
        }
    ]
});