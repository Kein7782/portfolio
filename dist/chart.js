/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var https_www_gstatic_com_firebasejs_9_0_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js */ "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
/* harmony import */ var https_www_gstatic_com_firebasejs_9_0_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js */ "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_0_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_0_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__]);
([https_www_gstatic_com_firebasejs_9_0_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_0_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



  // Your web app's Firebase configuration
  const firebaseConfig = {
		apiKey: "AIzaSyDxu0wf3Nu8jWzK0tv3OeGmDlR2i6egNUo",
		authDomain: "zemitest-b50ec.firebaseapp.com",
		databaseURL: "https://zemitest-b50ec-default-rtdb.firebaseio.com",
		projectId: "zemitest-b50ec",
		storageBucket: "zemitest-b50ec.appspot.com",
		messagingSenderId: "534136909083",
		appId: "1:534136909083:web:dab3d59407abbacf9d77be",
		measurementId: "G-P79H6BQDQG"
	};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestoreからデータを取得する関数
function getData() {
  return db.collection("answer").get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    });
}

// データ取得後にPieチャートを描画
getData().then((data) => {
  createPieChart(data);
});

// Pieチャートを作成する関数
function createPieChart(data) {
  const labels = ['zemiM', 'zemiS', 'zemiH'];
  const values = data.map(doc => [doc.matsumura.zemiM, doc.sakaguchi.zemiS, doc.hoehoe.zemiH]);

  const ctx = document.getElementById('myPieChart').getContext('2d');
  const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
      }],
    },
  });
}





// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // グラフを描画するCanvas要素の取得
// const ctx = document.getElementById('myChart').getContext('2d');
// console.log(ctx);
// // データを取得して円グラフを描画
// async function drawDoughnutChart() {
//   try {
//     // Firestoreからデータを取得
//     const querySnapshot = await getDocs(collection(db, 'answer',));
// 		console.log("querySnapshot size:", querySnapshot.size);
//     const data = {
//       labels: [],
//       datasets: [{
//         data: [],
//         backgroundColor: []
//       }]
//     };

//     // データを処理してグラフデータに追加
// 		querySnapshot.forEach(function (doc) {
// 			const docId = doc.id; // ドキュメントIDを取得
// 			const value = doc.data().value; // ドキュメントの 'value' フィールドの値を取得
		
// 			data.labels.push(docId); // ドキュメントIDをラベルに追加
// 			data.datasets[0].data.push(value); // 'value' フィールドの値をデータに追加
// 			data.datasets[0].backgroundColor.push(getRandomColor()); // ランダムな色を背景色に追加
// 			console.log("Generated color:", getRandomColor());
// 		});
    
//     // グラフの作成
// 		console.log('Chart data:', data);
//     const myChart = new Chart(ctx, {
//       type: 'doughnut',
//       data: {
//         labels: data.labels,
//         datasets: [{
//           data: data.datasets[0].data,
//           backgroundColor: data.datasets[0].backgroundColor
//         }]
//       },
//       options: {
//         responsive: false,
//         maintainAspectRatio: false
//       }
//     });
//   } 
// 	catch (error) 
// 	{
//     console.log("ドキュメントの取得エラー: ", error);
//   }
// }

// // ランダムな色を生成する関数
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // ページが読み込まれたときにグラフを描画
// document.addEventListener('DOMContentLoaded', drawDoughnutChart);
// console.log('drawDoughnutChart 関数が実行されました');

// Firebaseの初期化








// import { initializeApp } from 'https://cdn.jsdelivr.net/npm/firebase@9.6.2/firebase-app.js';
// import { getFirestore, collection, getDocs, doc, setDoc } from 'https://cdn.jsdelivr.net/npm/firebase@9.6.2/firebase-firestore.js';
// import Chart from 'https://cdn.jsdelivr.net/npm/chart.js/auto';

// // Firebaseの設定
//   const firebaseConfig = {
// 	apiKey: "AIzaSyDxu0wf3Nu8jWzK0tv3OeGmDlR2i6egNUo",
// 	authDomain: "zemitest-b50ec.firebaseapp.com",
// 	databaseURL: "https://zemitest-b50ec-default-rtdb.firebaseio.com",
// 	projectId: "zemitest-b50ec",
// 	storageBucket: "zemitest-b50ec.appspot.com",
// 	messagingSenderId: "534136909083",
// 	appId: "1:534136909083:web:dab3d59407abbacf9d77be",
// 	measurementId: "G-P79H6BQDQG"
// 	};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const votesCollection = collection(db, "answer");

// const ctx = document.getElementById('myChart').getContext('2d');
// const voteChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [],
//         datasets: [{
//             data: [],
//             backgroundColor: []
//         }]
//     },
//     options: {
//         responsive: false,
//         maintainAspectRatio: false
//     }
// });

// // データを取得してグラフを更新
// async function updateChart() {
//     const querySnapshot = await getDocs(votesCollection);
//     const data = querySnapshot.size === 0 ? {} : querySnapshot.docs[0].data();
//     const labels = Object.keys(data);
//     const values = Object.values(data);
//     const backgroundColors = values.map(() => getRandomColor());

//     voteChart.data.labels = labels;
//     voteChart.data.datasets[0].data = values;
//     voteChart.data.datasets[0].backgroundColor = backgroundColors;
//     voteChart.update();
// }

// // ページが読み込まれたときにグラフを初期描画
// document.addEventListener('DOMContentLoaded', updateChart);

// // ランダムな色を生成する関数
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/chart.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RjtBQUMwQjs7QUFFbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsc0NBQXNDO0FBQ3RDO0FBQ0EsK0JBQStCO0FBQy9CLHlDQUF5QztBQUN6QywrREFBK0Q7QUFDL0Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0EsWUFBWSxnQkFBZ0I7QUFDNUIsWUFBWSxpREFBaUQ7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O1VDeE1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW1pLnRlc3QvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vemVtaS50ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3plbWkudGVzdC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3plbWkudGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3plbWkudGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3plbWkudGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vemVtaS50ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjAuMC9maXJlYmFzZS1hcHAuanMnO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjAuMC9maXJlYmFzZS1maXJlc3RvcmUuanMnO1xuXG4gIC8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG5cdFx0YXBpS2V5OiBcIkFJemFTeUR4dTB3ZjNOdThqV3pLMHR2M09lR21EbFIyaTZlZ05Vb1wiLFxuXHRcdGF1dGhEb21haW46IFwiemVtaXRlc3QtYjUwZWMuZmlyZWJhc2VhcHAuY29tXCIsXG5cdFx0ZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly96ZW1pdGVzdC1iNTBlYy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcblx0XHRwcm9qZWN0SWQ6IFwiemVtaXRlc3QtYjUwZWNcIixcblx0XHRzdG9yYWdlQnVja2V0OiBcInplbWl0ZXN0LWI1MGVjLmFwcHNwb3QuY29tXCIsXG5cdFx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiNTM0MTM2OTA5MDgzXCIsXG5cdFx0YXBwSWQ6IFwiMTo1MzQxMzY5MDkwODM6d2ViOmRhYjNkNTk0MDdhYmJhY2Y5ZDc3YmVcIixcblx0XHRtZWFzdXJlbWVudElkOiBcIkctUDc5SDZCUURRR1wiXG5cdH07XG5cbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbi8vIEZpcmVzdG9yZeOBi+OCieODh+ODvOOCv+OCkuWPluW+l+OBmeOCi+mWouaVsFxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJhbnN3ZXJcIikuZ2V0KClcbiAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IFtdO1xuICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbn1cblxuLy8g44OH44O844K/5Y+W5b6X5b6M44GrUGll44OB44Oj44O844OI44KS5o+P55S7XG5nZXREYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICBjcmVhdGVQaWVDaGFydChkYXRhKTtcbn0pO1xuXG4vLyBQaWXjg4Hjg6Pjg7zjg4jjgpLkvZzmiJDjgZnjgovplqLmlbBcbmZ1bmN0aW9uIGNyZWF0ZVBpZUNoYXJ0KGRhdGEpIHtcbiAgY29uc3QgbGFiZWxzID0gWyd6ZW1pTScsICd6ZW1pUycsICd6ZW1pSCddO1xuICBjb25zdCB2YWx1ZXMgPSBkYXRhLm1hcChkb2MgPT4gW2RvYy5tYXRzdW11cmEuemVtaU0sIGRvYy5zYWthZ3VjaGkuemVtaVMsIGRvYy5ob2Vob2UuemVtaUhdKTtcblxuICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlQaWVDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG15UGllQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgdHlwZTogJ3BpZScsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgZGF0YTogdmFsdWVzLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNyknLFxuICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC43KScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjcpJyxcbiAgICAgICAgXSxcbiAgICAgIH1dLFxuICAgIH0sXG4gIH0pO1xufVxuXG5cblxuXG5cbi8vIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuLy8gY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcblxuLy8gLy8g44Kw44Op44OV44KS5o+P55S744GZ44KLQ2FudmFz6KaB57Sg44Gu5Y+W5b6XXG4vLyBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG4vLyBjb25zb2xlLmxvZyhjdHgpO1xuLy8gLy8g44OH44O844K/44KS5Y+W5b6X44GX44Gm5YaG44Kw44Op44OV44KS5o+P55S7XG4vLyBhc3luYyBmdW5jdGlvbiBkcmF3RG91Z2hudXRDaGFydCgpIHtcbi8vICAgdHJ5IHtcbi8vICAgICAvLyBGaXJlc3RvcmXjgYvjgonjg4fjg7zjgr/jgpLlj5blvpdcbi8vICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCAnYW5zd2VyJywpKTtcbi8vIFx0XHRjb25zb2xlLmxvZyhcInF1ZXJ5U25hcHNob3Qgc2l6ZTpcIiwgcXVlcnlTbmFwc2hvdC5zaXplKTtcbi8vICAgICBjb25zdCBkYXRhID0ge1xuLy8gICAgICAgbGFiZWxzOiBbXSxcbi8vICAgICAgIGRhdGFzZXRzOiBbe1xuLy8gICAgICAgICBkYXRhOiBbXSxcbi8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXVxuLy8gICAgICAgfV1cbi8vICAgICB9O1xuXG4vLyAgICAgLy8g44OH44O844K/44KS5Yem55CG44GX44Gm44Kw44Op44OV44OH44O844K/44Gr6L+95YqgXG4vLyBcdFx0cXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbi8vIFx0XHRcdGNvbnN0IGRvY0lkID0gZG9jLmlkOyAvLyDjg4njgq3jg6Xjg6Hjg7Pjg4hJROOCkuWPluW+l1xuLy8gXHRcdFx0Y29uc3QgdmFsdWUgPSBkb2MuZGF0YSgpLnZhbHVlOyAvLyDjg4njgq3jg6Xjg6Hjg7Pjg4jjga4gJ3ZhbHVlJyDjg5XjgqPjg7zjg6vjg4njga7lgKTjgpLlj5blvpdcblx0XHRcbi8vIFx0XHRcdGRhdGEubGFiZWxzLnB1c2goZG9jSWQpOyAvLyDjg4njgq3jg6Xjg6Hjg7Pjg4hJROOCkuODqeODmeODq+OBq+i/veWKoFxuLy8gXHRcdFx0ZGF0YS5kYXRhc2V0c1swXS5kYXRhLnB1c2godmFsdWUpOyAvLyAndmFsdWUnIOODleOCo+ODvOODq+ODieOBruWApOOCkuODh+ODvOOCv+OBq+i/veWKoFxuLy8gXHRcdFx0ZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IucHVzaChnZXRSYW5kb21Db2xvcigpKTsgLy8g44Op44Oz44OA44Og44Gq6Imy44KS6IOM5pmv6Imy44Gr6L+95YqgXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCBjb2xvcjpcIiwgZ2V0UmFuZG9tQ29sb3IoKSk7XG4vLyBcdFx0fSk7XG4gICAgXG4vLyAgICAgLy8g44Kw44Op44OV44Gu5L2c5oiQXG4vLyBcdFx0Y29uc29sZS5sb2coJ0NoYXJ0IGRhdGE6JywgZGF0YSk7XG4vLyAgICAgY29uc3QgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbi8vICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXG4vLyAgICAgICBkYXRhOiB7XG4vLyAgICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMsXG4vLyAgICAgICAgIGRhdGFzZXRzOiBbe1xuLy8gICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YXNldHNbMF0uZGF0YSxcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yXG4vLyAgICAgICAgIH1dXG4vLyAgICAgICB9LFxuLy8gICAgICAgb3B0aW9uczoge1xuLy8gICAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcbi8vICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2Vcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgfSBcbi8vIFx0Y2F0Y2ggKGVycm9yKSBcbi8vIFx0e1xuLy8gICAgIGNvbnNvbGUubG9nKFwi44OJ44Kt44Ol44Oh44Oz44OI44Gu5Y+W5b6X44Ko44Op44O8OiBcIiwgZXJyb3IpO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIOODqeODs+ODgOODoOOBquiJsuOCkueUn+aIkOOBmeOCi+mWouaVsFxuLy8gZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XG4vLyAgIHZhciBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuLy8gICB2YXIgY29sb3IgPSAnIyc7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4vLyAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuLy8gICB9XG4vLyAgIHJldHVybiBjb2xvcjtcbi8vIH1cblxuLy8gLy8g44Oa44O844K444GM6Kqt44G/6L6844G+44KM44Gf44Go44GN44Gr44Kw44Op44OV44KS5o+P55S7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZHJhd0RvdWdobnV0Q2hhcnQpO1xuLy8gY29uc29sZS5sb2coJ2RyYXdEb3VnaG51dENoYXJ0IOmWouaVsOOBjOWun+ihjOOBleOCjOOBvuOBl+OBnycpO1xuXG4vLyBGaXJlYmFzZeOBruWIneacn+WMllxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2ZpcmViYXNlQDkuNi4yL2ZpcmViYXNlLWFwcC5qcyc7XG4vLyBpbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIGdldERvY3MsIGRvYywgc2V0RG9jIH0gZnJvbSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9maXJlYmFzZUA5LjYuMi9maXJlYmFzZS1maXJlc3RvcmUuanMnO1xuLy8gaW1wb3J0IENoYXJ0IGZyb20gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY2hhcnQuanMvYXV0byc7XG5cbi8vIC8vIEZpcmViYXNl44Gu6Kit5a6aXG4vLyAgIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuLy8gXHRhcGlLZXk6IFwiQUl6YVN5RHh1MHdmM051OGpXekswdHYzT2VHbURsUjJpNmVnTlVvXCIsXG4vLyBcdGF1dGhEb21haW46IFwiemVtaXRlc3QtYjUwZWMuZmlyZWJhc2VhcHAuY29tXCIsXG4vLyBcdGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vemVtaXRlc3QtYjUwZWMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXG4vLyBcdHByb2plY3RJZDogXCJ6ZW1pdGVzdC1iNTBlY1wiLFxuLy8gXHRzdG9yYWdlQnVja2V0OiBcInplbWl0ZXN0LWI1MGVjLmFwcHNwb3QuY29tXCIsXG4vLyBcdG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzNDEzNjkwOTA4M1wiLFxuLy8gXHRhcHBJZDogXCIxOjUzNDEzNjkwOTA4Mzp3ZWI6ZGFiM2Q1OTQwN2FiYmFjZjlkNzdiZVwiLFxuLy8gXHRtZWFzdXJlbWVudElkOiBcIkctUDc5SDZCUURRR1wiXG4vLyBcdH07XG5cbi8vIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuLy8gY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbi8vIGNvbnN0IHZvdGVzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsIFwiYW5zd2VyXCIpO1xuXG4vLyBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG4vLyBjb25zdCB2b3RlQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4vLyAgICAgdHlwZTogJ3BpZScsXG4vLyAgICAgZGF0YToge1xuLy8gICAgICAgICBsYWJlbHM6IFtdLFxuLy8gICAgICAgICBkYXRhc2V0czogW3tcbi8vICAgICAgICAgICAgIGRhdGE6IFtdLFxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXVxuLy8gICAgICAgICB9XVxuLy8gICAgIH0sXG4vLyAgICAgb3B0aW9uczoge1xuLy8gICAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcbi8vICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2Vcbi8vICAgICB9XG4vLyB9KTtcblxuLy8gLy8g44OH44O844K/44KS5Y+W5b6X44GX44Gm44Kw44Op44OV44KS5pu05pawXG4vLyBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGFydCgpIHtcbi8vICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyh2b3Rlc0NvbGxlY3Rpb24pO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBxdWVyeVNuYXBzaG90LnNpemUgPT09IDAgPyB7fSA6IHF1ZXJ5U25hcHNob3QuZG9jc1swXS5kYXRhKCk7XG4vLyAgICAgY29uc3QgbGFiZWxzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4vLyAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbi8vICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JzID0gdmFsdWVzLm1hcCgoKSA9PiBnZXRSYW5kb21Db2xvcigpKTtcblxuLy8gICAgIHZvdGVDaGFydC5kYXRhLmxhYmVscyA9IGxhYmVscztcbi8vICAgICB2b3RlQ2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gdmFsdWVzO1xuLy8gICAgIHZvdGVDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcnM7XG4vLyAgICAgdm90ZUNoYXJ0LnVwZGF0ZSgpO1xuLy8gfVxuXG4vLyAvLyDjg5rjg7zjgrjjgYzoqq3jgb/ovrzjgb7jgozjgZ/jgajjgY3jgavjgrDjg6njg5XjgpLliJ3mnJ/mj4/nlLtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB1cGRhdGVDaGFydCk7XG5cbi8vIC8vIOODqeODs+ODgOODoOOBquiJsuOCkueUn+aIkOOBmeOCi+mWouaVsFxuLy8gZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XG4vLyAgICAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4vLyAgICAgdmFyIGNvbG9yID0gJyMnO1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4vLyAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGNvbG9yO1xuLy8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jaGFydC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==