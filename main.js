const modeSwitch = document.querySelector('#switch')
const titleName = document.querySelector('.titleName')
const skillsTitle = document.querySelector('.skillsTitle')
const root = document.documentElement
modeSwitch.addEventListener('input', function (event) {
  if (root.style.getPropertyValue('--hot-pink') === '#ff00c8') {
    root.style.setProperty('--pink-gradient', 'linear-gradient(rgba(47, 21, 71, 0.2),  rgba(37, 42, 112, .2),  rgba(37, 42, 112, .2)), no-repeat center/cover url(HalongBay1.jpg)')
    root.style.setProperty('--purple-gradient', 'linear-gradient(rgba(47, 21, 71, 0.2),  rgba(37, 42, 112, .2),  rgba(37, 42, 112, .2)), no-repeat center/cover url(CinqueTerreSunset.jpg)')
    root.style.setProperty('--off-white', '#424B54')
    // root.style.setProperty('--off-white-two', '#ABC5FC')
    titleName.style.color = '#28AFB0'
    root.style.setProperty('--button-gradient', 'linear-gradient(45deg, #ABC5FC, #30D17D)')
    root.style.setProperty('--webkit-button-gradient', '-webkit-linear-gradient(45deg, #ABC5FC, #30D17D)')
    root.style.setProperty('--dark-purple', '#ABC5FC')
    root.style.setProperty('--hot-pink', '#30D17D')
    root.style.setProperty('--box-background', 'linear-gradient(45deg, rgba(171, 197, 252, .3), rgba(48, 209, 125, .3))')
    skillsTitle.style.textShadow = ` 1px 1px 0px rgb(27, 26, 26),
    2px 2px 0px rgb(27, 26, 26),
    3px 3px 0px rgb(27, 26, 26),
    4px 4px 0px rgb(27, 26, 26),
    5px 5px 0px rgb(27, 26, 26),
    6px 6px 0px rgb(27, 26, 26),
    7px 7px 0px rgb(27, 26, 26),
    8px 8px 0px rgb(27, 26, 26),
    9px 9px 0px rgb(27, 26, 26)`
  } else {
    root.style.setProperty('--pink-gradient', 'linear-gradient(45deg, #ff003c, #c648c8)')
    root.style.setProperty('--purple-gradient', 'linear-gradient(45deg, #c648c8, #ff003c)')
    root.style.setProperty('--off-white', 'rgb(245, 237, 237)')
    // root.style.setProperty('--off-white-two', 'rgb(245, 237, 237)')
    titleName.style.color = '#963ce0'
    root.style.setProperty('--button-gradient', 'linear-gradient(45deg, #7b00e0, #ae31d9)')
    root.style.setProperty('--webkit-button-gradient', '-webkit-linear-gradient(45deg, #7b00e0, #ae31d9)')
    root.style.setProperty('--dark-purple', '#9800d4')
    root.style.setProperty('--hot-pink', '#ff00c8')
    root.style.setProperty('--box-background', 'linear-gradient(45deg, rgba(123, 0, 224, .1), rgb(174, 49, 217, .1))')
    skillsTitle.style.textShadow = ` 1px 1px 0px rgb(27, 26, 26), 
    2px 2px 0px rgb(27, 26, 26)`
  }
})
