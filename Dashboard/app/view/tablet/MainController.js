Ext.define('Dashboard.view.tablet.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabletmain',
    toggleSideNav: function() {
        this.updateSideNavWidth();
    },
    updateSideNavWidth: function() {
    },
    getSideNav: function() {
        var sideNav = this.lookup('sidenav');
        return sideNav;
    }
})