const modeSwitch = document.querySelector('#switch')
const titleName = document.querySelector('.titleName')
const root = document.documentElement
modeSwitch.addEventListener('input', function (event) {
  if (root.style.getPropertyValue('--off-white') === '#424B54') {
    root.style.setProperty('--pink-gradient', 'linear-gradient(45deg, #ff003c, #c648c8)')
    root.style.setProperty('--purple-gradient', 'linear-gradient(45deg, #c648c8, #ff003c)')
    root.style.setProperty('--off-white', 'rgb(245, 237, 237)')
    root.style.setProperty('--off-white-two', 'rgb(245, 237, 237)')
    titleName.style.color = '#963ce0'
    root.style.setProperty('--button-gradient', 'linear-gradient(45deg, #7b00e0, #ae31d9)')
    root.style.setProperty('--webkit-button-gradient', '-webkit-linear-gradient(45deg, #7b00e0, #ae31d9)')
    root.style.setProperty('--dark-purple', '#9800d4')
    root.style.setProperty('--hot-pink', '#ff00c8')
  } else {
    root.style.setProperty('--pink-gradient', 'linear-gradient(rgba(47, 21, 71, 0.2),  rgba(37, 42, 112, .2),  rgba(37, 42, 112, .2)), no-repeat center/cover url(HalongBay1.jpg)')
    root.style.setProperty('--purple-gradient', 'radial-gradient(circle, rgba(89,91,94,1) 35%, rgba(153,155,161,1) 100%)')
    root.style.setProperty('--off-white', '#424B54')
    root.style.setProperty('--off-white-two', '#424B54')
    titleName.style.color = '#98DFEA'
    root.style.setProperty('--button-gradient', 'linear-gradient(45deg, #28AFB0, #98DFEA)')
    root.style.setProperty('--webkit-button-gradient', '-webkit-linear-gradient(45deg, #28AFB0, #98DFEA)')
    root.style.setProperty('--dark-purple', '#28AFB0')
    root.style.setProperty('--hot-pink', '#98DFEA')
  }
})
