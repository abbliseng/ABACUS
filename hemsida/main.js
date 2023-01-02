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
    this.document.getElementById('event-card-title').innerHTML = "BOLIBOMPA DRAKEN SLÅR TILL IGEN!"
    this.document.getElementById('event-card-temp').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien ac enim pretium pulvinar id vel neque. Donec lobortis porta magna, vitae mattis nisi fringilla a. Sed sed iaculis urna. Morbi sit amet mauris accumsan, condimentum neque fringilla, imperdiet sapien. Curabitur vitae nunc augue. Sed eget turpis et augue viverra efficitur eleifend id diam. Nulla eu velit massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat tempus mattis. Etiam consequat nibh ut lacus dignissim dapibus. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero a nisl interdum ullamcorper ac id dui. Proin tincidunt, nunc sed porta tempus, leo sem ullamcorper metus, at tincidunt leo mi sed elit."
    // hide_all_but_one('home-page')
})