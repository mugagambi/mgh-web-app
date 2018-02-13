export default {
  name: 'custom-form',
  props: {
    ruleForm: {
      type: Object,
      default: function () {
        return {
          number: '',
          type: null
        }
      }
    },
    message: {
      type: String,
      default: function () {
        return 'Add Crate'
      }
    },
    add: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    loading: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  data () {
    return {
      rules: {
        number: [
          { required: true, message: 'Please input Crate Number', trigger: 'change' }
        ],
        type: [
          { required: true, message: 'Please select Crate Type', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('submit-form', this.ruleForm)
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
