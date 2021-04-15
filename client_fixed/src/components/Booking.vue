<template>
  <div class="booking">
      <p>{{booking.room}}</p>
      <p>{{booking.checkedIn}}</p>
      <p>{{booking.firstName}} {{booking.surname}}</p>
      <p>{{booking.email}}</p>
      <p>{{booking.checkInDate}}</p>
      <p>{{booking.checkOutDate}}</p>
      <p>{{booking.notes}}</p>
      <button type="button" class="delete-btn" @click="deleteBooking">Delete</button>
      <button class="check-in" v-if="booking.checkedIn === false" @click="checkIn(booking)">Check In</button>
      <button class="undo" v-if="booking.checkedIn" @click="undo(booking)" >Undo</button>
  </div>
</template>


<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
name: 'booking-page',
  props: ['booking'],
  methods: {
    checkIn(booking) {
        booking.checkedIn = true
        document.querySelector(".booking").classList.toggle("new-color");
    },

    undo(booking) {
        booking.checkedIn = false
        document.querySelector(".new-color").classList.toggle("booking");
    },

    deleteBooking(){
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}

// export default {
//   name: "Modal",
//   data() {
//     return {
//       show: false
//     };
//   },
//   methods: {
//     closeModal() {
//       this.show = false;
//       document.querySelector("body").classList.remove("overflow-hidden");
//     },
//     openModal() {
//       this.show = true;
//       document.querySelector("body").classList.add("overflow-hidden");
//     }
//   }
// };
</script>

<style>
.booking {
    background-color: blue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
}

.new-color {
    background-color: hotpink;
}

</style>


