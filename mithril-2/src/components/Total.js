(function () {

  window.Total = {
    view ({ attrs }) {

      return m('.total', [
        m('label', "Total: "),
        discountView(attrs),
        m('b', "$" + Total.calcPrice(attrs.discount, attrs.count))
      ])
    }
  }

  //
  // Model-level logic
  //
  Total.pricePerCount = 10

  Total.calcPrice = function (discount, count) {
    var total = count * Total.pricePerCount
    return roundCents(total - total * discount)
  }

  Total.calcDiscount = function (discount, count) {
    var total = count * Total.pricePerCount
    return roundCents(total * discount)
  }

  //
  // Helpers
  //
  function discountView (attrs) {
    if (attrs.discount > 0) {
      var discountedAmount =
        Total.calcDiscount(attrs.discount, attrs.count)
      return m('span', "(Coupon discount: -$" + discountedAmount + ")")
    }
  }
  function roundCents (num) {
    return Math.round(num * 100) / 100
  }

})()
