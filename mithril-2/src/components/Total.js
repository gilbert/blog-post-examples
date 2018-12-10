
window.Total = {
  view(vnode) {
    var {count, discount} = vnode.attrs
    return m('.total', [
      m('label', "Total: "),
      discount > 0 &&
        discountView(count, discount),
      m('b', "$" + calculatePrice(discount, count))
    ])
  }
}

function discountView (count, discount) {
  var total = calculateTotal(count)
  var discountedAmount = total * discount
  return m('span', "(Coupon discount: -$" + discountedAmount + ")")
}

/* Model logic */
var PRICE_PER_COUNT = 10
function calculatePrice (discount, count) {
  var total = calculateTotal(count)
  return roundCents(total - total * discount)
}
function calculateTotal (count) {
  return count * PRICE_PER_COUNT
}
function roundCents (num) {
  return Math.round(num * 100) / 100
}
