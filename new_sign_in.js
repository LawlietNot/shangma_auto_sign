import axios from 'axios'
import { getTokenAndUserId, getHeadersWithToken, generateCheckinEncryptedData, testToken } from './lib/new_auth.js'
import sign from './lib/shangma_utils.js'
import dotenv from 'dotenv'

dotenv.config()

async function newSignIn() {
  try {
    // 1. 获取token和用户ID
    console.log('Getting token and user ID...')
    const { token, userId } = await getTokenAndUserId()
    console.log('Token obtained:', token)
    console.log('User ID:', userId)

    // 2. 测试token是否有效并获取积分信息
    console.log('Testing token and getting points info...')
    const isTokenValid = await testToken(token)
    if (!isTokenValid) {
      throw new Error('Token is not valid')
    }
    console.log('Token is valid')

    // 3. 检查是否已经签到
    const headers = getHeadersWithToken(token)
    const pointsConfig = {
      method: 'get',
      url: `https://apih5.shang-ma.com/app/web/points/info/${userId}`,
      headers: headers
    }

    const pointsResponse = await axios.request(pointsConfig)
    const pointsData = pointsResponse.data.data

    console.log('Points info:', JSON.stringify(pointsData, null, 2))

    if (pointsData.checkinStatus === 1) {
      console.log('Already signed in today!')
      return {
        code: 5001,
        msg: 'Already signed in today',
        data: pointsData
      }
    }

    // 4. 使用正确的签到API
    console.log('Attempting sign in with correct API...')
    const checkinEncryptedData = generateCheckinEncryptedData()

    const signInConfig = {
      method: 'post',
      url: `https://apih5.shang-ma.com/app/web/user/checkin/${userId}`,
      headers: headers,
      data: {
        encryptedData: checkinEncryptedData.encryptedData,
        encryptedKey: checkinEncryptedData.encryptedKey
      }
    }

    console.log('Sending checkin request...')
    const response = await axios.request(signInConfig)
    console.log('Checkin response:', JSON.stringify(response.data, null, 2))

    if (response.data.code === 0) {
      console.log('Sign in successful!')
      return response.data
    } else if (response.data.code === 5001) {
      console.log('Already signed in today')
      return response.data
    } else {
      console.log('Checkin API failed, trying old API...')
    }

  } catch (error) {
    console.error('Sign in failed:', error.message)
    throw error
  }
}

export default newSignIn
