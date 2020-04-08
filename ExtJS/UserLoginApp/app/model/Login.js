Ext.define('app.model.Login', {
    extend: 'Ext.data.Model',
    alias: 'login',


    fields: [
        {
            name: 'username',
            type: 'string',
            validators: [{
                type: 'format',
                matcher: /([a-zA-Z])/,
                message: 'Wrong format'
            }]
        }, {
            name: 'password',
            validators: [{
                type: 'format',
                matcher: /([a-zA-Z]+)[0-9]{2,3}/,
                message: 'Wrong format'
            },
                {
                    type: 'length',
                    min: 7,
                    message: 'Min length is 7 symbols'
                }]
        }
    ]
});


