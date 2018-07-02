Ext.define('Dashboard.view.desktop.content.subview.device.main.DeviceInfoCollection', {
    extend: 'Ext.dataview.DataView',
    xtype: 'device-info-collection',
    cls: Ext.baseCSSPrefix + 'device-info',
    inline: true,
    bodyPadding: 12,
    itemTpl: new Ext.XTemplate(
        '<div class="device-info {[this.determineState(values.State)]}">',
            '<div class="metadata">',
                '<div class="state {[this.determineState(values.State)]}">{[this.determineState(values.State)]}</div>',
                '<div class="x-icon-el x-font-icon manufacturer {ManufacturerIconCls}"></div>',
            '</div>',
            '<div class="data">',
                '<h3 class="name" style="margin-bottom:6px;">{Name}</h3>',
                '<span class="x-icon-el x-font-icon md-icon-location-on location"></span> {Location}',
            '</div>',
        '</div>',
        {
            determineState: function(state) {
                var status = state ? 'on' : 'off';
                return status;
            }
        }
    ),
    data: [
        {Name: 'Router 12849', Manufacturer: 'IBM', ManufacturerIconCls: 'ico ico-brand-ibm', Location: 'West Willard', State: true},
        {Name: 'Firewall 882', Manufacturer: 'Huawei', ManufacturerIconCls: 'ico ico-brand-huawei', Location: 'East Dakoto', State: false},
        {Name: 'Load Balancer 1', Manufacturer: 'Hp', ManufacturerIconCls: 'ico ico-brand-hp', Location: 'New Elenor', State: false},
        {Name: 'Switch 88', Manufacturer: 'IBM', ManufacturerIconCls: 'ico ico-brand-ibm', Location: 'West Kawanda', State: false},
        {Name: 'iMac 2015', Manufacturer: 'Apple', ManufacturerIconCls: 'ico ico-brand-apple', Location: 'East Lao', State: true}
    ]
});