//https://gist.github.com/Dalimil/3daf2a0c531d7d030deb37a7bfeff454

export default function Vector2(x, y) {
	this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}

Vector2.prototype = {
	set: function(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	},

	clone: function() {
		return new Vector2(this.x, this.y)
	},

	equals: function(vector) {
		return this.x === vector.x && this.y === vector.y;
	},

	add: function(vector) {
		return new Vector2(this.x + vector.x, this.y + vector.y);
	},

	subtract: function(vector) {
		return new Vector2(this.x - vector.x, this.y - vector.y);
	},

	scale: function(scalar) {
		return new Vector2(this.x * scalar, this.y * scalar);
	},

	dot: function(vector) {
		return (this.x * vector.x + this.y + vector.y);
	},

	magnitude: function() {
		return Math.sqrt(this.magnitudeSqr());
	},

	magnitudeSqr: function() {
		return (this.x * this.x + this.y * this.y);
	},

	distance: function (vector) {
		return Math.sqrt(this.distanceSqr(vector));
	},

	distanceSqr: function (vector) {
		let deltaX = this.x - vector.x;
		let deltaY = this.y - vector.y;
		return (deltaX * deltaX + deltaY * deltaY);
	},

	chebyshev: function(vector) {
		return Math.max(
			Math.abs(this.x - vector.x),
			Math.abs(this.y - vector.y)
		);
	},

	normalize: function() {
		let mag = this.magnitude();
		let vector = this.clone();
		if(Math.abs(mag) < 1e-9) {
			vector.x = 0;
			vector.y = 0;
		} else {
			vector.x /= mag;
			vector.y /= mag;
		}
		return vector;
	},

	angle: function() {
		return Math.atan2(this.y, this.x);
	},

	rotate: function(alpha) {
		let cos = Math.cos(alpha);
		let sin = Math.sin(alpha);
		let vector = new Vector2();
		vector.x = this.x * cos - this.y * sin;
		vector.y = this.x * sin + this.y * cos;
		return vector;
	},

	toPrecision: function(precision) {
		let vector = this.clone();
		vector.x = vector.x.toFixed(precision);
		vector.y = vector.y.toFixed(precision);
		return vector;
	},

	toString: function () {
		let vector = this.toPrecision(1);
		return ("[" + vector.x + "; " + vector.y + "]");
	}
};

Vector2.fromArray = function(a) {
	return new Vector2(a[0], a[1]);
}

Vector2.zero = function() {
	return new Vector2(0, 0);
}

Vector2.lerp = function(v1, v2, t) {
	t = Math.min(t, 1); // still allow negative t
	let diff = v2.subtract(v1);
	return this.add(diff.scale(t));
}