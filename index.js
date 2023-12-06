

        
        var storedText;


        function storeText() {
            
            var inputElement = document.getElementById("text");

            
            storedText = inputElement.value;


            var textToEncode = ("Text stored: " + storedText);
            var qrcode = new QRCode(document.getElementById("qrcode"), {
              
                text: textToEncode,
                width: 250 ,
                height: 250
            });
            
        }
        function refreshPage() {
            location.reload();
          }

          function downloadPage() {
            
            var htmlContent = document.documentElement.outerHTML;
          
            
            var blob = new Blob([htmlContent], { type: 'text/html' });
          
            
            var link = document.createElement('a');
          
            
            link.download = 'page.html';
          

            link.href = URL.createObjectURL(blob);
          
            
            document.body.appendChild(link);
          
            
            link.click();
          
            
            document.body.removeChild(link);
          }

           


