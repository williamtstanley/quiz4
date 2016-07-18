$(document).ready(function(){


    var companyData;
    var BASE_URL = "http://localhost:3000/"
   
    $.ajax({
        method: "GET",
        url: BASE_URL + "companies.json",
        error: function(){
            alert("can't load data")
        },
        success: function(data){
          displayCompanies(data);
           // companyData = data;
        }
    })

    var displayCompanies = function(data){
      
      for(var i = 0; i < data.length; i++){
        var productTitles = []
        data[i].products.forEach(function(product){
          productTitles.push(product.title);
        })
        $("#companies").append("<li class='company-listing'><p class='comp'> " + data[i].title + ": " + productTitles.join(", "));
      }
      $("#companies li").hide();
      $("#companies li").each(function(index) {
        $(this).delay(400*index).fadeIn(300);
      });
      $("#hook-point").prepend("<h1>Products<h1>");
    }

})




        //  $("#hook-point").delay(400*obj).prepend("<div class='company-listing'><p class='comp'> " + obj.title + ": " + productTitles.join(", "));
