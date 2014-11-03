
Contacts.view = function (ctrl) {
  var vm = Contacts.vm

  var removeAnchor = function (idx) {
    if (vm.contacts().length >= 2) {
      return m('a', { onclick: ctrl.remove.curry(idx), href:'#' }, 'remove')
    }
  }

  return m('.contacts', [
    m('h3', 'Please enter your contact information:'),
    vm.contacts().map(function (contact, idx) {
      return m('fieldset', [
        m('legend', "Attendee #" + (idx+1)),
        m('label', "Name:"),
        m('input[type=text]', { value: contact.name(), onchange: m.withAttr('value', contact.name) }),
        m('br'),
        m('label', "Email:"),
        m('input[type=text]', { value: contact.email(), onchange: m.withAttr('value', contact.email) }),
        removeAnchor(idx)
      ])
    }),
    m('a', { onclick: ctrl.add, href:'#' }, 'Add another attendee')
  ]);
}
