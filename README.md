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
## `attrOnly`
`attrOnly` is used to adding a Attributeinto a tag like `meta` or `img`. Mostly used for Filling all required Attributein `meta` or `img` tag.
#### Example 1
```json
{
	"meta": {
		"attrOnly": true,
		"name": "description",
		"content": "My website!"
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
	"img": {
		"attrOnly": true,
		"src": "..."
	}
}
```
Writes:
```html
<img src="...">
```

## `attr`
`attr` is a object that used to adding a Attributeinto a element

```json
{
	"div": {
		"attr": {
			"class": "element"
		},
		"h1": "Hello World!"
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
# FAQ
## 1. I can't add a same element multiple time / When i add 2 `br` element, It writes 1 Only!!
In `Object()`, When you write a prototype that already Exist, It'll overwrite it. To bypass this, Object.toHtml has Array Method, Which let's developer to create a multiple element without overwritting another element (Added in v2.0.0):
```json
[
	"br",
	"br"
]
```
Writes:
```html
<br><br>
```

This can also done inside non-array Object
```json
{
	"div": [
		"br",
		"br"
	]
}
```
Writes:
```html
<div><br><br></div>
```
Unfortunately, This is way more worse, Because we can't making 2 `div` element.

```json
{
	"div": [
		"br",
		"br"
	],
	"div": [
		"br",
		"br"
	]
}
```
Writes:
```html
<div><br><br></div>
```
Because of that, We're doing the 2nd Method. Writting a Array. Fortunately, This method is completely Works as well:
```json
[
  "html",
  { "h1": "Hello World", "p": "It's nice to see you there!" },
  "br",
  {
    "h1": "This is the 2nd h1!",
    "p": "See? The Array Method works as well!"
  },
  "/html"
]
```
Writes:
```json
<!DOCTYPE html><html><h1>Hello World</h1><p>It's nice to see you there!</p><br><h1>This is the 2nd h1!</h1><p>See? The Array Method works as well!</p></html>
```

## 2. How can i add a Attribute
Add `attr`
```html
{
	"div": {
		"attr": {
			"class": "navbar-top"
		},
		"....": "...."
	}
}
```
Writes:
```html
<div class="navbar-top"><....>....</....></div>
```

## 3. How can i write a Attributein a element like `meta`,`img` and some tag like that in JSON?
First off, We need to set `attrOnly` as `true`.
```json
{
	"meta": {
		"attrOnly": true,
		"name": "viewport",
		"content": "width:device-width, initial-scale=1"
	}
}
```
Writes:
```html
<meta name="viewport" content="width:device-width, initial-scale=1">
```
## 4. How can i add a Attributein in Array Method?
Just do a thing like Object does
```json
[
	{
		"div": {
			"attr": {
				"class": "element1"
			}
		}
	},
	{
		"div": {
			"attr": {
				"class": "element2"
			}
		}
	}
]
```
Writes:
```html
<div class="element1"></div><div class="element2"></div>
```

Of course. Doing a thing like HTML does is still Looking Fine as well.
```json
[
	"div align='center'"",
	"/div"
]
```
Writes:
```html
<div align="center"></div>
```

Any question? Ask in our Discord Server/Telegram Group!
# Community
- [Discord](https://dsc.gg/yonle)
- [Telegram](https://t.me/yonlecoder)
