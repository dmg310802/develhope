const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Haciendo Promesa');
    },1000);
});


promesa1.then((promesa) => {
    console.log(promesa);
});

(async () => {
    const result = await promesa1;
    console.log(result);
})();

