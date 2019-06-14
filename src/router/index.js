import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/pages/login'
import index from '../components/pages/index'

import manage from '../components/pages/manage'
import manageList from '../components/pages/manageList'
import manageCreate from '../components/pages/manageCreate'

import user from '../components/pages/user'
import userList from '../components/pages/userList'
import userCreate from '../components/pages/userCreate'

import notice from '../components/pages/notice'
import noticeList from '../components/pages/noticeList'
import noticeCreate from '../components/pages/noticeCreate'

import device from '../components/pages/device'
import deviceList from '../components/pages/deviceList'
import deviceCreate from '../components/pages/deviceCreate'

import welCome from '../components/pages/welCome'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        component: login
    }, {
        path: '/index',
        component: index,
        children: [{
                path: '',
                component: welCome,
            },
            {
                path: 'manage',
                component: manage,
                children: [{
                        path: 'list',
                        component: manageList,
                        name: '管理员列表页'
                    },
                    {
                        path: 'create/:id',
                        component: manageCreate,
                        name: '新建/修改管理员'
                    },
                    {
                        path: '',
                        redirect: 'list',
                    }
                ]
            },
            {
                path: 'user',
                component: user,
                children: [{
                        path: 'list',
                        component: userList,
                        name: '用户列表页'
                    },
                    {
                        path: 'create/:id',
                        component: userCreate,
                        name: '新建/修改用户'
                    },
                    {
                        path: '',
                        redirect: 'list',
                    }
                ]
            },
            {
                path: 'notice',
                component: notice,
                children: [{
                        path: 'list',
                        component: noticeList,
                        name: '通知列表页'
                    },
                    {
                        path: 'create/:id',
                        component: noticeCreate,
                        name: '新建/修改通知'
                    },
                    {
                        path: '',
                        redirect: 'list',
                    }
                ]
            }, {
                path: 'device',
                component: device,
                children: [{
                        path: 'list',
                        component: deviceList,
                        name: '设备列表页'
                    },
                    {
                        path: 'create/:id',
                        component: deviceCreate,
                        name: '新建/修改设备'
                    },
                    {
                        path: '',
                        redirect: 'list',
                    }
                ]
            }
        ]
    }, {
        path: '*',
        redirect: '/login'
    }]
})