document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // تغيير الأيقونة
    this.name = type === 'password' ? 'eye-outline' : 'eye-off-outline';
});
