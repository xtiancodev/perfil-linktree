document.addEventListener('DOMContentLoaded', () => {
    const profileInfoContainer = document.getElementById('profile-info');

    // Crear elementos de información del perfil
    const nameElement = document.createElement('h2');
    nameElement.textContent = 'Christian Parra';
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Software Developer based in Peru';

    // Verificar la existencia del contenedor antes de agregar elementos
    if (profileInfoContainer) {
        profileInfoContainer.appendChild(nameElement);
        profileInfoContainer.appendChild(descriptionElement);
    }
});