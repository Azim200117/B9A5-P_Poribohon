const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Use class manipulation for better maintainability and easier toggling
        button.classList.toggle('active');

        // Set the background color dynamically for flexibility
        const backgroundColor = button.classList.contains('active') ? '#1DD100' : 'silver';
        button.style.backgroundColor = backgroundColor;
      });
    });
