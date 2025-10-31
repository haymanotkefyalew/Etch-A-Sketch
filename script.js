const ratioButton=document.querySelector('#ratio');
const resetButton=document.querySelector('#reset');
const clearButton=document.querySelector('#check');
const mianContainer=document.querySelector('.div-container');
const colorInput=document.querySelector('#color-picker');
const clearLabel=document.querySelector('#clear');
const ratio=16;

let isMousedown=false;

createDivs(ratio)
function createDivs(ratio){
    mianContainer.innerHTML='';

    for(let i=1;i<=(ratio * ratio);i++){
        let divI=document.createElement('div');
        divI.classList.add('div-inside')
        divI.style.width=`${(960/ratio)}px`

        divI.addEventListener('mousedown', (e) => {
                if (clearButton.checked) {
                    e.target.style.backgroundColor = '#ffffff'
                } else {
                    divI.style.backgroundColor = colorInput.value
                }
                isMousedown=true;
        })
        divI.addEventListener('mouseup', (e) => {
                isMousedown=false;
        })
        divI.addEventListener('mouseover',(e)=>{
            if(isMousedown){
                if (clearButton.checked) {
                    e.target.style.backgroundColor = '#ffffff'
                } else {
                    divI.style.backgroundColor = colorInput.value
                }
            }

        })
                    mianContainer.appendChild(divI)
    }
}