(function () {

  window.EntryForm = {

    oninit (vnode) {
      vnode.state.entry = Entry.vm()
    },

    view (vnode) {
      var state = vnode.state

      return m('.entry-form', [
        m('h1', "Entry Form"),
        m('h3', "Please enter each volunteer's contact information:"),

        state.entry.volunteers.map(function(volunteer, idx) {
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
            removeAnchor(state, idx)
          ])
        }),

        m('button', { onclick: () => add(state) }, 'Add another volunteer'),
        m('br'),
        m('button', { onclick: () => submit(state) }, 'Submit')
      ])
    }
  }

  function removeAnchor (state, idx) {
    if (state.entry.volunteers.length >= 2) {
      return m('button', { onclick: () => remove(state, idx) }, 'remove')
    }
  }

  function add (state) {
    state.entry.volunteers.push( Entry.volunteerVM() )
  }
  function remove (state, idx) {
    state.entry.volunteers.splice(idx, 1)
  }
  function submit (state) {
    Entry.create( state.entry )
    m.route.set('/')
  }

})()
