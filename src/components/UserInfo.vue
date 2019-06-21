<template>
    <div>
        
            <h4>ID: {{user.id}}</h4> 
          <p>  {{user.first_name}}
            {{user.last_name}}<br/>
            {{user.bio}}
        </p>
    </div>
</template>

<script>

export default {
    name: "UserInfo",
    components: {
        
    },
    props: ["user"]
}
</script>
<style scoped>

</style>
