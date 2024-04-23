function switchTheme() {
    var themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'styles/dark.css') {
        themeStyle.setAttribute('href', 'styles/light.css');
    } else {
        themeStyle.setAttribute('href', 'styles/dark.css');
    }
}
