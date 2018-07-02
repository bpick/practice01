Ext.define('Dashboard.view.desktop.content.subview.device.detail.DetailView', {
    extend: 'VerticalLayout',
    xtype: 'detailview',
    items: [{
        xtype: 'detailrouter'
    }, {
        xtype: 'routerform',
        flex: 1
    }, {
        xtype: 'removedevice'
    }]
});