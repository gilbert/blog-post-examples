
window.Coupon = {}

Coupon.controller = function (attrs) {
  var ctrl = this
  ctrl.code = ""

  ctrl.submit = function (e) {
    e.preventDefault()
    ctrl.error = null

    validateCoupon(ctrl.code)
      .then(function(discount) {
        alert('Coupon applied!')
        ctrl.code = ""
        attrs.onSuccess(discount)
      })
      .then(null, function(err) {
        ctrl.error = err
      })
  }
}

Coupon.view = function (ctrl) {
  return m('form', { onsubmit: ctrl.submit }, [

    ctrl.error ? [
      m('.error', "Invalid coupon.")
    ] : null,

    m('label', "Enter coupon (if you have one):"),
    m('input[type=text]', {
      value: ctrl.code,
      onchange: function(e) {
        ctrl.code = e.currentTarget.value
      }
    }),
    m('button[type=submit]', "Validate coupon")
  ])
}

function validateCoupon (code) {
  var isValid = (code === 'happy')
  var discount = 0.20
  // Mock AJAX promise
  var deferred = m.deferred()
  if (isValid) { deferred.resolve(discount) }
  else         { deferred.reject('invalid_code') }
  return deferred.promise
}
