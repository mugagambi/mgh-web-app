export default {
  data () {
    return {
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
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm)
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
