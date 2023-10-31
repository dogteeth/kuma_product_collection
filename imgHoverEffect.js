const targets = document.querySelectorAll(".imgs_list");

targets.forEach(function (target) {
  const imgs = target.getElementsByTagName("img");
  //   把第一張以後的圖片都隱藏
  for (i = 0; i < imgs.length; i++) {
    if (i != 0) {
      imgs[i].style.display = "none";
    }
  }

  //  mouseover監聽：當mouse移到圖像上時，開始做圖片更換
  target.addEventListener("mouseover", function (e) {
    // 1. 將單一商品，建立照片群組入Array
    const imgs = target.getElementsByTagName("img");

    // 2. 第一張為預設照片，獨立存起來
    const imgFirstSrc = imgs[0].src;

    // 3. 照片群組Array的連結，抓出來變成照片連結Array
    let imagesLinks = [];
    if (imgs.length != 0) {
      for (i = 0; i < imgs.length; i++) {
        let imgSrc = imgs[i].src;
        imagesLinks.push(imgSrc);
      }
    }

    let j = 0;
    let time = 30000;

    function updateImageLink() {
      setTimeout((imgs[0].src = imagesLinks[j]), time);
    }
  });
});
