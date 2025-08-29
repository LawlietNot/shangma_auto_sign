import axios from 'axios'
import CryptoJS from 'crypto-js'
import { rsaEncrypt } from './custom_rsa.js'

// 新的登录API端点
const LOGIN_API = 'https://apih5.shang-ma.com/app/web/user/login'

// 配置选项
const USE_REAL_ENCRYPTION = false // 设置为true来使用真实加密
const DEBUG_MODE = process.env.DEBUG_MODE === 'true' || false // 调试模式开关，可通过环境变量控制

// 调试日志函数
function debugLog(...args) {
  if (DEBUG_MODE) {
    console.log(...args)
  }
}



// 获取标准头部
function getStandardHeaders() {
  return {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://static.shang-ma.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
  }
}

// 获取带token的头部
function getHeadersWithToken(token) {
  const headers = getStandardHeaders()
  headers['shm-token'] = token
  headers['token'] = token
  return headers
}

// 使用真实RSA公钥加密Base64编码的AES密钥（匹配JavaScript的id(Qf(s))）
function rsaEncryptAESKey(base64AesKey) {
  // 使用自定义RSA加密，匹配JavaScript的id函数实现
  return rsaEncrypt(base64AesKey);
}

// 生成AES密钥 (使用固定密钥确保服务器能解密)
function generateAESKey() {
  // 使用固定的AES密钥，确保服务器能成功解密
  // 这个密钥经过测试，能够成功登录
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456";
}

// 将字符串转换为CryptoJS WordArray (匹配JavaScript的Jf函数)
function generateAESKeyWordArray() {
  return CryptoJS.enc.Utf8.parse(generateAESKey());
}

// 注意：ECB模式不需要IV，此函数已弃用

// AES加密数据 (完全匹配JavaScript实现: dr函数)
function aesEncrypt(data, keyWordArray) {
  // 直接使用WordArray进行加密（匹配JavaScript的dr函数）
  const encrypted = CryptoJS.AES.encrypt(data, keyWordArray, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });

  return encrypted.toString();
}

// 生成登录加密数据 - 完全匹配JavaScript拦截器实现
async function generateLoginEncryptedData(username, password) {
      debugLog('Using real dynamic encryption for login with username:', username);

  try {
    // 1. 生成AES密钥WordArray（匹配Jf()函数）
    const aesKeyWordArray = generateAESKeyWordArray();

    // 2. 构造登录数据（匹配真实数据结构）
    const loginData = {
      accountName: username,
      password: password,
      loginDevice: "OFFICIAL_WEBSITE"
    };

    // 3. 按照拦截器逻辑：对象数据先JSON.stringify再加密
    const jsonData = JSON.stringify(loginData);
    debugLog('JSON data to encrypt:', jsonData);

    // 4. 使用AES加密（匹配dr()函数）
    const encryptedData = aesEncrypt(jsonData, aesKeyWordArray);

    // 5. Base64编码AES密钥（匹配Qf()函数）
    const base64AesKey = CryptoJS.enc.Base64.stringify(aesKeyWordArray);

    // 6. RSA加密Base64编码的AES密钥（匹配id()函数）
    const encryptedKey = rsaEncryptAESKey(base64AesKey);

    debugLog('Real encryption successful');
    debugLog('AES Key WordArray:', aesKeyWordArray.toString());
    debugLog('Base64 AES Key:', base64AesKey);
    debugLog('Encrypted data length:', encryptedData.length);
    debugLog('Encrypted key length:', encryptedKey.length);

    return {
      encryptedData: encryptedData,
      encryptedKey: encryptedKey
    };
  } catch (error) {
    console.error('Real encryption failed:', error.message);
    throw new Error(`Encryption failed: ${error.message}`);
  }
}

// 生成签到加密数据
function generateCheckinEncryptedData() {
  try {
    // 使用与登录相同的加密逻辑生成签到数据
    const aesKeyWordArray = generateAESKeyWordArray();

    // 签到数据通常是简单的JSON对象
    const checkinData = {
      timestamp: Date.now(),
      action: "checkin"
    };

    const jsonData = JSON.stringify(checkinData);
    const encryptedData = aesEncrypt(jsonData, aesKeyWordArray);
    const base64AesKey = CryptoJS.enc.Base64.stringify(aesKeyWordArray);
    const encryptedKey = rsaEncryptAESKey(base64AesKey);

    return {
      encryptedData: encryptedData,
      encryptedKey: encryptedKey
    };
  } catch (error) {
    console.error('Checkin encryption failed:', error.message);
    throw new Error(`Checkin encryption failed: ${error.message}`);
  }
}

// 新的登录函数
async function loginWithNewAPI(username, password) {
  try {
    const headers = getStandardHeaders()
    const encryptedData = await generateLoginEncryptedData(username, password)

    const data = {
      encryptedData: encryptedData.encryptedData,
      encryptedKey: encryptedData.encryptedKey
    }

    const config = {
      method: 'post',
      url: LOGIN_API,
      headers: headers,
      data: data
    }

    debugLog('Attempting login with new API...')
    debugLog('Request URL:', LOGIN_API)
    debugLog('Request Headers:', JSON.stringify(headers, null, 2))
    debugLog('Request Data:', JSON.stringify(data, null, 2))
    const response = await axios.request(config)
    debugLog('Login response:', JSON.stringify(response.data, null, 2))

    if (response.data && response.data.code === 0) {
      return response.data
    } else {
      throw new Error(`Login failed: ${response.data?.msg}`)
    }
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message)
    throw error
  }
}

// 获取token和用户ID的函数
async function getTokenAndUserId() {
  try {
    const headers = getStandardHeaders()

    // 使用环境变量中的用户名密码，如果没有则使用默认值
    const username = process.env.SM_USERNAME || 'test'
    const password = process.env.SM_PASSWORD || 'test'

    const encryptedData = await generateLoginEncryptedData(username, password)

    const data = {
      encryptedData: encryptedData.encryptedData,
      encryptedKey: encryptedData.encryptedKey
    }

    const config = {
      method: 'post',
      url: LOGIN_API,
      headers: headers,
      data: data
    }

    debugLog('=== 请求详情 ===')
    debugLog('Request URL:', LOGIN_API)
    debugLog('Request Headers:', JSON.stringify(headers, null, 2))
    debugLog('Request Data:', JSON.stringify(data, null, 2))
    debugLog('================')

    const response = await axios.request(config)

    debugLog('Login response:', JSON.stringify(response.data, null, 2))

    if (response.data.code !== 0) {
      throw new Error(`Login failed: ${response.data.msg || response.data}`)
    }

    return {
      token: response.data.data.token,
      userId: response.data.data.appUserId
    }
  } catch (error) {
    console.error('Get token failed:', error.response?.data || error.message)
    throw error
  }
}

// 获取token的函数（保持兼容性）
async function getToken() {
  const result = await getTokenAndUserId()
  return result.token
}

// 测试token是否有效
async function testToken(token) {
  try {
    const headers = getHeadersWithToken(token)

    const config = {
      method: 'get',
      url: 'https://apih5.shang-ma.com/app/web/points/info/1401352',
      headers: headers
    }

    const response = await axios.request(config)
    debugLog('Token test response:', JSON.stringify(response.data, null, 2))

    return response.data.code === 0
  } catch (error) {
    console.error('Token test failed:', error.response?.data || error.message)
    return false
  }
}

export {
  loginWithNewAPI,
  getStandardHeaders,
  getHeadersWithToken,
  getToken,
  getTokenAndUserId,
  generateCheckinEncryptedData,
  generateLoginEncryptedData,
  testToken
}
