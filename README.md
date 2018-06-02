# cooltilities

Some simple, common style utilities to use with composable css-in-js libraries like [emotion](https://github.com/emotion-js/emotion) and [vudu](https://github.com/dhunninghake/vudu).

## Usage

#### Basic

`cooltilities` returns an object with an assortment of color and layout utilities. To see them all, check out the [docs](https://lalena-co.github.io/cooltilities/).

```
import cooltilities from 'cooltilities'

console.log(cooltilities)

// returns {
//    block: { display: 'block' },
//    flex: { display: 'flex' },
//    r0: { right: 0 },
//    ...etc,
// }
```

#### Custom Colors

If you'd like to generate utilities for custom colors, `cooltilities` can be configured with a colors object and will return all the utilities including your custom colors.
```
import { generate } from 'cooltilities'

console.log(generate({ red: 'red' }))

// returns {
//    block: { display: 'block' },
//    flex: { display: 'flex' },
//    red: { color: 'red' },
//    bgRed: { backgroundColor: 'red' },
//    ...etc,
// }
```

## Examples

### emotion

```
import c from 'cooltilities'
import { css } from 'emotion'
import styled from 'react-emotion'

const Component = styled('div')(css(c.flex, c.alignCenter, c.justifyCenter))
```

### vudu

```
import c from 'cooltilities'
import v from 'vudu'

const styles = v({
  component: { '@composes': [c.flex, c.alignCenter, c.justifyCenter] }
})

const Component = ({ children }) => (
  <div className={styles.component}>{children}</div>
)
```

## Documentation

Documentation can be found at:  [https://lalena-co.github.io/cooltilities/](https://lalena-co.github.io/cooltilities/)

#### Note

All documentation follows [jsDoc](http://usejsdoc.org/) and can be regenerated using [documentation.js](https://github.com/documentationjs/documentation), by typing the following in Terminal:

`npm run docs:build`

Or if you'd like to keep it running while you work:

`npm run docs:build:watch`
