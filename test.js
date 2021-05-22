require(require("path").resolve("."));
var data = "";

console.log("\n1. Object Test");

let obj = {
	"html": {
		"body": {
			"h1": "Hello World"
		}
	}
}

obj.toHtml().on('data', c => data += c).on('end', () => check());

setTimeout(() => {
	console.log("\n2. Array Test");

	let ary = [
		{
			"html": {
				"body": {
					"h1": "Hello World"
				}
			}
		}
	]
	ary.toHtml()
		.on('data', c => data += c)
		.on('end', () => check());
}, 1000);

setTimeout(() => {
	console.log("\n3. In-module Test");

	require(require("path").resolve("."))(obj).on('data', c => data += c).on('end', () => check());
}, 2000);

function check () {
	return new Promise((res, rej) => {
		if (data !== "<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>") {
			console.error("Expected Result is NOT SAME. EXITTING...");
			return process.exit(1);
		}
		console.log("You got it working!");
		data = "";
	});
} 
