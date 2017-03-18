<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;display: none" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">订舱信息录入</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">订单管理</a></li>
            <li class="active">我的订舱</li>
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

                        <div class="form-group" style="float:right;margin-right: 260px;width: 100px;margin-bottom: 0;">
                            <select class="form-control" style="height: 30px;padding: 5px 12px;">
                                <option>待处理</option>
                                <option>已完成</option>
                                <option>已作废</option>
                                <option>全部</option>
                            </select>
                        </div>

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
                                <th>主单号</th>
                                <th>件数</th>
                                <th>重量（KG）</th>
                                <th>方数（CBM）</th>
                                <th>品名</th>
                                <th>始发地</th>
                                <th>目的地</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>0909</td>
                                <td>999-70123255</td>
                                <td>1</td>
                                <td>212</td>
                                <td>1.2</td>
                                <td>服装</td>
                                <td>CAN</td>
                                <td>LAX</td>
                                <td>草稿</td>

                                <td>
                                    <i class="fa fa-fw fa-trash-o" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update" title="编辑"></i>
                                    <router-link :to="{name:'bookingReturn'}">打回</router-link>
                                </td>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>0909</td>
                                <td>999-70123255</td>
                                <td>1</td>
                                <td>212</td>
                                <td>1.2</td>
                                <td>服装</td>
                                <td>CAN</td>
                                <td>LAX</td>
                                <td>草稿</td>

                                <td>
                                    <i class="fa fa-fw fa-trash-o" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update" title="编辑"></i>
                                    <router-link :to="{name:'bookingReturn'}">打回</router-link>

                                </td>
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

    <list-modal :rule-info="ruleInfo"></list-modal>
    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import listModal from './listBookingModal.vue'

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
        created:function(){
        }


    }

</script>