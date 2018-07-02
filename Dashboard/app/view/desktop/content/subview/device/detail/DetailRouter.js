Ext.define('Dashboard.view.desktop.content.subview.device.detail.DetailRouter', {
    extend: 'Ext.Component',
    xtype: 'detailrouter',
    cls: Ext.baseCSSPrefix + 'detail',
    tpl: new Ext.XTemplate(
        '<div class="device-detail">',
            '<div class="data">',
                '<div class="x-icon-el x-font-icon icon {IconCls}"></div>',
                '<div class="info">',
                    '<h2 style="font-weight: normal;margin-top: 0px;">{Name}</h2>',
                    '<div class="meter">',
                        '<span style="height: 3px;width: {[this.calcDataUsage(values.TotalData, values.UsedData)]}%"></span>',
                    '</div>',
                    '<span class="meter-info">{UsedData} {Unit}/{TotalData} {Unit}</span>',
                    '<div class="ip"><span>IP:</span> {IPv6}</div>',
                '</div>',
            '</div>',
            '<div class="metadata">',
                '<div class="part">',
                    '<div class="status">',
                        '<h5 style="margin: 0.3rem;font-weight: normal;">Status</h5>',
                        '<div class="state {[this.determineState(values.State)]}">{[this.determineState(values.State)]}</div>',
                        '<div class="switch {[this.determineState(values.State)]}">{[this.determineSwitchByState(values.State)]}</div>',
                    '</div>',
                    '<div class="manufacturer">',
                        '<h5 style="margin: 0.3rem;font-weight: normal;">Manufacturered By</h5>',
                        '<div class="x-icon-el x-font-icon icon {ManufacturerIconCls}"></div>',
                    '</div>',
                '</div>',
                '<div class="part">',
                    '<div class="hwversion">',
                        '<h5 style="margin-top: 0.3rem;font-weight: normal;">Hardware Version</h5>',
                        '<div>{HardwareVersion}</div>',
                    '</div>',
                    '<div class="swversion">',
                        '<h5 style="margin-top: 0.3rem;font-weight: normal;">Software Version</h5>',
                        '<div>{SoftwareVersion}</div>',
                    '</div>',
                '</div>',
                '<div class="full-location">',
                    '<h3 style="margin: 0.3rem 0px;font-weight: normal;">Building</h3>',
                    '<div>{FullLocation}</div>',
                    '<div>{State}</div>',
                '</div>',
                '<div class="more-infor">',
                    '<div><span class="label">Room</span><span class="infor">{Room}</span></div>',
                    '<div><span class="label">Circuit</span><span class="infor">{Circuit}</span></div>',
                    '<div><span class="label">Rack</span><span class="infor">{Rack}</span></div>',
                '</div>',
            '</div>',
        '</div>', {
            calcDataUsage: function(total, use) {
                var percentage = ( Number.parseFloat(use) / Number.parseFloat(total) ) * 100;
                return Number.parseFloat(percentage);
            },
            determineState: function(state) {
                var status = state ? 'offline' : 'offline';
                return status;
            },
            determineSwitchByState: function(state) {
                var switchTxt = state ? 'Switch off' : 'Switch on';
                return switchTxt;
            }
        }
    ),
    data: {
        Type: 'Router',
        Name: 'Router 12849',
        IconCls: 'md-icon-router',
        TotalData: 40.53,
        UsedData: 8.08,
        Unit: 'GB',
        IPv6: '2001:db8:85a3:0:0:8a2e:370:7334',
        State: true,
        Manufacturer: 'IBM',
        ManufacturerIconCls: 'ico ico-brand-ibm',
        HardwareVersion: 'V 6.29',
        SoftwareVersion: 'V 5.4',
        FullLocation: 'Data Centre 45, Irvine',
        State: 'California',
        Room: '749',
        Circuit: '3492B',
        Rack: '11'
    }
});