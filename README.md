<div align="center">
	<h1>Object.toHtml</h1>
	<p>A simple package that let's you to convert Object into HTML!</p>
</div>

## How to use
```javascript
require("object.tohtml");
const fs = require("fs");
let obj = {
	html: { 
	  head: { 
	    title: 'Hello world!' 
	  }, 
      body: { 
	    h1: 'Hello world!' 
	  } 
	}
}

obj.toHtml(fs.createWriteStream("index.html"));
// <!doctype html><html><head><title>Hello world!</title></head><body><h1>Hello world!</h1></body></html>
```

# API
## `flagOnly`
`flagOnly` is used to adding a flag into a tag like `meta` or `img`. Mostly used for Filling all required flag in `meta` or `img` tag.
#### Example 1
```json
{
	meta: {
		flagOnly: true,
		name: "description",
		content: "My website!"
	}
}
```
Writes:
```html
<meta name="description" content="My website!">
```
#### Example 2
```json
{
	img: {
		flagOnly: true,
		src: "..."
	}
}
```
Writes:
```html
<img src="...">
```

## `flag`
`flag` is a object that used to adding a flag into a element

```json
{
	div: {
		flag: {
			class: "element"
		},
		h1: "Hello World!"
	}
}
```
Writes:
```html
<div class="element"><h1>Hello World!</h1></div>
```

## Alternative way to Writting argument
We aren't only giving a trick like that, We're also doing `HTML Argument Mode` on this package!
```json
{
	"div id='box'": {
		....
	}
}
```
Writes: 
```html
<div id='box'> ..... </div>
```
# Community
- [Discord](https://dsc.gg/yonle)
- [Telegram](https://t.me/yonlecoder)
