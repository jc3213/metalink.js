## Usage

### Download
[Latest](https://jc3213.github.io/metalink.js/metalink.js)

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

### file
- Syntax { `url`, `name`, `size`, `version`, `language`, `hash`, `metaurl` }
- [url](#url-required)
- [name](#name-optional)
- [size](#size-optional)
- [version](#version-optional)
- [language](#language-optional)
- [hash](#hash-optional)
- [metaurl](#metaurl-optional)

### url *`required`*
- The download url(s) of the file
- `string`
- `object`: {*url*, *location*}
  - `url`: *required*
  - `location`: *optional*
- `array`: [*string1*, *string2*, *string3*, ...]
- `array`: [*object1*, *object2*, *object3*, ...]

### name *`optional`*
- The name of the file
- `string`

### size *`optional`*
- The size of the file
- `integer`

### version *`optional`*
- The version of the file
- `string`

### language *`optional`*
- The language of the file
- `string`

### hash *`optional`*
- The hash(es) of the file
- `object`: {*type*, *hash*}
  - `type`: *required*
  - `hash`: *required*
- `array`: [*object1*, *object2*, *object3*, ...]

### metaurl *`optional`*
- The metalink(s) of the file
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
