Ext.define('Dashboard.profile.Tablet', {
    extend: 'Core.profile.Base',
    requires:[
        'Core.profile.Base'
    ],

    mainView: 'Dashboard.view.tablet.Main',
    controllers: ['Dashboard.controller.tablet.TabletController'],
    launch: function(profile) {
        ProfileUtil.set('profile', this.$className);
        // launch profile
        console.log(Ext.String.format('launch {0} profile', this.$className));
    },
    isActive: function () {
        console.log('check tablet profile');
        return Ext.platformTags.tablet;
    }
});
