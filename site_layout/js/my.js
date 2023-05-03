const submitBtn = document.getElementById("submit-btn");
              submitBtn.addEventListener("click", function(event) {
                const usernameInput = document.getElementById("username");
                const emailInput = document.getElementById("email");
                const usernameValue = usernameInput.value.trim();
                const emailValue = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
                if (usernameValue === "") {
                  alert("Введите имя");
                } else if (!emailRegex.test(emailValue)) {
                  alert("Введите корректный email");
                } else if (/^\s*$/.test(usernameValue)) {
                  alert("Имя не может состоять только из пробелов");
                } else {
                  $('#exampleModal').modal('show');
                  // Очистка полей формы
                  usernameInput.value = "";
                  emailInput.value = "";
                }
                event.preventDefault();
              });


              $(document).ready(function() {
                $('.my-button').click(function() {
                  $('html, body').animate({
                    scrollTop: $('.section-reg').offset().top
                  }, 1000);
                });
              });