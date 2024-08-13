document.addEventListener('DOMContentLoaded',()=>{
  let send=document.getElementById('doom');
  let test=document.getElementById('click');
  let page=document.getElementById('heroo');
 send.addEventListener('click',()=>{
 alert('your msg has been send');
 
})
page.addEventListener('click',()=>{
  window.location.href=("dumpblog.html");
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


  

