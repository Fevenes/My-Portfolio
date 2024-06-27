function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzIVtK35x3-02hsXiDBMMvq_7VP4AEHF6GAlcb8t-7C6Dtw8_6NO9zj6-T8zc9VTlxHeA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
      .catch(error => console.error('Error!', error.message))
  })
