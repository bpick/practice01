Ext.define('Dashboard.view.desktop.content.subview.device.HeaderContent', {
    extend: 'Ext.Toolbar',
    xtype: 'headercontent',
    ui: 'transparent',
    shadow: false,
    defaults: {
        margin: '0px 36px 0px 12px'
    },
    items: [{
        xtype: 'headertxt'
    }, {
        xtype: 'adddevice'
    }]
});