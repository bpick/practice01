Ext.define('Dashboard.view.common.sidenav.header.NavHeader', {
    extend: 'Core.ux.component.HeaderComponent',
    xtype: 'header',
    itemCls: Ext.baseCSSPrefix + 'header',
    platformConfig: {
        desktop: {
            content: 'Dashboard'
        },
        '!desktop': {
            content: 'D'
        }
    },
})