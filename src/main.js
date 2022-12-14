import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 适配
import 'amfe-flexible'
import directiveObj from '@/utils/directive'
// 引入vant组件
import { NavBar, Form, Field, Button, PullRefresh, Tabbar, TabbarItem, Icon, Tab, Tabs, Cell, List, ActionSheet, Popup, Col, Row, Badge, Search } from 'vant'
Vue.use(directiveObj)
Vue.config.productionTip = false
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Badge)
Vue.use(Search)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
