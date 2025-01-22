document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('[data-panel]');
  
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault(); // prevent jumping if it's an <a> with href="#"
  
        // Read the data-panel attribute, e.g. "how-it-works"
        const panelName = trigger.getAttribute('data-panel');
  
        // Find the matching panel that has the same data-panel attribute
        // and also has the base class .how-it-works-hidden
        const panel = document.querySelector(
          `.how-it-works-hidden[data-panel="${panelName}"]`
        );
  
        // If found, toggle the 'how-it-works' class
        if (panel) {
          panel.classList.toggle('how-it-works');
        }
      });
    });
  });