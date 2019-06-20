<template>
    <div>
        <div :key=page v-for="page in pages">
           <button v-on:click="changePage(page)">{{page}}</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "Pagination",
    methods: {
        ...mapActions(['fetchUsers','addParam']),
        changePage(page){
            const offset = this.limit * --page 
            this.addParam({offset: offset}) &&
            this.fetchUsers()
        }
    },
    computed: {
        ...mapGetters(["pages", "limit"]),
    },
}
</script>

<style>

</style>
