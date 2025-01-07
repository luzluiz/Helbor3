// Função de filtro para pesquisar por nome ou número da sala
function filterRooms() {
    let searchValue = document.getElementById('search-input').value.toLowerCase(); // Pega o valor da pesquisa
    let roomList = document.getElementById('room-list');
    let rooms = roomList.getElementsByTagName('li');

    // Loop através das salas
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        let roomName = room.getAttribute('data-name').toLowerCase(); // Nome da sala
        let roomNumber = room.getAttribute('data-number').toLowerCase(); // Número da sala

        // Verifica se o valor de pesquisa corresponde ao nome ou número da sala
        if (roomName.indexOf(searchValue) > -1 || roomNumber.indexOf(searchValue) > -1) {
            room.style.display = ""; // Exibe a sala
        } else {
            room.style.display = "none"; // Esconde a sala
        }
    }
}

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}


function scrollLeft() {
    const container = document.querySelector('.service-cards-container');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Ajuste 300 para a largura desejada
}

function scrollRight() {
    const container = document.querySelector('.service-cards-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}