// // // function loadScrip(src, callback) {
// // //     let script = document.createElement('script');
// // //     script.src = src;
// // //
// // //     script.onload = () => callback(script);
// // //
// // //     document.head.append(script);
// // // }function laodScript(src, callback){
// // //     let script=document.createElement("script");
// // //     script.src=src;
// // //     script.onload=()=>callback(script);
// // //     document.head.append(script)
// // // }
// // //
// // // loadScrip("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", function script(script){
// // //     console.log(`Здорово, скрипт ${script.src} загрузился`)
// // //     loadScrip("/my/script2.js",function script(script){
// // //         console.log(`Здорово, скрипт ${script.src} загрузился`)
// // //     })
// // // });
// // function loadScripy(src, callback) {
// //     let script = document.createElement("script");
// //     script.src = src;
// //     script.onload = () => callback(null, script);
// //     script.onerror = () => callback(new Error("errorv"))
// // }
// //
// // // @ts-ignore
// // let promis = new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //         const obj = {
// //             name: "Object",
// //             type: "DI"
// //         };
// //         console.log("in resolve section");
// //         resolve(obj)
// //     }, 2000)
// // });
// // promis.then((data) => {
// //     // @ts-ignore
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             // @ts-ignore
// //             data.isDone = true;
// //             resolve(data)
// //         }, 2000);
// //     })
// // }).then(date => {
// //     console.log("jhjmhb mhb", date)
// // });
// //
// // // setTimeout(() => {
// // //     console.log("Zagruzka...");
// // //     setTimeout(() => {
// // //         console.log("Endness...")
// // //     }, 2000)
// // // }, 2000);
// //
// // // @ts-ignore
// // let p2 = new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //         const obj2 = {
// //             name: "Levon",
// //             surane: "sarajyan"
// //         };
// //         resolve(obj2)
// //     })
// // });
// // p2.then(data => {
// //     // @ts-ignore
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             // @ts-ignore
// //             data.isMarred = true;
// //             resolve(data)
// //         }, 2000)
// //     })
// // }).then(date => {
// //     console.log(date)
// // });
// var sleep = function (ms) {
//     // @ts-ignore
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, ms);
//     });
// };
// // sleep(2000).then(()=>console.log("After"));
// // @ts-ignore
// // Promise.all([sleep(2000), sleep(4000)]).then(() => {
// //     console.log("All promises")
// // });
// // // @ts-ignore
// // Promise.race([sleep(2000), sleep(4000)]).then(() => {
// //     console.log("Race promises")
// // });
// // @ts-ignore
// // let p3 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         const obj = {
// //             name: "ygewhff"
// //         }
// //     }, 4000);
// // })
// //     .finally(console.log)
// //     .then(
// //         console.log)
// //     .catch(console.log);
// //     // @ts-ignore
// // function loadScript(src){
// //     // @ts-ignore
// //     return new Promise((resolve,reject)=>{
// //         let script=document.createElement("script");
// //         script.src=src;
// //         script.onload=()=>resolve(script);
// //         script.onerror=()=>reject(new Error(`Ошибка загрузки скрипта ${src}`));
// //         document.head.append(script);
// //     })
// // }
// // let prs=loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// // prs.then(
// //     script=>{console.log(`загружен!`)},
// // ).catch(    error=>{console.log(`Ошибка`)}
// // )
// //
// // prs.then(script=>console.log("'Ещё один обработчик...'"));
// //
// //
// //
// // // @ts-ignore
// // let p4 = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve(1), 1000)
// // })
// //     .then((numer) => {
// //         console.log(numer);
// // // @ts-ignore
// //         return new Promise((resolve, reject) => {
// //             // @ts-ignore
// //             setTimeout(() => resolve(numer * 2), 2000)
// //         })
// //     })
// //     .then((numer) => {
// //         console.log(numer);
// // // @ts-ignore
// //         return (numer * 2)
// //     })
// //     .then((numer) => {
// //         console.log(numer);
// // // @ts-ignore
// //         return (numer * 2)
// //     });
// // // let fet=fetch('/article/promise-chaining/user.json')
// // // .then((response)=>{return response.text()})
// // // .then((text)=>{
// // //     console.log(text)
// // // });
// // // @ts-ignore
// // new Promise((resolve,reject)=>{
// //     resolve(16);
// // })
// // .then((result)=>{
// //     // @ts-ignore
// //     blabla() ;
// // })
// // .catch(()=>{
// //     console.error("fch")});
// // // @ts-ignore
// // new Promise((resolve,reject)=>{
// //     throw  new Error("Ошибка!")
// // }).catch((error)=>{
// //     if (error instanceof URIError) {
// //         // обрабатываем ошибку
// //     } else {
// //         console.error("Не могу обработать ошибку")};
// //     throw error;
// //     })
// // .then(()=>{
// //     console.log("ok")
// // })
// // .catch((error)=>{
// //     console.log(error)
// // }).then(()=>{
// //     console.log("lastest Ok")
// // });
//
// // Promise.all(requests)
// //     .then(responses => {
// //             for (let response of responses) {
// //                 console.log(`${response.url}: ${response.status}`)
// //             }
// //             return responses;
// //         })
// // //     .then()
// let names = ['iliakan', 'remy', 'jeresig'];
// let requests = names.map((name) => {
//     return fetch(`https://api.github.com/users/${name}`)
// });
// console.log(Array.isArray(requests));
//
//
// // function loadScript(src, callback) {
// //     let script = document.createElement('script');
// //     script.src = src;
// //
// //     script.onload = () => callback(null, script);
// //     script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
// //
// //     document.head.append(script);
// // }
//
// // let loadScriptPromise = function (src) {
// //     return new Promise((resolve, reject) => {
// //         loadScript(src, (err, script) => {
// //             if (err) reject(err)
// //             else resolve(script);
// //         });
// //     })
// // }
// //
//
//
// // async  function queue() {
// //     let rez= new Promise((resolve, reject) => {
// //         setTimeout(()=>resolve("готово!"),5000)
// //     })
// //     let result=await rez;
// //     console.log(result);
// // }
// // queue()
//
// // function loadScript(src){
// //     // @ts-ignore
// //     return new Promise((resolve,reject)=>{
// //         let script=document.createElement("script");
// //         script.src=src;
// //         script.onload=()=>resolve(script);
// //         script.onerror=()=>reject(new Error(`Ошибка загрузки скрипта ${src}`));
// //         document.head.append(script);
// //     })
// // }
// // let prs=loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// // prs.then(
// //     script=>{console.log(`загружен!`)},
// // ).catch(    error=>{console.log(`Ошибка`)}
// // ).finally(()=>{
// //     console.log("ghjg")
// // } )
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve);
        // выполнить resolve со значением this.num * 2 через 1000мс
        setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
};