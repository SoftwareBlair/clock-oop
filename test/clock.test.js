(function() {

  'use strict';

  // your test code here
  var Clock = require('../src/clock.js');
  var chai = require('chai');
  var expect = chai.expect;

  // Test for Clock initialization
  describe('new Clock()', function() {
    it('Should be set to midnight', function() {
      var clock = new Clock();
      expect(clock.hours).to.equal(0);
      expect(clock.minutes).to.equal(0);
      expect(clock.seconds).to.equal(0);
    });
    it('Should take an argument that manually sets the clock', function() {
      var clock = new Clock({
        hours: 16,
        minutes: 30,
        seconds: 15
      });
      expect(clock.hours).to.equal(16);
      expect(clock.minutes).to.equal(30);
      expect(clock.seconds).to.equal(15);
    });
  });

  // Testing to Get and Set Hours
  describe('getHours()', function() {
    xit('Should return the current hours for the clock', function() {
      var clock = new Clock({
        hours: 14
      });
      expect(clock.getHours()).to.equal(14);
    });
  });

  describe('setHours()', function() {
    xit('Should set the hours', function() {
      var clock = new Clock();
      clock.setHours(10);
      expect(clock.getHours()).to.equal(10);
    });
  });

  // Testing to Get and Set Minutes
  describe('getMinutes()', function() {
    xit('Should return the current minutes for the clock', function() {
      var clock = new Clock();
      expect(clock.getMinutes()).to.equal();
    });
  });

  describe('setMinutes()', function() {
    xit('Should set the minutes', function() {
      var clock = new Clock();
      clock.setMinutes();
      expect(clock.getMinutes()).to.equal();
    });
  });

  // Testing to Get and Set Seconds
  describe('getSeconds()', function() {
    xit('Should return the current seconds for the clock', function() {
      var clock = new Clock();
      expect(clock.getSeconds()).to.equal();
    });
  });

  describe('setSeconds()', function() {
    xit('Should set the seconds', function() {
      var clock = new Clock();
      clock.setSeconds();
      expect(clock.getSeconds()).to.equal();
    });
  });

}());
