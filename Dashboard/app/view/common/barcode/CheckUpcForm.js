Ext.define('Dashboard.view.common.barcode.CheckUpcForm', {
    extend: 'Ext.form.FieldSet',
    xtype: 'checkupcform',
    padding: 0,
    items: [{
        xtype: 'textfield',
        reference: 'upc12',
        name: 'upc12',
        itemId: 'upc12',
        required: true,
        label: 'UPC12',
        labelWidth: 120,
        listeners: {
            change: function(tf) {
                var me = this;
                var value = tf.getValue();
                if(value.length > 8) {
                    me.parent.updateCheckDigit(value);
                }
            },
            initialize: function(tf) {
                var me = this,
                    parent = me.parent || me.$initParent
                tf.onAfter('change', parent.updateCounter, parent)
            }
        }
    }, {
        xtype: 'component',
        itemId: 'checkdigit',
        reference: 'checkdigit',
        html: '<h3>Check digit number <b style="color:var(--base-color);">not calculate</b></h3>'
    }, {
        xtype: 'component',
        itemId: 'counter',
        reference: 'counter'/* 
        bind: {
            html: '<span style="font-size: 10px;font-style: italic;">Character counts <b style="color:var(--alert-color);">{upc12.value.length}</b></span>'
        } */
    }],
    getUpcCmp: function() {
        return this.getComponent('upc12');
    },
    getCheckDigitCmp: function() {
        return this.getComponent('checkdigit');
    },
    getCounterCmp: function() {
        return this.getComponent('counter');
    },
    updateCounter: function() {
        var counter = this.getCounterCmp();
        var upc = this.getUpcCmp();
        length = upc.getValue().length;
        counter.setHtml('<span style="font-size: 12px;font-style: italic;">Character counts <b style="color:var(--alert-color);">' + length + '</b></span>');
    },
    updateCheckDigit: function(value) {
        var checkDigit = this.getCheckDigitCmp();
        var checksum = this.validateCheckDigit(value);
        checkDigit.setHtml('<h3>Check digit number <b style="color:var(--base-color);">' + checksum + '</b></h3>');
    },
    validateCheckDigit: function(value) {
        var checkdigit = Barcoder.checksum(value);
        return checkdigit;
    }
});