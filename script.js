
function LocomotiveScrollCode() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
LocomotiveScrollCode();


function loadingall() {
  let btn = document.querySelector("#overlay button");
  let overlay = document.querySelector('#overlay');
  let audioElement = new Audio("./Jarvis - Marvel's Iron Man.mp3");

  btn.addEventListener('click', function () {
    overlay.style.display = "none";
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      //     function typetext(){
      //     var string = 'Now me to introduce myself I am Jarvis for vartual artificial intalegence And I am here to assest you for varities of task since best I can Twentyfour hours a day seven days a week importing all preferences system is now fully operational .'
      //     var str = string.split("");
      //     var el = document.querySelector("#str");
      //     function animate() {
      //         str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
      //         var running = setTimeout(animate, 90);
      //         };
      // } 
      gsapAnimation();
    }
  })
}
loadingall(); 

function gsapAnimation() {
  var tl = gsap.timeline();
  tl.to("#jarvisPage", {
    delay: 19,
    onStart: function () {
      let page = document.querySelector("#jarvisPage");
      page.style.zIndex = "-1"
    }
  })
    .from("#centerImg img", {
      delay: 1,
      opacity: 0,
      duaration: 1,
    })
    .from("#circleBorder", {
      opacity: 0,
      duaration: 2
    })
    .to("#one", {
      y: "113%",
      duration: 1,
    })
    .to("#two,#three", {
      delay: -0.9,
      y: "280%",
      duration: 1,
    })
    .to("#three", {
      delay: -0.5,
      y: "380%",
      duration: 1,
    })
    .from("#lftText", {
      x: "-20%",
    })
    .from("#rightImg", {
      opacity: 0,
      duration: 1,
    })
    .from("#roter,#chinease", {
      opacity: 0,
      duration: 2,
      ease: Expo.easeInOut,
    })
}

function onClickChange() {
  let button = document.querySelector("#page3 button");
  let img = document.querySelector('#chrImg img');
  let page3 = document.querySelector("#page3");
  let text = document.querySelector(".tt");
  let text2 = document.querySelector(".tu");
  let text3 = document.querySelector("#p2Text>h1");
  button.addEventListener("click", function () {
    if (img.src.match("https://mir-s3-cdn-cf.behance.net/project_modules/fs/722190124002877.60faa3a625d34.jpg")) {
      img.src = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/31cbfc124002877.60faa3a62295c.jpg";
      page3.style.backgroundColor = "#000";
      button.style.backgroundColor = "#fff"
      button.style.color = "#000"
      text.style.color = "#fff"
      text2.style.color = "#fff"
      text3.style.color = "#DF65F4"
    }
    else if (img.src.match("https://mir-s3-cdn-cf.behance.net/project_modules/fs/31cbfc124002877.60faa3a62295c.jpg")) {
      img.src = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0e26cc124002877.60faa3a6237ac.jpg";
      page3.style.backgroundColor = "#D1DCF2";
      button.style.backgroundColor = "#1D60AF"
      button.style.color = "#fff"
      text.style.color = "#1D60AF"
      text2.style.color = "#1D60AF"
      text3.style.color = "#000"
    }
  })
}
onClickChange();

function imgHover() {
  const elems = document.querySelectorAll(".tText");
  const imgDiv1 = document.querySelector("#p5img");
  const container1 = document.querySelector("#page5");
  container1.addEventListener("mousemove", function (dets) {
    imgDiv1.style.opacity = 1;
    imgDiv1.style.left = `${dets.x}px`;
    imgDiv1.style.top = `${dets.y}px`;
  })
}
imgHover();





function dom(){
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/QMXn1Pkw/0001.png
          https://i.postimg.cc/QtC4nTzq/0002.png
          https://i.postimg.cc/C12PyKTp/0003.png
          https://i.postimg.cc/6qGHBNt2/0004.png
          https://i.postimg.cc/14hvtY3W/0005.png
          https://i.postimg.cc/05TvDk64/0006.png
          https://i.postimg.cc/htgqZ21b/0007.png
          https://i.postimg.cc/GmQnWvM0/0008.png
          https://i.postimg.cc/MK1SYCVp/0009.png
          https://i.postimg.cc/HLk1djKr/0010.png
          https://i.postimg.cc/259R6rR2/0011.png
          https://i.postimg.cc/ZYdtTGfx/0012.png
          https://i.postimg.cc/28Np30MR/0013.png
          https://i.postimg.cc/HkTf9VT6/0014.png
          https://i.postimg.cc/BnNRY464/0015.png
          https://i.postimg.cc/1zj2SBwd/0016.png
          https://i.postimg.cc/HLxRFRc5/0017.png
          https://i.postimg.cc/wMKryBWc/0018.png
          https://i.postimg.cc/cCQbQN2q/0019.png
          https://i.postimg.cc/FsV6zN03/0020.png
          https://i.postimg.cc/CxMQfX4t/0021.png
          https://i.postimg.cc/wBZfZvd8/0022.png
          https://i.postimg.cc/Vvc7sV6K/0023.png
          https://i.postimg.cc/WpMWYTWC/0024.png
          https://i.postimg.cc/BQphsNGC/0025.png
          https://i.postimg.cc/85LHYmHM/0026.png
          https://i.postimg.cc/kXTyL4x1/0027.png
          https://i.postimg.cc/t4fNCMvF/0028.png
          https://i.postimg.cc/wM6hG83Y/0029.png
          https://i.postimg.cc/YC4QVx20/0030.png
          https://i.postimg.cc/ZRm3Wt8v/0031.png
          https://i.postimg.cc/mk2HSY6b/0032.png
          https://i.postimg.cc/kMf8gHBD/0033.png
          https://i.postimg.cc/5NyzYmCg/0034.png
          https://i.postimg.cc/xTZzKbG2/0035.png
          https://i.postimg.cc/Pqsv7sFV/0036.png
          https://i.postimg.cc/QMQKG428/0037.png
          https://i.postimg.cc/fL53k3W1/0038.png
          https://i.postimg.cc/tJTs6XYJ/0039.png
          https://i.postimg.cc/x84cyWzR/0040.png
          https://i.postimg.cc/Kcqk2gHM/0041.png
          https://i.postimg.cc/CLRZLL36/0042.png
          https://i.postimg.cc/DyRSW3Ff/0043.png
          https://i.postimg.cc/Sx8JC1N6/0044.png
          https://i.postimg.cc/k5mDcNBk/0045.png
          https://i.postimg.cc/B6h64dM0/0046.png
          https://i.postimg.cc/Fz7KRDBJ/0047.png
          https://i.postimg.cc/brWw2k7V/0048.png
          https://i.postimg.cc/v8NBjw47/0049.png
          https://i.postimg.cc/HkGLY04V/0050.png
          https://i.postimg.cc/jjtdNs1T/0051.png
          https://i.postimg.cc/L8z8nqNv/0052.png
          https://i.postimg.cc/xd5j3wrz/0053.png
          https://i.postimg.cc/DZY2t1wf/0054.png
          https://i.postimg.cc/kG0759Sk/0055.png
          https://i.postimg.cc/c43sbgyZ/0056.png
          https://i.postimg.cc/fWpzC7PB/0057.png
          https://i.postimg.cc/QdrXG8h7/0058.png
          https://i.postimg.cc/wjc99CjG/0059.png
          https://i.postimg.cc/1zvPqD60/0060.png
          https://i.postimg.cc/0NkPjV62/0061.png
          https://i.postimg.cc/MTXwbXbC/0062.png
          https://i.postimg.cc/bJMh68ms/0063.png
          https://i.postimg.cc/brtjWM5L/0064.png
          https://i.postimg.cc/WtcPv8LV/0065.png
          https://i.postimg.cc/MK1njrGy/0066.png
          https://i.postimg.cc/NG3yFwQs/0067.png
          https://i.postimg.cc/0yfrVMDj/0068.png
          https://i.postimg.cc/7ZDf1MCj/0069.png
          https://i.postimg.cc/k5gGzJvc/0070.png
          https://i.postimg.cc/d3rVrLJq/0071.png
          https://i.postimg.cc/d1z0h8PH/0072.png
          https://i.postimg.cc/mDcDZmq1/0073.png
          https://i.postimg.cc/wxmvSbLS/0074.png
          https://i.postimg.cc/gkbJdqKr/0075.png
          https://i.postimg.cc/Nf8009ND/0076.png
          https://i.postimg.cc/mgbg1LJs/0077.png
          https://i.postimg.cc/T3CYV8vW/0078.png
          https://i.postimg.cc/0Nj5Zt9X/0079.png
          https://i.postimg.cc/cJzxzQHx/0080.png
          https://i.postimg.cc/26BkNVb4/0081.png
          https://i.postimg.cc/PJstXTY0/0082.png
          https://i.postimg.cc/bYky6SjP/0083.png
          https://i.postimg.cc/HsmpFWpy/0084.png
          https://i.postimg.cc/GhjcR02S/0085.png
          https://i.postimg.cc/qvMpMm6B/0086.png
          https://i.postimg.cc/K8qxKntP/0087.png
          https://i.postimg.cc/HLrHbVtf/0088.png
          https://i.postimg.cc/k5LCsq1D/0089.png
          https://i.postimg.cc/767kQdd9/0090.png
          https://i.postimg.cc/J05WRJ1B/0091.png
          https://i.postimg.cc/5yVVcpMV/0092.png
          https://i.postimg.cc/qBsrcf8M/0093.png
          https://i.postimg.cc/HsTgBS20/0094.png
          https://i.postimg.cc/Ghz1Nk7W/0095.png
          https://i.postimg.cc/9QMjjrsr/0096.png
          https://i.postimg.cc/pL6MVPtk/0097.png
          https://i.postimg.cc/0NKRbhkv/0098.png
          https://i.postimg.cc/C1b34Dn6/0099.png
          https://i.postimg.cc/prZ3wHZf/0100.png
          https://i.postimg.cc/rFVBSDVQ/0101.png
          https://i.postimg.cc/7PnvG3k5/0102.png
          https://i.postimg.cc/N0HSgTDf/0103.png
          https://i.postimg.cc/6pSFJzdm/0104.png
          https://i.postimg.cc/9MHSzMgP/0105.png
          https://i.postimg.cc/RF1YtB2k/0106.png
          https://i.postimg.cc/cCsbMzSr/0107.png
          https://i.postimg.cc/x8tFsPfg/0108.png
          https://i.postimg.cc/VsRTLzqM/0109.png
          https://i.postimg.cc/VLkhJ2gh/0110.png
          https://i.postimg.cc/Jn86MFtP/0111.png
          https://i.postimg.cc/NfCzmbPj/0112.png
          https://i.postimg.cc/76NB6N2D/0113.png
          https://i.postimg.cc/c4zFrCrK/0114.png
          https://i.postimg.cc/L8ZNfS1x/0115.png
          https://i.postimg.cc/g0F4H7ym/0116.png
          https://i.postimg.cc/MTtDxKCp/0117.png
          https://i.postimg.cc/yNmjQTn9/0118.png
          https://i.postimg.cc/8c5bCgGB/0119.png
          https://i.postimg.cc/QCyJ9YxL/0120.png
          https://i.postimg.cc/y6QPbxhf/0121.png
          https://i.postimg.cc/ncXkbx0n/0122.png
          https://i.postimg.cc/02hC94BD/0123.png
          https://i.postimg.cc/7Z7nhNFc/0124.png
          https://i.postimg.cc/JhLckkmh/0125.png
          https://i.postimg.cc/W4wm61bw/0126.png
          https://i.postimg.cc/cH1RDGvy/0127.png
          https://i.postimg.cc/yxkFHhhL/0128.png
          https://i.postimg.cc/1tWp27Fg/0129.png
          https://i.postimg.cc/vTk5H13b/0130.png
          https://i.postimg.cc/cJ0wHGMg/0131.png
          https://i.postimg.cc/4NHz25xd/0132.png
          https://i.postimg.cc/K8ntx8Lh/0133.png
          https://i.postimg.cc/mZ5YSqRJ/0134.png
          https://i.postimg.cc/zGmTsgyk/0135.png
          https://i.postimg.cc/wvBNX5r9/0136.png
          https://i.postimg.cc/QMm5KY06/0137.png
          https://i.postimg.cc/76Q2mGv0/0138.png
          https://i.postimg.cc/x8Jb7fY7/0139.png
          https://i.postimg.cc/T1zWvz3P/0140.png
          https://i.postimg.cc/P5k83n73/0141.png
          https://i.postimg.cc/HWRMMy9C/0142.png
          https://i.postimg.cc/zXhgFGxH/0143.png
          https://i.postimg.cc/XYcBtDSV/0144.png
          https://i.postimg.cc/6QW4KLtC/0145.png
          https://i.postimg.cc/nL3jhjhg/0146.png
          https://i.postimg.cc/263qbkq6/0147.png
          https://i.postimg.cc/mkHtjmyW/0148.png
          https://i.postimg.cc/5jWjR8sY/0149.png
          https://i.postimg.cc/dQpH4nKH/0150.png
          https://i.postimg.cc/44m26qjH/0151.png
          https://i.postimg.cc/8Pvy3Wp1/0152.png
          https://i.postimg.cc/kgdjd4GW/0153.png
          https://i.postimg.cc/rpVQKPSm/0154.png
          https://i.postimg.cc/kgFTMmRz/0155.png
          https://i.postimg.cc/ZR0HLvsz/0156.png
          https://i.postimg.cc/W3KnYpxF/0157.png
          https://i.postimg.cc/x8zPwDSs/0158.png
          https://i.postimg.cc/WpFSFrJM/0159.png
          https://i.postimg.cc/vH5zXshT/0160.png
          https://i.postimg.cc/RZVHf5bj/0161.png
          https://i.postimg.cc/FKwd2fs4/0162.png
          https://i.postimg.cc/mkCQdYQJ/0163.png
          https://i.postimg.cc/tJj14Lxv/0164.png
          https://i.postimg.cc/3xSDFSsW/0165.png
          https://i.postimg.cc/g0xLSyps/0166.png
          https://i.postimg.cc/4yQY7Bvf/0167.png
          https://i.postimg.cc/7P3GWYFF/0168.png
          https://i.postimg.cc/4dt7ZJmh/0169.png
          https://i.postimg.cc/qvRNqcNr/0170.png
          https://i.postimg.cc/T2J1cNmG/0171.png
          https://i.postimg.cc/vH8B27Ln/0172.png
          https://i.postimg.cc/d3w1Yrbz/0173.png
          https://i.postimg.cc/LXzXwNbt/0174.png
          https://i.postimg.cc/jd8jpWZF/0175.png
          https://i.postimg.cc/VkdNmYhL/0176.png
          https://i.postimg.cc/prCdXyxy/0177.png
          https://i.postimg.cc/MpNpGCk0/0178.png
          https://i.postimg.cc/C1VMGbxz/0179.png
          https://i.postimg.cc/nzYF0MXT/0180.png
          https://i.postimg.cc/kGJnZ98C/0181.png
          https://i.postimg.cc/mkmbWqNH/0182.png
          https://i.postimg.cc/6pkBKCRY/0183.png
          https://i.postimg.cc/YSQMCjzk/0184.png
          https://i.postimg.cc/jdks8pjV/0185.png
          https://i.postimg.cc/ZKqbxb4F/0186.png
          https://i.postimg.cc/Nj9QZdyK/0187.png
          https://i.postimg.cc/630KCSPm/0188.png
          https://i.postimg.cc/gJddXdgh/0189.png
          https://i.postimg.cc/7PKD6F0C/0190.png
          https://i.postimg.cc/7hfRbWr7/0191.png
          https://i.postimg.cc/x8h4m39Z/0192.png
          https://i.postimg.cc/nVP5Npq1/0193.png
          https://i.postimg.cc/RVJ8ByRx/0194.png
          https://i.postimg.cc/YCcPqRnG/0195.png
          https://i.postimg.cc/tgNwc6z1/0196.png
          https://i.postimg.cc/k4MzP5jT/0197.png
          https://i.postimg.cc/HxSKYCRd/0198.png
          https://i.postimg.cc/PqTF1xkd/0199.png
          https://i.postimg.cc/yY0MR2SX/0200.png
          https://i.postimg.cc/R0ZyjFpX/0201.png
          https://i.postimg.cc/tTVSjV3t/0202.png
          https://i.postimg.cc/Rh7g35bW/0203.png
          https://i.postimg.cc/pVzGczXP/0204.png
          https://i.postimg.cc/4yk8NNwC/0205.png
          https://i.postimg.cc/vmT20KDK/0206.png
          https://i.postimg.cc/MKYsqwQ4/0207.png
          https://i.postimg.cc/zXNdsvVK/0208.png
          https://i.postimg.cc/YSPnZxWC/0209.png
          https://i.postimg.cc/bwNmv50v/0210.png
          https://i.postimg.cc/Vv8RPZLm/0211.png
          https://i.postimg.cc/SRfGSLJ8/0212.png
          https://i.postimg.cc/t4S2nzDN/0213.png
          https://i.postimg.cc/sfYm4zwX/0214.png
          https://i.postimg.cc/4dt5MRGW/0215.png
          https://i.postimg.cc/tCDz850G/0216.png
          https://i.postimg.cc/FKYGyJB5/0217.png
          https://i.postimg.cc/KvmN9WH5/0218.png
          https://i.postimg.cc/Gm5xmmhM/0219.png
          https://i.postimg.cc/5tQqYWXf/0220.png
          https://i.postimg.cc/Zn4rM9Vq/0221.png
          https://i.postimg.cc/QCmpGXyJ/0222.png
          https://i.postimg.cc/8z5bG6DJ/0223.png
          https://i.postimg.cc/DyfrQXSj/0224.png
          https://i.postimg.cc/XJMK915d/0225.png
          https://i.postimg.cc/1tpGB00T/0226.png
          https://i.postimg.cc/jq46JXSn/0227.png
          https://i.postimg.cc/Pr6mS5Zt/0228.png
          https://i.postimg.cc/qvz2SHX2/0229.png
          https://i.postimg.cc/wBNLx5rv/0230.png
          https://i.postimg.cc/B6GDjLWC/0231.png
          https://i.postimg.cc/hjbmTDcR/0232.png
          https://i.postimg.cc/90m7B6QR/0233.png
          https://i.postimg.cc/VvKbZKJ7/0234.png
          https://i.postimg.cc/T20mP3tr/0235.png
          https://i.postimg.cc/4NF9zFky/0236.png
          https://i.postimg.cc/qM7K6HFW/0237.png
          https://i.postimg.cc/Gm8szJdQ/0238.png
          https://i.postimg.cc/Pq1vnXLv/0239.png
          https://i.postimg.cc/MZ9MSrG5/0240.png
          https://i.postimg.cc/QdTHc8JY/0241.png
          https://i.postimg.cc/fT6bW4Qc/0242.png
          https://i.postimg.cc/9Mp4zLYW/0243.png
          https://i.postimg.cc/8P37FJMr/0244.png
          https://i.postimg.cc/3JWyJC4T/0245.png
          https://i.postimg.cc/mr42MQDh/0246.png
          https://i.postimg.cc/k5yMyB6s/0247.png
          https://i.postimg.cc/pTG2g4Bn/0248.png
          https://i.postimg.cc/4yYJZP82/0249.png
          https://i.postimg.cc/j2BRjfmx/0250.png
          https://i.postimg.cc/g2VGYnDp/0251.png
          https://i.postimg.cc/VkQYQjX4/0252.png
          https://i.postimg.cc/XNPjxMJR/0253.png
          https://i.postimg.cc/BvJ4t4YK/0254.png
          https://i.postimg.cc/TwwxqQX2/0255.png
          https://i.postimg.cc/2jgqyL4L/0256.png
          https://i.postimg.cc/Jn2LTJ1N/0257.png
          https://i.postimg.cc/nM8txJ9M/0258.png
          https://i.postimg.cc/FFYdhVJQ/0259.png
          https://i.postimg.cc/fTXV9WK2/0260.png
          https://i.postimg.cc/434yq6Tq/0261.png
          https://i.postimg.cc/Z5SCFksT/0262.png
          https://i.postimg.cc/V6pNJ2bP/0263.png
          https://i.postimg.cc/WzZ1gSMF/0264.png
          https://i.postimg.cc/QdJVf6vc/0265.png
          https://i.postimg.cc/63y35Bqh/0266.png
          https://i.postimg.cc/pXNTRbHD/0267.png
          https://i.postimg.cc/t4p4n37J/0268.png
          https://i.postimg.cc/xjNCwjWf/0269.png
          https://i.postimg.cc/63k9WRD9/0270.png
          https://i.postimg.cc/G28Lnzg7/0271.png
          https://i.postimg.cc/3N23dNT2/0272.png
          https://i.postimg.cc/sfWjn6h1/0273.png
          https://i.postimg.cc/L6MHGttD/0274.png
          https://i.postimg.cc/Zq0Z6Vmb/0275.png
          https://i.postimg.cc/8C3G4Mkh/0276.png
          https://i.postimg.cc/gkqYpx4W/0277.png
          https://i.postimg.cc/pLWPLP1n/0278.png
          https://i.postimg.cc/Y0NwtP63/0279.png
          https://i.postimg.cc/brfhcPtr/0280.png
          https://i.postimg.cc/nckt56cV/0281.png
          https://i.postimg.cc/xTY260QF/0282.png
          https://i.postimg.cc/pLT3Sr6k/0283.png
          https://i.postimg.cc/X7xTxdQp/0284.png
          https://i.postimg.cc/0NKF83xw/0285.png
          https://i.postimg.cc/NjzZvYht/0286.png
          https://i.postimg.cc/qRfYgLMZ/0287.png
          https://i.postimg.cc/vThSqw7p/0288.png
          https://i.postimg.cc/rmSH4rDy/0289.png
          https://i.postimg.cc/mkB5yg9Y/0290.png
          https://i.postimg.cc/nVG5cq80/0291.png
          https://i.postimg.cc/xTjZkqnY/0292.png
          https://i.postimg.cc/YqXsQkCF/0293.png
          https://i.postimg.cc/QdHnbPFy/0294.png
          https://i.postimg.cc/P59VF4Zr/0295.png
          https://i.postimg.cc/R0tprHQ1/0296.png
          https://i.postimg.cc/k4d17gf0/0297.png
          https://i.postimg.cc/cHMDCGzr/0298.png
          https://i.postimg.cc/fy8B7jDs/0299.png
          https://i.postimg.cc/bNFmsTmH/0300.png
  `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#pagecanvas",
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
  centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#pagecanvas canvas",{
  scale:0.8,
  scrollTrigger:{
      scrub:.1,
      trigger:"#pagecanvas",
      start:"top top",
      markers:true,
  },
})
ScrollTrigger.create({
  trigger:"#pagecanvas",
  pin:true,
  start:"top top",
})

}

// dom()