import ElContainer from 'element-ui/packages/container/src/main'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'

export default {
  components: { ElContainer, Sidebar, Navbar },
  name: 'App',
  data () {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
