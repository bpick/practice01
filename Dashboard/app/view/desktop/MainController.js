Ext.define('Dashboard.view.desktop.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    toggleSideNav: function() {
        
        this.updateSideNavWidth();
    },
    updateSideNavWidth: function() {
        var sideNav = this.getSideNav();
        sideNav.switchWidth();
        var content = sideNav.collapse ? "D": "Dashboard";
        sideNav.updateNavHeader(content);
    },
    getSideNav: function() {
        var sideNav = this.lookup('sidenav');
        return sideNav;
    }
})