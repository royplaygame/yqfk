
import Vue from 'vue'
require("../../API/config")
import admin from "../assets/admin"

export default {
  // 登录
  getLogin({ }, postdata) {
    return admin.login(global.loginPath, postdata)
  },
  // *************注册************
  // 获取手机验证码
  getCode({ }, postdata) {
    return admin.mobileCode(global.getCodePath, postdata)
  },
  // 获取APP授权码
  getAppCode({ }, postdata) {
    return admin.appCode(global.getAppCodePath, postdata)
  },
  //**********角色管理 ***********
  // 角色列表
  getRoleList({ }, postdata) {
    return admin.roleList(global.roleListPath, postdata)
  },
  // 新增角色
  getAddRole({ }, postdata) {
    return admin.addRole(global.addRolePath, postdata)
  },
  // 更新角色
  getUpdateRole({ }, postdata) {
    return admin.updateRole(global.updateRolePath, postdata)
  },
  // 根据角色获取菜单配置
  getRoleMenuList({ }, postdata) {
    return admin.roleMenuList(global.getMenuListByRolePath, postdata)
  },
  // 删除角色
  getRemoveRole({ }, postdata) {
    return admin.removeRole(global.removeRolePath, postdata)
  },

  //**********APP管理 ***********
  // APP列表
  getAppList({ }, postdata) {
    return admin.appList(global.appListPath, postdata)
  },
  // 获取任务状态
  getTaskStatus({ }, postdata) {
    return admin.taskStatus(global.taskStatusPath, postdata)
  },
   // 获取任务结果
   getTaskResult({ }, postdata) {
    return admin.taskResult(global.taskResultPath, postdata)
  },
  // 新增app
  getAddApp({ }, postdata) {
    return admin.addApp(global.addAppPath, postdata)
  },
  // 更新app
  getUpdateApp({ }, postdata) {
    return admin.updateApp(global.updateAppPath, postdata)
  },
  // 删除app
  getRemoveApp({ }, postdata) {
    return admin.removeApp(global.removeAppPath, postdata)
  },

  //**********菜单管理 ***********
  // 菜单列表
  getMenuList({ }, postdata) {
    return admin.menuList(global.menuListPath, postdata)
  },
  // 新增菜单
  getAddMenu({ }, postdata) {
    return admin.addMenu(global.addMenuPath, postdata)
  },
  // 更新菜单
  getUpdateMenu({ }, postdata) {
    return admin.updateMenu(global.updateMenuPath, postdata)
  },
  // 删除菜单
  getRemoveMenu({ }, postdata) {
    return admin.removeMenu(global.removeMenuPath, postdata)
  },
  // 配置角色与菜单的关联
  getSetRoleMenu({ }, postdata) {
    return admin.setRoleMenu(global.setRoleMenuPath, postdata)
  },

  //**********用户管理 ***********
  // 用户列表
  getUserList({ }, postdata) {
    return admin.userList(global.userListPath, postdata)
  },
  // 用户注册
  getAddUser({ }, postdata) {
    return admin.addUser(global.addUserPath, postdata)
  },
  // 用户删除
  getDeleteUser({ }, postdata) {
    return admin.deleteUser(global.deleteUserPath, postdata)
  },
  // 更新用户
  getUpdateUser({ }, postdata) {
    return admin.updateUser(global.updateUserPath, postdata)
  },
  // 关联手机号或密码修改
  getUpdatePassword({ }, postdata) {
    return admin.updatePassword(global.updatePasswordPath, postdata)
  },

  //**********设备管理 ***********
  // 创建设备分组
  getCreateGroup({ }, postdata) {
    return admin.createGroup(global.createGroupPath, postdata)
  },
  // 更新设备分组
  getUpdateGroup({ }, postdata) {
    return admin.updateGroup(global.updateGroupPath, postdata)
  },
  // 删除设备分组
  getDeleteGroup({ }, postdata) {
    return admin.deleteGroup(global.deleteGroupPath, postdata)
  },
  // 设备分组列表
  getGroupList({ }, postdata) {
    return admin.groupList(global.groupListPath, postdata)
  },
  // 创建设备
  getCreate({ }, postdata) {
    return admin.create(global.createPath, postdata)
  },
  // 更新设备
  getUpdateDevice({ }, postdata) {
    return admin.updateDevice(global.updateDevicePath, postdata)
  },
  // 绑定设备
  getBindGroup({ }, postdata) {
    return admin.bindGroup(global.bindGroupPath, postdata)
  },
  // 解绑设备
  getUnbindGroup({ }, postdata) {
    return admin.unbindGroup(global.unbindGroupPath, postdata)
  },
  // 设备列表
  getDeviceList({ }, postdata) {
    return admin.deviceList(global.deviceListPath, postdata)
  },
  // 设备分组人员列表
  getGroupGetMember({ }, postdata) {
    return admin.groupGetMember(global.groupGetMemberPath, postdata)
  },
  // 设备分组访客列表
  getGroupGetVisitor({ }, postdata) {
    return admin.groupGetVisitor(global.groupGetVisitorPath, postdata)
  },
  // 设备分组添加人员
  getGroupAddMember({ }, postdata) {
    return admin.groupAddMember(global.groupAddMemberPath, postdata)
  },
  // 设备分组删除人员
  getGroupDelMember({ }, postdata) {
    return admin.groupDeleteMember(global.groupDeleteMemberPath, postdata)
  },
  // 设备分组添加访客
  getGroupAddVisitor({ }, postdata) {
    return admin.groupAddVisitor(global.groupAddVisitorPath, postdata)
  },
  // 设备分组删除访客
  getGroupDelVisitor({ }, postdata) {
    return admin.groupDeleteVisitor(global.groupDeleteVisitorPath, postdata)
  },
  // license列表
  getLicenseList({ }, postdata) {
    return admin.licenseList(global.licenseListPath, postdata)
  },
  // 创建license
  getAddLicense({ }, postdata) {
    return admin.addLicense(global.createLicensePath, postdata)
  },
  // 更新设备配置
  getUpdateDeviceCfg({ }, postdata) {
    return admin.updateDeviceCfg(global.updateDeviceCfgPath, postdata)
  },
  // 获取设备分组设备列表
  getGroupGetDevice({ }, postdata) {
    return admin.groupGetDevice(global.groupGetDevicePath, postdata)
  },
  // 设备分组添加设备
  getGroupAddDevice({ }, postdata) {
    return admin.groupAddDevice(global.groupAddDevicePath, postdata)
  },    
  // 更新版本号
  getUpdataVersion({ },postdata){
    return admin.updateVersion(global.updateVersionPath,postdata)
  },  

  // ****************部门管理*****************
  // 创建部门
  getAddDept({ }, postdata) {
    return admin.addDept(global.addDeptPath, postdata)
  },
  //更新部门
  getUpdateDept({ }, postdata) {
    return admin.updateDept(global.updateDeptPath, postdata)
  },
  //删除部门
  getDeleteDept({ }, postdata) {
    return admin.deleteDept(global.deleteDeptPath, postdata)
  },
  //部门列表
  getDeptList({ }, postdata) {
    return admin.deptList(global.deptListPath, postdata)
  },

  // ****************人员管理*****************
  //新增人员
  getAddPerson({ }, postdata) {
    return admin.addPerson(global.addPersonPath, postdata)
  },
  //更新人员
  getUpdatePerson({ }, postdata) {
    return admin.updatePerson(global.updatePersonPath, postdata)
  },
  //上传图片
  getImgUpload({ }, postdata) {
    return admin.imgUpload(global.imgUploadpath, postdata)
  },
  //导入Excel文件
  getImportExcel({ }, postdata) {
    return admin.importExcel(global.importExcelPath, postdata)
  },
  //删除人员
  getDeletePerson({ }, postdata) {
    return admin.deletePerson(global.deletePersonPath, postdata)
  },
  //人员列表
  getPersonList({ }, postdata) {
    return admin.PersonList(global.personListPath, postdata)
  },
  //添加黑名单
  getAddBlack({ }, postdata) {
    return admin.addBlack(global.addBlackPath, postdata)
  },
  //取消黑名单
  getRemoveBlack({ }, postdata) {
    return admin.removeBlack(global.removeBlackPath, postdata)
  },
  //设置人员通知
  getPersonNote({ }, postdata) {
    return admin.setNote(global.notePath, postdata)
  },
  // 上传zip
  getImgsZipUpload({ }, postdata) {
    return admin.imgsZipUpload(global.imgsZipUploadPath, postdata)
  }, 
  // 批量删除
  getDeleteMembers({ }, postdata) {
    return admin.deleteMembers(global.deleteMembersPath, postdata)
  },    

  // *********************访客管理****************
  // 新增访客
  getAddVisitor({ }, postdata) {
    return admin.addVisitor(global.addVisitorPath, postdata)
  },
  // 更新访客
  getUpdateVisitor({ }, postdata) {
    return admin.updateVisitor(global.updateVisitorPath, postdata)
  },
  // 访客列表
  getVisitorList({ }, postdata) {
    return admin.visitorList(global.visitorListPath, postdata)
  },
  //添加访客黑名单
  getAddVisitorBlack({ }, postdata) {
    return admin.addVisitorBlack(global.addVisitorBlackPath, postdata)
  },
  //取消访客黑名单
  getRemoveVisitorBlack({ }, postdata) {
    return admin.removeVisitorBlack(global.removeVisitorBlackPath, postdata)
  },
  //设置访客通知
  getVisitorNote({ }, postdata) {
    return admin.setVisitorNote(global.visitorNotePath, postdata)
  },
  //删除访客
  getDeleteVisitor({ }, postdata) {
    return admin.delVisitor(global.deleteVisitorPaht, postdata)
  },
  //批量删除访客
  getDeleteVisitortor({ }, postdata) {
    return admin.delVisitors(global.deleteVisitorsTorPath, postdata)
  },

  // ****************识别记录**************
  // 识别记录列表
  getRecordList({ }, postdata) {
    return admin.recordList(global.recordListPath, postdata)
  },


  // ******************考勤管理*******************
  // 新增考勤
  getAddAttendance({ }, postdata) {
    return admin.addAttendance(global.addAttendancePath, postdata)
  },
  // 删除考勤
  getDeleteAttendance({ }, postdata) {
    return admin.deleteAttendance(global.deleteAttendancePath, postdata)
  },
  // 更新考勤
  getUpdateAttendance({ }, postdata) {
    return admin.updateAttendance(global.updateAttendancePath, postdata)
  },
  // 考勤列表
  getAttendanceList({ }, postdata) {
    return admin.attendanceList(global.attendanceListPath, postdata)
  },
  // 考勤统计列表
  getAttendanceStatisticsList({ }, postdata) {
    return admin.attendanceStatisticsList(global.attendanceStatisticsListPath, postdata)
  },
  // 人数统计列表
  getMemberRecordsList({ }, postdata) {
    return admin.memberRecordsList(global.memberRecordsListPath, postdata)
  },

  // 获取人脸图像标注
  getFaceImg({ }, postdata) {
    return admin.FaceImg(global.faceLabelPath, postdata)
  },
  // 发送人脸图像标注结果
  getLandMark({ }, postdata) {
    return admin.landMark(global.landMarkPath, postdata)
  },
  // 标记图片预览
  getLandMarkPre({ }, postdata) {
    return admin.landMarkPre(global.landMarkPrePath, postdata)
  },
  // 标记图片审核结果
  getLandMarkPreRes({ }, postdata) {
    return admin.landmarkPreRes(global.landmarkPreResPath, postdata)
  },
  // 心跳日志列表
  getLogList({ }, postdata) {
    return admin.logList(global.logListPath, postdata)
  },

  // *******************API文档********************
  // 创建文档
  getCreateDoc({ }, postdata) {
    return admin.createDoc(global.createDocPath, postdata)
  },
  // 更新文档
  getUpdateDoc({ }, postdata) {
    return admin.updateDoc(global.updateDocPath, postdata)
  },
  // 删除文档
  getDeleteDoc({ }, postdata) {
    return admin.deleteDoc(global.deleteDocPath, postdata)
  },  
  // 获取文档树列表
  getDocTree({ }, postdata) {
    return admin.docTree(global.docTreePath, postdata)
  },  
  // 获取文档内容
  getDocContent({ }, postdata) {
    return admin.getContent(global.getContentPath, postdata)
  }, 
  // 文档图片上传
  getDocImgUpload({ }, postdata) {
    return admin.docImgUpload(global.docImgUploadPath, postdata)
  },     
}
