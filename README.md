## metalink.js

### Download
[Latest](//jc3213.github.io/metalink.js/metalink.js)

### HTML
```HTML
<script src="https://jc3213.github.io/metalink.js/metalink.js"></script>
```

### TamperMonkey
```javascript
// @require https://jc3213.github.io/metalink.js/metalink.js
```

## Syntax
```javascript
let file1 = {url: {url: 'https://jc3213.github.io/metalink.js/metalink.js', location: 'en'}, version: '0.1.0'};
let file2 = {url: 'https://github.com/jc3213/metalink.js/archive/refs/heads/main.zip', name: 'metalink.js_by_@jc3213.zip'}
let metalink = new Metalink(file1, file2);
```

## Properties
- [url](#url) **required**
- [name](#name)
- [size](#size)
- [version](#version)
- [language](#language)
- [hash](#hash)
- [metaurl](#metaurl)

### url
- The download url(s) of the file
- **required**
- `string`
- `object`: {*url*, *location*}
  - `url`: *required*
  - `location`: *optional*
- `array`: [*string1*, *string2*, *string3*, ...]
- `array`: [*object1*, *object2*, *object3*, ...]

### name
- The name of the file
- *optional*
- `string`

### size
- The size of the file
- *optional*
- `integer`

### version
- The version of the file
- *optional*
- `string`

### language
- The language of the file
- *optional*
- `string`

### hash
- The hash(es) of the file
- *optional*
- `object`: {*type*, *hash*}
  - `type`: *required*
  - `hash`: *required*
- `array`: [*object1*, *object2*, *object3*, ...]

### metaurl
- The metalink(s) of the file
- *optional*
- `object`: {*type*, *url*}
  - `type`: *required*
  - `url`: *required*
- `array`: [*object1*, *object2*, *object3*, ...]

## Method
- [save](#save)

### save
```javascript
metalink.save(filename);
```
- filename
    - `String`
    - The file name you'd like to save
    - Default `metalink_yymmdd_hhmmss`
