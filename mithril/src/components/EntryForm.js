window.EntryForm = {}

EntryForm.controller = function () {
  var ctrl = this
  ctrl.entry = Entry.vm()

  ctrl.add = function () {
    ctrl.entry.volunteers.push( Entry.volunteerVM() )
  }
  ctrl.remove = function (idx) {
    ctrl.entry.volunteers.splice(idx, 1)
  }
  ctrl.submit = function () {
    Entry.create( ctrl.entry )
    m.route('/')
  }
}

EntryForm.view = function (ctrl) {
  return m('.entry-form', [
    m('h1', "Entry Form"),
    m('h3', "Please enter each volunteer's contact information:"),

    ctrl.entry.volunteers.map(function(volunteer, idx) {
      return m('fieldset', [
        m('legend', "Volunteer #" + (idx+1)),

        m('label', "Name:"),
        m('input[type=text]', {
          value: volunteer.name,
          onchange: function(e) {
            volunteer.name = e.currentTarget.value
          }
        }),
        m('br'),

        m('label', "Email:"),
        m('input[type=text]', {
          value: volunteer.email,
          onchange: function(e) {
            volunteer.email = e.currentTarget.value
          }
        }),
        removeAnchor(ctrl, idx)
      ])
    }),

    m('button', { onclick: ctrl.add }, 'Add another volunteer'),
    m('br'),
    m('button', { onclick: ctrl.submit }, 'Submit')
  ])
}

function removeAnchor (ctrl, idx) {
  if (ctrl.entry.volunteers.length >= 2) {
    return m('button', { onclick: ctrl.remove.papp(idx) }, 'remove')
  }
}
