function guid() {
    let uuidValue = "", k, randomValue;
    for (k = 0; k < 32; k++) {
        randomValue = Math.random() * 16 | 0;

        if (k == 8 || k == 12 || k == 16 || k == 20) {
            uuidValue += "-"
        }
        uuidValue += (k == 12 ? 4 : (k == 16 ? (randomValue & 3 | 8) : randomValue)).toString(16);
    }
    return uuidValue;
}


Ext.define('app.view.main.FormAddController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.formadd',

    add: function () {
        let usersData = this.getView().getValues();
        usersData.guid = guid();
        Ext.getStore('personnel').add(usersData);
        this.getView().reset();
    },

    cancel: function () {
        let formAdd = this.getView();
        formAdd.reset();
        formAdd.hide();
    }
});