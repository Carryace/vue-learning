<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleFav">Toggle Favorite</button>
    <button @click="toggleDetails">{{displayDetails ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="displayDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="deleteFriend">Delete Contact</button>
  </li>
</template>

<script>
export default {
  name: 'friend-contact',
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'email',
  //   'isFavorite',
  // ],
  props: {
    id: {type: String},
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': id => !!id,
    'delete': id => !!id
  },
  data() {
    return {
      displayDetails: false,
      // friend: {id: 'manuel', name: 'Manuel Lorenz', phone: '0123 45678 90', email: 'manuel@localhost.com'},
      friendIsFavorite: this.isFavorite,
    }
  },
  methods: {
    toggleDetails() {
      this.displayDetails = !this.displayDetails;
    },
    toggleFav() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete', this.id);
    }
  }

}
</script>