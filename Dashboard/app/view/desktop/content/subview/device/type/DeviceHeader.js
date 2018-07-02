Ext.define('Dashboard.view.desktop.content.subview.device.type.DeviceHeader', {
    extend: 'Ext.Component',
    xtype: 'deviceheader',
    tpl: new Ext.XTemplate(
        '<div style="padding: 4px;">',
            '<h5 style="font-weight:normal;">Choose Device Type</h5>',
            '<div class="device device-selected">',
                '<div class="x-icon-el x-font-icon {iconCls}"></div>',
                '<div class="x-body-el">{text}</div>',
            '</div>',
        '</div>'
    ),
    data: {
        iconCls: 'md-icon-apps',
        text: 'All Devices'
    }
});