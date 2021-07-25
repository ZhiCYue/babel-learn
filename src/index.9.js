async function* agf() {
    await 1;
    yield 2;
}

var gen = agf();
gen.next().then(res => console.log(res)); // { value: 2, done: false }
