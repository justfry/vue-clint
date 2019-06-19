<template>
    <div>
        <div :key="user.id" v-for="user in allUsers">
           <UserInfo v-bind:user="user"/>
        </div>
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Users",
    methods: mapActions(['fetchUsers']),
    computed: mapGetters(['allUsers']),
    components: {
        UserInfo,
    },
    created: function() {
        console.log('dho')
        this.fetchUsers()
    },
}
</script>

<style scoped>

</style>
