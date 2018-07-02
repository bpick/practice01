Ext.define('Dashboard.view.common.sidenav.NavHeader', {
    extend: 'Ext.Container',
    xtype: 'navheader',
    cls: Ext.baseCSSPrefix + 'nav-header',
    layout: 'center',
    items: [{
        xtype: 'header'
    }],
    setHeaderContent: function(content) {
        var header = this.getHeaderComponent();
        header.setContent(content);
    },
    getHeaderComponent: function() {
        return this.down('header');
    }
    
});