document.addEventListener("scroll", () => {
  console.log("scroll event triggered");
  const scrollPos = window.scrollY;
  const bannerHeight = document.querySelector(".banner").offsetHeight;
  const scrollFraction = Math.min(scrollPos / bannerHeight, 1);

  const banner = document.querySelector(".banner");
  banner.style.setProperty('--before-scale', 1.2 - scrollFraction * 0.2);   //before
  banner.style.setProperty('--after-scale', 2 - scrollFraction * 1);        //after

  //text
  const svgPath = document.querySelector("svg path");
  svgPath.style.strokeDashoffset = `${50 - scrollFraction * 50}`;
  svgPath.style.fill = scrollFraction > 0.8 ? '#fff' : 'transparent';
});