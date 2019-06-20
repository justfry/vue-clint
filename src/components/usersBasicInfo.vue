<template>
    <div>
        <SearchUser />
        <div :key="user.id" v-for="user in allUsers">
            <UserPic v-bind:id="user.id"/>
            <UserInfo v-bind:user="user"/>
            <UserStat v-bind:id="user.id" />
        </div>
        <Pagination />
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import SearchUser from './SearchUser.vue'
import Pagination from './Pagination.vue'
import UserPic from './UserPic.vue'
import UserStat from './UserStat.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Users",
    methods: {
        ...mapActions(['fetchUsers']),
    },
    computed: mapGetters(['allUsers']),
    components: {
        UserInfo,
        SearchUser,
        Pagination,
        UserPic,
        UserStat
    },
    created: function() {
        this.fetchUsers()
    },
}
</script>

<style scoped>

</style>
