(function () {

  window.Pagination = {}

  Pagination.controller = function (options) {
    var ctrl = this
    ctrl.currentPage = m.prop(options.startOnPage || 0)

    ctrl.goToPage = function (pageCount, pageNum) {
      if (pageNum < 0 || pageNum > pageCount-1) return;
      ctrl.currentPage(pageNum)
      options.onPageChange(pageNum)
    }
  }

  Pagination.view = function (ctrl, options) {
    var total       = options.totalRowCount || 0
    var currentPage = ctrl.currentPage()
    var rowStart    = currentPage * options.perPage
    var rowEnd      = Math.min(rowStart + options.perPage, total)
    var pageCount   = Math.ceil(total / options.perPage)

    return m('.pagination-wrap', [
      m('.info', "Showing " + (rowStart+1) + " to " + rowEnd + " of " + total + " entries"),

      m('ul.pagination', [
        m('li.prev', { "class": (currentPage == 0 ? 'disabled' : '') }, [
          m('a', { href: "#", onclick: toPage(currentPage-1) }, "\u2190 Previous")
        ]),

        pageRange(pageCount, currentPage).map(numberAnchor),

        m('li.next', { "class": (currentPage == pageCount-1 ? 'disabled' : '') }, [
          m('a', { href: "#", onclick: toPage(currentPage+1) }, "Next \u2192")
        ])
      ])
    ])

    function numberAnchor (num) {
      var isCurrent = (num == currentPage)
      return m('li', { class: (isCurrent ? 'active' : '') }, [
        m('a', { href: (!isCurrent ? '#' : ''), onclick: toPage(num) }, num + 1)
      ])
    }

    function toPage (num) {
      return function (e) { e.preventDefault(); ctrl.goToPage(pageCount, num) }
    }
  }

  function pageRange (pageCount, currentPage) {
    if (pageCount <= 5) return Array.range(0, pageCount)

    var start = Math.max(currentPage - 2, 0)
    var end   = start + 5

    if (end > pageCount) {
      start -= end - pageCount
      end    = pageCount
    }
    return Array.range(start, end)
  }

})()
