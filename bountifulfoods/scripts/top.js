 
    
   
      // Get element by id
      let topbutton  = document.getElementById("topbutton");
      
      //   top of the document 
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          topbutton.style.display = "block";
        } else {
          topbutton.style.display = "none";
        }
      }
      
      // To scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
