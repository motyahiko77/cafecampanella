const pagetop_btn = document.querySelector(".footr_logo");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 100) {
        pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
        pagetop_btn.style.opacity = "0";
    }
}

const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    setTimeout(function () {
    loading.classList.add('hide');
},3000);
});