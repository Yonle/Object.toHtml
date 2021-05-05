Object.prototype.toHtml = function toHtml ( c, noDoctype ) {
 	let obj = this;
	if (!noDoctype) c.write("<!doctype html>");
	for ( let i in obj ) {
		if (i == "toHtml") continue;
	    if (typeof obj[i] == "object") {
	        c.write(`<${i}>`);
			obj[i].toHtml(c, true);
			c.write(`</${i}>`);
	    	continue;
	    }
		c.write(`<${i}>${obj[i]}</${i}>`);
	}
	() => c.end();
}
