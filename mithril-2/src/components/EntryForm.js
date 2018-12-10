
window.EntryForm = function () {
  var entry = Entry.vm()
  var discount = 0 /* (A) */

  function add () {
    entry.volunteers.push( Entry.volunteerVM() )
  }
  function remove (idx) {
    entry.volunteers.splice(idx, 1)
  }
  function submit () {
    Entry.create(entry)
    m.route.set('/')
  }

  return {
    view() {
      return m('.entry-form', [
        m('h1', "New Entry"),
        m('h3', "Please enter each volunteer's contact information:"),

        m(Volunteers, {
          add: add,
          remove: remove,
          volunteers: entry.volunteers
        }),

        m(Total, {
          count: entry.volunteers.length,
          discount: discount
        }),

        m(Coupon, {
          onSuccess(newDiscount) {
            discount = newDiscount
          }
        }),

        m('br'),
        m('button', { onclick: submit }, 'Submit'),
      ])
    }
  }
}
