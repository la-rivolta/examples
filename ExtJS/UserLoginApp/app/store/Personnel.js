Ext.define('app.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',

    model: 'app.model.Personnel',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'mates.json',
        reader: {
            type: 'json',
        }
    }
});
