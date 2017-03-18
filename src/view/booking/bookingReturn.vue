<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;display: none" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">订单管理</a></li>
            <li class="active">打回重新报价</li>
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

                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">打回理由</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    <form class="form-horizontal">
                        <div class="box-body">
                            <textarea class="form-control" rows="3" placeholder="输入打回理由"></textarea>
                        </div>
                        <!-- /.box-body -->
                        <div class="box-footer">
                            <button type="submit" class="btn btn-info pull-right">打回</button>
                        </div>
                        <!-- /.box-footer -->
                    </form>
                </div>

                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">订单基本信息</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <th>主单号</th>
                                <th>客人名称</th>
                                <th>航空公司</th>
                                <th>航班日期</th>
                                <th>运价</th>
                                <th>是否含危险品</th>
                                <th>货型</th>
                            </tr>
                            <tr>
                                <td>999-70123211</td>
                                <td>客人A</td>
                                <td>CA</td>
                                <td>2016-05-02</td>
                                <td>8</td>
                                <td>否</td>
                                <td>纸箱</td>
                            </tr>
                            <tr>
                                <th>中文品名</th>
                                <th>件数</th>
                                <th>重量</th>
                                <th>方数</th>
                                <th>出发地</th>
                                <th>目的地</th>
                                <th>头程航班号</th>
                            </tr>
                            <tr>
                                <td>电路板</td>
                                <td>1</td>
                                <td>640KG</td>
                                <td>1</td>
                                <td>SZX</td>
                                <td>LAX</td>
                                <td>CA1304</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>



            </div>

        </div>


    </section>
    </div>

</template>

<script>

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
        methods:{
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