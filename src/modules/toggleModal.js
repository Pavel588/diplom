const toggleModal = () => {
    const menu = document.getElementById('callback'),
        overlay = document.querySelector('.modal-overlay');
                
        
   
    document.addEventListener('click', (event) => {
        
        let target = event.target;
        
        if (target.matches('a.callback-btn')) {
            overlay.style.display = 'block';
            menu.style.display = 'block';
        } 
        if (target === overlay || target.closest('.modal-close')) {
            overlay.style.display = 'none';
            menu.style.display = 'none';
        }
    });

};
export default toggleModal;