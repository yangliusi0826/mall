<template>
  <div>首页</div>
</template>

<script>
import storage from '../storage'
export default {
  async mounted () {
    // storage.setItem('goods', {name: '商品', price: '100'})
    // storage.setItem('brand', 'huwei', 'goods')
    console.log(storage.getItem('name', 'goods'))
    // storage.clear('name', 'goods')
    // storage.clear('goods')
    console.log(process.env)
    let resp = await this.$axios.get('/mock/user/login.json')
    console.log(resp)
  }
}
</script>