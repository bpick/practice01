Ext.define('Dashboard.view.desktop.content.subview.device.MainDevice', {
    extend: 'HorizontalLayout',
    xtype: 'maindevice',
    flex: 1,
    margin: 12,
    defaults: {
        margin: 12
    },
    items: [{
        xtype: 'devicetype',
        width: 300
    }, {
        xtype: 'devicedata',
        flex: 1
    }]
});