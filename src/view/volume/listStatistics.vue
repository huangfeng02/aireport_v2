<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;display: none" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加客户</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">货量考核</a></li>
            <li class="active">货量统计表</li>
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
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>业务编号</th>
                                <th>航司</th>
                                <th>航线</th>
                                <th>统计周期</th>
                                <th>考核货量</th>
                                <th>完成货量</th>
                                <th>超额完成量</th>
                                <th>超额奖励</th>
                                <th width="70">操作</th>
                            </tr>
                           <!-- <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.supplierId }}</td>
                                <td>{{ item.company }}</td>
                                <td>{{ item.nameEn }}</td>
                                <td>{{ item.nameCh }}</td>
                                <td>{{ item.department }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.tel }}</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id)" title="编辑"></i>
                                </td>
                            </tr>-->
                            <tr>
                                <td><input type="checkbox" value="1"></td>
                                <td>2332</td>
                                <td>CA</td>
                                <td>美线</td>
                                <td>20160501-20160503</td>
                                <td>30t</td>
                                <td>33t</td>
                                <td>3t</td>
                                <td>1t</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(1)" title="编辑"></i>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" value="1"></td>
                                <td>2332</td>
                                <td>CA</td>
                                <td>美线</td>
                                <td>20160501-20160503</td>
                                <td>30t</td>
                                <td>23t</td>
                                <td>0</td>
                                <td>o</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(1)" title="编辑"></i>
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

    <list-modal :statistics-info="statisticsInfo"></list-modal>
    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import listModal from './listStatisticsModal.vue'

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
                statisticsInfo:{
                    //id:'',
                    supplierId:"2332",
                    company:'CA',
                    nameEn:'美线',
                    nameCh:'20160501-20160503',
                    department:'30t',
                    title:'33t',
                    email:'3t',
                    tel:'1t'
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