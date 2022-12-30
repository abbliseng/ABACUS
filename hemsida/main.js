const test_pages = ['home-page', 'login-page', 'profile-page']
var login_status = false

function show_page(id) {
    document.getElementById(id).style.display = 'block'
}

function hide_page(id) {
    document.getElementById(id).style.display = 'none'
}

function hide_all_but_one(id) {
    for (i in test_pages) {
        if (test_pages[i] === id) {
            show_page(test_pages[i])
        } else {
            hide_page(test_pages[i])
        }
    }
}


// FIXME: VERY insecure, need to build some confidence!
function get_login_stats() {
    return login_status
}
// FIXME: VERY insecure, need to build some confidence!
function show_profile() {
    if (!get_login_stats()) {
        hide_all_but_one('login-page')
        return
    }
    hide_all_but_one('profile-page')
}

// MAIN
// Only runs once page has fully loaded
window.addEventListener('load', function () {
    hide_all_but_one('home-page')
})