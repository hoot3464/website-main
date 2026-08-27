function copyCode(button) {
  const block = button.closest('.code-block');
  const code = block.querySelector('code');
  navigator.clipboard.writeText(code.innerText).then(() => {
    button.innerText = 'Copied';
    setTimeout(() => { button.innerText = 'Copy'; }, 2000);
  });
}