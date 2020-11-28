<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer">
      <v-list subheader>
        <v-subheader>Recent chat</v-subheader>

        <v-list-item
          v-for="chat in recent"
          :key="chat.title"
        >
          <v-list-item-avatar>
            <v-img
              :alt="`${chat.title} avatar`"
              :src="chat.avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="chat.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
              mdi-message-outline
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-btn icon @click="drawer = !drawer">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>
      <v-btn icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>{{user.room}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <div class="">
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data: () => ({
    drawer: true,
    recent: [
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner',
      },
      {
        active: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
      },
    ],
    previous: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }],
  }),
  computed: mapState(['user']),
  methods:{
    ...mapMutations(['clearData']),
    exit(){
      this.$router.push('/?message=leftChat')
      this.clearData()
    }
  }
}
</script>
