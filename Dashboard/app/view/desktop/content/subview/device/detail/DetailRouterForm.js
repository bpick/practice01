Ext.define('Dashboard.view.desktop.content.subview.device.detail.DetailRouterForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.routerform',
    defaultType: 'combobox',
    bodyPadding: '0px 12px',
    defaults: {
        margin: '18px 0px',
        ui: 'normal normal-cbx',
        queryMode: 'local',
        displayField: 'value',
        valueField: 'value',
    },
    items: [{
        name: 'health',
        placeholder: 'HEALTH',
        margin: '0px 0px 18px 0px',
        store: [
            {value: 'GOOD'},
            {value: 'BAD'},
            {value: 'NORMAL'}
        ]
    }, {
        name: 'location',
        placeholder: 'LOCATION',
        store: [
            {value: 'California'}
        ]
    }, {
        name: 'interfaces',
        placeholder: 'INTERFACES',
        store: [
            {value: 'Fast Ethernet'},
            {value: 'ISDN'},
            {value: 'Async Serial'},
            {value: 'FDDI'},
            {value: 'Ethernet'},
            {value: 'Sync Serial'}
        ]
    }, {
        name: 'vlans',
        placeholder: 'VLANS',
        store: [
            {value: 'VLAN 1'},
            {value: 'VLAN 2'},
            {value: 'VLAN 3'},
            {value: 'VLAN 4'},
            {value: 'VLAN 5'},
            {value: 'VLAN 6'},
            {value: 'VLAN 7'},
            {value: 'VLAN 8'}
        ]
    }, {
        name: 'vrfs',
        placeholder: 'VRFS',
        store: [
            {value: 'On'},
            {value: 'Off'}
        ]
    }]
});