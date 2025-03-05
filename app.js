// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el contenedor de información de perfil
    const profileInfoContainer = document.getElementById('profile-info');

    // Crear elemento para el nombre usando JavaScript
    const nameElement = document.createElement('h2');
    nameElement.textContent = 'Lowell Silvia';
    
    // Crear elemento para la descripción usando JavaScript
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Brand Ambassador for Helix, based in SoCal.';

    // Verificar la existencia del contenedor antes de agregar elementos
    if (profileInfoContainer) {
        // Agregar nombre y descripción al contenedor
        profileInfoContainer.appendChild(nameElement);
        profileInfoContainer.appendChild(descriptionElement);
    }
});