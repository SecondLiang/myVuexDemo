<template>
    <div class="warp-center">
        <h3>{{title1}} | {{title2}}</h3>
        <div class="select-box">
            <span class="whole" @click="myAll">All</span>
            <span class="collect" @click="myFavorite">favorites</span>
        </div>
        <div class="lists-box">
            <ul class="lists" @mouseover="myClicked">
                <li class="item" v-for="(ele,index) in (isAll ? allLists : favLists)">{{ele.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            title1:'简书',
            title2:'题目',
            isAll:true
        }
    },
    computed:{
        ...mapState({
            newsLists:'newsLists',
            number:'number'
        }),
        ...mapGetters({
            allLists:'allLists',
            favLists:'favLists'
        })
    },
    methods:{
        ...mapMutations({
            setNum:'setNum',
            myTitle:'reviseTitle',
            myContext:'reviseCon',
            myFav:'reviseFav'
        }),
        myClicked(e){
            var lis = document.getElementsByClassName('item');
            var len = lis.length;
            var self = this;
            for(let i = 0;i < len;i++){
                lis[i].onclick = function(){
                    // for(var j = 0;j < len;j++){
                    //     lis[j].style.backgroundColor = '#999';
                    // }
                    // lis[i].style.backgroundColor = '#666';
                    self.setNum(i);
                    self.myTitle(self.newsLists[self.number].title);
                    self.myContext(self.newsLists[self.number].content);
                    self.myFav(self.newsLists[self.number].fav);
                }
            }
        },
        myAll(e){
            // console.log(e.target);
            var span = document.getElementsByClassName('collect')[0];
            span.style.boxShadow = '2px 2px 20px #999 inset';
            e.target.style.boxShadow = '20px 20px 40px #999 inset';
            this.isAll = true;
        },
        myFavorite(e){
            var span = document.getElementsByClassName('whole')[0];
            span.style.boxShadow = '2px 2px 20px #999 inset';
            e.target.style.boxShadow = '20px 20px 40px #999 inset';
            this.isAll = false;
        }
    }
    
}
</script>

<style>
    .warp-center{
        position: relative;
    }
    h3{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        padding: 15px 0 5px 0;
        font-weight: 300;
        border-bottom: 1px solid #666;
    }
    .select-box{
        text-align: left;
        position: absolute;
        left: 0;
        top: 65px;
        width: 100%;
        display: flex;
    }
    .whole,
    .collect{
        flex: 1;
        text-align: center;
        padding: 5px 0;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 2px 2px 20px #999 inset;
        border-radius: 5px;
    }
     .whole{
         margin:0 2px 0 20px;
         box-shadow: 20px 20px 40px #999 inset;
     }
    .collect{
       margin:0 20px 0 2px;
    }
    .lists-box{
        position: absolute;
        left: 0;
        top: 110px;
        width: 100%;
    }
    ul{
        width: 100%;
        height: 100%;
    }
    li{
        list-style: none;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        border-radius: 5px;
        background-color: #999;
        margin-bottom: 1px;
        cursor: pointer;
    }
    li:hover{
        background-color: #666;
    }
    li:link{
        background-color: #666;
    }
</style>