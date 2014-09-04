/* ==========================================================
 * pinyin.js v20140904
 * ==========================================================
 * 功能：中文转拼音首字母。
 *
 * 中文转拼音首字母页面  by makaiqian
 * ========================================================== */

var ui = {
  $normalFormer: $('#js-normal-former')
, $normalTransform: $('#js-normal-transform')
, $normalLater: $('#js-normal-later')
};
/* 基本运用 */
ui.$normalTransform.on('click', function() {
  ui.$normalLater.val(transformTo(ui.$normalFormer, 0, ''));
});
/* 基本运用 end */
