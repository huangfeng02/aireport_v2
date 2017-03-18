<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">新增报关</button>
        <button class="btn btn-sm btn-primary pull-right" type="button" style="margin-right: 20px;">费用申请</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">议价管理</a></li>
            <li class="active">询价&报价</li>
        </ol>
    </section>

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


                        <form class="form-horizontal" style="width: 98%">
                            <div class="box-body">
                                <div class="form-group">
                                    <label class="col-sm-1 control-label">业务类型</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="业务类型" type="text">
                                    </div>
                                    <label class="col-sm-1 control-label">客人名称</label>
                                    <div class="col-sm-2">
                                        <select class="form-control">
                                            <option>客人A</option>
                                            <option>客人B</option>
                                            <option>客人C</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 control-label">货物品名</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="货物品名" type="text">
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="checkbox pull-left">
                                            <label>
                                                <input type="checkbox">
                                                含磁性
                                            </label>
                                        </div>

                                        <div class="checkbox pull-left" style="margin: 0 10px;">
                                            <label>
                                                <input type="checkbox">
                                                含粉末
                                            </label>
                                        </div>
                                        <div class="checkbox pull-left">
                                            <label>
                                                <input type="checkbox">
                                                含电池
                                            </label>
                                        </div>
                                        <div class="checkbox pull-left" style="margin: 0 10px;">
                                            <label>
                                                <input type="checkbox">
                                                含危险品
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 control-label">件数</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="件数" type="text">
                                    </div>
                                    <label class="col-sm-1 control-label">重量(kg)</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="重量(kg)" type="text">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 control-label">方数(cbm)</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="方数(cbm)" type="text">
                                    </div>
                                    <label class="col-sm-1 control-label">货物密度</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="货物密度" type="text">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 control-label">尺寸(cm):</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="尺寸(cm)" type="text">
                                    </div>
                                    <label class="col-sm-1 control-label">始发地</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="始发地" type="text">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-1 control-label">目的地</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="目的地" type="text">
                                    </div>
                                    <label class="col-sm-1 control-label">送货日期</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="送货日期" type="text">
                                    </div>
                                    <label class="col-sm-2 control-label">Due Date:</label>
                                    <div class="col-sm-2">
                                        <input class="form-control"  placeholder="Due Date" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-info">保存</button>
                                <button type="submit" class="btn btn-info">查阅</button>
                            </div>
                        </form>

                        <div class="box-header with-border">
                            <h3 class="box-title">航线推荐和价格</h3>
                        </div>

                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>航空公司</th>
                                <th>航程</th>
                                <th>+100KG</th>
                                <th>+300KG</th>
                                <th>T/T</th>
                                <th>报价</th>
                                <th>分泡比例</th>
                                <th>主单抹泡</th>
                                <th>转运费</th>
                                <th>最低转运费</th>
                            </tr>
                            <tr>
                                <td><label><input type="checkbox">方案一</label></td>
                                <td>CA</td>
                                <td>9SZX--LAX</td>
                                <td>￥15.0</td>
                                <td>￥15.0</td>
                                <td>1.2</td>
                                <td>服装</td>
                                <td>CAN</td>
                                <td><input type="checkbox"></td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>

                            <tr>
                                <td><label><input type="checkbox">方案一</label></td>
                                <td>CA</td>
                                <td>9SZX--LAX</td>
                                <td>￥15.0</td>
                                <td>￥15.0</td>
                                <td>1.2</td>
                                <td>服装</td>
                                <td>CAN</td>
                                <td><input type="checkbox"></td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>

                            <tr>
                                <td><label><input type="checkbox">方案一</label></td>
                                <td>CA</td>
                                <td>9SZX--LAX</td>
                                <td>￥15.0</td>
                                <td>￥15.0</td>
                                <td>1.2</td>
                                <td>服装</td>
                                <td>CAN</td>
                                <td><input type="checkbox"></td>
                                <td>0.0</td>
                                <td>0.0</td>
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