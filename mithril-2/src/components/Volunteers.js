(function () {

  window.Volunteers = {

    view (vnode) {
      var attrs = vnode.attrs

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
            removeAnchor(attrs, idx)
          ])
        }),

        m('button', { onclick: () => attrs.add() }, 'Add another volunteer'),
      ])
    }
  }


  function removeAnchor (attrs, idx) {
    if (attrs.volunteers.length >= 2) {
      return m('button', { onclick: () => attrs.remove(idx) }, 'remove')
    }
  }

})()
