function addPhoneNumberValidation() {
    const phoneInput = document.getElementById('promo-phone');
    phoneInput.addEventListener('input', function () {
        const phonePattern = /^[\d\+\(\)\-]*$/;

        const value = phoneInput.value;

        if (!phonePattern.test(value)) {
            phoneInput.value = value.slice(0, -1);
        }
    });
}

addPhoneNumberValidation();
