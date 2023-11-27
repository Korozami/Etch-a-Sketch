const body = document.querySelector('#body');

const handleReset = () => {
    let size = prompt("Enter how big you want your new grid (1-100)")
    while(body.firstChild) {
        body.removeChild(body.firstChild)
    }
    if (size > 100 || size <= 0) {
        alert("Please Input valid size")
        createGrid(16)
    } else {
        createGrid(size)
    }
}

function createGrid(size) {
    for(let i = 1; i < size; i++) {
    //create 16 boxes on x axis
    const xcontent = document.createElement('div');
    xcontent.classList.add(`x-box${i}`)
    xcontent.classList.add(`x-design`)
    body.appendChild(xcontent)
    //create 15 boxes on y axis
    const xbody = document.querySelector(`.x-box${i}`)
    for(let y = 1; y < size; y++) {
        const ycontent = document.createElement('div');
        ycontent.classList.add('y-box')
        ycontent.addEventListener('mouseout', () => {
            ycontent.classList.add('active')
        })
        xbody.appendChild(ycontent)
        }
    }
}

createGrid(16)
