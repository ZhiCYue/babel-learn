const bar = async function () {
    const v = await 12;
    return v + 12;
}

async function foo() {
    const res = await bar();
    console.log(res);
}

foo();
