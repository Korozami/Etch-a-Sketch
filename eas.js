const body = document.querySelector('#body');

for(let i = 1; i < 16; i++) {
    //create 16 boxes on x axis
    const xcontent = document.createElement('div');
    xcontent.classList.add(`x-box${i}`)
    xcontent.classList.add(`x-design`)
    body.appendChild(xcontent)
    //create 15 boxes on y axis
    const xbody = document.querySelector(`.x-box${i}`)
    for(let y = 1; y < 16; y++) {
        const ycontent = document.createElement('div');
        ycontent.classList.add('y-box')
        xbody.appendChild(ycontent)
    }
}
