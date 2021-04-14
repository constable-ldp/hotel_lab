use rooms
db.dropDatabase()

db.bookings.insertMany([
{
    room: "11",
    firstName: "Hermione",
    surname: "Granger",
    email: "annonymous4321@gmail.com",
    checkInDate: "2021-04-15",
    checkOutDate: "2021-04-29",
    checkedIn: false,
    notes: "Highly allergic to dustmites - make sure to demite the room"
}
]);