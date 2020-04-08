function makeLogin(rec) {
    let login = '';
    const lastname = rec.get('lastname');
    const firstname = rec.get('firstname');
    login = lastname.substr(0, 1) + '.' + firstname.substr(0, 1) + '. - ' + rec.get('email');
    return login;
}

function makeAvatar(rec) {
    const src = 'User.png';
    return src;
}


Ext.define('app.model.Personnel', {
    extend: 'Ext.data.Model',
    alias: 'personnel',

    fields: [
        {name: 'guid', type: 'auto'},
        {name: 'lastname', mapping: 'name.last'},
        {name: 'firstname', mapping: 'name.first'},
        {name: 'age', type: 'int'},
        {name: 'email', type: 'string'},
        {
            name: 'login', convert: function (v, rec) {
                return makeLogin(rec);
            }
        },
        {
            name: 'avatar', convert: function (v, rec) {
                return makeAvatar(rec);
            }
        }
    ]
});


