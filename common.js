





// ローディングアニメーション
const loading = document.querySelector('.loading');
const anime = document.querySelector('.imageMain');


window.addEventListener('load', () => {
    setTimeout(function () {
        loading.classList.add('hide');
    }, 1500);
    
});


// 対象の要素を取得
window.addEventListener("load", function () {
    // 実行したい処理

    anime.classList.add('animeImg');
});
const target = document.getElementById('jump');

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation01() {
    // 要素の位置情報を取得
    const targetRect = target.getBoundingClientRect();

    // 画面内に入っているかどうかを判定
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        // 画面内に入った場合、クラスを付与
        target.classList.add('animate__jello'); // yourClassNameは付与したいクラス名に置き換えてください
    } else {
        // 画面外に出た場合、クラスを除去
        target.classList.remove('animate__jello');
    }
};




// 対象の要素を取得
const target02 = document.getElementById('yokoyure');

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation02() {
    // 要素の位置情報を取得
    const targetRect02 = target02.getBoundingClientRect();

    // 画面内に入っているかどうかを判定
    if (targetRect02.top < window.innerHeight && targetRect02.bottom >= 0) {
        // 画面内に入った場合、クラスを付与
        target02.classList.add('animate__bounce'); // yourClassNameは付与したいクラス名に置き換えてください
    } else {
        // 画面外に出た場合、クラスを除去
        target02.classList.remove('animate__bounce');
    }
};

// スクロールイベントを追加
window.addEventListener('scroll', observation01);
window.addEventListener('scroll', observation02);

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
