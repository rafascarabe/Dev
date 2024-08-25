
// MARK: animação de scroll suave 
function scrollToSection(event, sectionId) {
    event.preventDefault();  // Previne o comportamento padrão do link
    const section = document.querySelector(sectionId);
    
    window.scrollTo({
        top: section.offsetTop,  // Posição do topo da section
        behavior: 'smooth'       // Animação de rolagem suave
    });
}