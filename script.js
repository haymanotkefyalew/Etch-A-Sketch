const ratioButton=document.querySelector('#ratio');
const resetButton=document.querySelector('#reset');
const clearButton=document.querySelector('#check');
const mainContainer=document.querySelector('.div-container');
const colorInput=document.querySelector('#color-picker');
const clearLabel=document.querySelector('#clear');
const ratio=16;
let isMousedown=false;

createDivs(ratio);

ratioButton.addEventListener('click',()=>{
    let value=prompt('Enter the ratio in a range (4-100) ex. 16 for 16 x 16').trim();

    if((value>100)||(value<4)||isNaN(value)){
        alert('Invalid input ');
        return -1;
    }else{
        createDivs(value);
    }
});

clearButton.addEventListener('change',()=>{
    if (clearButton.checked) {
        clearLabel.style.backgroundColor='#a6d0f5ff'
    } else {
        clearLabel.style.backgroundColor='#f0f8ff'
    }
});

function createDivs(ratio){
    mainContainer.innerHTML='';

    for(let i=1;i<=(ratio * ratio);i++){
        let divI=document.createElement('div');
        divI.classList.add('div-inside');
        divI.style.width=`${(960/ratio)}px`;

        divI.addEventListener('mousedown', (e) => {
            if (clearButton.checked) {
                e.target.style.backgroundColor = '#ffffff';
            } else {
                e.target.style.backgroundColor = colorInput.value;
            }
            isMousedown=true;
        });

        divI.addEventListener('mouseup', () => {
            isMousedown=false;
        });

        divI.addEventListener('mouseover',(e)=>{
            if(isMousedown){
                if (clearButton.checked) {
                    e.target.style.backgroundColor = '#ffffff';
                } else {
                    e.target.style.backgroundColor = colorInput.value;
                }
            }
        });

        mainContainer.appendChild(divI);
    }
}

resetButton.addEventListener('click',()=>{
    document.querySelectorAll('.div-inside').forEach(div=>{
        div.style.backgroundColor = '#ffffff';
    });
    isMousedown=false;
});
