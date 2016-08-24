# log-level

A simple package to colorize the logging output

## INSTALLATION

    $ sudo npm install log-level --save

## USAGE

```js
const logger = require('log-level');

logger.info('Processing Resources...');
```

## API

* **Info message**

```js
logger.info('Info message');
```

* **Success message**

```js
logger.succes('Success message');
```

* **Warning message**

```js
logger.warning('Warning message');
```

* **Error message**

```js
logger.error('Error message');
```

* **Highlight message**

```js
logger.highlight('Highlight message');
```

* **Custom message**

```js
logger.custom('[MIMAREC]', 'random', 'Error message');
```

Custom message receives two mandatory arguments, the rest are interpreted as messages to be concatenated:

* Title
* Color: Based on colors and styles from [colors](https://www.npmjs.com/package/colors#colors-and-styles)
* Messages


## EXAMPLE

![alt tag](https://raw.githubusercontent.com/mimarec/log-level/master/images/output.png)

## DEPENDENCIES

* [colors](https://www.npmjs.com/package/colors)

## LICENSE

MIT License

Copyright (c) 2016 Miguel María Martínez Echeverría

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
