<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">

        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">账单管理</a></li>
            <li class="active">我的开票申请</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box" id="dateList">

                    <div class="box-header with-border clearfix">
                        <form class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <label class="col-sm-1 padding_0 control-label" style="width: 90px;">收款对象：</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" placeholder="申请单号" type="text">
                                    </div>
                                    <label class="col-sm-1 padding_0 control-label" style="width: 90px;">对账单状态：</label>
                                    <div class="col-sm-2">
                                        <select class="form-control">
                                            <option>全部</option>
                                            <option>未申请</option>
                                            <option>已申请</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 padding_0 control-label" style="width: 90px;">主单号：</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" placeholder="主单号" type="text">
                                    </div>
                                    <label class="col-sm-1 padding_0 control-label" style="width: 90px;">报关单号：</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" placeholder="报关单号" type="text">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 padding_0 control-label" style="width: 90px;">申请日期：</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" placeholder="开始日期" type="text">
                                    </div>
                                    <label class="col-sm-1 padding_0 control-label" style="width: 90px;text-align: center">--</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" placeholder="结束日期" type="text">
                                    </div>

                                </div>


                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <button type="submit" class="btn btn-info">查询</button>
                            </div>
                            <!-- /.box-footer -->
                        </form>

                    </div>

                    <div class="box-body table-responsive no-padding">

                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>开票申请单号</th>
                                <th>对账单号</th>
                                <th>主单号</th>
                                <th>币种</th>
                                <th>金额</th>
                                <th>当前状态</th>

                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>1</td>
                                <td>999</td>
                                <td>999-70123211</td>
                                <td>RMB</td>
                                <td>3720.00</td>
                                <td>未开票</td>
                            </tr>

                            <tr>
                                <td><input type="checkbox"></td>
                                <td>1</td>
                                <td>999</td>
                                <td>999-70123211</td>
                                <td>RMB</td>
                                <td>3720.00</td>
                                <td>未开票</td>
                            </tr>

                            <tr>
                                <td><input type="checkbox"></td>
                                <td>1</td>
                                <td>999</td>
                                <td>999-70123211</td>
                                <td>RMB</td>
                                <td>3720.00</td>
                                <td>未开票</td>
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

        created: function(){


            //  this.listContact()
            // document.title = "用户登入"
        }


    }

</script>