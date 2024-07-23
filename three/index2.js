function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    https://d1ktbxarro10a1.cloudfront.net/0001.png
    https://d1ktbxarro10a1.cloudfront.net/0002.png
    https://d1ktbxarro10a1.cloudfront.net/0003.png
    https://d1ktbxarro10a1.cloudfront.net/0004.png
    https://d1ktbxarro10a1.cloudfront.net/0005.png
    https://d1ktbxarro10a1.cloudfront.net/0006.png
    https://d1ktbxarro10a1.cloudfront.net/0007.png
    https://d1ktbxarro10a1.cloudfront.net/0008.png
    https://d1ktbxarro10a1.cloudfront.net/0009.png
    https://d1ktbxarro10a1.cloudfront.net/0010.png
    https://d1ktbxarro10a1.cloudfront.net/0011.png
    https://d1ktbxarro10a1.cloudfront.net/0012.png
    https://d1ktbxarro10a1.cloudfront.net/0013.png
    https://d1ktbxarro10a1.cloudfront.net/0014.png
    https://d1ktbxarro10a1.cloudfront.net/0015.png
    https://d1ktbxarro10a1.cloudfront.net/0016.png
    https://d1ktbxarro10a1.cloudfront.net/0017.png
    https://d1ktbxarro10a1.cloudfront.net/0018.png
    https://d1ktbxarro10a1.cloudfront.net/0019.png
    https://d1ktbxarro10a1.cloudfront.net/0020.png
    https://d1ktbxarro10a1.cloudfront.net/0021.png
    https://d1ktbxarro10a1.cloudfront.net/0022.png
    https://d1ktbxarro10a1.cloudfront.net/0023.png
    https://d1ktbxarro10a1.cloudfront.net/0024.png
    https://d1ktbxarro10a1.cloudfront.net/0025.png
    https://d1ktbxarro10a1.cloudfront.net/0026.png
    https://d1ktbxarro10a1.cloudfront.net/0027.png
    https://d1ktbxarro10a1.cloudfront.net/0028.png
    https://d1ktbxarro10a1.cloudfront.net/0029.png
    https://d1ktbxarro10a1.cloudfront.net/0030.png
    https://d1ktbxarro10a1.cloudfront.net/0031.png
    https://d1ktbxarro10a1.cloudfront.net/0032.png
    https://d1ktbxarro10a1.cloudfront.net/0033.png
    https://d1ktbxarro10a1.cloudfront.net/0034.png
    https://d1ktbxarro10a1.cloudfront.net/0035.png
    https://d1ktbxarro10a1.cloudfront.net/0036.png
    https://d1ktbxarro10a1.cloudfront.net/0037.png
    https://d1ktbxarro10a1.cloudfront.net/0038.png
    https://d1ktbxarro10a1.cloudfront.net/0039.png
    https://d1ktbxarro10a1.cloudfront.net/0040.png
    https://d1ktbxarro10a1.cloudfront.net/0041.png
    https://d1ktbxarro10a1.cloudfront.net/0042.png
    https://d1ktbxarro10a1.cloudfront.net/0043.png
    https://d1ktbxarro10a1.cloudfront.net/0044.png
    https://d1ktbxarro10a1.cloudfront.net/0045.png
    https://d1ktbxarro10a1.cloudfront.net/0046.png
    https://d1ktbxarro10a1.cloudfront.net/0047.png
    https://d1ktbxarro10a1.cloudfront.net/0048.png
    https://d1ktbxarro10a1.cloudfront.net/0049.png
    https://d1ktbxarro10a1.cloudfront.net/0050.png
    https://d1ktbxarro10a1.cloudfront.net/0051.png
    https://d1ktbxarro10a1.cloudfront.net/0052.png
    https://d1ktbxarro10a1.cloudfront.net/0053.png
    https://d1ktbxarro10a1.cloudfront.net/0054.png
    https://d1ktbxarro10a1.cloudfront.net/0055.png
    https://d1ktbxarro10a1.cloudfront.net/0056.png
    https://d1ktbxarro10a1.cloudfront.net/0057.png
    https://d1ktbxarro10a1.cloudfront.net/0058.png
    https://d1ktbxarro10a1.cloudfront.net/0059.png
    https://d1ktbxarro10a1.cloudfront.net/0060.png
    https://d1ktbxarro10a1.cloudfront.net/0061.png
    https://d1ktbxarro10a1.cloudfront.net/0062.png
    https://d1ktbxarro10a1.cloudfront.net/0063.png
    https://d1ktbxarro10a1.cloudfront.net/0064.png
    https://d1ktbxarro10a1.cloudfront.net/0065.png
    https://d1ktbxarro10a1.cloudfront.net/0066.png
    https://d1ktbxarro10a1.cloudfront.net/0067.png
    https://d1ktbxarro10a1.cloudfront.net/0068.png
    https://d1ktbxarro10a1.cloudfront.net/0069.png
    https://d1ktbxarro10a1.cloudfront.net/0070.png
    https://d1ktbxarro10a1.cloudfront.net/0071.png
    https://d1ktbxarro10a1.cloudfront.net/0072.png
    https://d1ktbxarro10a1.cloudfront.net/0073.png
    https://d1ktbxarro10a1.cloudfront.net/0074.png
    https://d1ktbxarro10a1.cloudfront.net/0075.png
    https://d1ktbxarro10a1.cloudfront.net/0076.png
    https://d1ktbxarro10a1.cloudfront.net/0077.png
    https://d1ktbxarro10a1.cloudfront.net/0078.png
    https://d1ktbxarro10a1.cloudfront.net/0079.png
    https://d1ktbxarro10a1.cloudfront.net/0080.png
    https://d1ktbxarro10a1.cloudfront.net/0081.png
    https://d1ktbxarro10a1.cloudfront.net/0082.png
    https://d1ktbxarro10a1.cloudfront.net/0083.png
    https://d1ktbxarro10a1.cloudfront.net/0084.png
    https://d1ktbxarro10a1.cloudfront.net/0085.png
    https://d1ktbxarro10a1.cloudfront.net/0086.png
    https://d1ktbxarro10a1.cloudfront.net/0087.png
    https://d1ktbxarro10a1.cloudfront.net/0088.png
    https://d1ktbxarro10a1.cloudfront.net/0089.png
    https://d1ktbxarro10a1.cloudfront.net/0090.png
    https://d1ktbxarro10a1.cloudfront.net/0091.png
    https://d1ktbxarro10a1.cloudfront.net/0092.png
    https://d1ktbxarro10a1.cloudfront.net/0093.png
    https://d1ktbxarro10a1.cloudfront.net/0094.png
    https://d1ktbxarro10a1.cloudfront.net/0095.png
    https://d1ktbxarro10a1.cloudfront.net/0096.png
    https://d1ktbxarro10a1.cloudfront.net/0097.png
    https://d1ktbxarro10a1.cloudfront.net/0098.png
    https://d1ktbxarro10a1.cloudfront.net/0099.png
    https://d1ktbxarro10a1.cloudfront.net/0100.png
    https://d1ktbxarro10a1.cloudfront.net/0101.png
    https://d1ktbxarro10a1.cloudfront.net/0102.png
    https://d1ktbxarro10a1.cloudfront.net/0103.png
    https://d1ktbxarro10a1.cloudfront.net/0104.png
    https://d1ktbxarro10a1.cloudfront.net/0105.png
    https://d1ktbxarro10a1.cloudfront.net/0106.png
    https://d1ktbxarro10a1.cloudfront.net/0107.png
    https://d1ktbxarro10a1.cloudfront.net/0108.png
    https://d1ktbxarro10a1.cloudfront.net/0109.png
    https://d1ktbxarro10a1.cloudfront.net/0110.png
    https://d1ktbxarro10a1.cloudfront.net/0111.png
    https://d1ktbxarro10a1.cloudfront.net/0112.png
    https://d1ktbxarro10a1.cloudfront.net/0113.png
    https://d1ktbxarro10a1.cloudfront.net/0114.png
    https://d1ktbxarro10a1.cloudfront.net/0115.png
    https://d1ktbxarro10a1.cloudfront.net/0116.png
    https://d1ktbxarro10a1.cloudfront.net/0117.png
    https://d1ktbxarro10a1.cloudfront.net/0118.png
    https://d1ktbxarro10a1.cloudfront.net/0119.png
    https://d1ktbxarro10a1.cloudfront.net/0120.png
    https://d1ktbxarro10a1.cloudfront.net/0121.png
    https://d1ktbxarro10a1.cloudfront.net/0122.png
    https://d1ktbxarro10a1.cloudfront.net/0123.png
    https://d1ktbxarro10a1.cloudfront.net/0124.png
    https://d1ktbxarro10a1.cloudfront.net/0125.png
    https://d1ktbxarro10a1.cloudfront.net/0126.png
    https://d1ktbxarro10a1.cloudfront.net/0127.png
    https://d1ktbxarro10a1.cloudfront.net/0128.png
    https://d1ktbxarro10a1.cloudfront.net/0129.png
    https://d1ktbxarro10a1.cloudfront.net/0130.png
    https://d1ktbxarro10a1.cloudfront.net/0131.png
    https://d1ktbxarro10a1.cloudfront.net/0132.png
    https://d1ktbxarro10a1.cloudfront.net/0133.png
    https://d1ktbxarro10a1.cloudfront.net/0134.png
    https://d1ktbxarro10a1.cloudfront.net/0135.png
    https://d1ktbxarro10a1.cloudfront.net/0136.png
    https://d1ktbxarro10a1.cloudfront.net/0137.png
    https://d1ktbxarro10a1.cloudfront.net/0138.png
    https://d1ktbxarro10a1.cloudfront.net/0139.png
    https://d1ktbxarro10a1.cloudfront.net/0140.png
    https://d1ktbxarro10a1.cloudfront.net/0141.png
    https://d1ktbxarro10a1.cloudfront.net/0142.png
    https://d1ktbxarro10a1.cloudfront.net/0143.png
    https://d1ktbxarro10a1.cloudfront.net/0144.png
    https://d1ktbxarro10a1.cloudfront.net/0145.png
    https://d1ktbxarro10a1.cloudfront.net/0146.png
    https://d1ktbxarro10a1.cloudfront.net/0147.png
    https://d1ktbxarro10a1.cloudfront.net/0148.png
    https://d1ktbxarro10a1.cloudfront.net/0149.png
    https://d1ktbxarro10a1.cloudfront.net/0150.png
    https://d1ktbxarro10a1.cloudfront.net/0151.png
    https://d1ktbxarro10a1.cloudfront.net/0152.png
    https://d1ktbxarro10a1.cloudfront.net/0153.png
    https://d1ktbxarro10a1.cloudfront.net/0154.png
    https://d1ktbxarro10a1.cloudfront.net/0155.png
    https://d1ktbxarro10a1.cloudfront.net/0156.png
    https://d1ktbxarro10a1.cloudfront.net/0157.png
    https://d1ktbxarro10a1.cloudfront.net/0158.png
    https://d1ktbxarro10a1.cloudfront.net/0159.png
    https://d1ktbxarro10a1.cloudfront.net/0160.png
    https://d1ktbxarro10a1.cloudfront.net/0161.png
    https://d1ktbxarro10a1.cloudfront.net/0162.png
    https://d1ktbxarro10a1.cloudfront.net/0163.png
    https://d1ktbxarro10a1.cloudfront.net/0164.png
    https://d1ktbxarro10a1.cloudfront.net/0165.png
    https://d1ktbxarro10a1.cloudfront.net/0166.png
    https://d1ktbxarro10a1.cloudfront.net/0167.png
    https://d1ktbxarro10a1.cloudfront.net/0168.png
    https://d1ktbxarro10a1.cloudfront.net/0169.png
    https://d1ktbxarro10a1.cloudfront.net/0170.png
    https://d1ktbxarro10a1.cloudfront.net/0171.png
    https://d1ktbxarro10a1.cloudfront.net/0172.png
    https://d1ktbxarro10a1.cloudfront.net/0173.png
    https://d1ktbxarro10a1.cloudfront.net/0174.png
    https://d1ktbxarro10a1.cloudfront.net/0175.png
    https://d1ktbxarro10a1.cloudfront.net/0176.png
    https://d1ktbxarro10a1.cloudfront.net/0177.png
    https://d1ktbxarro10a1.cloudfront.net/0178.png
    https://d1ktbxarro10a1.cloudfront.net/0179.png
    https://d1ktbxarro10a1.cloudfront.net/0180.png
    https://d1ktbxarro10a1.cloudfront.net/0181.png
    https://d1ktbxarro10a1.cloudfront.net/0182.png
    https://d1ktbxarro10a1.cloudfront.net/0183.png
    https://d1ktbxarro10a1.cloudfront.net/0184.png
    https://d1ktbxarro10a1.cloudfront.net/0185.png
    https://d1ktbxarro10a1.cloudfront.net/0186.png
    https://d1ktbxarro10a1.cloudfront.net/0187.png
    https://d1ktbxarro10a1.cloudfront.net/0188.png
    https://d1ktbxarro10a1.cloudfront.net/0189.png
    https://d1ktbxarro10a1.cloudfront.net/0190.png
    https://d1ktbxarro10a1.cloudfront.net/0191.png
    https://d1ktbxarro10a1.cloudfront.net/0192.png
    https://d1ktbxarro10a1.cloudfront.net/0193.png
    https://d1ktbxarro10a1.cloudfront.net/0194.png
    https://d1ktbxarro10a1.cloudfront.net/0195.png
    https://d1ktbxarro10a1.cloudfront.net/0196.png
    https://d1ktbxarro10a1.cloudfront.net/0197.png
    https://d1ktbxarro10a1.cloudfront.net/0198.png
    https://d1ktbxarro10a1.cloudfront.net/0199.png
    https://d1ktbxarro10a1.cloudfront.net/0200.png
    https://d1ktbxarro10a1.cloudfront.net/0200.png
    https://d1ktbxarro10a1.cloudfront.net/0201.png
    https://d1ktbxarro10a1.cloudfront.net/0202.png
    https://d1ktbxarro10a1.cloudfront.net/0203.png
    https://d1ktbxarro10a1.cloudfront.net/0204.png
    https://d1ktbxarro10a1.cloudfront.net/0205.png
    https://d1ktbxarro10a1.cloudfront.net/0206.png
    https://d1ktbxarro10a1.cloudfront.net/0207.png
    https://d1ktbxarro10a1.cloudfront.net/0208.png
    https://d1ktbxarro10a1.cloudfront.net/0209.png
    https://d1ktbxarro10a1.cloudfront.net/0210.png
    https://d1ktbxarro10a1.cloudfront.net/0211.png
    https://d1ktbxarro10a1.cloudfront.net/0212.png
    https://d1ktbxarro10a1.cloudfront.net/0213.png
    https://d1ktbxarro10a1.cloudfront.net/0214.png
    https://d1ktbxarro10a1.cloudfront.net/0215.png
    https://d1ktbxarro10a1.cloudfront.net/0216.png
    https://d1ktbxarro10a1.cloudfront.net/0217.png
    https://d1ktbxarro10a1.cloudfront.net/0218.png
    https://d1ktbxarro10a1.cloudfront.net/0219.png
    https://d1ktbxarro10a1.cloudfront.net/0220.png
    https://d1ktbxarro10a1.cloudfront.net/0221.png
    https://d1ktbxarro10a1.cloudfront.net/0222.png
    https://d1ktbxarro10a1.cloudfront.net/0223.png
    https://d1ktbxarro10a1.cloudfront.net/0224.png
    https://d1ktbxarro10a1.cloudfront.net/0225.png
    https://d1ktbxarro10a1.cloudfront.net/0226.png
    https://d1ktbxarro10a1.cloudfront.net/0227.png
    https://d1ktbxarro10a1.cloudfront.net/0228.png
    https://d1ktbxarro10a1.cloudfront.net/0229.png
    https://d1ktbxarro10a1.cloudfront.net/0230.png
    https://d1ktbxarro10a1.cloudfront.net/0231.png
    https://d1ktbxarro10a1.cloudfront.net/0232.png
    https://d1ktbxarro10a1.cloudfront.net/0233.png
    https://d1ktbxarro10a1.cloudfront.net/0234.png
    https://d1ktbxarro10a1.cloudfront.net/0235.png
    https://d1ktbxarro10a1.cloudfront.net/0236.png
    https://d1ktbxarro10a1.cloudfront.net/0237.png
    https://d1ktbxarro10a1.cloudfront.net/0238.png
    https://d1ktbxarro10a1.cloudfront.net/0239.png
    https://d1ktbxarro10a1.cloudfront.net/0240.png
    https://d1ktbxarro10a1.cloudfront.net/0241.png
    https://d1ktbxarro10a1.cloudfront.net/0242.png
    https://d1ktbxarro10a1.cloudfront.net/0243.png
    https://d1ktbxarro10a1.cloudfront.net/0244.png
    https://d1ktbxarro10a1.cloudfront.net/0245.png
    https://d1ktbxarro10a1.cloudfront.net/0246.png
    https://d1ktbxarro10a1.cloudfront.net/0247.png
    https://d1ktbxarro10a1.cloudfront.net/0248.png
    https://d1ktbxarro10a1.cloudfront.net/0249.png
    https://d1ktbxarro10a1.cloudfront.net/0250.png
    https://d1ktbxarro10a1.cloudfront.net/0251.png
    https://d1ktbxarro10a1.cloudfront.net/0252.png
    https://d1ktbxarro10a1.cloudfront.net/0253.png
    https://d1ktbxarro10a1.cloudfront.net/0254.png
    https://d1ktbxarro10a1.cloudfront.net/0255.png
    https://d1ktbxarro10a1.cloudfront.net/0256.png
    https://d1ktbxarro10a1.cloudfront.net/0257.png
    https://d1ktbxarro10a1.cloudfront.net/0258.png
    https://d1ktbxarro10a1.cloudfront.net/0259.png
    https://d1ktbxarro10a1.cloudfront.net/0260.png
    https://d1ktbxarro10a1.cloudfront.net/0261.png
    https://d1ktbxarro10a1.cloudfront.net/0262.png
    https://d1ktbxarro10a1.cloudfront.net/0263.png
    https://d1ktbxarro10a1.cloudfront.net/0264.png
    https://d1ktbxarro10a1.cloudfront.net/0265.png
    https://d1ktbxarro10a1.cloudfront.net/0266.png
    https://d1ktbxarro10a1.cloudfront.net/0267.png
    https://d1ktbxarro10a1.cloudfront.net/0268.png
    https://d1ktbxarro10a1.cloudfront.net/0269.png
    https://d1ktbxarro10a1.cloudfront.net/0270.png
    https://d1ktbxarro10a1.cloudfront.net/0271.png
    https://d1ktbxarro10a1.cloudfront.net/0272.png
    https://d1ktbxarro10a1.cloudfront.net/0273.png
    https://d1ktbxarro10a1.cloudfront.net/0274.png
    https://d1ktbxarro10a1.cloudfront.net/0275.png
    https://d1ktbxarro10a1.cloudfront.net/0276.png
    https://d1ktbxarro10a1.cloudfront.net/0277.png
    https://d1ktbxarro10a1.cloudfront.net/0278.png
    https://d1ktbxarro10a1.cloudfront.net/0279.png
    https://d1ktbxarro10a1.cloudfront.net/0280.png
    https://d1ktbxarro10a1.cloudfront.net/0281.png
    https://d1ktbxarro10a1.cloudfront.net/0282.png
    https://d1ktbxarro10a1.cloudfront.net/0283.png
    https://d1ktbxarro10a1.cloudfront.net/0284.png
    https://d1ktbxarro10a1.cloudfront.net/0285.png
    https://d1ktbxarro10a1.cloudfront.net/0286.png
    https://d1ktbxarro10a1.cloudfront.net/0287.png
    https://d1ktbxarro10a1.cloudfront.net/0288.png
    https://d1ktbxarro10a1.cloudfront.net/0289.png
    https://d1ktbxarro10a1.cloudfront.net/0290.png
    https://d1ktbxarro10a1.cloudfront.net/0291.png
    https://d1ktbxarro10a1.cloudfront.net/0292.png
    https://d1ktbxarro10a1.cloudfront.net/0293.png
    https://d1ktbxarro10a1.cloudfront.net/0294.png
    https://d1ktbxarro10a1.cloudfront.net/0295.png
    https://d1ktbxarro10a1.cloudfront.net/0296.png
    https://d1ktbxarro10a1.cloudfront.net/0297.png
    https://d1ktbxarro10a1.cloudfront.net/0298.png
    https://d1ktbxarro10a1.cloudfront.net/0299.png
    https://d1ktbxarro10a1.cloudfront.net/0300.png
    https://d1ktbxarro10a1.cloudfront.net/0301.png
    https://d1ktbxarro10a1.cloudfront.net/0302.png
    https://d1ktbxarro10a1.cloudfront.net/0303.png
    https://d1ktbxarro10a1.cloudfront.net/0304.png
    https://d1ktbxarro10a1.cloudfront.net/0305.png
    https://d1ktbxarro10a1.cloudfront.net/0306.png
    https://d1ktbxarro10a1.cloudfront.net/0307.png
    https://d1ktbxarro10a1.cloudfront.net/0308.png
    https://d1ktbxarro10a1.cloudfront.net/0309.png
    https://d1ktbxarro10a1.cloudfront.net/0310.png
    https://d1ktbxarro10a1.cloudfront.net/0311.png
    https://d1ktbxarro10a1.cloudfront.net/0312.png
    https://d1ktbxarro10a1.cloudfront.net/0313.png
    https://d1ktbxarro10a1.cloudfront.net/0314.png
    https://d1ktbxarro10a1.cloudfront.net/0315.png
    https://d1ktbxarro10a1.cloudfront.net/0316.png
    https://d1ktbxarro10a1.cloudfront.net/0317.png
    https://d1ktbxarro10a1.cloudfront.net/0318.png
    https://d1ktbxarro10a1.cloudfront.net/0319.png
    https://d1ktbxarro10a1.cloudfront.net/0320.png
    https://d1ktbxarro10a1.cloudfront.net/0321.png
    https://d1ktbxarro10a1.cloudfront.net/0322.png
    https://d1ktbxarro10a1.cloudfront.net/0323.png
    https://d1ktbxarro10a1.cloudfront.net/0324.png
    https://d1ktbxarro10a1.cloudfront.net/0325.png
    https://d1ktbxarro10a1.cloudfront.net/0326.png
    https://d1ktbxarro10a1.cloudfront.net/0327.png
    https://d1ktbxarro10a1.cloudfront.net/0328.png
    https://d1ktbxarro10a1.cloudfront.net/0329.png
    https://d1ktbxarro10a1.cloudfront.net/0330.png
    https://d1ktbxarro10a1.cloudfront.net/0331.png
    https://d1ktbxarro10a1.cloudfront.net/0332.png
    https://d1ktbxarro10a1.cloudfront.net/0333.png
    https://d1ktbxarro10a1.cloudfront.net/0334.png
    https://d1ktbxarro10a1.cloudfront.net/0335.png
    https://d1ktbxarro10a1.cloudfront.net/0336.png
    https://d1ktbxarro10a1.cloudfront.net/0337.png
    https://d1ktbxarro10a1.cloudfront.net/0338.png
    https://d1ktbxarro10a1.cloudfront.net/0339.png
    https://d1ktbxarro10a1.cloudfront.net/0340.png
    https://d1ktbxarro10a1.cloudfront.net/0341.png
    https://d1ktbxarro10a1.cloudfront.net/0342.png
    https://d1ktbxarro10a1.cloudfront.net/0343.png
    https://d1ktbxarro10a1.cloudfront.net/0344.png
    https://d1ktbxarro10a1.cloudfront.net/0345.png
    https://d1ktbxarro10a1.cloudfront.net/0346.png
    https://d1ktbxarro10a1.cloudfront.net/0347.png
    https://d1ktbxarro10a1.cloudfront.net/0348.png
    https://d1ktbxarro10a1.cloudfront.net/0349.png
    https://d1ktbxarro10a1.cloudfront.net/0350.png
    https://d1ktbxarro10a1.cloudfront.net/0351.png
    https://d1ktbxarro10a1.cloudfront.net/0352.png
    https://d1ktbxarro10a1.cloudfront.net/0353.png
    https://d1ktbxarro10a1.cloudfront.net/0354.png
    https://d1ktbxarro10a1.cloudfront.net/0355.png
    https://d1ktbxarro10a1.cloudfront.net/0356.png
    https://d1ktbxarro10a1.cloudfront.net/0357.png
    https://d1ktbxarro10a1.cloudfront.net/0358.png
    https://d1ktbxarro10a1.cloudfront.net/0359.png
    https://d1ktbxarro10a1.cloudfront.net/0360.png
    https://d1ktbxarro10a1.cloudfront.net/0361.png


    
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 360;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
