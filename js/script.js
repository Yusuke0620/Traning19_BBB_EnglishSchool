/*-------------------------------------------
#online-native 左右スライドアニメーション
-------------------------------------------*/
/*
・右と左は監視が独立している
・opacityで透明度0→1
・一度動作されたら停止する
・コールバック関数としてshowSlide
・translateXで左右からスライド
・IntersectionObserverで監視ロボ作成※コールバック関数としてshowSlide
*/


// 監視対象が範囲内に現れたら実行する動作
const itemsLeft = document.querySelector('.online-native-items:nth-of-type(1)');
const itemsRight = document.querySelector('.online-native-items:nth-of-type(2)');

// 左から右へのスライド
const showSlideLeft = (entries, obs) => {
    const keyframes = {
        opacity: [0, 1],
        translate: ['-50vw 0', 0],
    };
    const options = {
        duration: 600,
        fill: 'forwards',
    };
    entries[0].target.animate(keyframes, options);
    // 一度動作されたら停止する
    obs.unobserve(itemsLeft);
};

// 監視ロボの設定
const showSlideLeftObserver = new IntersectionObserver(showSlideLeft);

// 監視ロボに監視対象を教えて実行する
showSlideLeftObserver.observe(itemsLeft);


// 右から左へのスライド
const showSlideRight = (entries, obs) => {
    const keyframes = {
        opacity: [0, 1],
        translate: ['50vw 0', 0],
    };
    const options = {
        duration: 600,
        fill: 'forwards',
    };
    entries[0].target.animate(keyframes, options);
    // 一度動作されたら停止する
    obs.unobserve(itemsRight);

};

// 監視ロボの設定
const showSlideObserver = new IntersectionObserver(showSlideRight);

// 監視ロボに監視対象を教えて実行する
showSlideObserver.observe(itemsRight);







/*-------------------------------------------
#voice 浮き上がりアニメーション
-------------------------------------------*/
/*
・opacityで透明度0→1
・一度動作されたら停止する
・コールバック関数としてhoverAnimation
・IntersectionObserverで監視ロボ作成※コールバック関数としてhoverAnimation
・profileクラスが3つあるので並列で
*/

//定数に代入してコンパクトにさせる
const profiles = document.querySelectorAll('.profile');

//プロフィールを全て繰り返す
for (let i = 0; i < profiles.length; i++) {

    //
    const showHover = (entries, obs) => {
        const keyframes = {
            opacity: [0, 1],
            scale: [0, 1],
        };

        entries[i].target.animate(keyframes, 500);
        obs.unobserve(profile);
    };
}





// 監視ロボの設定
const scaleObserver = new IntersectionObserver(showHover);

// 監視ロボに監視対象を教えて実行する
scaleObserver.observe(profile);

