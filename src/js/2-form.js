document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageInput = feedbackForm.querySelector('textarea[name="message"]');

  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }

  feedbackForm.addEventListener('input', function () {
    const currentState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  });

  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (emailValue && messageValue) {
      console.log({ email: emailValue, message: messageValue });
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageInput.value = '';
    }
  });
});
