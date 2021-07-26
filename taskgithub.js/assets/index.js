const listItems=Array.from(document.querySelectorAll('.custom li'));
listItems.forEach(listItem=>{
    listItem.onmouseover=function(){
     const foundElement=  document.querySelector(`[data-target='${listItem.getAttribute('data-source')}']`);
     foundElement.classList.remove('d-none');
     
     
    }
    listItem.onmouseout=function(){
        const underList=Array.from(document.querySelectorAll('.wrapper ul')) ;
        underList.forEach(underList =>{
            underList.classList.add('d-none');
        })
    }
})
