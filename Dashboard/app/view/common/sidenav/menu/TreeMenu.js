Ext.define('Dashboard.view.common.sidenav.menu.TreeMenu', {
    extend: 'Ext.grid.Tree',
    xtype: 'treemenu',
    requires: [
    ],
    itemId: 'treemenu',
    store: {
        type: 'menu',
        rootVisible: false
    },
    cls: 'no-header-container-padding',
    hideHeaders: true,
    scrollable: true,
    padding: 0,
    itemConfig: {
        ui: 'iot-row'
    },
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