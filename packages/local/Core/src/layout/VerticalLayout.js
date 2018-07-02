Ext.define('Core.component.layout.container.VerticalLayout', {
    extend: 'Ext.Container',
    alias: 'widget.vlayout',
    alternateClassName: 'VerticalLayout',
    requires: [
        'Ext.Label'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    classCls: Ext.baseCSSPrefix + 'ver-layout'
});
