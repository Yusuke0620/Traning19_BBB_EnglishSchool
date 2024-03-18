// window.addEventListener('load', () => {
//     const slideImages = document.querySelectorAll('.slide-image');
//     let currentIndex = 0; // 現在の画像のインデックス

//     const animateSlides = () => {
//         /* アニメーション設定 */
//         const keyframes = [
//             { opacity: 0, offset: 0 },
//             { opacity: 1, offset: 0.1 },
//             { opacity: 1, offset: 0.9 },
//             { opacity: 0, offset: 1 },
//         ];
//         const options = {
//             duration: 4000,    // 全体の期間
//             fill: 'forwards',  // アニメーション終了状態を維持
//         };

//         /* 現在のスライドをアニメーション */
//         animation = slideImages[currentIndex].animate(keyframes, options);

//         animation.onfinish = () => {
//             // 次のスライドへ移動
//             currentIndex = (currentIndex + 1) % slideImages.length;

//             // 全てのスライドが表示されたら、最初から再開
//             if (currentIndex === 0) {
//                 // 3枚目から1枚目への遷移時の遅延時間を調整
//                 setTimeout(animateSlides, 100); // 遅延時間を100msに短縮
//             } else {
//                 animateSlides();
//             }
//         };        
//     };
    
//     // アニメーション開始
//     animateSlides();
// });




// // slideImages.forEach((img, index) => {
// //   // 各画像に対してアニメーションを設定
// //   img.animate([
// //     { opacity: 0 },
// //     { opacity: 1 }
// //   ], {
// //     duration: 1000, // 1秒かけてフェードイン
// //     delay: index * 1000, // 各画像の開始を1秒ずつ遅らせる
// //     fill: 'forwards',
// //     // iterations: Infinity, // 無限に繰り返す
// //     // direction: 'alternate', // フェードインとフェードアウトを交互に繰り返す
// //   });
// // });
