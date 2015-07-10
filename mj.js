$(document).ready( function () {
  $('#button_click').click(function () {  
    var form_value = $("#USERNAME").val();
    console.log(form_value);
    $.ajax({
    url: "https://api.github.com/users/" + form_value ,
    dataType: 'json',
    success: function(results){
      console.log(results.login);
        var url_go = "https://github.com/" + form_value;
      window.location.href= url_go;
  }
  }); 
});
});