

$(document).ready(function(){
$("#devourbtn").on("click",function(event){
  event.preventDefault();
    var id = $(this).val().trim()
  console.log(id);
   $.ajax({type:"PUT", url:"/burgers/update/"+id})
   .then(function(data){
     location.reload()
   })
   })
  })