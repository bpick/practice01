
'use strict';

/*!
 * Barcoder v2.0.0
 * reference: https://github.com/dominiklessel/node-barcoder
 * The MIT License (MIT)
 * Copyright (c) 2014 Dominik Lessel
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {

  /**
   * Version
   */

  var version = '2.0.0';

  /**
   * Config
   */

  var validationRegex = /^\d{8,14}$/;

  /**
   * Converts strings to intergers
   *
   * @param  {String} numString
   * @return {Integer}
   * @api private
   */
  var toInt = function( numString ) {
    return parseInt( numString, 10 );
  };

  /**
   * Tests if a number is odd
   *
   * @param  {Integer} num
   * @return {Boolean}
   * @api private
   */
  var isOdd = function( num ) {
    return (num % 2) === 1;
  }

  /**
   * Calculates a checksum (Modulo 10)
   * GTIN implementation factor 3
   *
   * @param  {String/Integer} gtin
   * @return {Integer}
   * @api private
   */
  var calculateChecksum = function( gtin ) {

    gtin = parseInt( gtin, 10 ).toString();
    var chunks = gtin.split('').map( toInt ).reverse();
    var checksum = 0;

    // Remove first chuck (checksum)
    chunks.shift();

    // sum numbers and multiply accordingly
    chunks.forEach(function( number, index ) {
      checksum += isOdd(index) ? number : number*3;
    });

    // calc checksum
    checksum %= 10;
    checksum = (checksum === 0) ? 0 : (10 - checksum);

    return checksum;

  };

  /**
   * Barcoder class
   *
   * @param {string}  format    Ignored in v2
   * @param {Object}  options   Ignored in v2
   * @api public
   */
  var Barcoder = function ( format, options ) {};

  /**
   * Validates a barcode
   *
   * @param  {string}  barcode   EAN/GTIN barcode
   * @return {Boolean}
   * @api public
   */
  Barcoder.prototype.validate = function( barcode ) {

    var self = this;

    if ( validationRegex.exec( parseInt(barcode).toString() ) === null ) {
      return false;
    }

    var checksum = parseInt( barcode.substring( barcode.length - 1 ), 10 );
    var calcChecksum = calculateChecksum( barcode );

    return ( checksum === calcChecksum );

  };

  /**
   * calculate a checksum from input barcode
   * @param {string} barcode   EAN/GTIN barcode
   * @return {int}
   * @api public
   */
  Barcoder.prototype.checksum = function(barcode) {
    var self = this;

    if ( validationRegex.exec( parseInt(barcode).toString() ) === null ) {
      return false;
    }
    var calcChecksum = calculateChecksum( barcode );
    return parseInt(calcChecksum, 10);
  } 

  /**
   * Export
   */

  if ( 'undefined' !== typeof module && module.exports ) {
    module.exports = new Barcoder();
    exports.version = version;
  }

  if ( 'undefined' === typeof ender ) {
    this['Barcoder'] = new Barcoder();
  }

  if ( 'function' === typeof define && define.amd ) {
    define('Barcoder', [], function () {
      return new Barcoder();
    });
  }

}).call( this );