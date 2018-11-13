import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: -1,
    value: "",
    text: "",
    fav: false,
    newsLists: []
  },
  mutations: {
    addNews(state) {
        if (state.newsLists.length >= 20) {
          return;
        }
      var newsObj = {
        title: "简书/题目",
        content: "",
        fav: false
      };
      state.newsLists.push(newsObj);
      state.number++;
      state.value = newsObj.title;
      state.text = newsObj.content;
      state.fav = newsObj.fav;
    },
    collectNews(state) {
      state.newsLists[state.number].fav = !state.newsLists[state.number].fav;
      state.fav = state.newsLists[state.number].fav;
    },
    removeNews(state) {
        
        if (state.newsLists.length == 1) {
            state.value = '';
            state.text = '';
            state.fav = false;
        }
        if (state.number > 0) {
            state.newsLists.splice(state.number, 1);
            state.number--;
        }else if(state.number == 0){
            state.newsLists.splice(state.number, 1);
            state.number = state.newsLists.length - 1;
        }else{
            state.newsLists.splice(state.number, 1);
            state.number--;
        }
        if (state.newsLists.length != 0) {
             state.value = state.newsLists[state.number].title;
             state.text = state.newsLists[state.number].content;
             state.fav = state.newsLists[state.number].fav;
        }
       

    },
    setNum(state, num) {
      state.number = num;
    },
    reviseTitle(state, value) {
      state.value = value;
      state.newsLists[state.number].title = value;
    },
    reviseCon(state, text) {
      state.text = text;
      state.newsLists[state.number].content = text;
    },
    reviseFav(state, fav) {
      state.fav = fav;
    }
  },
  getters: {
    allLists(state) {
      return state.newsLists;
    },
    favLists(state) {
      return state.newsLists.filter(ele => ele.fav == true);
    }
  },
//   actions: {
//     asyncTitle(state,title) {
//       setTimeout(function() {
//         state.commit("reviseTitle",title);
//       }, 1000);
//     },
//     asyncContent(state,text) {
//       setTimeout(function() {
//         state.commit("reviseCon", text);
//       }, 1000);
//     }
//   }
});