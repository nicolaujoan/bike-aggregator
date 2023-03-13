// RENDER PAGE
document.addEventListener('DOMContentLoaded', async () => {

    // DATA 
    var availability = await api.getAvailability();

    // SETUP
    var availabilityRoot = document.getElementById('availability');
    var container = document.createElement('div');
    availabilityRoot.appendChild(container);

    styleContainer();
    presentData();

    // STYLE
    function styleContainer() {
        container.style.width = '100%';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '20px';
    }

    // PRESENTATION
    function presentData() {
        availability.forEach((av, index) => {
            const card = document.createElement('jn-availability-card');  // custom web component
            card.setAttribute('id', `card-${index}`);
            card._availability = av; 
            container.appendChild(card);
        });
    }
});

// RENT A BIKE
document.addEventListener('rent', (event) => {
    console.log(event);
    console.log('custom prop:', event.customProp);
    console.log('a bike has been rented!');
});