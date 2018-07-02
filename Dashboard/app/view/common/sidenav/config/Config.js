Ext.define('Dashboard.view.common.sidenav.menu.Config', {
    extend: 'Ext.grid.Tree',
    xtype: 'config',
    requires: [
    ],
    itemId: 'config',
    store: {
        type: 'config',
        rootVisible: false
    },
    cls: 'no-header-container-padding',
    hideHeaders: true,
    scrollable: true,
    padding: 0,
    itemConfig: {
        ui: 'iot-row'
    },
    selectable: false,
    columns: [{
        xtype: 'treecolumn',
        text: 'Name',
        dataIndex: 'text',
        flex: 1 ,
        cell: {
            ui: 'iot-treecell'
        } 
    }],
    listeners: {
        selectionchange: function(tree, selected, eOpts) {
            var firstSelected = selected[0];
        }
    }
});