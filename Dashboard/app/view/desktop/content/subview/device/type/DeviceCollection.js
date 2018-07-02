Ext.define('Dashboard.view.desktop.content.subview.device.type.DeviceCollection', {
    extend: 'Ext.dataview.List',
    xtype: 'device-collection',
    itemConfig: {
        ui: 'device',
        margin: '12px 0px',
        style: 'border-radius: 6px;'
    },
    itemTpl: new Ext.XTemplate(
        '<div>',
            '<div class="device device-item">',
                '<div class="x-icon-el x-font-icon {iconCls}"></div>',
                '<div class="x-body-el device-text">{text}</div>',
            '</div>',
        '</div>'
    ),
    data: [
        {iconCls: 'md-icon-router', text: 'Routers'},
        {iconCls: 'md-icon-scanner', text: 'Ip Scanners'},
        {iconCls: 'md-icon-toys', text: 'Fans'},
        {iconCls: 'md-icon-desktop-mac', text: 'Mac Computers'},
        {iconCls: 'ico ico-light-bulb', text: 'Hue Lights'},
        {iconCls: 'md-icon-kitchen', text: 'Kitchen'},
    ]
});