/**
 * @refer http://docs.sencha.com/touch/2.4/core_concepts/device_profiles.html
 */
Ext.define('Core.profile.Base', {
    extend: 'Ext.app.Profile',
    launch: function(profile) {
        // launch profile
        console.log(Ext.String.format('launch {0} profile', this.$className));
    }
});