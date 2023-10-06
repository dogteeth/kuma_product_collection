console.log("good");

// 取得所有商品的照片組
const targets = document.querySelectorAll(".imgs_list");

targets.forEach(function (target) {
  // 取得單一商品的照片組
  const imgs = target.getElementsByTagName("img");

  // 除了第一張照片之外，其它都藏起來
  for (i = 0; i < imgs.length; i++) {
    if (i != 0) {
      imgs[i].style.display = "none";
    }
  }

  // 將商品的第一張照片做為預設值，先行儲存。
  const imgFirstSrc = imgs[0].src;

  // 將商品的照片組存入Array中。
  let imagesLinks = [];
  if (imgs.length != 0) {
    for (i = 0; i < imgs.length; i++) {
      let imgSrc = imgs[i].src;
      imagesLinks.push(imgSrc);
    }
  }

  // 設定 img changing function：依序改變圖片。
  let start = 1; //第一次的loop要從第二張圖開始。不然第一張圖會有停頓很久的感覺。
  function change() {
    if (start < imagesLinks.length) {
      imgs[0].src = imagesLinks[start];
      start++;
    } else {
      start = 0;
    }
  }
  // 設定 setInterval function: 間隔呼叫 img changing function。
  let intvl;
  function set_time() {
    intvl = setInterval(change, 1000);
  }
  // 設定 stop img changing function: clearInterval, 同時將照片恢復第一張。
  function end() {
    start = 0;
    clearInterval(intvl);
    imgs[0].src = imgFirstSrc;
  }
  // 設定mouseover listener: mouseover 呼叫 setInterval function.
  target.addEventListener("mouseover", set_time);
  // 設定 mouseout listener: mouseout 呼叫 stop img changing function.
  target.addEventListener("mouseout", end);
});
