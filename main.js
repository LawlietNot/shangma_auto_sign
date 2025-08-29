import newSignIn from './new_sign_in.js'

newSignIn()
  .then((result) => {
    if (result.code === 0) {
      console.log('执行签到成功！')
    } else if (result.code === 5001) {
      console.log('今日已签到，无需重复签到')
    } else {
      console.log('签到结果:', result.msg)
    }
  })
  .catch(error => {
    console.error('执行签到失败：', error.message)
    process.exit(1)
  })
