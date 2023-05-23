/*global QUnit*/

sap.ui.define([
	"y99/bps/controller/ListaBPs.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListaBPs Controller");

	QUnit.test("I should test the ListaBPs controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
