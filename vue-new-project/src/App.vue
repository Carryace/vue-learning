<template>
  <section>
    <header><h1>My friends</h1></header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
// import FriendContact from "./components/FriendContact.vue"

// import NewFreind from "./components/NewFreind.vue"

export default {
  data() {
    return { 
      friends: [
        {id: 'manuel', name: 'Manuel Lorenz', phone: '0123 45678 90', email: 'manuel@localhost.com', isFavorite: true},
        {id: 'julie', name: 'Julie Jones', phone: '0123 45678 90', email: 'julie@localhost.com', isFavorite: false}
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const toggledFrd = this.friends.find(({id}) => id === friendId);
      if (toggledFrd) {
        toggledFrd.isFavorite = !toggledFrd.isFavorite;
      }
    },
    addContact({name, phone, email}) {
      const newFrd = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        isFavorite: false
      };
      this.friends.push(newFrd);
    },
    deleteContact(id) {
      this.friends = this.friends.filter(f => f.id !== id);
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>