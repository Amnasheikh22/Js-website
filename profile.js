document.addEventListener('DOMContentLoaded',()=>{
   
    let test=document.getElementById('click');
    
    
  
    
  test.addEventListener('click',()=>{
      let form=document.getElementById('boot');
      if (form.style.display === 'none' || form.style.display === '') {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
  
  })
  })
  