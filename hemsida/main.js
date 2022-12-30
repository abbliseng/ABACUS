const pages = ['home-page', 'login-page', 'profile-page']

function show_page(id) {
    document.getElementById(id).style.display = 'block'
}

function hide_page(id) {
    document.getElementById(id).style.display = 'none'
}

function hide_all_but_one(id) {
    for (i in pages) {
        if (pages[i] === id) {
            show_page(pages[i])
        } else {
            hide_page(pages[i])
        }
    }
}


// FIXME: VERY insecure, need to build some confidence!
function get_login_stats() {
    return false
}
// FIXME: VERY insecure, need to build some confidence!
function show_profile() {
    if (!get_login_stats()) {
        hide_all_but_one(pages[id])
    }
}



// MAIN
// Only runs once page has fully loaded
window.addEventListener('load', function () {
    hide_all_but_one('home-page')
})