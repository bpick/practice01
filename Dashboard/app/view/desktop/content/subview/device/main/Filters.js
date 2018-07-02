Ext.define('Dashboard.view.desktop.content.subview.device.main.Filters', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mainfilters',
    cls: Ext.baseCSSPrefix + 'main-filters',
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },
    header: false,
    margin: '0px 16px',
    bodyPadding: '16px 0px',
    defaults: {
        margin: '0px 12px',
        minWidth: 200
    },
    items: [{
        xtype: 'locationfilter',
        name: 'location'
    }, {
        xtype: 'manufacturerfilter',
        name: 'manufacturer'
    }]
});