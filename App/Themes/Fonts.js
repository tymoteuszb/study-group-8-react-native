const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38,
  h2: 34,
  regular: 17,
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
}

export default {
  type,
  size,
  style
}
