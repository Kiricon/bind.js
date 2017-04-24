let element = new Bind({
    el: '#testElement',
    message: 'Hello World',
    num: 5,
});


document.getElementById('button').addEventListener('click', () => {
    console.log('yee');
    element.num++;
    element.update();
});
