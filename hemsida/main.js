const test_pages = ['home-page', 'login-page', 'profile-page']
var login_status = false

var news = [
    {'title': 'Christer knackar på', 'date': '12 Dec, 2019', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien ac enim pretium pulvinar id vel neque.'}
]

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
    load_news()
    load_news()
    load_news()
    load_news()
})

function s(target = '') {
    if (target == '' || target == 'event') {
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        return
    }
    var access = document.getElementById(target);
    access.scrollIntoView({behavior: 'smooth'}, true);
}

function create_span(id, c, content) {
    n_span = document.createElement('span')
    n_span.setAttribute('id',id)
    n_span.setAttribute('class',c)
    n_span.textContent = content
    return n_span
}

function load_news(date = '00 AAA, 0000', title = 'ERROR:', content="Invalid arguments passed to element creator jahjsdjasdhadsjahjdsajhsdh") {
    lister = document.getElementById('news-lister')
    lister_prev = lister.innerHTML

    n = document.createElement('div')
    // DATE SECTION
    n.setAttribute('class','news-card no-touchy')
    // n.setAttribute('id','n2')
    n_date = document.createElement('div')
    n_date.setAttribute('id', 'n-date')
    n_span = document.createElement('span')
    n_span.setAttribute('class', 'h-font white')
    n_span.textContent = date
    n_date.appendChild(n_span)

    // TEXT SECTION
    n_text = document.createElement('div')
    n_text.setAttribute('id','n-text')
    n_span = document.createElement('span')
    n_text.appendChild(create_span('n-title', 'h-font white', title))
    n_text.appendChild(create_span('n-content', 'h-font white', content.slice(0,40) + '...'))
    n_text.appendChild(create_span('n-press', 'h-font white', 'Tryck för mer information.'))
    n_text.appendChild(n_span)

    n.appendChild(n_date)
    n.appendChild(n_text)
    
    lister.appendChild(n)
}