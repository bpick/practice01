Ext.define('Dashboard.view.desktop.Main', {
    extend: 'HorizontalLayout',
    controller: 'main',
    items: [{
        xtype: 'sidenav',
        width: 260,
        reference: 'sidenav'
    }, {
        xtype: 'baseview',
        reference: 'baseview',
        flex: 1
    }]
});