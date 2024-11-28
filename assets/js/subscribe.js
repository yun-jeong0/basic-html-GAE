document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('button[style*="Subscribe"]');
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');

    if (subscribeButton && nameInput && emailInput) {
        subscribeButton.addEventListener('click', function() {
            const name = nameInput.value;
            const email = emailInput.value;
            if (name && email) {
                alert(`${name}님 ${email}로 정보를 받으시겠습니까?`);
            } else {
                alert('이름과 이메일을 입력해 주세요.');
            }
        });
    }
});
