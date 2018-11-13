<template>
    <div class="warp-left">
        <div class="add-box">
            <span class="add" @click="addNews()">☺</span>
        </div>
        <div class="favorite-box">
            <span class="fav" @click="collectNews()">☆</span>
        </div>
        <div class="remove-box">
            <span class="remove" @click="removeNews()">¤</span>
        </div>
        <div class="submit-box">
            <span class="submit" @click="submit()">△</span>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    date(){
        return {

        }
    },
    computed:{
        ...mapState({
            fav:'fav'
        }),
        ...mapGetters({
            allLists:'allLists',
            favLists:'favLists'
        })
    },
    methods:{
     ...mapMutations({
         addNews:'addNews',
         collectNews:'collectNews',
         removeNews:'removeNews'
     }),
        submit(){
            window.localStorage.setItem('allLists',JSON.stringify(this.allLists));
            window.localStorage.setItem('favLists',JSON.stringify(this.favLists));
       }
    },
    
    watch:{
        fav(newFav){
            var span= document.getElementsByClassName('fav')[0];
            // console.log(newFav);
            if(newFav){
                span.style.color = 'red';
            }else{
                span.style.color = '#fff';
            }
        }
    }
}
</script>

<style>
    .add-box,
    .favorite-box,
    .remove-box,
    .submit-box{
        width: 100%;
        height: 70px;
    }
    .add,
    .fav,
    .remove,
    .submit{
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 70px;
        color: #fff;
        font-size: 35px;
        cursor: pointer;
    }
</style>
