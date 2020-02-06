<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
    .tabbar{
        height: 49px;
        width: 100%;
        background: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        box-shadow: 0 -2px 2px rgba(100,100,100,0.2);
    }

</style>