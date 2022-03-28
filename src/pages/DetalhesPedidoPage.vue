<template>
  pedido {{id}}
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            type: String,
            default: "0"
        }
    }
}
</script>

<style>

</style>