<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">新增报关</button>
        <button class="btn btn-sm btn-primary pull-right" type="button" style="margin-right: 20px;">费用申请</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">账单管理</a></li>
            <li class="active">我的账单</li>
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
                        <h3 class="box-title">议价信息</h3>
                    </div>
                    <form class="form-horizontal">
                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-1 control-label" style="width: 120px;">航司议价人</label>
                                <div class="col-sm-2">
                                    <input class="form-control"  placeholder="航司议价人" type="text">
                                </div>

                                <label class="col-sm-1 control-label" style="width: 120px;">议后净运价</label>

                                <div class="col-sm-2">
                                    <input class="form-control"  placeholder="议后净运价" type="text">
                                </div>

                                <label class="col-sm-1 control-label" style="width: 120px;">议后成本价</label>

                                <div class="col-sm-2">
                                    <input class="form-control"  placeholder="议后成本价" type="text">
                                </div>


                            </div>

                            <div class="form-group">
                                <div class="col-sm-3" style="margin-left: 20px;">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox">
                                            可以计入EQ
                                        </label>
                                    </div>

                                </div>

                                <div class="col-sm-3" style="margin-left: 20px;">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox">
                                            可以计入货量考核
                                        </label>
                                    </div>
                                </div>

                                <label class="col-sm-1 control-label" style="width: 120px;">备注</label>
                                <div class="col-sm-2">
                                    <input class="form-control"  placeholder="司机姓名" type="text">
                                </div>

                            </div>




                        </div>

                    </form>
                </div>



                <div class="box" id="dateList">

                    <div class="box-header with-border clearfix">
                        <button type="button" id="btn-delAll" class="btn btn-sm btn-warning" @click="delAll">转为议价中</button>
                        <button style="margin-right: 10px;" type="button" id="btn-delAll2" class="btn btn-sm btn-warning" @click="delAll">完成议价</button>
                        <button style="margin-right: 10px;" type="button" id="btn-delAll3" class="btn btn-sm btn-warning" @click="delAll">打回</button>
                        <button style="margin-right: 10px;" type="button" id="btn-delAll4" class="btn btn-sm btn-warning" @click="delAll">不议价</button>

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
                            <li class=""><a data-toggle="tab" href="#tab_2" aria-expanded="false">待埋单</a></li>
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
                                <th>当前状态</th>
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
                                <td>草稿</td>
                                <td>CAN</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench"  @click="findById(item.id)" title="审核"></i>
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

        }


    }

</script>