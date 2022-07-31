import axios from './axios'

// 提交注册信息
export const RegisterUserInfo = (params) =>{
    return axios.request({
        url:'/register',
        method: 'post',
        data: params 
    })
}
//  登录api
export const LoginUserInfo = (params) =>{
  return axios.request({
    url:'/login',
    method: 'post',
    data: params
  })
}
// 点击发送验证码
export const getEmailCode = (params) =>{
  return axios.request({
    url:'/send-email',
    method: 'post',
    data: params
  })
}
// 点击修改按钮
export const getRevise = (params) =>{
  return axios.request({
    url:'/forget-password',
    method: 'post',
    data: params
  })
}

// 文献指南详情
export const getDocDetail = (params) =>{
  return axios.request({
    url:'/zsk/doc/detail',
    method: 'post',
    data: params
  })
}
// 作者详情
export const getAuthorDetail = (params) =>{
  return axios.request({
    url:'/zsk/author/detail',
    method: 'post',
    data: params
  })
}
// 获取文献气泡图
export const getDochots = (params) =>{
  return axios.request({
    url:'/zsk/doc/hots',
    method: 'post',
    data: params
  })
}
// 获取文献图谱
export const getd3Atlas = (params) =>{
  return axios.request({
    url:'/zsk/author/graph',
    method: 'post',
    data: params
  })
}

//  详情页知识图谱搜索
export const getD3Search = (params) =>{
  return axios.request({
    url:'/zsk/graph',
    method: 'post',
    data: params
  })
}
// 疾病详情属性栏目列表
export const getNewDetail = (params) =>{  
  return axios.request({
    url:'/detail',
    method: 'post',
    data: params
  })
}
// 疾病详情属性详情接口
export const getPropertyDetail = (params) =>{  
  return axios.request({
    url:'/property/detail',
    method: 'post',
    data: params
  })
}

// 搜索页面关键字接口
export const getExistLabels = (params) =>{  
  return axios.request({
    url:'/search-label',
    method: 'post',
    data: params
  })
}

// 疾病病例库列表接口
export const getCaseReports = (params) =>{  
  return axios.request({
    url:'/case-reports',
    method: 'post',
    data: params
  })
}
// cdss 获取医学知识列表请求
export const getMedicineList = (params) =>{
  return axios.request({
    url:'/get_medical_knowledge',
    method: 'post',
    data: params
  })
}
// 诊断指南详情接口
export const getGuideDetail = (params) =>{  
  return axios.request({
    url:'/guide-detail',
    method: 'post',
    data: params
  })
}
// 获取指南脑图文案结构列表
export const getStructureList = (params) =>{  
  return axios.request({
    url:'/guide-structure',
    method: 'post',
    data: params
  })
}
// 获取药物靶点列表
export const getDrugTargetList = (params) =>{  
  return axios.request({
    url:'/medicine-target-spot',
    method: 'post',
    data: params
  })
}
// 结构化脑图展示
export const getGuideMindMapZh = (params) =>{  
  return axios.request({
    url:'/guide-mindMap-zh',
    method: 'post',
    data: params
  })
}