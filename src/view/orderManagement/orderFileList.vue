<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">订单管理</a></li>
            <li class="active">随机文件检查清单</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">

            <div class="col-md-12">

                <div class="box" style="width: 80%;max-width: 600px;">


                    <div class="box-body table-responsive no-padding">
                        <h3 style="margin: 10px;">单号：999-7012311</h3>
                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <th width="60" class="text-center">序号</th>
                                <th>文件名称</th>
                                <th>随机份数</th>
                            </tr>
                            <tr>
                                <td class="text-center">1</td>
                                <td>主运单（MASTER AWB）</td>
                                <td>1</td>
                            </tr>

                            <tr>
                                <td class="text-center">2</td>
                                <td>分运单（HOUSE AWB）
                                </td>
                                <td>1</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>


                    <div class="box-body table-responsive no-padding" style="margin-top: 30px;">
                        <table class="table table-bordered inputTable">
                            <tbody>
                            <tr>
                                <td class="text-right" width="150px;">代理单位名称</td>
                                <td><input type="text" class="form-control" placeholder="代理单位名称"></td>
                            </tr>

                            <tr>
                                <td class="text-right">检查人签名</td>
                                <td><input type="text" class="form-control" placeholder="检查人签名"></td>
                            </tr>

                            <tr>
                                <td class="text-right">联系电话</td>
                                <td><input type="text" class="form-control" placeholder="检查人签名"></td>
                            </tr>
                            <tr>
                                <td class="text-right">日期</td>
                                <td><input type="text" class="form-control" placeholder="日期"></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div style="padding: 20px;overflow: hidden">
                        <button type="button" class="btn btn-primary pull-right">打印</button>
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
                total: 3,
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
        components:{pagNav},
        events: {

        },
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
        }

    }

</script>