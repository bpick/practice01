/**
 * Created by Brian Pick on 6/14/2017.
 */
Ext.define('Dashboard.util.ProfileUtil', {
    alternateClassName: 'ProfileUtil',
    requires: [
        'Ext.util.LocalStorage'
    ],
    singleton: true,
    /**
     * @cfg {Ext.util.LocalStorage} store
     * A local storage that used to save access token
     */
    store: new Ext.util.LocalStorage({
        id: 'demo'
    }),
    get: function(key) {
        var value = this.store && this.store.getItem(key);
        return value;
    },
    set: function(key, value) {
        if(!this.store) return;
        if( value !== null) {
            var text = undefined;
            if(!Ext.isObject(value) && !Ext.isString(value)) {
                Ext.raise(Ext.String.format('value type {0} is not support', typeof value));
                return false;
            }
            if(Ext.isObject(value)) {
                text = Ext.JSON.encode(value);
            }
            if(Ext.isString(value)) {
                text = value;
            }
            this.store.setItem(key, text);
            return true;
        } else {
            this.store.removeItem(key);
        }
    },
    clearValue: function(key) {
        this.set(key, null);
    }
});