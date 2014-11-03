
Contacts = {}

Contacts.model = function () {
  this.name  = m.prop('[Your name]');
  this.email = m.prop('[Your email]');
};

Contacts.vm = {
  contacts: m.prop( [new Contacts.model()] )
}

Contacts.controller = function () {
  var vm = Contacts.vm
  var ctrl = this

  ctrl.add = function () {
    var newModel = new Contacts.model()
    vm.contacts().push(newModel)
  }
  ctrl.remove = function (idx) {
    vm.contacts().splice(idx, 1)
  }
}
