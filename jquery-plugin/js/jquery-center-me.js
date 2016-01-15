/*!
 * centerMe 0.0.1
 * 
 * @license MIT licensed
 *
 * Copyright (C) 2015 https://github.com/zzuwzj
 */

(function ($) {
  $.fn.centerMe = function () {
    var that = this;
    $(that).css({
      "text-align": "center",
      "display": "table-cell",
      "vertical-align": "middle"
    });
    $(that).find('.centerMe').css({
      "display": "inline-block"
    });
  }
})(jQuery);
