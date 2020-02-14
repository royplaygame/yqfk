import Vue from 'vue'
import axios from 'axios'
require('../http')
const admin = {
    // 登录
    login: function login(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // **********注册**********
    // 获取手机验证码
    mobileCode: function mobileCode(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 获取APP授权码
    appCode: function appCode(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //*********** 角色管理 *********
    // 角色列表
    roleList: function roleList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 新增角色
    addRole: function addRole(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新角色
    updateRole: function updateRole(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除角色
    removeRole: function removeRole(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 根据角色获取菜单配置
    roleMenuList: function roleMenuList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    //*********** APP管理 *********
    // APP列表
    appList: function appList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 获取任务状态
    taskStatus: function taskStatus(ip, postdata) {
        var ipstr = ip + '/' + postdata.taskid
        return axios.get(ipstr, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 获取任务结果
    taskResult: function taskResult(ip, postdata) {
        var ipstr = ip + '/' + postdata.taskid
        return axios.get(ipstr, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 新增APP
    addApp: function addApp(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新APP
    updateApp: function updateApp(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除APP
    removeApp: function removeApp(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    //*********** 菜单管理 *********
    // 菜单列表
    menuList: function menuList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 新增菜单
    addMenu: function addMenu(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新菜单
    updateMenu: function updateMenu(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除菜单
    removeMenu: function removeMenu(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 配置角色与菜单的关联
    setRoleMenu: function setRoleMenu(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    //*********** 用户管理 *********
    // 用户列表
    userList: function userList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 用户注册
    addUser: function addUser(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 用户删除
    deleteUser: function deleteUser(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新用户
    updateUser: function updateUser(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 关联手机号或密码修改
    updatePassword: function updatePassword(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },


    // ****************设备管理******************
    // 创建设备分组
    createGroup: function createGroup(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新设备分组
    updateGroup: function updateGroup(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除设备分组
    deleteGroup: function deleteGroup(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组列表
    groupList: function groupList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 创建设备
    create: function create(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新设备
    updateDevice: function updateDevice(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 绑定设备
    bindGroup: function bindGroup(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 解绑设备
    unbindGroup: function unbindGroup(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备列表
    deviceList: function deviceList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组人员列表
    groupGetMember: function groupGetMember(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组访客列表
    groupGetVisitor: function groupGetVisitor(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组添加人员
    groupAddMember: function groupAddMember(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组删除人员
    groupDeleteMember: function groupDeleteMember(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组添加访客
    groupAddVisitor: function groupAddVisitor(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 设备分组删除访客
    groupDeleteVisitor: function groupDeleteVisitor(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // license列表
    licenseList: function licenseList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 创建license
    addLicense: function addLicense(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //更新设备配置
    updateDeviceCfg: function updateDeviceCfg(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //获取设备分组设备列表
    groupGetDevice: function groupGetDevice(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    }, 
    //设备分组添加设备
    groupAddDevice: function groupAddDevice(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    }, 
    //更新版本号
    updateVersion: function updateVersion(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },            


    // *****************部门管理***************
    // 创建部门
    addDept: function addDept(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新部门
    updateDept: function updateDept(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除部门
    deleteDept: function deleteDept(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 部门列表
    deptList: function deptList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    // **************人员管理******************
    // 新增人员
    addPerson: function addPerson(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新人员
    updatePerson: function updatePerson(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 上传图片
    imgUpload: function imgUpload(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 上传zip
    imgsZipUpload: function imgsZipUpload(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 批量删除
    deleteMembers: function deleteMembers(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },    
    // 导入Excel文件
    importExcel: function importExcel(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //删除人员
    deletePerson: function deletePerson(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //人员列表
    PersonList: function deletePerson(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //添加黑名单
    addBlack: function addBlack(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //取消黑名单
    removeBlack: function removeBlack(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //设置人员通知
    setNote: function setNote(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    // *****************访客管理*********************
    // 新增访客
    addVisitor: function addVisitor(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除访客
    delVisitor: function delVisitor(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 批量删除访客
    delVisitors: function delVisitors(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },    
    // 更新访客
    updateVisitor: function updateVisitor(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 访客列表
    visitorList: function visitorList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //添加访客黑名单
    addVisitorBlack: function addVisitorBlack(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //取消访客黑名单
    removeVisitorBlack: function removeVisitorBlack(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    //设置访客通知
    setVisitorNote: function setVisitorNote(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    // ******************识别记录********************
    // 识别记录列表
    recordList: function recordList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    // *****************考勤管理**************
    // 新增考勤
    addAttendance: function addAttendance(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除考勤
    deleteAttendance: function deleteAttendance(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新考勤
    updateAttendance: function updateAttendance(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 考勤列表
    attendanceList: function attendanceList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 考勤统计列表
    attendanceStatisticsList: function attendanceStatisticsList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 人数统计列表
    memberRecordsList: function memberRecordsList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    // 获取人脸图像标注
    FaceImg: function FaceImg(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 发送人脸图像标注结果
    landMark: function landMark(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 标记图片预览
    landMarkPre: function landMarkPre(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 标记图片审核结果
    landmarkPreRes: function landmarkPreRes(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 心跳日志列表
    logList: function logList(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },

    // *************API文档********************
    // 创建文档
    createDoc: function createDoc(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 更新文档
    updateDoc: function updateDoc(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 删除文档
    deleteDoc: function deleteDoc(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    }, 
    // 获取文档树列表
    docTree: function docTree(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },
    // 获取文档内容
    getContent: function getContent(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    }, 
    // 文档图片上传
    docImgUpload: function docImgUpload(ip, postdata) {
        return axios.post(ip, postdata).then(response => {
            if (response.code === '0') {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(response)
            }
        })
    },                   
}

export default admin