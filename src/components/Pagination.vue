<template>
    <div>
        <div :key=page v-for="page in pages" class="button-group">
           <button v-on:click="changePage(page)" class="pagination-button">{{page}}</button>
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
.pagination-button{
    float: left;
}
.button-group{
    width: 300px;
    margin: 0 auto;
}
</style>
