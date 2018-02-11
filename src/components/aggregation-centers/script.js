import axios from 'axios'
export default {
  data () {
    return {
      tableData: [],
      loading: false
    }
  },
  created () {
    this.loading = true
    axios
      .get(`https://mgh-system.herokuapp.com/api/core/aggregation-centers/`)
      .then(response => {
        this.tableData = response.data
        this.loading = false
      })
      .catch(e => {
        console.log(e)
        this.loading = false
      })
  },
  methods: {
    handleEdit: function (params) {},
    handleDelete: function () {}
  }
}
