const ratioButton=document.querySelector('#ratio');
const resetButton=document.querySelector('#reset');
const clearButton=document.querySelector('#check');
const mainContainer=document.querySelector('.div-container');
const colorInput=document.querySelector('#color-picker');
const clearLabel=document.querySelector('#clear');
const ratio=16;
let isMousedown=false;

createDivs(ratio)


ratioButton.addEventListener('click',()=>{
    let value=prompt('Enter the ratio in a range (4-100) ex. 16 for 16 x 16').trim();

    if((value>100)||(value<4)||isNaN(value)){
        alert('Invalid input ')
        return -1;
    }else{
        createDivs(value);
    }
})

function createDivs(ratio){
    mainContainer.innerHTML='';

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
        resetButton.addEventListener('click',()=>{
            divI.style.backgroundColor = '#ffffff'
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
                    mainContainer.appendChild(divI)
    }
}