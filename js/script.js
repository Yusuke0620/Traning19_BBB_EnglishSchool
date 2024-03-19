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
    entries.forEach (entry => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['-50vw 0', 0],
            };
            const options = {
                duration: 600,
                fill: 'forwards',
            };
            entry.target.animate(keyframes, options);
            // 一度動作されたら停止する
            obs.unobserve(itemsLeft);
        }
    });
};
// 監視ロボの設定
const showSlideLeftObserver = new IntersectionObserver(showSlideLeft);
// 監視ロボに監視対象を教えて実行する
showSlideLeftObserver.observe(itemsLeft);


// 右から左へのスライド
const showSlideRight = (entries, obs) => {
    entries.forEach (entry => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['+50vw 0', 0],
            };
            const options = {
                duration: 600,
                fill: 'forwards',
            };
            entry.target.animate(keyframes, options);
            // 一度動作されたら停止する
            obs.unobserve(itemsRight);
        }
    });
};
// 監視ロボの設定
const showSlideRightObserver = new IntersectionObserver(showSlideRight);
// 監視ロボに監視対象を教えて実行する
showSlideRightObserver.observe(itemsRight);


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

const zoomUp = (entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.animate (
                {
                opacity: [0, 1],
                scale: [0 ,1],
                },
                {
                    duration: 500,
                    fill: 'forwards',
                }
            );
            obs.unobserve(entry.target);
        }
    });
};

//監視ロボ
const zoomUpObserver = new IntersectionObserver(zoomUp);
//監視要素を指定
profiles.forEach((profile) => {
    zoomUpObserver.observe(profile);
});
