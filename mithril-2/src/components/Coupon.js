(function () {

  window.Coupon = {

    oninit (vnode) {
      vnode.code = ""
    },

    view (vnode) {
      var { state, attrs } = vnode

      return m('form', { onsubmit: (e) => submit(e, state, attrs) }, [

        state.error ? [
          m('.error', "Invalid coupon.")
        ] : null,

        m('label', "Enter coupon (if you have one):"),
        m('input[type=text]', {
          value: state.code,
          onchange: function(e) {
            state.code = e.currentTarget.value
          }
        }),
        m('button[type=submit]', "Validate coupon")
      ])
    }
  }

  function submit (e, state, attrs) {
    e.preventDefault()
    state.error = null

    validateCoupon(state.code)
      .then(function(discount) {
        alert('Coupon applied!')
        state.code = ""
        attrs.onSuccess(discount)
      })
      .catch(function(err) {
        state.error = err
      })
  }

  function validateCoupon (code) {
    var isValid = (code === 'happy')
    var discount = 0.20
    //
    // Mock AJAX promise
    //
    return isValid
      ? Promise.resolve(discount)
      : Promise.reject('invalid_code')
  }

})()
