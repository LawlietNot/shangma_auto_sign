import axios from 'axios'
import { getTokenAndUserId, getHeadersWithToken, generateCheckinEncryptedData, testToken } from './lib/new_auth.js'
import sign from './lib/shangma_utils.js'
import dotenv from 'dotenv'

dotenv.config()

// 调试模式开关
const DEBUG_MODE = process.env.DEBUG_MODE === 'true' || false

// 调试日志函数
function debugLog(...args) {
  if (DEBUG_MODE) {
    console.log(...args)
  }
}

async function newSignIn() {
  try {
    // 1. 获取token和用户ID
    debugLog('Getting token and user ID...')
    const { token, userId } = await getTokenAndUserId()
    debugLog('Token obtained:', token)
    debugLog('User ID:', userId)

    // 2. 测试token是否有效并获取积分信息
    debugLog('Testing token and getting points info...')
    const isTokenValid = await testToken(token)
    if (!isTokenValid) {
      throw new Error('Token is not valid')
    }
    debugLog('Token is valid')

    // 3. 检查是否已经签到
    const headers = getHeadersWithToken(token)
    const pointsConfig = {
      method: 'get',
      url: `https://apih5.shang-ma.com/app/web/points/info/${userId}`,
      headers: headers
    }

    const pointsResponse = await axios.request(pointsConfig)
    const pointsData = pointsResponse.data.data

    debugLog('Points info:', JSON.stringify(pointsData, null, 2))

    if (pointsData.checkinStatus === 1) {
      debugLog('Already signed in today!')
      return {
        code: 5001,
        msg: 'Already signed in today',
        data: pointsData
      }
    }

    // 4. 使用正确的签到API
    debugLog('Attempting sign in with correct API...')
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

    debugLog('Sending checkin request...')
    const response = await axios.request(signInConfig)
    debugLog('Checkin response:', JSON.stringify(response.data, null, 2))

    if (response.data.code === 0) {
      debugLog('Sign in successful!')
      return response.data
    } else if (response.data.code === 5001) {
      debugLog('Already signed in today')
      return response.data
    } else {
      debugLog('Checkin API failed, trying old API...')
    }

  } catch (error) {
    console.error('Sign in failed:', error.message)
    throw error
  }
}

export default newSignIn
