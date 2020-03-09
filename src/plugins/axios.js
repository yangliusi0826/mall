import axios from 'axios'

axios.defaults.timeout = 6000
// axios.defaults.baseURL = process.env.VUE_APP_BACKENDDOMAIN
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN

// 添加请求拦截器
axios.interceptors.request.use((config = {}) => {
	config.headers['clientType'] = 'PC'
	return config
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  console.log("axios")
  let resp = response.data
  // status = 0为成功
  if (resp.status === 0) {
    return resp
	} else if (resp.status === 10) {  // 未登录
    // 跳转到登录界面
  } else {
    // toast错误信息
  }
})

export default axios