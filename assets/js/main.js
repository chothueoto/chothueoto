$ = document.querySelector.bind(document)
var barsMobile = $('.bars__mobile')
var closes = $('.close')
barsMobile.onclick = function() {
    $('.header__list').classList.toggle('active')
}
closes.onclick = function() {
    $('.header__list').style.display = 'none'
}