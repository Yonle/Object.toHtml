const filter = ["toHtml", "argsOnly", "withCloseTag", "flag"];

Object.prototype.toHtml = function toHtml ( c, noDoctype ) {
 	let obj = this;
	if (!noDoctype) c.write("<!doctype html>");
	for ( let i in obj ) {
		if (filter.includes(i.split(" ")[0])) continue;
	    if (typeof obj[i] == "object") {
	    	if (obj[i].argsOnly) {
	    		c.write(`<${i}`);
	    		for ( let name in obj[i] ) {
	    			if (filter.includes(name.split(" ")[0])) continue;
	    			c.write(` ${name}="${obj[i][name]}"`);
	    		}
	    		c.write(">");
	    		continue;
	    	} else {
	    		if (obj[i].withCloseTag) {
	    			c.write(`<${i}`);
	    			for ( let name in obj[i] ) {
	    				if (filter.includes(name.split(" ")[0])) continue;
	    				c.write(` ${name}="${obj[i][name]}"`);
	    			}
	    			c.write(`></${i}>`);
	    			continue
	    		} else if (obj[i].flag && typeof obj[i].flag == "object") {
					c.write(`<${i}`);
					for ( let name in obj[i].args ) {
						if (filter.includes(name.split(" ")[0])) continue;
						c.write(` ${name}="${obj[i].args[name]}"`);
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
	setTimeout(() => c.end(), 1);
}
