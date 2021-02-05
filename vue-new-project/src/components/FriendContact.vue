<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{displayDetails ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="displayDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'friend-contact',
  data() {
    return {
      displayDetails: false,
      friend: {id: 'manuel', name: 'Manuel Lorenz', phone: '0123 45678 90', email: 'manuel@localhost.com'},

    }
  },
  methods: {
    toggleDetails() {
      this.displayDetails = !this.displayDetails;
    },
  }

}
</script>