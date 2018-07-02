Ext.define('Dashboard.controller.desktop.DesktopController', {
    extend: 'Dashboard.controller.Main',
    init: function() {
        console.log('Initialized Desktop! This happens before ' +
                    'the Application launch() function is called');
    }
});