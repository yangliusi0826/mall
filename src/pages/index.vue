<template>
  <div>首页</div>
</template>

<script>
import storage from '../storage'
export default {
  mounted () {
    // storage.setItem('goods', {name: '商品', price: '100'})
    // storage.setItem('brand', 'huwei', 'goods')
    console.log(storage.getItem('name', 'goods'))
    // storage.clear('name', 'goods')
    // storage.clear('goods')
  }
}
</script>