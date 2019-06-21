<template>
    <div>
        <SearchUser />
        <div v-if="!fetchError">
            <SortBy />
            <div :key="user.id" v-for="user in allUsers">
                <UserPic v-bind:id="user.id"/>
                <UserInfo v-bind:user="user"/>
                <UserStat v-bind:id="user.id" />
            </div>
        <Pagination />
        </div>
        <div v-else>
            <Fail />
        </div>
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import SearchUser from './SearchUser.vue'
import Pagination from './Pagination.vue'
import UserPic from './UserPic.vue'
import UserStat from './UserStat.vue'
import Fail from './404.vue'
import SortBy from './SortBy'


import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Users",
    methods: {
        ...mapActions(['fetchUsers']),
    },
    computed: mapGetters(['allUsers', 'fetchError']),
    components: {
        UserInfo,
        SearchUser,
        Pagination,
        UserPic,
        UserStat,
        Fail,
        SortBy,
    },
    created: function() {
        this.fetchUsers()
    },
}
</script>

<style scoped>

</style>
