function change_mode () {
    var style = document.getElementById('mode')
    var mode = style.getAttribute('href')
    if (mode == 'light.css') {
        style.setAttribute('href', 'dark.css')
    }
    else if (mode == 'dark.css') {
        style.setAttribute('href', 'light.css')
    }
}