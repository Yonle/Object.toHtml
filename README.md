<center>
	<h1>Object.toHtml</h1>
	<p>A simple package that let's you to convert Object into HTML!</p>
</center>

## How to use
```javascript
require("object.tohtml");
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

obj.toHtml(process stdin);
// <!doctype html><html><head><title>Hello world!</title></head><body><h1>Hello world!</h1></body></html>
```

# API
## `argsOnly`
`argsOnly` is used for filling a argument into a tag like `meta` or `img`. It's used for Filling all required argument in `meta` or `img` tag.
#### Example 1
```json
{
	meta: {
		argsOnly: true,
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
		argsOnly: true,
		src: "..."
	}
}
```
Writes:
```html
<img src="...">
```

## `withCloseTag`
`withCloseTag` is used for a tag like `script`, Same as `argsOnly` does but with close tag.

```json
{
	script: {
		withCloseTag: true,
		src: "..."
	}
}
```
Writes:
```html
<script src="..."></script>
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
