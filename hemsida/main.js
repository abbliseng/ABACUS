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

// MAIN
// Only runs once page has fully loaded
window.addEventListener('load', function () {
    // this.document.getElementById('event-card-title').innerHTML = "BOLIBOMPA DRAKEN SLÅR TILL IGEN!"
    // this.document.getElementById('event-card-temp').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien ac enim pretium pulvinar id vel neque. Donec lobortis porta magna, vitae mattis nisi fringilla a. Sed sed iaculis urna. Morbi sit amet mauris accumsan, condimentum neque fringilla, imperdiet sapien. Curabitur vitae nunc augue. Sed eget turpis et augue viverra efficitur eleifend id diam. Nulla eu velit massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat tempus mattis. Etiam consequat nibh ut lacus dignissim dapibus. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero a nisl interdum ullamcorper ac id dui. Proin tincidunt, nunc sed porta tempus, leo sem ullamcorper metus, at tincidunt leo mi sed elit."
})

function s(target = '') {
    if (window.location.href != window.location.origin && window.location.href != window.location.origin+'/') window.location.replace(window.location.href+'../');
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
    window.scroll({
        top: access.offsetTop-80, 
        left: 0, 
        behavior: 'smooth' 
       });
    return
}