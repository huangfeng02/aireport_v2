<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">订单管理</a></li>
            <li class="active">选择关联报价信息</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box">
                    <div class="box-body table-responsive no-padding">

                        <div class="box-header with-border">
                            <h3 class="box-title">选择关联报价信息</h3>
                        </div>


                        <table class="table inputTable" style="width: 90%;">
                            <tbody>
                            <tr>
                                <td class="text-center">客人名称：</td>
                                <td>
                                    <select class="form-control pull-left" style="margin-left: 10px;">
                                        <option>客人A</option>
                                        <option>客人b</option>
                                        <option>客人c</option>
                                    </select>
                                </td>
                                <td class="text-center">目的地：</td>
                                <td>
                                    <select class="form-control pull-left" style="margin-left: 10px;">
                                        <option>LAX</option>
                                        <option>JPX</option>
                                        <option>NAC</option>
                                    </select>
                                </td>
                                <td class="text-center">交货时间：</td>
                                <td>
                                    <input type="text" class="form-control" placeholder="交货时间">
                                </td>
                                <td>
                                    <button type="submit" class="btn btn-primary">查询</button>
                                </td>
                            </tr>


                            </tbody>
                        </table>

                        <table class="table" style="margin-top: 30px;">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>报价单号</th>
                                <th>方案</th>
                                <th>报价时间</th>
                                <th>客人名称</th>
                                <th>货物基本信息</th>
                                <th>出发地</th>
                                <th>目的地</th>
                                <th>航班日期</th>
                                <th>方案/价格</th>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>报价单2016041801</td>
                                <td>方案1</td>
                                <td>2016-04-18</td>
                                <td>客人A</td>
                                <td>电路板/240KG/1方</td>
                                <td>SZX</td>
                                <td>LAX</td>
                                <td>2016-05-02</td>
                                <td>CA/15.0</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>报价单2016041801</td>
                                <td>方案1</td>
                                <td>2016-04-18</td>
                                <td>客人A</td>
                                <td>电路板/240KG/1方</td>
                                <td>SZX</td>
                                <td>LAX</td>
                                <td>2016-05-02</td>
                                <td>CA/15.0</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>报价单2016041801</td>
                                <td>方案1</td>
                                <td>2016-04-18</td>
                                <td>客人A</td>
                                <td>电路板/240KG/1方</td>
                                <td>SZX</td>
                                <td>LAX</td>
                                <td>2016-05-02</td>
                                <td>CA/15.0</td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="box-header with-border" style="padding: 20px;">
                            <button type="submit" class="btn btn-primary">确定</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </section>

    </div>

</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'

    var searchDate={
        pageNum:1,
        pageSize:10,
        filters:{}
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
                bookingInfo:{
                    //id:'',
                    supplierId:"2332",
                    company:'CA',
                    nameEn:'20160501',
                    nameCh:'20160501',
                    department:'20160503',
                    title:'33'
                }
            }
        },
        components:{},
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
            listContact:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/crm/supplier/listContact',
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
        mounted:function(){
        },

    }

</script>