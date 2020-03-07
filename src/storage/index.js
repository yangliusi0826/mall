// 封装Storage
const STORAGE_KET = 'mall'

export default {
  // 存储值
  setItem (key, value, moduleName) {
    if (moduleName) {
      let moduleInfo = this.getItem(moduleName)
      moduleInfo[key] = value
      this.setItem(moduleName, moduleInfo)
    } else {
      let storageInfo = this.getStorage()
      storageInfo[key] = value
      window.sessionStorage.setItem(STORAGE_KET, JSON.stringify(storageInfo))
    }
  },
  // 获取值
  getItem (key, moduleName) {
    if (moduleName) {
      let moduleInfo = this.getItem(moduleName)
      return moduleInfo ? moduleInfo[key] : ''
    } else {
      let storageInfo = this.getStorage()
      return storageInfo[key]
    }
  },
  // 获取缓存中的信息
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KET) || '{}')
  },
  clear (key, moduleName) {
    let storageInfo = this.getStorage()
    if (moduleName) {
      delete storageInfo[moduleName][key]
    } else {
      delete storageInfo[key]
    }
    window.sessionStorage.setItem(STORAGE_KET, JSON.stringify(storageInfo))
  }
}