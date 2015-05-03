Contacts = {}

Contacts.model = function () {
  this.name  = m.prop('[Your name]')
  this.email = m.prop('[Your email]')
};

Contacts.controller = function (options) {
  var ctrl = this
  ctrl.contacts = options.contacts

  ctrl.add = function () {
    var newModel = new Contacts.model()
    ctrl.contacts().push(newModel)
  }
  ctrl.remove = function (idx) {
    ctrl.contacts().splice(idx, 1)
  }
}

Contacts.view = function (ctrl) {

  return m('.contacts', [
    ctrl.contacts().map(function (contact, idx) {
      return m('fieldset', [
        m('legend', "Attendee #" + (idx+1)),
        m('label', "Name:"),
        m('input[type=text]', { value: contact.name(), onchange: m.withAttr('value', contact.name) }),
        m('br'),
        m('label', "Email:"),
        m('input[type=text]', { value: contact.email(), onchange: m.withAttr('value', contact.email) }),
        removeAnchor(ctrl, idx)
      ])
    }),
    m('a', { onclick: ctrl.add, href:'#' }, 'Add another attendee')
  ])
}

function removeAnchor (ctrl, idx) {
  if (ctrl.contacts().length >= 2) {
    return m('a', { onclick: ctrl.remove.papp(idx), href:'#' }, 'remove')
  }
}
