import Vue from 'vue'
import VueRouter from 'vue-router'

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '',
    component: () => import('@/layout/three.vue'),
    redirect: '/home',
    children: [{
        path: 'home',
        component: () => import('@/components/home/Home.vue'),
        meta: {
          title: '首页区块链交易网'
        }
      }, {
        path: 'login',
        component: () => import('@/components/login/Login.vue'),
        meta: {
          title: '登录'
        }
      },
      {
        path: '',
        component: () => import('@/layout/two.vue'),
        children: [{
            path: 'about',
            component: () => import('@/components/about/About.vue'),
            meta: {
              title: '关于'
            }
          }, {
            path: 'list/infants/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '婴幼儿'
            }
          }, {
            path: 'list/toddlers/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '幼儿'
            }
          }, {
            path: 'list/children/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '孩童'
            }
          }, {
            path: 'list/teens/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '青少年'
            }
          }, {
            path: 'list/men/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '成年男士'
            }
          }, {
            path: 'list/women/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '成年女士'
            }
          }, {
            path: 'list/old/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '老年人'
            }
          }, {
            path: 'list/recipe/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '菜谱'
            }
          },, {
            path: 'carbohydrates/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '碳水化合物'
            }
          }, {
            path: 'fats/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '脂肪类'
            }
          }, {
            path: 'fiber/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '纤维'
            }
          }, {
            path: 'foodadd/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '食品添加剂'
            }
          }, {
            path: 'phytonutrients/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '植物营养素'
            }
          }, {
            path: 'proteins/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '蛋白质类'
            }
          }, {
            path: 'salt/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '盐和钠'
            }
          }, {
            path: 'vitamin/:id',
            component: () => import('@/components/list/artical.vue'),
            meta: {
              title: '维生素和矿物质'
            }
          }, {
            path: 'list',
            component: () => import('@/components/list/list.vue'),
            meta: {
              title: '列表'
            },
            children: [{
              path: 'infants',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '婴幼儿',
                name: 'infants'
              }
            }, {
              path: 'toddlers',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '幼儿',
                name: 'toddlers'
              }
            }, {
              path: 'children',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '孩童',
                name: 'children'
              }
            }, {
              path: 'teens',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '青少年',
                name: 'teens'
              }
            }, {
              path: 'men',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '成年男士',
                name: 'men'
              }
            }, {
              path: 'women',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '成年女士',
                name: 'women'
              }
            }, {
              path: 'old',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '老年人',
                name: 'old'
              }
            }, {
              path: 'recipe',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '菜谱',
                name: 'recipe'
              }
            }, {
              path: 'carbohydrates',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '碳水化合物',
                name: 'carbohydrates'
              }
            }, {
              path: 'fats',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '脂肪类',
                name: 'fats'
              }
            }, {
              path: 'fiber',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '纤维',
                name: 'fiber'
              }
            }, {
              path: 'foodadd',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '食品添加剂',
                name: 'foodadd'
              }
            }, {
              path: 'phytonutrients',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '植物营养素',
                name: 'phytonutrients'
              }
            }, {
              path: 'proteins',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '蛋白质类',
                name: 'proteins'
              }
            }, {
              path: 'salt',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '盐和钠',
                name: 'salt'
              }
            }, {
              path: 'vitamin',
              component: () => import('@/components/list/list.vue'),
              meta: {
                title: '维生素和矿物质',
                name: 'vitamin'
              }
            }]
          }, {
            path: 'create',
            component: () => import('@/views/create.vue'),
            meta: {
              title: '写文章'
            }
          }, {
            path: 'contentus',
            component: () => import('@/views/contentus.vue'),
            meta: {
              title: '联系我们'
            }
          }, {
            path: 'questions',
            component: () => import('@/views/qa.vue'),
            meta: {
              title: '常见问题'
            }
          }, {
            path: 'privacy',
            component: () => import('@/views/privacy.vue'),
            meta: {
              title: '隐私政策'
            }
          }, {
            path: 'bmi',
            component: () => import('@/components/bmi/bmi'),
            meta: {
              title: 'BMI体重计算器'
            }
          }, {
            path: 'map',
            component: () => import('@/views/map'),
            meta: {
              title: '找到我们'
            }
          }, {
            path: 'echarfir',
            component: () => import('@/views/echarts/line'),
            meta: {
              title: '折线图'
            }
          }, {
            path: 'echarthot',
            component: () => import('@/views/echarts/hot'),
            meta: {
              title: '卡路里热量表'
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router