<template>
    <div>
        <tabbar>
            <tabbar-item path="/home" tabbarColor="pink">
                <img slot="tabbar-icon" src="../../assets/img/tabbar/shouye.svg" alt="">
                <img slot="tabbar-ic" src="../../assets/img/tabbar/shouye-active.svg" alt="">
                <div slot="tabbar-title">首页</div>
            </tabbar-item>

            <tabbar-item path="/fenlei" tabbarColor="pink">
                <img slot="tabbar-icon" src="../../assets/img/tabbar/leimupinleifenleileibie.svg" alt="">
                <img slot="tabbar-ic" src="../../assets/img/tabbar/leimupinleifenleileibie-active.svg" alt="">
                <div slot="tabbar-title">分类</div>
            </tabbar-item>
            <tabbar-item path="/gwc" tabbarColor="pink">
                <img slot="tabbar-icon" src="../../assets/img/tabbar/gouwuche.svg" alt="">
                <img slot="tabbar-ic" src="../../assets/img/tabbar/gouwuche-active.svg" alt="">
                <div slot="tabbar-title">购物车</div>
            </tabbar-item>
            <tabbar-item path="/profile" tabbarColor="pink">
                <img slot="tabbar-icon" src="../../assets/img/tabbar/wode.svg" alt="">
                <img slot="tabbar-ic" src="../../assets/img/tabbar/wode-active.svg" alt="">
                <div slot="tabbar-title">我的</div>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import tabbar from  './tabbar'
    import TabbarItem from  './TabbarItem'
    export default {
        name: "PublicTabar",
        components:{
            tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>