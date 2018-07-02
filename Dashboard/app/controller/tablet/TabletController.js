Ext.define('Dashboard.controller.tablet.TabletController', {
    extend: 'Dashboard.controller.Main',
    init: function() {
        console.log('Initialized Tablet! This happens before ' +
                    'the Application launch() function is called');
    }
});