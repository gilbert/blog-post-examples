Coupon = {}

Coupon.controller = function (options) {
  var ctrl = this
  ctrl.code = m.prop('')
  ctrl.error = m.prop(null)

  ctrl.submit = function (e) {
    e.preventDefault()
    ctrl.error('') // Clear error
    validateCoupon(ctrl.code())
      .then(options.onSuccess, ctrl.error)
  }
}

Coupon.view = function (ctrl) {
  return m('form.coupon', { onsubmit: ctrl.submit }, [

    ctrl.error() ? [
      m('.error', "Invalid coupon.")
    ] : null,

    m('label', "Enter coupon (if you have one):"),
    m('input[type=text]', { value: ctrl.code(), onchange: m.withAttr('value', ctrl.code) }),
    m('button[type=submit]', "Validate coupon")
  ])
}

function validateCoupon (code) {
  var isValid = (code === 'happy')
  var discount = 0.20
  // Stub AJAX promise:
  // We would expect the server to return the percent discount
  var deferred = m.deferred()
  if (isValid) deferred.resolve(discount)
  else         deferred.reject('invalid_code')
  return deferred.promise
}
