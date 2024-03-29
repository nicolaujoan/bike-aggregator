(() => {

    /** this function is used to generate a unique number based on two numbers */
    function cantorPairing(a, b) {
        return 0.5 * (a + b) * (a + b + 1) + b;
    }
    
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
            availability
                .filter(av => av.in_stock > 0)
                .forEach((av) => {
                    const card = document.createElement('jn-availability-card');  // custom web component
                    card.setAttribute('id', `card-${cantorPairing(av.bike.id, av.shop.id)}`);
                    card.setAttribute('stock', av.in_stock);
                    card._availability = av;
                    container.appendChild(card);
            });
        }
    });
    
    // ================ DOMAIN EVENTS ======================================================================
    
    // RENT A BIKE
    document.addEventListener('rent', (event) => {
        const availability = event.availability;
        const cardId = `card-${cantorPairing(availability.bike.id, availability.shop.id)}`;
    
        // rent the bike in the system
        (async function rentBike() {
            console.log('me ejecuto');
            const response = await api.rentBike(availability);
            console.log('renting response:', response);
        })();
        
        // downgrade stock visually
        (function downGradeStock(id) {
            const card = document.getElementById(id);
            card.downGradeStock();
        })(cardId);
    });
})();

