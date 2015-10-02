
window.Volunteers = {}

Volunteers.controller = function (attrs) {
  var ctrl = this

  ctrl.add = function () {
    attrs.volunteers.push( Entry.volunteerVM() )
  }
  ctrl.remove = function (idx) {
    attrs.volunteers.splice(idx, 1)
  }
}

Volunteers.view = function (ctrl, attrs) {
  return m('.volunteers', [

    attrs.volunteers.map(function(volunteer, idx) {
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
        removeAnchor(ctrl, attrs, idx)
      ])
    }),

    m('button', { onclick: ctrl.add }, 'Add another volunteer'),
  ])
}

function removeAnchor (ctrl, attrs, idx) {
  if (attrs.volunteers.length >= 2) {
    return m('button', { onclick: ctrl.remove.papp(idx) }, 'remove')
  }
}
