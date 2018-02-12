export default {
  name: 'product-custom-form',
  props: {
    ruleForm: {
      type: Object,
      default: function () {
        return {
          name: '',
          location: ''
        }
      }
    },
    message: {
      type: String,
      default: function () {
        return 'Add Product'
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
        name: [
          {
            required: true,
            message: 'Please input Product name',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 200,
            message: 'Length should be 3 to 200',
            trigger: 'blur'
          }
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
