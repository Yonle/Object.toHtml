const { PassThrough } = require("stream");
const filter = ["toHtml", "attrOnly", "attr"];

Object.prototype.toHtml = function toHtml ( c = new PassThrough(), noDoctype ) {
 	let obj = this;
	if (!noDoctype) c.write("<!DOCTYPE html>");
	if (obj[0]) {
		obj.forEach((val, num) => {
			if (typeof val == "object") {
				val.toHtml(c, true);
			} else {
				c.write(`<${val}>`);
			}
		});
		c.end();
		return c;
	}
	for ( let i in obj ) {
		if (filter.includes(i.split(" ")[0])) continue;
	    if (typeof obj[i] == "object") {
	    	if (obj[i].attrOnly) {
	    		c.write(`<${i}`);
	    		for ( let name in obj[i] ) {
	    			if (filter.includes(name.split(" ")[0])) continue;
	    			c.write(` ${name}="${obj[i][name]}"`);
	    		}
	    		c.write(">");
	    		continue;
	    	} else {
	    		if (obj[i].attr && typeof obj[i].attr == "object") {
					c.write(`<${i}`);
					for ( let name in obj[i].attr ) {
						if (filter.includes(name.split(" ")[0])) continue;
						c.write(` ${name}="${obj[i].attr[name]}"`);
					}
					c.write(">");
	    		} else {
	        		c.write(`<${i}>`);
	        	}
				obj[i].toHtml(c, true);
				c.write(`</${i.split(" ")[0]}>`);
	    		continue;
	    	}
	    }
		c.write(`<${i}>${obj[i]}</${i.split(" ")[0]}>`);
	}

	if (!noDoctype) c.end();
	return c;
}
