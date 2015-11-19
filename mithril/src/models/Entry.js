(function() {

  window.Entry = {}

  var store = []
  var idCounter = 1

  Entry.all = function () {
    return store
  }

  Entry.create = function (attrs) {
    attrs.id = (idCounter += 1)
    attrs.enteredAt = Date.now()
    store.push(attrs)
    return attrs
  }

  Entry.vm = function () {
    return {
      enteredAt: null,
      volunteers: [ Entry.volunteerVM() ]
    }
  }

  Entry.volunteerVM = function () {
    return {
      name: '[Your name]',
      email: '[Your email]'
    }
  }
})()
