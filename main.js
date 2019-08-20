const modeSwitch = document.querySelector('#switch')
const mainTitle = document.querySelector('.mainTitle')
const root = document.documentElement
modeSwitch.addEventListener('input', function (event) {
  if (root.style.getPropertyValue('--off-white') === 'rgb(61, 58, 65)') {
    root.style.setProperty('--pink-gradient', 'linear-gradient(45deg, #ff003c, #c648c8)')
    root.style.setProperty('--purple-gradient', 'linear-gradient(45deg, #c648c8, #ff003c)')
    root.style.setProperty('--off-white', 'rgb(245, 237, 237)')
    root.style.setProperty('--off-white-two', 'rgb(245, 237, 237)')
  } else {
    root.style.setProperty('--pink-gradient', 'linear-gradient(rgba(47, 21, 71, 0.2),  rgba(37, 42, 112, .2),  rgba(37, 42, 112, .2)), no-repeat center/cover url(HalongBay1.jpg)')
    root.style.setProperty('--purple-gradient', 'radial-gradient(circle, rgba(89,91,94,1) 35%, rgba(153,155,161,1) 100%)')
    root.style.setProperty('--off-white', 'rgb(61, 58, 65)')
    root.style.setProperty('--off-white-two', '#c6c6c8')
  }
})
