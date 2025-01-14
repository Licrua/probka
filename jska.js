// function camelize(str) {
// 	console.log('str', str);
// 	console.log(str.split('-'));


// 	return str
// 	  .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
// 	  .map(
// 		// Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
// 		// превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
// 		(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// 	  )
// 	  .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }

//   console.log(camelize('-webkit-transition'));

//   const strik = 'sdasdasda';
// console.log(strik.slice(1) + strik[2].toUpperCase());

// Числовые ключи '1' и '3' идут первыми, а затем остальные.

// let map = new Map();

// map.set("name", "John");

// console.log(map);
// const keys = map.keys();
// console.log(keys);

// const mapper = new Map({name: 'ilya', surname: 'jopa', length: 2})
// console.log('mapper', mapper);



// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();
// const dasfad = Array.from(keys);
// console.log(dasfad);


// function countUniqueElements(arr) {
//     const uniqueElements = {};

//     for (const num of arr) {
//         uniqueElements[num] = true; // Каждое число добавляется как ключ в объект
// 		console.log('num', num);
// 		console.log('1', uniqueElements[num]);


//     }

//     return Object.keys(uniqueElements).length; // Количество уникальных ключей
// }

// console.log(countUniqueElements([1, 2, 5, 6, 1])); // 4

// var RemoveDuplicatesfromSortedArray = function(nums) {
//     let k = 0; // переменная для хранения количества уникальных элементов

//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0 || nums[i] !== nums[i-1]) { // если текущий элемент отличается от предыдущего элемента (уникальный элемент)
//             nums[k] = nums[i]; // перемещаем текущий элемент в начало массива
//             k++; // увеличиваем счетчик уникальных элементов
//         }
//     }

//     return k; // возвращаем количество уникальных элементов
// };

// console.log(RemoveDuplicatesfromSortedArray([0,0,1,1,1,2,2,3,3,4]));


// function runInOrder(functions, delays) {
// return functions.map(item => {
//     setTimeout(() => {
//         item()
//     }, delays);
// })
//    }


//    const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
//    const delays = [2000, 1000, 3000];

//    runInOrder(functions, delays); // logs "first" after 2 seconds, "second" after another 1 second, and "third" after another 3 seconds

// console.log(runInOrder(functions, delays));
// const pers = (num) => {
// 	return num + num
// }
// let arrik = []
// const promis = new Promise((resolve, reject) => {
// 	return resolve(pers(5))
// })
// console.log(promis.then(result => console.log(result)
// )
// )
// console.log(arrik);


// function delay(ms) {
// 	// ваш код
// 	const promise = new Promise((resolve,reject) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, ms);
// 	})
// 	return promise
//   }

//   delay(3000).then(() => alert('выполнилось через 3 секунды'));
// const arik = []

// const promises = new Promise((resolve, reject) => {
//     return resolve(1)
// })
// promises.then(result => arik.push(result))

// console.log(arik);


// function runInOrder(functions, delays) {
//      functions.map((item, index) => {
//         setTimeout(() => {
//                 item()
//         }, delays[index]);
//      })
//    }


//    const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
//    const delays = [2000, 1000, 3000];

//    runInOrder(functions, delays); // logs "first" after 2 seconds, "second" after another 1 second, and "third" after another 3 seconds

// var fetchData = function (url, callback) {
//   const promise = new Promise((resolve, reject) => {
//     return resolve(callback(url))
//   })
//   return promise
// };

// const url = 'https://example.com/data';
// fetchData(url, (data) => {
//   console.log('Callback function was called with data:', data);
// }).then((data) => {
//   console.log('Promise was resolved with data:', data);
// }).catch((error) => {
//   console.error('Error occurred:', error);
// });
