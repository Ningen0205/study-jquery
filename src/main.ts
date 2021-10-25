import $ from "jquery";

/*
以前は$(ducument).readyを使用していたが、非推奨になっていた。
*/
$(() => {
  // element selector
  $("button");

  // id selector
  $("title");

  // class selector
  $(".test");
});
