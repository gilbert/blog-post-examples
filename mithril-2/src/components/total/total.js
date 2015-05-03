Total = {}

Total.pricePerCount = 10

Total.calcPrice = function (discount, count) {
  var total = count * Total.pricePerCount
  return roundCents(total - total * discount)
}

Total.calcDiscount = function (discount, count) {
  var total = count * Total.pricePerCount
  return roundCents(total * discount)
}

Total.view = function (ctrl, options) {
  var total = Total.calcPrice(options.discount, options.count)
  var discountedAmount = Total.calcDiscount(options.discount, options.count)
  return m('.total', [
    m('label', "Total: "),
    options.discount > 0 ? [
      m('span', "(Coupon discount: -$" + discountedAmount + ")")
    ] : null,
    m('b', "$" + total),
  ])
}

function roundCents (num) {
  return Math.round(num * 100) / 100
}
