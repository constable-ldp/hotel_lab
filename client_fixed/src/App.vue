<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings"/>


  </div>
</template>

<script>
import { eventBus } from '@/main'
import BookingForm from './components/BookingForm'
import BookingService from './services/BookingService'
import BookingGrid from './components/BookingGrid'

export default {
  name: 'App',
  components: {
    'bookings-form': BookingForm,
    'bookings-grid': BookingGrid
  },
data() {
  return {
    bookings: []
  }
},
mounted() {
  this.fetchBookings();
  eventBus.$on('booking-added', payload => {
    this.bookings.push(payload)
    });
    
  eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
        });
    },

methods: {
  fetchBookings() {
    BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
  }
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body.overflow-hidden {
  overflow: hidden;
}
</style>
