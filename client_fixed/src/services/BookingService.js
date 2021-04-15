const baseURL = 'http://localhost:3000/api/bookings/'

export default {
    getBookings() {
        return fetch(baseURL)
        .then(response => response.json())
    },

    postBooking(payload) {
        console.log('add booking running', payload)
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    },

    deleteBooking(id){
        return fetch(baseURL + id, {
          method: 'DELETE'
        })
      }
}