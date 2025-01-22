document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('[data-panel]');
  
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const panelName = trigger.getAttribute('data-panel');
        const panel = document.querySelector(
          `.how-it-works-hidden[data-panel="${panelName}"]`
        );
        if (panel) {
          panel.classList.toggle('how-it-works');
        }
      });
    });
  });