let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map((name) => {
    return fetch(`https://api.github.com/users/${name}`)
});
console.log(Array.isArray(requests));