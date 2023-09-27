console.log("good");

const targets = document.querySelectorAll(".imgs_list");

targets.forEach(function (target) {
  const imgs = target.getElementsByTagName("img");
  //   把第一張以後的圖片都隱藏
  for (i = 0; i < imgs.length; i++) {
    if (i != 0) {
      imgs[i].style.display = "none";
    }
  }

  //   當mouse移到圖像上時，開始做圖片更換
  target.addEventListener("mouseover", function (e) {
    const imgs = target.getElementsByTagName("img");
    const imgFirstSrc = imgs[0].src;

    let images = [];
    if (imgs.length != 0) {
      for (i = 0; i < imgs.length; i++) {
        let imgSrc = imgs[i].src;
        images.push(imgSrc);
      }
    }
    console.log(images);
    /*
    imgs[0].src =
      "https://static-assets.oen.tw/images/img-2TeS5xRkliM5G9IjeJcLqKv6buW.jpg";
    
    
    // 取得各img的連結
    
    // 第一張圖的網址
    const imgFirstSrc = images[0];
    // 開始looping
    let i = 0;
    let time = 3000;
    // 結束looping

    if (i < imgs.length - 1) {
      i++;
      target.firstChild.src = images[i];
    } else {
      i = 0;
      target.firstChild.src = images[i];
    }
    */
  });
});
