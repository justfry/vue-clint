<template>
    <div>
        <form v-on:submit.prevent="onSubmit">
            <input type="text" v-model="search" placeholder="saysomth">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "SearchUser",
    components: {

    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapActions(['fetchUsers','addParam']),
        onSubmit(){
            this.addParam({search: this.search}) && 
            this.fetchUsers()
        }
    }
}
</script>

<style scoped>

</style>
