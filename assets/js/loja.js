// const body = document.querySelector(".body");
// const button = document.querySelector(".btn");
// let i = 1;
// button.addEventListener('click', async (e) => {

//     const options = {
//         method: "GET",
//         mode: "cors",
//         cache: "default"

//     }
//     // for (let i = 1; i <= 10; ++i) {
//     const resultado = await fetch(`https://dummyjson.com/products/${i}`, options)
//     const json = await resultado.json();
//     ++i;
//     if (i === 11) {
//         i = 1
//     };
//     document.querySelector("body").innerHTML = `<div> <h1> ${json.title} <h1/> </div>`
//     console.log(json);
//     // };
// });



async function produtos(e) {

    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"

    }
    for (let i = 1; i <= 10; ++i) {
        const resultado = await fetch(`https://dummyjson.com/products/${i}`, options)
        const json = await resultado.json();
        document.querySelector('body').innerHTML = `<div> <h1> ${json.title} <h1/> <h2>${json.description}<h2/> </div>`
        
        console.log(json);
    };
}

produtos();