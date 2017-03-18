<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">

        <button class="btn btn-sm btn-primary pull-right" type="button" style="margin-right: 20px;">费用申请</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">账单管理</a></li>
            <li class="active">我的账单</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">


                <div class="box" id="dateList">

                    <div class="box-header with-border clearfix">
                        <button type="button" id="btn-delAll" class="btn btn-sm btn-warning" @click="delAll">提交审核</button>

                        <div class="box-tools form-horizontal" style="width: 90%">
                            <div class="form-group" style="margin-right: 15px;margin-top: 5px;">
                                <label class="col-sm-1 control-label input-group-sm" style="width: 60px;">日期</label>
                                <div class="col-sm-2 padding_1 input-group-sm">
                                    <input class="form-control" placeholder="开始日期" type="datetime">
                                </div>
                                <div class="col-sm-2 padding_1 input-group-sm">
                                    <input class="form-control" placeholder="结束日期" type="datetime">
                                </div>

                                <label class="col-sm-1 padding_1 control-label input-group-sm" style="width: 100px;">客户名称:</label>

                                <div class="col-sm-2 padding_1 input-group-sm">
                                    <input class="form-control" placeholder="客户名称" type="text">
                                </div>

                                <label class="col-sm-1 padding_1 control-label input-group-sm" style="width: 80px;">主单号:</label>

                                <div class="col-sm-2 padding_1 input-group-sm">
                                    <input class="form-control" placeholder="主单号" type="text">
                                </div>
                                <button type="submit" class="btn btn-primary btn-sm">搜索</button>

                            </div>

                        </div>
                    </div>


                    <div class="box-body table-responsive no-padding">
                        <ul class="nav nav-tabs" style="padding-left: 20px;margin-top: 10px;">
                            <li class="active"><a data-toggle="tab" href="#tab_1" aria-expanded="true">待处理</a></li>
                            <li class=""><a data-toggle="tab" href="#tab_2" aria-expanded="false">已完成</a></li>
                        </ul>
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>序号</th>
                                <th>业务编号</th>
                                <th>主单号</th>
                                <th>头程航班</th>
                                <th>航班日期</th>
                                <th>修改时间</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>1</td>
                                <td>999-70123211</td>
                                <td>CA1901</td>
                                <td>CA1901</td>
                                <td>2016-06-05</td>
                                <td>2016-06-06 10：00</td>
                                <td>审核中</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <a href="#">审核</a>
                                </td>
                             </tr>

                            <tr>
                                <td><input type="checkbox"></td>
                                <td>1</td>
                                <td>999-70123211</td>
                                <td>CA1901</td>
                                <td>CA1901</td>
                                <td>2016-06-05</td>
                                <td>2016-06-06 10：00</td>
                                <td>审核中</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <a href="#">审核</a>
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

<!--
    <list-modal :info="info"></list-modal>
-->
    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    //import listModal from './bargainingDetail.vue'

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
                info:{
                }
            }
        },
        components:{pagNav},
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