Ext.define('Dashboard.view.desktop.base.Base', {
    extend: 'VerticalLayout',
    alias: 'widget.baseview',
    items: [{
        xtype: 'topnav',
        height: 75
    }, {
        xtype: 'content',
        flex: 1
    }]
});