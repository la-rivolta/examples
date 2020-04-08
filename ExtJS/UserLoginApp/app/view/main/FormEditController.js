Ext.define('app.view.main.FormEditController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.formedit',

    requires: [
        'app.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },

    save: function () {
        let record = {};
        const values = this.getView('FormEdit').getValues();
        record.firstname = values.firstname;
        record.lastname = values.lastname;
        record.age = values.age;
        record.email = values.email;
        record.guid = values.guid;
        const store = Ext.getStore('personnel').data.items;

        function countIndex() {
            for (let i = 0; i < store.length; i++) {
                let guid = store[i].data.guid;
                if (guid == record.guid) {
                    return i;
                }
            }
        }

        Ext.getStore('personnel').insert(countIndex(), record);
        Ext.getStore('personnel').removeAt((countIndex() + 1));
        this.getView().close();
    },

    cancel: function () {
        this.getView().close();
    }
});