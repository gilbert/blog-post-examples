(function() {

  window.Entry = {}

  var store = []
  var idCounter = 1

  Entry.all = function () {
    return store
  }

  Entry.create = function (attrs) {
    attrs.id = (idCounter += 1)
    store.push(attrs)
    return attrs
  }

})()
