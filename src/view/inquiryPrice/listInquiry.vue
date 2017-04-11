<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">新增询价</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">订单管理</a></li>
            <li class="active">我的关务</li>
        </ol>
    </section>
    <div class="row" style="text-align: left;display: none">

        <div class="input-group input-group-sm"  style="width: 30%; margin-top: 15px;margin-left: 30px;">
            <input type="text" class="form-control">
                    <span class="input-group-btn">
                      <button class="btn btn-info btn-flat" type="button">搜索</button>
                    </span>
        </div>

    </div>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box" id="dateList">

                    <div class="box-header with-border clearfix">
                        <button type="button" id="btn-delAll" class="btn btn-sm btn-warning" @click="delAll">删除</button>

                        <div class="box-tools">
                            <div style="width: 250px;margin-top: 5px;" class="input-group input-group-sm">
                                <input type="text" placeholder="搜索名称" v-model="searchKey" class="form-control pull-right" name="table_search">

                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit" @click="search"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="box-body table-responsive no-padding">
                        <ul class="nav nav-tabs" style="padding-left: 20px;margin-top: 10px;">
                            <li class="active"><a data-toggle="tab" href="#tab_1" aria-expanded="true">待处理</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_2" aria-expanded="false">报价草稿</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_3" aria-expanded="false">待确认</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_4" aria-expanded="false">客户已确认</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_5" aria-expanded="false">已转订单</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_6" aria-expanded="false">已作废</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_7" aria-expanded="false">我的所有报价</a></li>
                        </ul>
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>编号</th>
                                <th>业务类型</th>
                                <th>客户</th>
                                <th>品名</th>
                                <th>件数</th>
                                <th>重量（KG）</th>
                                <th>方数（cbm）</th>
                                <th>密度</th>
                                <th>尺寸</th>
                                <th>出发地</th>
                                <th>目的地</th>
                                <th>送货日期</th>
                                <th>交货日期</th>
                                <th>当前状态</th>
                                <th>操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox"></td>
                                <td>{{item.id}}</td>
                                <td>{{item.typeName}}</td>
                                <td>{{item.customerName}}</td>
                                <td>{{item.goodsName}}</td>
                                <td>{{item.jianShu}}</td>
                                <td>{{item.weight}}</td>
                                <td>{{item.cbm}}</td>
                                <td>{{item.miDu}}</td>
                                <td>{{item.chiCun}}</td>
                                <td>{{item.fromCode}}-{{item.from}}</td>
                                <td>{{item.destCode}}-{{item.dest}}</td>
                                <td>{{item.songHuoRiQi}}</td>
                                <td>{{item.jiaohuoRiQi}}</td>
                                <td>{{item.state}}</td>
                                <td>
                                    <router-link :to="{name:'InquiryDetails'}" v-if="item.chongXinXunjia==1">修改</router-link>
                                    <router-link :to="{name:'InquiryPage'}" v-else>询价</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--分页-->
                <div id="pagination">
                    <pag-nav :total="total" :display="display" :current="current" v-on:pagechange="pagechange"></pag-nav>
                </div>

            </div>

        </div>


    </section>

      <list-modal :supplier-info="supplierInfo"></list-modal>
    </div>


</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import listModal from './listInquiryModal.vue'

    var searchDate={
        pageNum:1,
        pageSize:10,
        filters:{
          rules:[
            {"field":"state", "data":"0","op":"eq","type":"int"}
          ]
        }
    }
    export default {
        data:function(){
            return{
                items: "",
                checkedIds: [],
                total: 0,
                display: searchDate.pageSize,
                current: 1,
                searchKey:'',
                supplierId:'',
              supplierInfo:{
                shortName:'',
                nameEn:'',
                nameCh:'',
                type:'',
                address:'',
                remark:'',
                intro:'',
                businessLicense:'',
                status:''
              }
            }
        },
        components:{pagNav,listModal},
        computed: {
            checkedAll: {
                get: function () {
                    return this.checkedCount == this.items.length;
                },
                set: function (value) {
                    if (value) {
                        this.checkedIds = this.items.map(function (item) {
                            return item.id
                        })
                    } else {
                        this.checkedIds = []
                    }
                }
            },
            checkedCount: {
                get: function () {
                    return this.checkedIds.length;
                }
            }
        },
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.listContact(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/crm/supplier/editContact',
                    contentType: "application/json",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.listContact(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            submit:function(data){
                var _this=this;
                var data = JSON.stringify(data);

                $.ajax({
                    url: '/airlogis/crm/supplier/addContact',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.listContact(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })

            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/crm/supplier/deleteContact?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.listContact(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            delAll: function () {
                if(this.checkedIds.length==0){
                    util.alertMsgTip("自少选择一个")
                    return;
                }
                this.del(this.checkedIds)
            },
            findById: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/crm/supplier/loadContact?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        //  _this.contactInfo=xhr.data;

                        $("#btm-submit").hide()
                        $("#btm-update").show()
                        $('#myModal').modal('show')

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })

            },
            listInquiry:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/xunjia/listXunjia',
                    data:searchDate,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.total = data.total;
                        _this.current = data.pageNum;
                        _this.items = data.data;
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            search:function(){
                var searchKey =$.trim(this.searchKey);
                searchDate.filters = {
                    "groupOp": "AND",
                    "rules": [{"field": this.supplierId, "op": "eq", "data": searchKey}]
                }

                console.log(JSON.stringify(searchDate))
                this.listContact()
            }

        },
        created: function () {
            this.listInquiry();
        },
        mounted:function(){
          console.log('listInquiry');
        }
    }

</script>
