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
       path: '/market/price',//???????งฟ?????งา?
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/price.vue'], resolve)
       },
       {
       path: '/market/feesSet',//???????งา?
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/feesSet.vue'], resolve)
       },
       {
       path: '/market/formulaSet',//?????????????????
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/formulaSet.vue'], resolve)
       },
       {
       path: '/market/companyFees',//???????งา?
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/companyFees.vue'], resolve)
       },
       {
       path: '/market/transitPrice',//?????????งา?
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/transitPrice.vue'], resolve)
       },
       {
       path: '/market/priceRule',//?????????งา?
       meta: { requiresAuth: true },
       component: resolve => require(['../view/market/priceRule.vue'], resolve)
       },
       {
       path: '/market/seat',//??ฆห???????
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
       path: '/volume/listRule',//????????
       name:'listRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/volume/listRule.vue'], resolve)
       },
       {
       path: '/volume/listRule',//????????
       name:'listRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/volume/listRule.vue'], resolve)
       },
       {
       path: '/volume/listStatistics',//???????????
       name:'listStatistics',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/volume/listStatistics.vue'], resolve)
       },
       {
       path: '/booking/listBooking',//??????
       name:'listBooking',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/booking/listBooking.vue'], resolve)
       },
       {
       path: '/booking/bookingReturn',//??????
       name:'bookingReturn',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/booking/bookingReturn.vue'], resolve)
       },
       {
       path: '/customs/listCustoms',//???????
       name:'listCustoms',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/customs/listCustoms.vue'], resolve)
       },
       {
       path: '/customs/managementAlone',//??????
       name:'managementAlone',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/customs/managementAlone.vue'], resolve)
       },
       {
       path: '/goodsTally/listTally',//?????
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
       path: '/bargaining/listBargaining',//????????????
       name:'listBargaining',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/bargaining/listBargaining.vue'], resolve)
       },
       {
       path: '/bargaining/bargainingDetail',//?????????????
       name:'bargainingDetail',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/bargaining/bargainingDetail.vue'], resolve)
       },
       {
       path: '/billing/listBiling',//??????
       name:'listBiling',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/listBiling.vue'], resolve)
       },
       {
       path: '/billing/listBilingDetail',//?????????
       name:'listBilingDetail',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/listBilingDetail.vue'], resolve)
       },
       {
       path: '/billing/costApplication',//???????????
       name:'costApplication',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/costApplication.vue'], resolve)
       },
       {
       path: '/billing/billingApplication',//??????????
       name:'billingApplication',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/billing/billingApplication.vue'], resolve)
       },
       {
       path: '/EQ/listEq',//EQ????
       name:'listEq',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/EQ/listEq.vue'], resolve)
       },
       {
       path: '/EQ/listEqRule',//EQ???????
       name:'listEqRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/EQ/listEqRule.vue'], resolve)
       },
       {
       path: '/EQ/listEqPrice',//EQ???????????????
       name:'listEqPrice',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/EQ/listEqPrice.vue'], resolve)
       },
       {
       path: '/inquiryPrice/listInquiry',//?????????
       name:'listInquiry',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/listInquiry.vue'], resolve)
       },
       {
       path: '/inquiryPrice/InquiryPage',//???
       name:'InquiryPage',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/InquiryPage.vue'], resolve)
       },
       {
       path: '/inquiryPrice/InquiryDetails',//???????
       name:'InquiryDetails',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/InquiryDetails.vue'], resolve)
       },
       {
       path: '/inquiryPrice/InquiryRule',//?????????????
       name:'InquiryRule',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/inquiryPrice/InquiryRule.vue'], resolve)
       },
       {
       path: '/orderManagement/listOrder',//?????????????
       name:'listOrder',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/listOrder.vue'], resolve)
       },
       {
       path: '/orderManagement/orderDetails',//??????????
       name:'orderDetails',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderDetails.vue'], resolve)
       },
       {
       path: '/orderManagement/orderQuote',//??????????
       name:'orderQuote',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderQuote.vue'], resolve)
       },
       {
       path: '/orderManagement/orderVct',//?????VCT????
       name:'orderVct',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderVct.vue'], resolve)
       },
       {
       path: '/orderManagement/orderFileList',//????????
       name:'orderFileList',
       meta: { requiresAuth: true },
       component: resolve => require(['../view/orderManagement/orderFileList.vue'], resolve)
       }
  ]
})
