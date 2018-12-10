
window.Volunteers = {
  view(vnode) {
    var {volunteers, add, remove} = vnode.attrs
    var showRemove = (volunteers.length >= 2)

    return m('.volunteers', [
      volunteers.map(function (volunteer, idx) {
        return m('fieldset', [
          m('legend', "Volunteer #" + (idx+1)),
          m('label', "Name:"),
          m('input[type=text]', {
            value: volunteer.name,
            onchange(e) {
              volunteer.name = e.target.value
            }
          }),
          m('br'),
          m('label', "Email:"),
          m('input[type=text]', { value: volunteer.email }),

          showRemove &&
          m('button', { onclick() { remove(idx) } }, 'remove')
        ])
      }),
      m('button', { onclick: add }, 'Add another volunteer'),
    ])
  }
}
