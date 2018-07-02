Ext.define('Core.ux.component.HeaderComponent', {
    extend: 'Ext.Component',
    xtype: 'headercomponent',
    /**
     * @cfg {String} itemCls
     * The CSS class to apply to item element
     */
    itemCls: '',
    iconCls: '',
    config: {
        content: ''
    },
    initialize: function () {
        var me = this;
    },
    getTemplate: function () {
        var itemCls = this.itemCls || '';
        return [
            {
                //it needs an inner so it can be centered within the mask, and have a background 
                tag: 'h2',
                reference: 'headerContent',
                cls: itemCls
            }
        ];
    },
    updateContent: function(content) {
        var h2 = this.headerContent;
        h2.setHtml(content);
        return content;

    }
});