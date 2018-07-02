Ext.define('Dashboard.view.desktop.content.subview.device.main.DeviceData', {
    extend: 'Ext.Panel',
    alias: 'widget.devicedata',
    header: false,
    items: [{
        xtype: 'component',
        html: '<h4 style="font-weight: normal;margin-left: 24px;">FILTER BY</h4>'
    },{
        xtype: 'mainfilters'
    }, {
        xtype: 'component',
        html: '<h4 style="font-weight: normal;margin-left: 24px;margin-top: 36px;">DEVICES</h4>'
    }, {
        xtype: 'device-info-collection'
    }]
});