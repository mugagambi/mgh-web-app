export default {
  name: 'custom-form',
  props: {
    ruleForm: {
      type: Object,
      default: function () {
        return {
          aggregation_center: null,
          product: null,
          active: true
        }
      }
    },
    message: {
      type: String,
      default: function () {
        return 'Add Aggregation Center Product'
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
        aggregation_center: [
          { required: true, message: 'Please Aggregation Center', trigger: 'change' }
        ],
        product: [
          { required: true, message: 'Please select Product', trigger: 'change' }
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
