$(document).ready( function () {
  $.ajax({
  url: "https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000" ,
  dataType: 'json',
  success: function(results){
    console.log(results);
  }
});
})