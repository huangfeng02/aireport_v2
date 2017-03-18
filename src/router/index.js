import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
        component: resolve => require(['../view/user/user.vue'], resolve)
    },
      {
       path: '/user/user',
       name: 'user',
       component: resolve => require(['../view/user/user.vue'], resolve)
       },
       {
       path: '/user/department',
       name: 'department',
       component: resolve => require(['../view/user/department.vue'], resolve)
       },
       {
       path: '/user/role',
       name: 'role',
       component: resolve => require(['../view/user/role.vue'], resolve)
       },
       {
       path: '/user/menu',
       name: 'menu',
       component: resolve => require(['../view/user/menu.vue'], resolve)
       },
       {
       path: '/aireline/list',
       component: resolve => require(['../view/aireline/list.vue'], resolve)
       },
       {
       path: '/aireline/schedule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/aireline/schedule.vue'], resolve)
       },
       {
       path: '/aireline/iata',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/aireline/iata.vue'], resolve)
       },
       {
       path: '/market/price',//航司直达点协议价格列表
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/price.vue'], resolve)
       },
       {
       path: '/market/feesSet',//航司杂费列表
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/feesSet.vue'], resolve)
       },
       {
       path: '/market/formulaSet',//航司付费重计算公式设置
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/formulaSet.vue'], resolve)
       },
       {
       path: '/market/companyFees',//航司杂费列表
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/companyFees.vue'], resolve)
       },
       {
       path: '/market/transitPrice',//航司转运价格列表
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/transitPrice.vue'], resolve)
       },
       {
       path: '/market/priceRule',//航司转运价格列表
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/priceRule.vue'], resolve)
       },
       {
       path: '/market/seat',//舱位预报和动态
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/seat.vue'], resolve)
       },
       {
       path: '/supplier/listSupplier',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/supplier/listSupplier.vue'], resolve)
       },
       {
       path: '/supplier/listContact',
       name:'listContact',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/supplier/listContact.vue'], resolve)
       },
       {
       path: '/supplier/listReceipt',
       name:'listReceipt',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/supplier/listReceipt.vue'], resolve)
       },
       {
       path: '/supplier/listContract',
       name:'listContract',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/supplier/listContract.vue'], resolve)
       },
       {
       path: '/volume/listRule',//货量统计表
       name:'listRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/volume/listRule.vue'], resolve)
       },
       {
       path: '/volume/listRule',//货量统计表
       name:'listRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/volume/listRule.vue'], resolve)
       },
       {
       path: '/volume/listStatistics',//货量考核规则
       name:'listStatistics',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/volume/listStatistics.vue'], resolve)
       },
       {
       path: '/booking/listBooking',//我的订舱
       name:'listBooking',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/booking/listBooking.vue'], resolve)
       },
       {
       path: '/booking/bookingReturn',//订舱打回
       name:'bookingReturn',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/booking/bookingReturn.vue'], resolve)
       },
       {
       path: '/customs/listCustoms',//关务管理
       name:'listCustoms',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/customs/listCustoms.vue'], resolve)
       },
       {
       path: '/customs/managementAlone',//快速埋单
       name:'managementAlone',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/customs/managementAlone.vue'], resolve)
       },
       {
       path: '/goodsTally/listTally',//我的接货
       name:'listTally',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/goodsTally/listTally.vue'], resolve)
       },
       {
       path: '/goodsTally/tallyDetail',
       name:'tallyDetail',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/goodsTally/tallyDetail.vue'], resolve)
       },
       {
       path: '/bargaining/listBargaining',//我的议价和上板安排
       name:'listBargaining',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/bargaining/listBargaining.vue'], resolve)
       },
       {
       path: '/bargaining/bargainingDetail',//议价和上板安排详情
       name:'bargainingDetail',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/bargaining/bargainingDetail.vue'], resolve)
       },
       {
       path: '/billing/listBiling',//我的账单
       name:'listBiling',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/listBiling.vue'], resolve)
       },
       {
       path: '/billing/listBilingDetail',//主账单详情
       name:'listBilingDetail',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/listBilingDetail.vue'], resolve)
       },
       {
       path: '/billing/costApplication',//费用申请管理
       name:'costApplication',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/costApplication.vue'], resolve)
       },
       {
       path: '/billing/billingApplication',//开票申请管理
       name:'billingApplication',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/billingApplication.vue'], resolve)
       },
       {
       path: '/EQ/listEq',//EQ管理
       name:'listEq',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/EQ/listEq.vue'], resolve)
       },
       {
       path: '/EQ/listEqRule',//EQ规则管理
       name:'listEqRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/EQ/listEqRule.vue'], resolve)
       },
       {
       path: '/EQ/listEqPrice',//EQ缺重量单价管理管理
       name:'listEqPrice',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/EQ/listEqPrice.vue'], resolve)
       },
       {
       path: '/inquiryPrice/listInquiry',//我的询价处理
       name:'listInquiry',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/listInquiry.vue'], resolve)
       },
       {
       path: '/inquiryPrice/InquiryPage',//询价
       name:'InquiryPage',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/InquiryPage.vue'], resolve)
       },
       {
       path: '/inquiryPrice/InquiryDetails',//询价详情
       name:'InquiryDetails',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/InquiryDetails.vue'], resolve)
       },
       {
       path: '/inquiryPrice/InquiryRule',//询价提醒规则录入
       name:'InquiryRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/InquiryRule.vue'], resolve)
       },
       {
       path: '/orderManagement/listOrder',//询价提醒规则录入
       name:'listOrder',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/listOrder.vue'], resolve)
       },
       {
       path: '/orderManagement/orderDetails',//我的订单详情
       name:'orderDetails',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderDetails.vue'], resolve)
       },
       {
       path: '/orderManagement/orderQuote',//选择关联报价
       name:'orderQuote',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderQuote.vue'], resolve)
       },
       {
       path: '/orderManagement/orderVct',//缺安检单VCT统计表
       name:'orderVct',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderVct.vue'], resolve)
       },
       {
       path: '/orderManagement/orderFileList',//随机文件清单
       name:'orderFileList',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderFileList.vue'], resolve)
       }
  ]
})
