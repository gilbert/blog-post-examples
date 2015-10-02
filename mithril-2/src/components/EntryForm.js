window.EntryForm = {}

EntryForm.controller = function () {
  var ctrl = this
  ctrl.entry = Entry.vm()
  ctrl.discount = 0

  ctrl.submit = function () {
    Entry.create( ctrl.entry )
    m.route('/')
  }
}

EntryForm.view = function (ctrl) {
  return m('.entry-form', [
    m('h1', "Entry Form"),
    m('h3', "Please enter each volunteer's contact information:"),

    m.component(Volunteers, { volunteers: ctrl.entry.volunteers }),

    m.component(Total, { /*2*/
      count: ctrl.entry.volunteers.length,
      discount: ctrl.discount
    }),

    m.component(Coupon, {
      onSuccess: function(newDiscount) {
        ctrl.discount = newDiscount
      }
    }),

    m('button', { onclick: ctrl.submit }, 'Submit')
  ])
}
