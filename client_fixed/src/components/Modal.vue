<template>
    
    <div class="booking" >
        
        
        <div v-for="booking in bookings" :key="booking._id">
            <button @click="openModal(booking)">{{booking.room}} {{booking.checkInDate}}</button>
                <div class="modal" v-if="booking.checkedIn">
                    <p>{{booking.room}}</p>
                    <p>{{booking.checkedIn}}</p>
                    <p>{{booking.firstName}} {{booking.surname}}</p>
                    <p>{{booking.email}}</p>
                    <p>{{booking.checkInDate}}</p>
                    <p>{{booking.checkOutDate}}</p>
                    <p>{{booking.notes}}</p>
                    <button type="button" class="delete-btn" @click="deleteBooking">Delete</button>
                    <button type="button" class="hide-modal" @click="closeModal(booking)">Hide Modal</button>
                </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ['bookings'],
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal(booking) {
      booking.checkedIn = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal(booking) {
      booking.checkedIn = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>

<style>

</style>