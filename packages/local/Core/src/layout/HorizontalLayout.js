Ext.define('Core.layout.container.HorizontalLayout', {
    extend: 'Ext.Container',
    alias: 'widget.hlayout',
    alternateClassName: 'HorizontalLayout',
    requires: [
        'Ext.Label'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    classCls: Ext.baseCSSPrefix + 'hoz-layout'
});