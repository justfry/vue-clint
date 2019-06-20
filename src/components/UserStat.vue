<template>
    <div>
        <p>{{userStat(id)}}</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "UserStat",
    computed: {
        ...mapGetters(['userStat'])
    },
    methods: {
        ...mapActions(['setStat'])
    },
    props: ["id"],
    created: function() {
        this.setStat(this.id)
    }
}
</script>

<style>

</style>
