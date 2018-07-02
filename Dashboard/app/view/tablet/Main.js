Ext.define('Dashboard.view.tablet.Main', {
    extend: 'HorizontalLayout',
    controller: 'tabletmain',
    items: [{
        xtype: 'sidenav',
        width: 76,
        reference: 'sidenav'
    }, {
        xtype: 'baseview',
        reference: 'baseview',
        flex: 1
    }]
});