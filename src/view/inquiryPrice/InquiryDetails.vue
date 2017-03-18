<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">议价管理</a></li>
            <li class="active">报价表编辑</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box">
                    <div class="box-body table-responsive no-padding">

                        <div class="box-header with-border">
                            <h3 class="box-title">询价信息</h3>
                        </div>

                        <table class="table">
                            <tbody>
                            <tr>
                                <th>顾客名称</th>
                                <th>货物品名</th>
                                <th>件数</th>
                                <th>重量</th>
                                <th>方数</th>
                                <th>始发地</th>
                                <th>目的地</th>
                                <th>交货日期</th>
                            </tr>
                            <tr>
                                <td><input type="text" class="form-control" value="客人A"></td>
                                <td><input type="text" class="form-control" value="电路板"></td>
                                <td><input type="text" class="form-control" value="2"></td>
                                <td><input type="text" class="form-control" value="240"></td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td><input type="text" class="form-control" value="深圳"></td>
                                <td><input type="text" class="form-control" value="LAX"></td>
                                <td><input type="text" class="form-control" value="2016.05.05"></td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="box-header with-border">
                            <h3 class="box-title">方案和费用</h3>
                        </div>

                        <table class="table inputTable">
                            <tbody>
                            <tr>
                                <th>序号</th>
                                <th>航空公司</th>
                                <th>出发地</th>
                                <th>转运点</th>
                                <th>目的地</th>
                                <th>+100KG</th>
                                <th>+300KG</th>
                                <th>T/T</th>
                                <th>报价</th>
                                <th>分泡比例</th>
                                <th>主单抹泡</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><input type="text" class="form-control" disabled value="CA"></td>
                                <td><input type="text" class="form-control" disabled value="SZX"></td>
                                <td><input type="text" class="form-control" disabled value="HUNAN"></td>
                                <td><input type="text" class="form-control" disabled value="LAX"></td>
                                <td><input type="text" class="form-control" disabled value="￥1.2"></td>
                                <td><input type="text" class="form-control" disabled value="￥1.2"></td>
                                <td><input type="text" class="form-control" value="1-2"></td>
                                <td><input type="text" class="form-control" value="￥5.2"></td>
                                <td>
                                    <select class="form-control">
                                        <option>不分泡</option>
                                        <option>50%</option>
                                        <option>100%</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="checkbox">
                                </td>
                                <td><a href="#">删除</a></td>

                            </tr>

                            <tr>
                                <td>2</td>
                                <td><input type="text" class="form-control" disabled value="CA"></td>
                                <td><input type="text" class="form-control" disabled value="SZX"></td>
                                <td><input type="text" class="form-control" disabled value="HUNAN"></td>
                                <td><input type="text" class="form-control" disabled value="LAX"></td>
                                <td><input type="text" class="form-control" disabled value="￥1.2"></td>
                                <td><input type="text" class="form-control" disabled value="￥1.2"></td>
                                <td><input type="text" class="form-control" value="1-2"></td>
                                <td><input type="text" class="form-control" value="￥5.2"></td>
                                <td>
                                    <select class="form-control">
                                        <option>不分泡</option>
                                        <option>50%</option>
                                        <option>100%</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="checkbox">
                                </td>
                                <td><a href="#">删除</a></td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="box-header with-border">
                            <h3 class="box-title pull-left">理货服务</h3><span style="float: left;font-size: 12px;margin-left: 10px;">默认空运费含理货费</span>
                        </div>

                        <div style="padding-left: 20px;">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"> 自理货
                                </label>
                            </div>
                        </div>

                        <div class="box-header with-border">
                            <h3 class="box-title">报关服务</h3>
                        </div>

                        <table class="table inputTable">
                            <tbody>

                            <tr>
                                <td>总单证数</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>自报关</td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td><label><input type="checkbox">封关车</label></td>
                                <td><label><input type="checkbox">快件报关</label></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td><label><input type="checkbox">封关车</label></td>
                                <td><a href="#">报关费用快速查询</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>一般贸易</td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td>电子账册</td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td>正常买单报关</td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td>特殊买单报关</td>
                                <td><input type="text" class="form-control" value="1"></td>
                            </tr>

                            <tr>
                                <td>ATA单证：</td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td>转关</td>
                                <td><input type="text" class="form-control" value="1"></td>
                                <td><label><input type="checkbox">快件报关</label></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            </tbody>
                        </table>

                        <div class="box-header with-border">
                            <h3 class="box-title">提货服务</h3>
                        </div>
                        <table class="table inputTable">
                            <tbody>
                            <tr>
                                <td>
                                    <select class="form-control">
                                        <option>自送</option>
                                        <option>提货服务</option>
                                        <option>快递送货</option>
                                    </select>
                                </td>
                                <td><a href="#">提货费用快递查询</a> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control">
                                    <option>普通车</option>
                                    <option>封关车</option>
                                    </select>
                                </td>
                                <td>
                                    <label class="pull-left">车型</label>
                                    <select class="form-control pull-left" style="width: 100px;margin-left: 10px;">
                                        <option>3T</option>
                                        <option>5T</option>
                                        <option>6T</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 是否带尾板
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <label class="pull-left">from</label>
                                    <select class="form-control pull-left" style="width: 100px;margin-left: 10px;">
                                        <option>广州</option>
                                        <option>东莞</option>
                                        <option>深圳</option>
                                    </select>
                                </td>
                                <td>
                                    <label class="pull-left">to</label>
                                    <select class="form-control pull-left" style="width: 100px;margin-left: 10px;">
                                        <option>山东</option>
                                        <option>武汉</option>
                                        <option>长沙</option>
                                    </select>
                                </td>

                                <td>
                                    <input type="text" class="form-control" placeholder="其他备注">
                                </td>

                            </tr>

                            </tbody>
                        </table>




                        <div class="box-header with-border">
                            <h3 class="box-title">其他费用（Local Fee）</h3>
                        </div>
                        <table class="table inputTable" style="width: 80%;">
                            <tbody>
                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 提单费
                                        </label>
                                    </div>
                                </td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 入闸费
                                        </label>
                                    </div>
                                </td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>
                            </tr>


                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 报关费
                                        </label>
                                    </div>
                                </td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 报关文件费
                                        </label>
                                    </div>
                                </td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>
                            </tr>

                            <tr>
                                <td colspan="4">最后修改时间：2016-06-02 10:24:15</td>
                            </tr>

                            <tr>
                                <td>目标邮箱</td>
                                <td>
                                    <input type="text" class="form-control" placeholder="目标邮箱">
                                </td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>抄送</td>
                                <td>
                                    <input type="text" class="form-control" placeholder="抄送">
                                </td>
                                <td colspan="2"></td>
                            </tr>

                            </tbody>
                        </table>

                        <div class="box-header with-border" style="padding: 20px;">
                            <button type="submit" class="btn btn-lg btn-primary" style="margin-right: 20px;">生成报价单pdf</button>
                            <button type="submit" class="btn btn-lg btn-primary">保存修改</button>
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
        }


    }

</script>