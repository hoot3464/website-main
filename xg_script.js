document.addEventListener('click', function(event) {
    switch (event.target.id) {
      case 'buttonRemove': removeTime(); break;
      case 'buttonAdd': addTime(); break;
      case 'buttonCalc': calculateResult(); break;
      case 'buttonReset': reset(); break;
    }
  });
  
  window.onkeydown = function(event) {
    switch (event.keyCode) {
      case 13: // return
        event.preventDefault();
        calculateResult();
        break;
      case 27: // escape
      case 82: // r
        event.preventDefault();
        reset();
        break;
      case 109: // num subtract
        event.preventDefault();
        removeTime();
        break;
      case 107: // num add
        event.preventDefault();
        addTime();
        break;
    }
  }
  
  document.querySelector('#input input').addEventListener('input', function(event) {
    event.target.value = event.target.value.replace(/\D/g, '');
  });
  
  function focusFirstInput() {
    document.querySelector('#input > div:first-child > input:first-child').focus();
  }
  
  function removeTime() {
    if (document.querySelectorAll('#input > div').length > 2) {
      document.querySelector('#input > div:last-child').remove();
    }
    focusFirstInput();
  }
  
  const element = document.querySelector('#input > div:first-child');
  function addTime() {
    const clonedElement = element.cloneNode(true);
    document.querySelector('#input').appendChild(clonedElement);
    clonedElement.querySelectorAll('input').forEach(function (input) {
    input.value = '';
    });
  }

function addtwelve() {
    for (var i = 0; i < 11; i++) {
       const clonedElement = element.cloneNode(true);
        document.querySelector('#input').appendChild(clonedElement);
        clonedElement.querySelectorAll('input').forEach(function (input) {
        input.value = '';
        });
    }
}
addtwelve();

function calculateResult() {
  total_m = 0;
  total_s = 0;
  total_ms = 0;
  const inputElements = document.querySelectorAll('#input input');
  inputElements.forEach(function (element) {
    const value = parseInt(element.value);
    if (!isNaN(value)) {
      switch (element.getAttribute('placeholder')) {
        case 'Min':
          total_m += value;
          break;
        case 'Sec':
          total_s += value;
          break;
        case 'MS':
          total_ms += value;
          break;
      }
    }
  });
  total_s += Math.floor(total_ms / 1000);
  total_ms = total_ms % 1000;
  total_m += Math.floor(total_s / 60);
  total_s = total_s % 60;
  const outputText = `${total_m}m ${String(total_s).padStart(2, '0')}s ${String(total_ms).padStart(3, '0')}ms`;
  document.querySelector('#output').textContent = outputText;
}
  
  function reset() {
    document.querySelectorAll('#input input').forEach(function (element) {
      element.value = '';
    });
    document.querySelector('#output').textContent = '';
    focusFirstInput();
  }

focusFirstInput();

  

