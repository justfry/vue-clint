<template>
    <div>
        <img v-bind:src="imageURI(id)" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
        name: "UserPic",
        computed: {
            ...mapGetters(['imageURI']),
        },
        methods: {
            ...mapActions(['setImage']),
        },
        props: ["id"],
        created: function() {
            this.setImage(this.id)
        },
}
</script>

<style>

</style>
