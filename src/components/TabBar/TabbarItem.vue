<template>
    <div class="tabbar-item" @click="tabbarItem">
        <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
        <div v-else><slot name="tabbar-ic"></slot></div>
<!--        通过绑定：style来进行字体颜色的替换-->
        <div :style="isColor"><slot name="tabbar-title"></slot></div>
<!--        <div :class="{active:isActive}"><slot name="tabbar-title"></slot></div>-->
<!--        <div v-if="isActive" class="active"><slot name="tabbar-title"></slot></div>-->
<!--        <div v-else><slot name="tabbar-title"></slot></div>-->
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
                path:String,  //接收父组件传过来的path
                tabbarColor:String// 接收父组件传过来的tabbarColor
            },
        computed:{
            //通过computed计算属性来动态监听路由
            isActive(){
                return this.$route.path.indexOf(this.path) !==  -1;
            },
            //通过computed计算属性来动态监听style的color变化
            isColor(){
                return this.isActive ?{color:this.tabbarColor} : ""
            }
        },
        data(){
            return{
                // isActive:false
            }
        },
        methods:{
            tabbarItem(){
                this.$router.push(this.path)
            },
        },

    }
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        text-align:center;
        margin-top: 3px;
        font-size: 16px;
    }
    .tabbar-item img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .active{
        color: red;
    }
</style>