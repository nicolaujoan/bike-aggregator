const availabilityUtils = (function () {

    /**
     * 
     * @param {Array} list -> array of objects
     * @param {} property -> property to determine uniqueness in an object (default to 'id')
     * @returns 
     * linear time solution to the problem
     */
    const removeDuplicates = (list, property='id') => {
        const seen = new Set();

        return list.filter(element => {
            const isDuplicate = seen.has(element[property]);
            seen.add(element[property]);
            return !isDuplicate;
        });
        
    };

    return {
        removeDuplicates
    }

})();

module.exports = availabilityUtils;