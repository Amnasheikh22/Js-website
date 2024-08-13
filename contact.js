document.addEventListener('DOMContentLoaded',()=>{
    let send=document.getElementById('doom');
    let test=document.getElementById('click');
    
    send.addEventListener('click',()=>{
        alert('your msg has been send');
        
       })
  
    
  test.addEventListener('click',()=>{
      let form=document.getElementById('boot');
      if (form.style.display === 'none' || form.style.display === '') {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
  
  })
  })
  
  
    
  
  