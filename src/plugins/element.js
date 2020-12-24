import Vue from 'vue'
import {
  Message,
  Input,
  Button,
  Form,
  FormItem,
  Row,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$message = Message