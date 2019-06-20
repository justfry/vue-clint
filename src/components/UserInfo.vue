<template>
    <div>
        <p>
            {{user.id}} 
            {{user.first_name}}
            {{user.last_name}}
            {{user.bio}}
            </p>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    props: ["user"]
}
</script>
<style scoped>

</style>
