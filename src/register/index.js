class Test {
    constructor(name) {
        this.name = name;
    }

    logger() {
        console.log("Hello", this.name);
    }
}

module.exports = {
    name: 'test',
    say: function(name) {
        const ins = new Test(name);
        console.log(ins.logger());
    }
};
