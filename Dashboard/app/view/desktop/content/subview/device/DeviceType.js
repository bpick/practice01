Ext.define('Dashboard.view.desktop.content.subview.device.DeviceType', {
    extend: 'Ext.Panel',
    alias: 'widget.devicetype',
    header: false,
    padding: 12,
    items: [{
        xtype: 'deviceheader'
    }, {
        xtype: 'device-collection'
    }]
});