Ext.define('Dashboard.store.ConfigMenu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.config',
    storeId: 'config',
    autoLoad: false,
    root: {
        text: 'root',
        expanded: true,
        children: [
            {
                id: 'config', iconCls: 'md-icon-settings', text: 'Settings', leaf: true
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