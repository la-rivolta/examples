Ext.define('app.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'app.store.Personnel',
        'app.view.main.MainController'
    ],

    controller: 'main',
    margin: 15,
    height: 400,
    store: {
        type: 'personnel'
    },

    columns: [
        {text: 'guid', dataIndex: 'guid', flex: 1},
        {text: 'firstname', dataIndex: 'firstname'},
        {text: 'lastname', dataIndex: 'lastname'},
        {text: 'age', dataIndex: 'age'},
        {text: 'email', dataIndex: 'email', flex: 1},
        {text: 'login', dataIndex: 'login', flex: 1},
        {
            text: 'avatar',
            xtype: 'widgetcolumn',
            widget: {xtype: 'image', src: 'User.png', alt: 'User.png', width: 50, height: 50}
        },
        {
            text: 'delete', width: 70,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'button',
                ui: 'tableButton',
                icon: 'delete.png',
                width: 20,
                height: 30,
                margin: 15,
                listeners: {
                    click: 'onRemoveUserBtnClick'
                }
            }
        },
        {
            text: 'edit', width: 70,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'button',
                ui: 'tableButton',
                icon: 'edit.png',
                width: 20,
                height: 30,
                margin: 15,
                listeners: {
                    click: 'onEditUserBtnClick'
                }
            }
        }]
});
