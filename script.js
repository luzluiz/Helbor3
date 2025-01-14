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

// Quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "visible" à seção de informações do prédio
    const buildingInfo = document.querySelector('.building-info');
    buildingInfo.classList.add('visible');

    // Adiciona a classe "visible" à seção de localização
    const locationSection = document.querySelector('#location');
    locationSection.classList.add('visible');
});


const serviceData = [
    {
        title: 'Estacionamento Estapar',
        description: 'Entrada pelo subsolo à esquerda.',
        hours: '',
        images: ['img/estacionamento1.JPG', 'img/estacionamento2.JPG', 'img/estaparplaca.jpg'],
    },
    {
        title: 'Trio Cafeteria',
        description: 'Cafés especiais e refeições rápidas.',
        hours: 'Segunda a Sexta: 07:00 - 19:00',
        images: ['img/triocafe.JPG', 'img/cafe1.jpg'],
    },
    {
        title: 'Salas de Reunião',
        description: 'Espaços modernos para reuniões e eventos locado apenas para condôminos.',
        hours: 'Sob agendamento.',
        images: ['img/auditorios.jpg', 'img/aud2.avif', 'img/aud3.avif'],
    },
];

let currentService = 0;
let currentImage = 0;

function openModal(serviceIndex) {
    currentService = serviceIndex;
    currentImage = 0;
    const service = serviceData[serviceIndex];
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-description').textContent = service.description;
    document.getElementById('modal-hours').textContent = service.hours;
    document.getElementById('gallery-image').src = service.images[currentImage];
    document.getElementById('service-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('service-modal').style.display = 'none';
}

function changeImage(direction) {
    const images = serviceData[currentService].images;
    currentImage = (currentImage + direction + images.length) % images.length;
    document.getElementById('gallery-image').src = images[currentImage];
}

let currentItemCount = 10; // Número de itens inicialmente visíveis
const items = document.querySelectorAll('#room-list li');
const loadMoreButton = document.getElementById('load-more-btn');

function showItems(count) {
    for (let i = 0; i < items.length; i++) {
        if (i < count) {
            items[i].style.display = 'list-item';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function loadMoreItems() {
    currentItemCount += 20; // Aumenta o número de itens visíveis por vez
    showItems(currentItemCount);

    // Se o número de itens visíveis for igual ou maior que o total, esconde o botão
    if (currentItemCount >= items.length) {
        loadMoreButton.style.display = 'none';
    }
}

// Inicializa a lista com os itens visíveis
showItems(currentItemCount);

// Adiciona o evento de clique no botão
loadMoreButton.addEventListener('click', loadMoreItems);