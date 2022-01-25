/** @format */

let user = {
	data: {
		a: 1,
		b: 2,
		c: 3,
		d: {
			a1: 1,
			b1: 2,
			c1: 3,
			d1: {
				a2: 3,
				b2: 3,
				c2: 3,
			},
		},
	},
};

function deepFreeze(obj) {
	if (typeof obj !== "object") return;
	for (let key in obj) {
		let val = obj[key];

		if (typeof val === "object") deepFreeze(val);
		if (typeof val === "object") console.log(val);
	}
	return Object.freeze(obj);
}

deepFreeze(user);
