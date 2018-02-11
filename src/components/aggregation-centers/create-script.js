import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: false,
      ruleForm: {
        name: '',
        location: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Aggregation Center name',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 200,
            message: 'Length should be 3 to 200',
            trigger: 'blur'
          }
        ],
        location: [
          {
            required: true,
            message: 'Please input Aggregation Center Location',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['addCenter']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          this.addCenter(this.ruleForm)
            .then(() => {
              this.loading = false
              this.$notify({
                title: 'Success',
                message: 'Aggregation center added',
                type: 'success',
                duration: 10000
              })
              this.$router.push({ path: '/centers' })
            })
            .catch(() => (this.loading = false))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleBack () {
      this.$router.back()
    }
  }
}
