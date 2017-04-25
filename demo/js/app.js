let element = new Bind({
    el: '#testElement',
    message: 'Hello World',
    num: 5,
});

let button = new Bind({
    el: '#button',
    added: 0,
    init: () => {
        console.log(this);
        this.element.addEventListener('click', this.click);
    },

    click: () => {
        this.added++;
        this.update();
        element.num++;
        element.update();
    },
});
