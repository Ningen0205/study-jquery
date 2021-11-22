import $ from "jquery";

/*
以前は$(ducument).readyを使用していたが、非推奨になっていた。
*/
$(() => {
  // element selector
  // $("button");
  // id selector
  // $("title");
  // class selector
  // $(".test");

  const el = document.getElementById("title");

  const textNode = document.createTextNode("テキスト");

  el?.appendChild(textNode);
});
