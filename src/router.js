export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    redirect: '/home/role'
  },
  {
    // 登录模块
    path: '/login',
    component: function (resolve) {
      require(['./components/login.vue'], resolve)
    }
  },
  {
    // 注册模块
    path: '/register',
    component: function (resolve) {
      require(['./components/register/registration.vue'], resolve)
    }
  },
  
  {
    // 主页
    path: '/home',
    component: function (resolve) {
      require(['./components/home.vue'], resolve)
    },
    children: [
      {
        // 个人来源地查询
        path: 'source',
        component: function (resolve) {
          require(['./components/role/roleList.vue'], resolve)
        }
      },
      {
        // 个人历史轨迹查询
        path: 'history',
        component: function (resolve) {
          require(['./components/menus/menusList.vue'], resolve)
        }
      },
      {
        // 危险伴行行为查询
        path: 'dangerous',
        component: function (resolve) {
          require(['./components/app/appList.vue'], resolve)
        }
      },
      {
        // 用户管理
        path: 'user',
        component: function (resolve) {
          require(['./components/user/userList.vue'], resolve)
        }
      },
      {
        // 个人综合感染风险
        path: 'risk',
        component: function (resolve) {
          require(['./components/equipment/equipmentList.vue'], resolve)
        },
      },
      // 设备配置页
      {
        path: 'config',
        component: function (resolve) {
        require(['./components/equipment/configuration.vue'], resolve)
      },
        },
      {
        // 区域疑似&感染案例查询
        path: 'case',
        component: function (resolve) {
          require(['./components/equipment/groupList.vue'], resolve)
        }
      },
      {
        // 区域来源地人流统计分布
        path: 'statistics',
        component: function (resolve) {
          require(['./components/equipment/license.vue'], resolve)
        }
      },
      {
        // 区域风险指标
        path: 'target',
        component: function (resolve) {
          require(['./components/equipment/recordList.vue'], resolve)
        }
      },
      {
        // 危险伴行人员
        path: 'riskPersonal',
        component: function (resolve) {
          require(['./components/department/departmentList.vue'], resolve)
        }
      },
      {
        // 疫情原因追溯
        path: 'trace',
        component: function (resolve) {
          require(['./components/personnel/personnelList.vue'], resolve)
        }
      },
      {
        // 访客管理
        path: 'visitor',
        component: function (resolve) {
          require(['./components/visitor/visitorList.vue'], resolve)
        }
      },
      {
        // 疫情扩散仿真
        path: 'scale',
        component: function (resolve) {
          require(['./components/attendance/attendanceList.vue'], resolve)
        }
      },
      {
        // 权限管理
        path: 'jurisdiction',
        component: function (resolve) {
          require(['./components/attendance/attendanceRecords.vue'], resolve)
        }
      },
      {
        // 人数统计列表
        path: 'memberRecords',
        component: function (resolve) {
          require(['./components/attendance/memberRecords.vue'], resolve)
        }
      },
      {
        // 人脸图像标注
        path: 'faceLabel',
        component: function (resolve) {
          require(['./components/faceLabel/faceLabel.vue'], resolve)
        }
      },
      {
        // 审核人脸图像标注
        path: 'approvalFace',
        component: function (resolve) {
          require(['./components/faceLabel/approvalFace.vue'], resolve)
        }
      },
      {
        // 心跳日志列表
        path: 'logList',
        component: function (resolve) {
          require(['./components/role/logList.vue'], resolve)
        }
      },
      {
        // API列表
        path: 'apiList',
        component: function (resolve) {
          require(['./components/apiDoc/apiList.vue'], resolve)
        }
      }
    ]
  },
 
 
 
]
