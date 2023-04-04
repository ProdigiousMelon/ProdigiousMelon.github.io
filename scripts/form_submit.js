const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submit")
   const scriptURL = 'https://script.google.com/macros/s/AKfycbzmZxjCm7RaRyaENzPZ6rwADNv9C9JtDRg5Cs9tb9zdbOjOYvq1Vl-EXp8dPfkHgIt2iA/exec'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })