Ext.define('Dashboard.view.common.topnav.CheckUpc', {
    extend: 'Ext.Button',
    alias: 'widget.checkupc',
    iconCls: 'ico ico-bar-code',
    ui: 'normal toolbar',
    arrow: false,
    menu: {
        anchor: true,
        padding: 10,
        width: 400,
        height: 150,
        xtype: 'checkupcmenu',
        items: [{
            xtype: 'checkupcform'
        }]
    }
});