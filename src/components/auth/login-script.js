import { login, logout } from './auth'
export default {
  name: 'log-in',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      error: null,
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: 'Please input username',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 150,
            message: 'Length should be 5 to 150',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please input password',
            trigger: 'blur'
          },
          {
            min: 9,
            message: 'Length should be minimum of 9 characters',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created () {
    logout(this)
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          login(this, this.ruleForm, this.$route.query.redirect)
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
