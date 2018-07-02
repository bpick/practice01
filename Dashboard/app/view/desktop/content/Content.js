Ext.define('Dashboard.view.desktop.content.Content', {
    extend: 'HorizontalLayout',
    alias: 'widget.content',
    style: 'background-color: #F4F8F9;',
    items: [{
        xtype: 'maincontent',
        flex: 1
    }, {
        xtype: 'details',
        width: 362
    }]
});