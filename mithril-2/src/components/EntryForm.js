(function () {

  window.EntryForm = {
    oninit (vnode) {
      vnode.state.entry = Entry.vm()
      vnode.state.discount = 0
    },

    view (vnode) {
      var state = vnode.state

      return m('.entry-form', [
        m('h1', "Entry Form"),
        m('h3', "Please enter each volunteer's contact information:"),

        m(Volunteers, {
          volunteers: state.entry.volunteers,
          add: () => add(state),
          remove: (idx) => remove(state, idx),
        }),

        m(Total, {
          count: state.entry.volunteers.length,
          discount: state.discount,
        }),

        m(Coupon, {
          onSuccess: function(newDiscount) {
            state.discount = newDiscount
          }
        }),

        m('button', { onclick: () => submit(state) }, 'Submit')
      ])
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
    m.route.set('#!/')
  }
})()
