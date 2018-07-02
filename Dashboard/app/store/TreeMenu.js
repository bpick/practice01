Ext.define('Dashboard.store.TreeMenu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    storeId: 'menu',
    autoLoad: false,
    root: {
        text: 'root',
        expanded: true,
        children: [
            {
                id: 'dashboard', iconCls: 'md-icon-layers', text: 'Dashboard', leaf: true
            },
            {
                id: 'devices', iconCls: 'md-icon-apps', text: 'Components', children: [
                    {id: 'buttons', iconCls: 'md-icon-touch-app', text: 'Buttons', leaf: true},
                    {id: 'panels', iconCls: 'md-icon-payment', text: 'Panels', leaf: true}
                ]
            }
        ]
    },
    updateRootVisible: function(rootVisible) {
        var rootNode = this.getRoot(),
            data;
        if (rootNode) {
            data = this.getData();
            if (rootVisible) {
                data.insert(0, rootNode);
            } else {
                data.remove(rootNode);
            }
        }
    }
});