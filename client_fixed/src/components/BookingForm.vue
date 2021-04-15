<template>
    <form id="bookings-form" v-on:submit.prevent="addBooking">
        <label for="room">Room Number:</label>
        <input type="number" id="room" v-model="room" required>
        <label for="firstname">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required>
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="surname" required>
        <label for="email">Mail:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="checkInDate">Check-in date:</label>
        <input type="date" id="CheckInDate" v-model="checkInDate" required>
        <label for="checkOutDate">Check-out date:</label>
        <input type="date" id="CheckOutDate" v-model="checkOutDate" required>
        <label for="notes">Notes:</label>
        <input type="textarea" id="notes" v-model="notes" required>       
        <input type="submit" value="Your welcome">
    </form>

</template>



<script>

import {eventBus} from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
    name: 'bookings-form',
    data() {
        return {
            room: null,
            firstName: '',
            surname: '',
            email: '',
            checkInDate: '',
            checkOutDate: '',
            checkedIn: false,
            notes: ''
        }
    },
    methods: {
        addBooking() {
            const booking = {
                room: this.room,
                firstName: this.firstName,
                surname: this.surname,
                email: this.email,
                checkInDate: this.checkInDate,
                checkOutDate: this.checkOutDate,
                checkedIn: this.checkedIn,
                notes: this.notes
            };
            BookingService.postBooking(booking)
            .then(response => eventBus.$emit('booking-added', response))
        }
    }
}
</script>

<style>

</style>