<template>
    <div>
        <button v-on:click="sortBy('id')">ORDER</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "SortBy",
    data(){
        return {
            flag: true
        }
    },
    methods: {
        ...mapActions(['fetchUsers','addParam']),
        sortBy(){
            this.flag = !this.flag
            if (!this.flag) this.addParam({order_by: 'id_desc'}) && this.fetchUsers()
            else this.addParam({order_by: 'id_inc'}) && this.fetchUsers()
        }
    }
}
</script>

<style>

</style>
