/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window */
	/*global */

	function Explosion(options) {

		var explosion = this;

		explosion.attr = {};

		explosion.set('x', options.x);
		explosion.set('y', options.y);

		explosion.create();

	}

	Explosion.prototype.get = function (key) {
		return this.attr[key];
	};

	Explosion.prototype.set = function (key, value) {
		this.attr[key] = value;
	};

	Explosion.prototype.create = function () {

		var explosion = this,
			explosionNode = doc.createElement('div');

		explosionNode.className = 'explosion';
		explosionNode.style.left = explosion.get('x') + 'px';
		explosionNode.style.top = explosion.get('y') + 'px';

		doc.body.appendChild(explosionNode);

	};


	win.addEventListener('load', function () {

		console.log('load');

		doc.body.addEventListener('click', function (e) {

			console.log('click');

			new Explosion({
				x: e.clientX,
				y: e.clientY
			})

		}, false);

	}, false)

}(window, window.document));