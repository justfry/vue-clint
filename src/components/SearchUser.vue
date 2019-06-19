<template>
    <div>
        <form >
            <input type="text" name="search" placeholder="saysomth">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
export default {
    name: "SearchUser",
    data() {
        return {
            searchString: ''
        }
    },
    methods: {
        findUser(e){
            e.preventDefault();
            const searchString = this.searchString
            this.searchString = ''
        }
    }
}
</script>

<style scoped>

</style>
