VolunteerForm = {}

VolunteerForm.controller = function () {
  var ctrl = this
  ctrl.contacts = m.prop( [new Contacts.model()] )
  ctrl.discount = m.prop(0)
}

VolunteerForm.view = function (ctrl) {
  return m('.volunteer-form', [
    m('h3', 'Please enter your contact information:'),
    m.component(Contacts, { contacts: ctrl.contacts }),
    m.component(Total, {
      count: ctrl.contacts().length,
      discount: ctrl.discount()
    }),
    m.component(Coupon, {
      onSuccess: ctrl.discount
    })
  ])
}
