const ratioButton=document.querySelector('#ratio');
const resetButton=document.querySelector('#reset');
const clearButton=document.querySelector('#check');
const mianContainer=document.querySelector('.div-container');
const colorInput=document.querySelector('#color-picker');
const clearLabel=document.querySelector('#clear');
const ratio=16;


function createDivs(ratio){
    mianContainer.innerHTML='';

    for(let i=1;i<=(ratio * ratio);i++){
        let divI=document.createElement('div');
        divI.classList.add('div-inside')
        divI.style.width=`${(960/ratio)}px`
    }
}