// 校验Phone
// @param {String} content   eg: let content = '17331464644'
// @return {Map} returnMsg   eg: {status:true, phone: '17331464644', msg: '手机号码格式正确'}
export const matchPhone = (content) => {
    let returnMsg = new Map();
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('phone', content.match(reg)[0]);
        returnMsg.set('msg', '手机号码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '手机号码格式错误');
    }
    return returnMsg;
};

//校验固定电话
// @param {String} content   eg: let content = '010-12345678'
// @return {Map} returnMsg   eg: {status:true, telephone: '010-12345678', msg: '固定电话格式正确'}
export const matchTelephone = (content) => {
    let returnMsg = new Map();
    const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('telephone', content.match(reg)[0]);
        returnMsg.set('msg', '固定电话格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许固定电话');
    }
    return returnMsg;
}

//校验省市区地址
//一般来说还是直接用JSON文件来校验地址比较好
// @param {String} content   eg: let content = '北京市朝阳区'
// @return {Map} returnMsg   eg: {status:true, address: '北京市朝阳区', city: '北京市', county: '朝阳区', msg: '地址格式正确'}
export const matchAddress = (content) => {
    let returnMsg = new Map();
    const regx = "(?<province>[^省]+省|.+自治区|[^澳门]+澳门|[^香港]+香港|[^市]+市)?(?<city>[^自治州]+自治州|[^特别行政区]+特别行政区|[^市]+市|.*?地区|.*?行政单位|.+盟|市辖区|[^县]+县)(?<county>[^县]+县|[^市]+市|[^镇]+镇|[^区]+区|[^乡]+乡|.+场|.+旗|.+海域|.+岛)?(?<address>.*)";
    const reg = new RegExp(regx);
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('address', content.match(reg)[0]);
        returnMsg.set('province', content.match(reg)[1]);
        returnMsg.set('city', content.match(reg)[2]);
        returnMsg.set('county', content.match(reg)[3]);
        returnMsg.set('area', content.match(reg)[4]);
        returnMsg.set('msg', '地址格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '地址格式错误');
    }
    return returnMsg;
}
/* let content = '广东省深圳市南山区加油站旁边';
let getMsg = matchAddress(content);
console.log(getMsg);
console.log(
    getMsg.get('status')
    , getMsg.get('address')
    , getMsg.get('province')
    , getMsg.get('city')
    , getMsg.get('county')
    , getMsg.get('area')
    , getMsg.get('msg')
    ); */


// 校验Email
// @param {String} content   eg: let content = '123456@qq.com'
// @return {Map} returnMsg   eg: {status:true, email: '123456@qq.com' , msg: '邮箱格式正确'}
export const matchEmail = (content) => {
    let returnMsg = new Map();
    const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('email', content.match(reg)[0]);
        returnMsg.set('msg', '邮箱格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '邮箱格式错误');
    }
    return returnMsg;
};

//校验URL地址
// @param {String} content   eg: let content = 'http://www.baidu.com'
// @return {Map} returnMsg   eg: {status:true, url: 'http://www.baidu.com' , msg: 'URL地址格式正确'}
export const matchUrl = (content) => {
    let returnMsg = new Map();
    const reg = /((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('url', content.match(reg)[0]);
        returnMsg.set('msg', 'URL格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', 'URL格式错误');
    }
    return returnMsg;
}

//校验银行卡号
// @param {String} content   eg: let content = '6228480402564890018'
// @return {Map} returnMsg   eg: {status:true, bankCard: '6228480402564890018' , msg: '银行卡号格式正确'}
export const matchBankCard = (content) => {
    let returnMsg = new Map();
    const reg = /^([1-9]{1})(\d{14}|\d{18})$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('bankCard', content.match(reg)[0]);
        returnMsg.set('msg', '银行卡号格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '银行卡号格式错误');
    }
    return returnMsg;
}

//校验密码
// @param {String} content   eg: let content = '123456' //6-16位数字和字母组合
// @return {Map} returnMsg   eg: {status:true, password: '123456' , msg: '密码格式正确'}
export const matchPassword = (content) => {
    let returnMsg = new Map();
    const reg = /^[a-zA-Z0-9]{6,16}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('password', content.match(reg)[0]);
        returnMsg.set('msg', '密码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '密码格式不正确');
    }
    return returnMsg;
}

//校验用户名
// @param {String} content   eg: let content = 'Coolstuz' //4-16位数字和字母组合
// @return {Map} returnMsg   eg: {status:true, userName: 'Coolstuz' , msg: '用户名格式正确'}
export const matchUserName = (content) => {
    let returnMsg = new Map();
    const reg = /^[a-zA-Z0-9_-]{4,16}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('userName', content.match(reg)[0]);
        returnMsg.set('msg', '用户名可用');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '用户名不可用');
    }
    return returnMsg;
}

//校验中文姓名
// @param {String} content   eg: let content = '张三'
// @return {Map} returnMsg   eg: {status:true, chineseName: '张三' , msg: '姓名格式正确'}
export const matchChineseName = (content) => {
    let returnMsg = new Map();
    const reg = /^[\u4e00-\u9fa5]{2,4}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('chineseName', content.match(reg)[0]);
        returnMsg.set('msg', '姓名格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '姓名格式错误');
    }
    return returnMsg;
}

//校验车牌号
// @param {String} content   eg: let content = '粤B12345'
// @return {Map} returnMsg   eg: {status:true, carNumber: '粤B12345' , msg: '车牌号格式正确'}
export const matchCarNumber = (content) => {
    let returnMsg = new Map();
    const reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('carNumber', content.match(reg)[0]);
        returnMsg.set('msg', '车牌号格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '车牌号格式错误');
    }
    return returnMsg;
}

//校验邮政编码
// @param {String} content   eg: let content = '510000'
// @return {Map} returnMsg   eg: {status:true, postCode: '510000' , msg: '邮政编码格式正确'}
export const matchPostCode = (content) => {
    let returnMsg = new Map();
    const reg = /[1-9]\d{5}(?!\d)/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('postCode', content.match(reg)[0]);
        returnMsg.set('msg', '邮政编码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '邮政编码格式错误');
    }
    return returnMsg;
}

//校验QQ号
// @param {String} content   eg: let content = '123456789'
// @return {Map} returnMsg   eg: {status:true, qq: '123456789' , msg: 'QQ号格式正确'}
export const matchQQ = (content) => {
    let returnMsg = new Map();
    const reg = /^[1-9][0-9]{4,}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('qq', content.match(reg)[0]);
        returnMsg.set('msg', 'QQ号格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', 'QQ号格式错误');
    }
    return returnMsg;
}

//校验微信号
// @param {String} content   eg: let content = 'Coolstuz'
// @return {Map} returnMsg   eg: {status:true, wechat: 'Coolstuz' , msg: '微信号格式正确'}
export const matchWeChat = (content) => {
    let returnMsg = new Map();
    const reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('weChat', content.match(reg)[0]);
        returnMsg.set('msg', '微信号格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '微信号格式错误');
    }
    return returnMsg;
}

//校验身份证号码
// @param {String} content   eg: let content = '51000019900101001X'
// @return {Map} returnMsg   eg: {status:true, idCard: '51000019900101001X' , msg: '身份证号码格式正确'}
export const matchIdCard = (content) => {
    let returnMsg = new Map();
    //const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('idCard', content.match(reg)[0]);
        returnMsg.set('msg', '身份证号码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '身份证号码格式错误');
    }
    return returnMsg;
}

//校验军官证
// @param {String} content   eg: let content = '员字第123456号'
// @return {Map} returnMsg   eg: {status:true, officerCard: '员字第123456号' , msg: '军官证格式正确'}
export const matchOfficerCard = (content) => {
    let returnMsg = new Map();
    const reg = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('officerCard', content.match(reg)[0]);
        returnMsg.set('msg', '军官证格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '军官证格式错误');
    }
    return returnMsg;
}

//校验组织机构代码
// @param {String} content   eg: let content = 'XXXxxXXX-X'
// @return {Map} returnMsg   eg: {status:true, organizationCode: 'XXXxxXXX-X' , msg: '组织机构代码格式正确'}
export const matchOrganizationCode = (content) => {
    let returnMsg = new Map();
    const reg = /^[A-Za-z0-9]{8}-[A-Za-z0-9]$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('organizationCode', content.match(reg)[0]);
        returnMsg.set('msg', '组织机构代码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '组织机构代码格式错误');
    }
    return returnMsg;
}

//校验统一社会信用代码
// @param {String} content   eg: let content = '91110108MA00123456'
// @return {Map} returnMsg   eg: {status:true, unifiedSocialCreditCode: '91110108MA00123456' , msg: '统一社会信用代码格式正确'}
export const matchUnifiedSocialCreditCode = (content) => {
    let returnMsg = new Map();
    const reg = /^[0-9A-Z]{2}[0-9A-Z]{6}[0-9A-Z]{10}$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('unifiedSocialCreditCode', content.match(reg)[0]);
        returnMsg.set('msg', '统一社会信用代码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '统一社会信用代码格式错误');
    }
    return returnMsg;
}

//校验营业执照
// @param {String} content   eg: let content = '91110108MA00123'
// @return {Map} returnMsg   eg: {status:true, businessLicense: '91110108MA00123' , msg: '营业执照格式正确'}
export const matchBusinessLicense = (content) => {
    let returnMsg = new Map();
    const reg = /^[0-9A-Z]{15}$/g;
    // or const reg = [^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('businessLicense', content.match(reg)[0]);
        returnMsg.set('msg', '营业执照格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '营业执照格式错误');
    }
    return returnMsg;
}

//校验护照
// @param {String} content   eg: let content = 'G12345678'
// @return {Map} returnMsg   eg: {status:true, passport: 'G12345678' , msg: '护照格式正确'}
export const matchPassport = (content) => {
    let returnMsg = new Map();
    const reg = /^1[45][0-9]{7}$|(^[P|p|S|s]\d{7}$)|(^[S|s|G|g|E|e]\d{8}$)|(^[Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|(^[H|h|M|m]\d{8,10}$)/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('passport', content.match(reg)[0]);
        returnMsg.set('msg', '护照格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '护照格式错误');
    }
    return returnMsg;
}

//校验港澳通行证
// @param {String} content   eg: let content = 'H12345678'
// @return {Map} returnMsg   eg: {status:true, hmt: 'H12345678' , msg: '港澳通行证格式正确'}
export const matchHM = (content) => {
    let returnMsg = new Map();
    const reg = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('hmt', content.match(reg)[0]);
        returnMsg.set('msg', '港澳台通行证格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '港澳台通行证格式错误');
    }
    return returnMsg;
}

//校验台湾身份证
// @param {String} content   eg: let content = 'A123456789'
// @return {Map} returnMsg   eg: {status:true, tw: 'A123456789' , msg: '台湾身份证格式正确'}
export const matchTWidCard = (content) => {
    let returnMsg = new Map();
    const reg = /^[a-zA-Z][0-9]{9}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('tw', content.match(reg)[0]);
        returnMsg.set('msg', '台湾身份证格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '台湾身份证格式错误');
    }
    return returnMsg;
}

//校验香港身份证
// @param {String} content   eg: let content = 'A123456(7)'
// @return {Map} returnMsg   eg: {status:true, hk: 'A123456(7)' , msg: '香港身份证格式正确'}
export const matchHKidCard = (content) => {
    let returnMsg = new Map();
    const reg = /^[A-Z]{1,2}[0-9]{6}\([0-9A]\)$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('hk', content.match(reg)[0]);
        returnMsg.set('msg', '香港身份证格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '香港身份证格式错误');
    }
    return returnMsg;
}

//校验年月日
// @param {String} content   eg: let content = '2019-01-01'
// @return {Map} returnMsg   eg: {status:true, date: '2019-01-01' , msg: '年月日格式正确'}
export const matchDate = (content) => {
    let returnMsg = new Map();
    const reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('date', content.match(reg)[0]);
        returnMsg.set('msg', '日期格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '日期格式错误');
    }
    return returnMsg;
}

//校验澳门身份证
// @param {String} content   eg: let content = 'A123456(7)'
// @return {Map} returnMsg   eg: {status:true, am: 'A123456(7)' , msg: '澳门身份证格式正确'}
export const matchMOidCard = (content) => {
    let returnMsg = new Map();
    const reg = /^[157][0-9]{6}\([0-9A]\)$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('mo', content.match(reg)[0]);
        returnMsg.set('msg', '澳门身份证格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '澳门身份证格式错误');
    }
    return returnMsg;
}

//校验IPv4地址
// @param {String} content   eg: let content = '127.0.0.1'
// @return {Map} returnMsg   eg: {status:true, ipv4: '127.0.0.1', msg: 'IPv4地址格式正确'}
export const matchIPv4 = (content) => {
    let returnMsg = new Map();
    const reg = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('ipv4', content.match(reg)[0]);
        returnMsg.set('msg', 'IPv4地址格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', 'IPv4地址格式错误');
    }
    return returnMsg;
}

//校验IPv6地址
// @param {String} content   eg: let content = '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
// @return {Map} returnMsg   eg: {status:true, ipv6: '2001:0db8:85a3:0000:0000:8a2e:0370:7334', msg: 'IPv6地址格式正确'}
export const matchIPv6 = (content) => {
    let returnMsg = new Map();
    const reg = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('ipv6', content.match(reg)[0]);
        returnMsg.set('msg', 'IPv6地址格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', 'IPv6地址格式错误');
    }
    return returnMsg;
}

//校验MAC地址
// @param {String} content   eg: let content = '00-00-00-00-00-00'
// @return {Map} returnMsg   eg: {status:true, mac: '00-00-00-00-00-00', msg: 'MAC地址格式正确'}
export const matchMAC = (content) => {
    let returnMsg = new Map();
    const reg = /^([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('mac', content.match(reg)[0]);
        returnMsg.set('msg', 'MAC地址格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', 'MAC地址格式错误');
    }
    return returnMsg;
}

//校验子网掩码
// @param {String} content   eg: let content = '255.255.255.0'
// @return {Map} returnMsg   eg: {status:true, subnetMask: '255.255.255.0', msg: '子网掩码格式正确'}
export const matchSubnetMask = (content) => {
    let returnMsg = new Map();
    const reg = /^((255\.){3}(255|254|252|248|240|224|192|128|0))$/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('subnetMask', content.match(reg)[0]);
        returnMsg.set('msg', '子网掩码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '子网掩码格式错误');
    }
    return returnMsg;
}

//校验是否为端口号
// @param {String} content   eg: let content = '8080'
// @return {Map} returnMsg   eg: {status:true, port: '8080', msg: '端口号格式正确'}
export const matchPort = (content) => {
    let returnMsg = new Map();
    //const reg = /^[0-9]*$/;
    const reg = /^([1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('port', content.match(reg)[0]);
        returnMsg.set('msg', '端口号格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许端口号');
    }
    return returnMsg;
}

//校验字符串
// @param {String} content   eg: let content = 'abc'
// @return {Map} returnMsg   eg: {status:true, str: 'abc', msg: '字符串格式正确'}
export const matchString = (content) => {
    let returnMsg = new Map();
    const reg = /^[A-Za-z0-9_-]+$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('string', content.match(reg)[0]);
        returnMsg.set('msg', '字符串格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许字符串');
    }
    return returnMsg;
}

//只匹配中文
// @param {String} content   eg: let content = '中文'
// @return {Map} returnMsg   eg: {status:true, chinese: '中文', msg: '中文格式正确'}
export const matchChinese = (content) => {
    let returnMsg = new Map();
    const reg = /^[\u4e00-\u9fa5]/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('chinese', content.match(reg)[0]);
        returnMsg.set('msg', '只匹配中文');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只匹配中文');
    }
    return returnMsg;
}

//只匹配英文
// @param {String} content   eg: let content = 'english'
// @return {Map} returnMsg   eg: {status:true, english: 'english', msg: '英文格式正确'}
export const matchEnglish = (content) => {
    let returnMsg = new Map();
    const reg = /^[a-zA-Z]/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('english', content.match(reg)[0]);
        returnMsg.set('msg', '只匹配英文');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只匹配英文');
    }
    return returnMsg;
}

//只匹配数字
// @param {String} content   eg: let content = '123'
// @return {Map} returnMsg   eg: {status:true, number: '123', msg: '数字格式正确'}
export const matchNumber = (content) => {
    let returnMsg = new Map();
    const reg = /^[0-9]/g;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('number', content.match(reg)[0]);
        returnMsg.set('msg', '只匹配数字');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只匹配数字');
    }
    return returnMsg;
}

//校验是否为空
// @param {String} content   eg: let content = '123'
// @return {Map} returnMsg   eg: {status:true, msg: '不为空'}
export const matchEmpty = (content) => {
    let returnMsg = new Map();
    const reg = /^\s*$/;
    if (reg.test(content)) {
        returnMsg.set('status', false);
        returnMsg.set('msg', '不允许为空');
    } else {
        returnMsg.set('status', true);
        returnMsg.set('msg', '不为空');
    }
    return returnMsg;
}

//校验小写字母
// @param {String} content   eg: let content = 'abc'
// @return {Map} returnMsg   eg: {status:true, lowerCase: 'abc', msg: '小写字母格式正确'}
export const matchLowerCase = (content) => {
    let returnMsg = new Map();
    const reg = /^[a-z]+$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('lowerCase', content.match(reg)[0]);
        returnMsg.set('msg', '小写字母格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许小写字母');
    }
    return returnMsg;
}

//校验大写字母
// @param {String} content   eg: let content = 'ABC'
// @return {Map} returnMsg   eg: {status:true, upperCase: 'ABC', msg: '大写字母格式正确'}
export const matchUpperCase = (content) => {
    let returnMsg = new Map();
    const reg = /^[A-Z]+$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('upperCase', content.match(reg)[0]);
        returnMsg.set('msg', '大写字母格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许大写字母');
    }
    return returnMsg;
}

// 校验大写字母开头
// @param {String} content   eg: let content = 'Abc'
// @return {Map} returnMsg   eg: {status:true, upperCaseStart: 'Abc', msg: '大写字母开头格式正确'}
export const matchUpperCaseStart = (content) => {
    let returnMsg = new Map();
    const reg = /^[A-Z][a-z0-9A-Z]+$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('upperCaseStart', content.match(reg)[0]);
        returnMsg.set('msg', '大写字母开头格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许大写字母开头');
    }
    return returnMsg;
}

//校验大小写字母
// @param {String} content   eg: let content = 'Abc'
// @return {Map} returnMsg   eg: {status:true, alphabets: 'Abc', msg: '大小写字母格式正确'}
export const matchAlphabets = (content) => {
    let returnMsg = new Map();
    const reg = /^[A-Za-z]+$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('alphabets', content.match(reg)[0]);
        returnMsg.set('msg', '大小写字母格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许大小写字母');
    }
    return returnMsg;
}

//校验是否为正整数
// @param {String} content   eg: let content = '123'
// @return {Map} returnMsg   eg: {status:true, positiveInteger: '123', msg: '正整数格式正确'}
export const matchPositiveInteger = (content) => {
    let returnMsg = new Map();
    const reg = /^[1-9]\d*$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('positiveInteger', content.match(reg)[0]);
        returnMsg.set('msg', '正整数格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许正整数');
    }
    return returnMsg;
}

//校验是否为负整数
// @param {String} content   eg: let content = '-123'
// @return {Map} returnMsg   eg: {status:true, negativeInteger: '-123', msg: '负整数格式正确'}
export const matchNegativeInteger = (content) => {
    let returnMsg = new Map();
    const reg = /^-[1-9]\d*$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('negativeInteger', content.match(reg)[0]);
        returnMsg.set('msg', '负整数格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许负整数');
    }
    return returnMsg;
}

//校验是否为整数
// @param {String} content   eg: let content = '123'
// @return {Map} returnMsg   eg: {status:true, integer: '123', msg: '整数格式正确'}
export const matchInteger = (content) => {
    let returnMsg = new Map();
    const reg = /^-?[1-9]\d*$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('integer', content.match(reg)[0]);
        returnMsg.set('msg', '整数格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许整数');
    }
    return returnMsg;
}

//校验是否为正浮点数
// @param {String} content   eg: let content = '123.123'
// @return {Map} returnMsg   eg: {status:true, positiveFloat: '123.123', msg: '正浮点数格式正确'}
export const matchPositiveFloat = (content) => {
    let returnMsg = new Map();
    const reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('positiveFloat', content.match(reg)[0]);
        returnMsg.set('msg', '正浮点数格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许正浮点数');
    }
    return returnMsg;
}

//校验是否为负浮点数
// @param {String} content   eg: let content = '-123.123'
// @return {Map} returnMsg   eg: {status:true, negativeFloat: '-123.123', msg: '负浮点数格式正确'}
export const matchNegativeFloat = (content) => {
    let returnMsg = new Map();
    const reg = /^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('negativeFloat', content.match(reg)[0]);
        returnMsg.set('msg', '负浮点数格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许负浮点数');
    }
    return returnMsg;
}

//校验是否为浮点数
// @param {String} content   eg: let content = '123.123'
// @return {Map} returnMsg   eg: {status:true, float: '123.123', msg: '浮点数格式正确'}
export const matchFloat = (content) => {
    let returnMsg = new Map();
    const reg = /^(-?\d+)(\.\d+)?$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('float', content.match(reg)[0]);
        returnMsg.set('msg', '浮点数格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许浮点数');
    }
    return returnMsg;
}

//校验地区码
// @param {String} content   eg: let content = '110000'
// @return {Map} returnMsg   eg: {status:true, areaCode: '110000', msg: '地区码格式正确'}
export const matchAreaCode = (content) => {
    let returnMsg = new Map();
    const reg = /^[1-9]\d{5}$/;
    if (reg.test(content)) {
        returnMsg.set('status', true);
        returnMsg.set('areaCode', content.match(reg)[0]);
        returnMsg.set('msg', '地区码格式正确');
    } else {
        returnMsg.set('status', false);
        returnMsg.set('msg', '只允许地区码');
    }
    return returnMsg;
}





