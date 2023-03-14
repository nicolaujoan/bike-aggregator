const api = (function () {

    var url = 'http://localhost:8080';

    // AVAILABILITY
    async function getAvailability() {
        const availability = await fetch(`${url}/availability`).then(data => data.json());
        return availability;
    }

    async function rentBike(availability) {
        const rented = await fetch(`${url}/availability/rent-bike`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ bikeId: availability.bike.id, shopId: availability.shop.id }),
        });
        return rented.json();;
    }

    return {
        getAvailability,
        rentBike
    }
})();