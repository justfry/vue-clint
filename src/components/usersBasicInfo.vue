<template>
    <div>
        <SearchUser />
        <div>
            <SortBy />
            <div :key="user.id" v-for="user in allUsers">
                <UserPic  v-if="!errors.imageGetError" v-bind:id="user.id"/>
                <UserInfo v-if="!errors.fetchError" v-bind:user="user"/>
                <UserStat  v-if="!errors.statGetError" v-bind:id="user.id" />
            </div>
        <Pagination />
        </div>
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import SearchUser from './SearchUser.vue'
import Pagination from './Pagination.vue'
import UserPic from './UserPic.vue'
import UserStat from './UserStat.vue'
import SortBy from './SortBy'


import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Users",
    methods: {
        ...mapActions(['fetchUsers']),
    },
    computed: mapGetters(['allUsers', 'errors']),
    components: {
        UserInfo,
        SearchUser,
        Pagination,
        UserPic,
        UserStat,
        SortBy,
    },
    created: function() {
        this.fetchUsers()
    },
}
</script>

<style scoped>

</style>
