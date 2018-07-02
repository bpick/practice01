Ext.define('Dashboard.profile.Desktop', {
    extend: 'Core.profile.Base',
    requires:[
        'Core.profile.Base'
    ],

    mainView: 'Dashboard.view.desktop.Main',
    controllers: ['Dashboard.controller.desktop.DesktopController'],
    launch: function(profile) {
        ProfileUtil.set('profile', this.$className);
        // launch profile
        console.log(Ext.String.format('launch {0} profile', this.$className));
    },
    isActive: function () {
        console.log('check desktop profile');
        return Ext.os.is.Desktop;
    }
});
