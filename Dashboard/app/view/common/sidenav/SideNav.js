Ext.define('Dashboard.view.common.sidenav.SideNav', {
    extend: 'VerticalLayout',
    alias: 'widget.sidenav',
    cls: Ext.baseCSSPrefix + 'sidenav',

    defaultWidth: 260,
    collapseWidth: 76,
    items: [{
        xtype: 'navheader',
        height: 75
    }, {
        xtype: 'treemenu',
        flex: 1
    }, {
        xtype: 'config',
        ui: 'normal',
        height: 68
    }],
    switchWidth: function() {
        var collapse = this.checkCollapse();
        this.collapse = collapse;
        var newWidth = this.getNewWidth(collapse);
        this.setWidth(newWidth);
    },
    getNewWidth: function(collapse) {
        return collapse ? this.collapseWidth : this.defaultWidth;
    },
    checkCollapse: function() {
        var currentWidth = this.getWidth();
        return currentWidth == this.defaultWidth;
    },
    updateNavHeader: function(content) {
        var navHeader = this.getNavHeader();
        navHeader.setHeaderContent(content)
    },
    getNavHeader: function() {
        return this.down('navheader');
    }
});