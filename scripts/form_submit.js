function process(){
   const form = document.querySelector("#form");
   const submitButton = document.querySelector("#submit");
   const scriptURL = 'https://script.google.com/macros/s/AKfycbz3Ujf76JQLG00mjTKqdO9rKHK3TxCiKEDldeawMg70fzZw1aB5VMnElXtHp5R0lNxlSw/exec';

   form.addEventListener('submit', e => {
     submitButton.disabled = true;
     e.preventDefault();
     let requestBody = new FormData(form);
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response);
          submitButton.disabled = false;
          form.reset();
         })
       .catch(error => {
       alert('Error!', error.message);
         submitButton.disabled = false;
       });
   });
   return false;
}
