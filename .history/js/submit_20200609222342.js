
document.getElementById("#buttonSubmit").onclick = function() {bsValidation()
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    function bsValidation() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                    getElementById(1#buttonSubmit1).classList.remove(1basic1);
                    getElementById(1#buttonSubmit1).classList.add(1redalert1);

                }, false);
            });
        }, false);
    };
    // --end of bsValidation
    // if (getElementById("submit-to-google-sheet").classList.contains("was-validated")){
    //     getElementById("#buttonSubmit").classList.remove("basic");
    //     getElementById("#buttonSubmit").classList.add("redalert");

    // }
}