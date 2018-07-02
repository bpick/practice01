Ext.define('Dashboard.view.common.barcode.CheckUpcMenu', {
    extend: 'Ext.menu.Menu',
    xtype: 'checkupcmenu',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'checkupcform',
        flex: 1
    }]
});