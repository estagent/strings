export default () => {
  String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s|_|["'([{])+\S/g, match => match.toUpperCase())
  }
  String.prototype.slug = function () {
    return this.replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      .toLowerCase()
  }
  String.prototype.kebab = function () {
    return this.replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-') // replace all spaces and low dash
      .toLowerCase() // convert to lower case
  }
  String.prototype.snake = function () {
    return this.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
      .map(x => x.toLowerCase())
      .join('_')
  }
  String.prototype.camel = function (upper = false) {
    const s = this.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
    return (
      (upper ? s.slice(0, 1).toUpperCase() : s.slice(0, 1).toLowerCase()) +
      s.slice(1)
    )
  }
}
