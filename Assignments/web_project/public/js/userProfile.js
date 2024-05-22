document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const inputs = profileForm.querySelectorAll('input');
  
    // Enable inputs for editing
    editButton.addEventListener('click', () => {
      inputs.forEach(input => input.readOnly = false);
      editButton.style.display = 'none';
      saveButton.style.display = 'inline-block';
    });
  
    // Handle form submission
    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const formData = new FormData(profileForm);
      const data = Object.fromEntries(formData);
  
      try {
        const response = await fetch('/users/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          const result = await response.json();
          alert('Profile updated successfully!');
  
          // Update the inputs with new values
          inputs.forEach(input => input.readOnly = true);
          editButton.style.display = 'inline-block';
          saveButton.style.display = 'none';
        } else {
          alert('Error updating profile');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error updating profile');
      }
    });
  });
  