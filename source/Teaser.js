
if (this.app === undefined) {
	this.app = {};
}

(function(app, global) {

	var Class = function(wrapper, active) {

		wrapper = wrapper instanceof HTMLElement ? wrapper : null;

		this.__wrapper = wrapper;


		this.reset();

	};

	Class.prototype = {

		reset: function(element) {

			element = element instanceof HTMLElement ? element : null;

			if (element !== null) {
				this.__active = element;
			} else {
				this.__active = document.querySelector('#' + this.__wrapper.id + ' > article.active');
			}

			this.__all = document.querySelectorAll('#' + this.__wrapper.id + ' > article');
			this.__id = 0;

			for (var a = 0, l = this.__all.length; a < l; a++) {

				this.__all[a].className = 'visited';

				if (this.__active === this.__all[a]) {
					this.__all[a].className = 'active';
					this.__id = a;
					break;
				}
			}


		},

		next: function() {

			var id = this.__id + 1;

			if (id < this.__all.length) {

				this.__active.className = 'visited';

				this.__active = this.__all[id];
				this.__active.className = 'active';
				this.__id = id;

				if (this.__active.id !== "") {
					global.location.hash = '!' + this.__active.id;
				}

			}

		},

		previous: function() {

			if (this.__id <= 0) return;

			var id = this.__id - 1;

			if (id >= 0) {

				this.__active.className = '';

				this.__active = this.__all[id];
				this.__active.className = 'active';
				this.__id = id;

				if (this.__active.id !== "") {
					global.location.hash = '!' + this.__active.id;
				}

			}

		}

	};


	app.Teaser = Class;

})(this.app, this);

