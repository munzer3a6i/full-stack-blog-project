import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards:[
      {blogTitle: "blog Card #1" , blogCoverPhoto:"stock 1", blogDate: "May 1,2021"},
      {blogTitle: "blog Card #2" , blogCoverPhoto:"stock 2", blogDate: "May 1,2021"},
      {blogTitle: "blog Card #3" , blogCoverPhoto:"stock 3", blogDate: "May 1,2021"},
      {blogTitle: "blog Card #4" , blogCoverPhoto:"stock 4", blogDate: "May 1,2021"},
    ],
    editPost : null,
  },
  mutations: {
    toggleEditPost(state , payload){
      state.editPost = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
