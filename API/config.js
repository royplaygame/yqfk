
// // 上传图片,文件
// global.logFileIp = '192.168.16.92'
// global.logFileport = '9091'

// 添加图片
global.imgUploadpath = '/member/imgUpload'

// 导入Excel文件
global.importExcelPath = '/member/xlsxUpload'

// Ip端口-生产
// global.IP = 'api.shapelight.net'
// global.Port = '9902'

// Ip端口-本地
global.IP = '192.168.1.50'
global.Port = '9902'
// ***********登录**************

global.loginPath = '/login'


// ****************  注册 **************
// 获取手机验证码
global.getCodePath = '/developer/getPhoneCode'
// 获取APP授权码
global.getAppCodePath = '/developer/createApp'



 
// ******角色管理********
// 角色列表
global.roleListPath = '/sys/roleList'
// 创建角色
global.addRolePath = '/sys/createRole'
// 更新角色
global.updateRolePath = '/sys/updateRole'
// 删除角色
global.removeRolePath = '/sys/deleteRole'
// 根据角色获取菜单配置
global.getMenuListByRolePath = '/sys/getMenuListByRole'
// 心跳日志列表
global.logListPath = '/sys/logList'

// ******APP管理********
// APP列表
global.appListPath = '/yqfk/infectionrisk'
// 获取任务状态
global.taskStatusPath = '/yqfk/task'
// 获取任务状态结果
global.taskResultPath = '/yqfk/infectionriskRes'
// 创建APP
global.addAppPath = '/sys/createApp'
// 更新APP
global.updateAppPath = '/sys/updateApp'
// 删除APP
global.removeAppPath = '/sys/deleteApp'

// ******菜单管理********
// 菜单列表
global.menuListPath = '/sys/menuTree'
// 创建菜单
global.addMenuPath = '/sys/createMenu'
// 更新菜单
global.updateMenuPath = '/sys/updateMenu'
// 删除菜单
global.removeMenuPath = '/sys/deleteMenu'
// 配置角色与菜单的关联
global.setRoleMenuPath = '/sys/createRoleMenu'

// ******用户管理********
// 用户列表
global.userListPath = '/sys/userList'
// 用户注册
global.addUserPath = '/user/createUser'
// 删除用户
global.deleteUserPath = '/user/deleteUser'
// 更新用户
global.updateUserPath = '/user/updateUser'
// 关联手机号或密码修改
global.updatePasswordPath = '/user/updatePassword'


// ****************设备管理***************
// 创建设备分组
global.createGroupPath = '/device/createGroup'
// 更新设备分组
global.updateGroupPath = '/device/updateGroup'
// 删除设备分组
global.deleteGroupPath = '/device/deleteGroup'
// 设备分组列表
global.groupListPath = '/device/groupList'
// 创建设备
global.createPath = '/device/createDevice'
// 更新设备
global.updateDevicePath = '/device/updateDevice'
// 绑定设备
global.bindGroupPath = '/device/bindGroup'
// 解绑设备
global.unbindGroupPath = '/device/unbindGroup'
// 设备列表
global.deviceListPath = '/device/deviceList'
// 获取设备分组人员列表
global.groupGetMemberPath = '/device/groupGetMember'
// 获取设备分组访客列表
global.groupGetVisitorPath = '/device/groupGetVisitor'
// 设备分组添加人员
global.groupAddMemberPath = '/device/groupAddMember'
// 设备分组删除人员
global.groupDeleteMemberPath = '/device/groupDeleteMember'
// 设备分组添加访客
global.groupAddVisitorPath = '/device/groupAddVisitor'
// 设备分组删除访客
global.groupDeleteVisitorPath = '/device/groupDeleteVisitor'
// license列表
global.licenseListPath = '/device/licenseList'
// 创建license
global.createLicensePath = '/device/createLicense'
// 更新设备配置
global.updateDeviceCfgPath = '/device/updateDeviceCfg'
// 获取设备分组设备列表
global.groupGetDevicePath = '/device/groupGetDevice'
// 设备分组添加设备
global.groupAddDevicePath = '/device/groupAddDevice'
// 更新版本号
global.updateVersionPath = '/device/updateVersion'


// **************部门管理****************
// 创建部门
global.addDeptPath= '/dept/createDept'
// 更新部门
global.updateDeptPath = '/dept/updateDept'
// 删除部门
global.deleteDeptPath = '/dept/deleteDept'
// 部门列表
global.deptListPath = '/dept/deptTree'


// *****************人员管理******************
// 新增人员
global.addPersonPath = '/member/createMember'
// 人员删除
global.deletePersonPath = '/member/deleteMember'
// 人员更新
global.updatePersonPath = '/member/updateMember'
// 添加黑名单
global.addBlackPath = '/member/addBlacklist'
// 取消黑名单
global.removeBlackPath = '/member/removeBlacklist'
// 人员列表
global.personListPath = '/member/memberList'
// 设置人员通知
global.notePath = '/member/setNote'
// 人员图片zip上传
global.imgsZipUploadPath = '/member/imgsZipUpload'
// 批量删除
global.deleteMembersPath = '/member/deleteMembers'


// ***************访客管理*****************
// 新增访客
global.addVisitorPath = '/visitor/createVisitor'
// 访客列表
global.visitorListPath = '/visitor/visitorList'
// 添加黑名单
global.addVisitorBlackPath = '/visitor/addBlacklist'
// 取消黑名单
global.removeVisitorBlackPath = '/visitor/removeBlacklist'
// 设置访客通知
global.visitorNotePath = '/visitor/setNote'
// 访客更新
global.updateVisitorPath = '/visitor/updateVisitor'
// 删除访客
global.deleteVisitorPaht = '/visitor/deleteVisitor'
// 批量删除访客
global.deleteVisitorsTorPath = '/visitor/deleteVisitors'


// *************识别记录****************
// 识别记录列表
global.recordListPath = '/record/recordList'


// *****************考勤管理****************
// 创建考勤
global.addAttendancePath  = '/attendance/createAttendance'
// 删除考勤
global.deleteAttendancePath = '/attendance/deleteAttendance'
// 更新考勤
global.updateAttendancePath = '/attendance/updateAttendance'
// 考勤列表
global.attendanceListPath = '/attendance/attendanceList'
// 考勤统计列表
global.attendanceStatisticsListPath = '/attendance/attendanceStatisticsList'
// 人数统计列表
global.memberRecordsListPath = '/attendance/groupStatisticsList'


// ************************人脸图像标注**********************
// 获取人脸图像标注
global.faceLabelPath = '/calibration/landmarkReq'
// 发送人脸图像标注结果
global.landMarkPath = '/calibration/landmarkRes'
// 标记图片预览
global.landMarkPrePath = '/calibration/landmarkPre'
// 标记图片审核结果
global.landmarkPreResPath = '/calibration/landmarkPreRes'


// ************************API文档**********************
// 创建文档
global.createDocPath = '/doc/createDoc'
// 更新文档
global.updateDocPath = '/doc/updateDoc'
// 删除文档
global.deleteDocPath = '/doc/deleteDoc'
// 获取文档树列表
global.docTreePath = '/doc/docTree'
// 获取文档内容
global.getContentPath = '/doc/getContent'
// 文档图片上传
global.docImgUploadPath = '/doc/imgUpload'
