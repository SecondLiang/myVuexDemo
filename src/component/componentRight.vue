<template>
    <div class="warp-right">
        <div class="title-box">
            <span class="title-name">标题：</span>
            <input type="text" class="title-con" v-model="value" @input="myTitle(value)">
        </div>
        <div class="content-box">
            <span id="con-title" class="con-title">内容：</span>
            <textarea name="con-title" id="" v-model="text" @input="myContext(text)"></textarea>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            value:'',
            text:''
        }
    },
    methods:{
        ...mapMutations({
            myTitle:'reviseTitle',
            myContext:'reviseCon'
        }),
        // ...mapActions({
        //     asyncTitle:'asyncTitle',
        //     asyncContent:'asyncContent'
        // })
    },
    computed:{
        ...mapState({
            newsLists:'newsLists',
            val:'value',
            tex:'text'
        })
    },
    watch:{
        val(newVal){
            this.value = newVal;
        },
        tex(newTex){
            this.text = newTex;
        }
    }
}

</script>

<style>
    .warp-right{
        position: relative;
        text-align: left;
    }
    .title-box{
        position: absolute;
        width: 100%;
        height: 35px;
        margin-top: 10px;
    }
    .title-name,
    .title-con{
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        padding-left: 18px;
    }
    .title-con{
       width: 260px;
       left:70px; 
       padding-left: 5px;
       outline: none;
       border-width: 0px;
    }
    .content-box{
        position: absolute;
        left: 0px;
        top: 60px;
        width: 100%;
        height: 90%;
        font-size: 18px;
    }
    .con-title{
        padding-left: 18px;
    }
    .content-box textarea{
        width: 100%;
        height: 100%;
        border-width: 0px;
        font-size: 18px;
        outline: none;
        padding: 10px;
    }
</style>