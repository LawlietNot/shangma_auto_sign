import crypto from 'crypto';

// 从JavaScript中提取的Base64字符集
const BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const PADDING_CHAR = "=";

// 实现JavaScript的pr函数 - 将十六进制字符串转换为Base64
function hexToBase64(hexString) {
  let result = "";
  let i = 0;
  
  // 每3个十六进制字符转换为2个Base64字符
  for (i = 0; i + 3 <= hexString.length; i += 3) {
    const hexValue = parseInt(hexString.substring(i, i + 3), 16);
    result += BASE64_CHARS.charAt(hexValue >> 6) + BASE64_CHARS.charAt(hexValue & 63);
  }
  
  // 处理剩余的字符
  if (i + 1 === hexString.length) {
    const hexValue = parseInt(hexString.substring(i, i + 1), 16);
    result += BASE64_CHARS.charAt(hexValue << 2);
  } else if (i + 2 === hexString.length) {
    const hexValue = parseInt(hexString.substring(i, i + 2), 16);
    result += BASE64_CHARS.charAt(hexValue >> 2) + BASE64_CHARS.charAt((hexValue & 3) << 4);
  }
  
  // 添加填充
  while ((result.length & 3) > 0) {
    result += PADDING_CHAR;
  }
  
  return result;
}

// RSA公钥
const RSA_PUBLIC_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCOEpPvD+QMOo6em92agSV1PxEgZrJd1fIBbrx86foJjYbYjbqncIpDOnNisUVlNvvx5hvTRCn5pmFQ56JyFuNU4iwk8Cb6zGv4E28ClllFiB7DdAaslGCK2+yiSkq+NpQt35KFYItHzCqDoBJuJuCDc+yNBMWO1qlhN4NnK3UH6wIDAQAB";

// 使用Node.js crypto模块进行RSA加密，然后转换为JavaScript格式
function rsaEncrypt(data) {
  try {
    // 创建RSA加密器
    const publicKey = `-----BEGIN PUBLIC KEY-----\n${RSA_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
    
    // 使用PKCS1填充进行RSA加密
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(data, 'utf8')
    );
    
    // 将加密结果转换为十六进制字符串
    const hexString = encrypted.toString('hex');
    
    // 使用JavaScript的pr函数转换为Base64
    return hexToBase64(hexString);
  } catch (error) {
    console.error('RSA encryption failed:', error.message);
    throw error;
  }
}

export { rsaEncrypt };
