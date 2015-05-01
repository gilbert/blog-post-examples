// Partially apply arguments to a function. Useful for binding
// specific data to an event handler.
// Example:
//
//   var add = function (x,y) { return x + y; }
//   var add5 = add.papp(5)
//   add5(7) //=> 11
//
Function.prototype.papp = function () {
  var slice = Array.prototype.slice
  var fn = this
  var args = slice.call(arguments)
  return function () {
    fn.apply(this, args.concat(slice.call(arguments)))
  }
}

// For more useful function extensions, see:
// https://gist.github.com/mindeavor/13d4593b00b4ee7cea33
