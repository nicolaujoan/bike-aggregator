const api = (function () {

    var url = 'http://localhost:8080';

    // AVAILABILITY
    async function getAvailability() {
        const availability = await fetch(`${url}/availability`).then(data => data.json());
        return availability;
    }

    // BIKES
    

    // SHOPS

    return {
        getAvailability
    }
})();