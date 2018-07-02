Ext.define('Dashboard.view.common.topnav.TopNav', {
    extend: 'Ext.Toolbar',
    alias: 'widget.topnav',
    shadow: false,
    ui: 'normal',
    defaults: {
        margin: '0px 8px'
    },
    items: [{
        platformConfig: {
            desktop: {
                hidden: false
            },
            '!desktop': {
                hidden: true
            }
        },
        xtype: 'togglenav',
        handler: 'toggleSideNav'
    }, {
        xtype: 'spacer'
    }, {
        xtype: 'topsearch',
        minWidth: 260,
        ui: 'faded'
    }, {
        xtype: 'topavatar',
        src: Ext.getResourcePath('avatar/bob.jpg', null, 'images'),
        width: 36,
        height: 36
    }]
});