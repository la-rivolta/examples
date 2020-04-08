Ext.define('app.view.main.FormEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'formedit',

    requires: [
        'app.view.main.FormEditController'
    ],
    controller: 'formedit',
    viewModel: {
        type: 'formedit'
    },
    layout: {type: 'vbox'},
    title: 'Edit',
    ui: 'topPanel',
    autoDestroy: true,
    floating: true,
    closable: true,
    bodyPadding: 15,
    width: 250,
    items: [
        {
            xtype: 'textfield',
            emptyText: 'Guid',
            name: 'guid',
            editable: false,
            width: 200,
            margin: 10,
            bind: {
                value: '{userData.guid}'
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'First name',
            name: 'firstname',
            margin: 10,
            width: 200,
            bind: {
                value: '{userData.firstname}'
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Last name',
            name: 'lastname',
            margin: 10,
            width: 200,
            bind: {
                value: '{userData.lastname}'
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Age',
            name: 'age',
            margin: 10,
            width: 200,
            bind: {
                value: '{userData.age}'
            }
        },
        {
            xtype: 'textfield',
            vtype: 'email',
            emptyText: 'Email',
            name: 'email',
            margin: 10,
            width: 200,
            bind: {
                value: '{userData.email}'
            }
        },
        {
            xtype: 'button',
            name: 'Save',
            text: 'Save',
            ui: 'greenButton',
            width: 200,
            margin: 10,
            formBind: true,
            listeners: {
                click: 'save'
            }
        },
        {
            xtype: 'button',
            name: 'Cancel',
            text: 'Cancel',
            ui: 'greenButton',
            width: 200,
            margin: 10,
            listeners: {
                click: 'cancel'
            }
        }
    ]
});