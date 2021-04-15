<template lang="html">
	<div id="bookingsGrid">
		<booking v-for="booking in bookings" :booking="booking" />
        
        <!-- <modal ref="modalName" :bookings="bookings"/> -->
	</div>
</template>

<script>
import Booking from './Booking.vue';
import Modal from './Modal.vue';

export default {
	name: 'bookings-grid',
	components: {
		'booking': Booking,
        'modal': Modal
	},
	props: ['bookings']
}
</script>

<style lang="css" scoped>
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}



h2 {
	padding: 0;
	margin: 0;
}
</style>
