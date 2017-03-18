<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;display: none" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加客户</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">客户资料管理</a></li>
            <li class="active">我的客户</li>
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
                                <th>简称</th>
                                <th>英文名称</th>
                                <th>中文名称</th>
                                <th>类型</th>
                                <th>地址</th>
                                <th>备注</th>
                                <th>简介</th>
                                <th>营业执照</th>
                                <th>状态</th>
                                <th>其他</th>
                                <th width="70">操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.shortName }}</td>
                                <td>{{ item.nameEn }}</td>
                                <td>{{ item.nameCh }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.address }}</td>
                                <td>{{ item.remark }}</td>
                                <td>{{ item.intro }}</td>
                                <td>{{ item.businessLicense }}</td>
                                <td>{{ item.status }}</td>
                                <td>
                                    <router-link :to="{name:'listContact',query:{supplierId:item.id}}">联系人</router-link>
                                    <router-link :to="{name:'listReceipt',query:{supplierId:item.id}}">开票信息</router-link>
                                    <router-link :to="{name:'listContract',query:{supplierId:item.id}}">合同列表</router-link>
                                </td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id)" title="编辑"></i>
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
    import listModal from './listSupplierModal.vue'

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
                supplierInfo:{
                    //id:'',
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
        components:{pagNav,listModal},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.listSupplier(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/crm/supplier/editSupplier',
                    contentType: "application/json",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.listSupplier(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            submit:function(data){
                var _this=this;
                data.status=parseInt(data.status)
                var data = JSON.stringify(data);
                console.log(data)
                $.ajax({
                    url: '/airlogis/crm/supplier/addSupplier',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.listSupplier(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })

            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/crm/supplier/deleteSupplier?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.listSupplier(searchDate);
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
                    url: '/airlogis/crm/supplier/loadSupplier?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        _this.supplierInfo=xhr.data;

                        $("#btm-submit").hide()
                        $("#btm-update").show()
                        $('#myModal').modal('show')

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })

            },
            listSupplier:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/crm/supplier/listSupplier',
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
                    "groupOp": "OR",
                    "rules": [{"field": "nameEn", "op": "lk", "data": searchKey}, {
                        "field": "nameCh",
                        "op": "lk",
                        "data": searchKey
                    }, {"field": "airportCode", "op": "lk", "data": searchKey}, {
                        "field": "stateEn",
                        "op": "lk",
                        "data": searchKey
                    }, {"field": "stateCh", "op": "lk", "data": searchKey}]
                }
                console.log(JSON.stringify(searchDate))
                this.listAirport()
            }

        },
        mounted: function(transition){
            this.listSupplier()

        }

    }

</script>