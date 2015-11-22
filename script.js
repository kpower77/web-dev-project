$(document).ready(function{
   $('form.ajax').on('submit', function{
      console.log('Been Triggered');
      return false;
   }); 
    
});