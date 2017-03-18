<template>

    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">订单管理</a></li>
            <li class="active">订单详情/订单录入</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box">
                    <div class="box-body table-responsive no-padding">

                        <div class="box-header with-border">
                            <h3 class="box-title">关联报价单：报价单2016041801</h3>
                        </div>

                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <th>业务编号</th>
                                <th>客人名称</th>
                                <th>航空公司</th>
                                <th>头程日期</th>
                                <th>中文品名</th>
                                <th>是否含危险品</th>
                                <th>鉴定报告</th>
                            </tr>
                            <tr>
                                <td>70123211</td>
                                <td>客人A</td>
                                <td>CA</td>
                                <td>2016-05-02</td>
                                <td>电路板</td>
                                <td>否</td>
                                <td>是否含有磁性、液体、粉末、电池等</td>
                            </tr>
                            <tr>
                                <th>件数</th>
                                <th>重量</th>
                                <th>方数</th>
                                <th>出发地</th>
                                <th>目的地</th>
                                <th>货型</th>
                                <th>卡板尺寸</th>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>240KG</td>
                                <td>1</td>
                                <td>SZC</td>
                                <td>LAX</td>
                                <td>卡板</td>
                                <td>长/宽/高</td>
                            </tr>

                            <tr>
                                <th>报价</th>
                                <th>分泡比例</th>
                                <th>主单不打泡</th>
                                <th>送货日期</th>
                                <th>Due Date</th>
                                <th>货物密度</th>
                                <th>分单号</th>
                            </tr>

                            <tr>
                                <td>15.5</td>
                                <td>50%</td>
                                <td><input type="checkbox"></td>
                                <td>2016-05-01</td>
                                <td>2016-06-01</td>
                                <td>240：1</td>
                                <td>LWL-06052101</td>
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
                                <td><label><input type="checkbox">委托报关</label></td>
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
                                <td>提货费</td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>

                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>信息处理费</td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>

                                <td>海关舱单信息传输费</td>
                                <td><label class="pull-left">￥</label><input type="text" class="form-control" value="20" style="width: 200px;"></td>
                            </tr>

                            </tbody>
                        </table>


                        <div class="box-header with-border">
                            <h3 class="box-title">出口报关资料</h3>
                        </div>
                        <table class="table inputTable" style="width: 70%;">
                            <tbody>
                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 正本合同
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 正本报关委托书
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 正本装箱单
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 正本发票
                                        </label>
                                    </div>
                                </td>


                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 报关草单
                                        </label>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 手册表头表体（盖章）
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> ATA单证册
                                        </label>
                                    </div>
                                </td>
                                <td colspan="3">

                                </td>
                            </tr>
                            </tbody>
                        </table>


                        <div class="box-header with-border">
                            <h3 class="box-title">声明资料</h3>
                        </div>
                        <table class="table inputTable" style="width: 50%;">
                            <tbody>
                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> UN38.3认证
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 航空运输鉴定报告
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 非危声明
                                        </label>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                        </table>

                        <div class="box-header with-border">
                            <h3 class="box-title">随机资料
                            </h3>
                        </div>
                        <table class="table inputTable" style="width: 70%;">
                            <tbody>

                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 清关装箱单
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 清关发票
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 原产地证(CO
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> Form A
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> Form E
                                        </label>
                                    </div>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> ATA 单证册
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 熏蒸/消毒证明
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> 出口许可证
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> Test Report
                                        </label>
                                    </div>
                                </td>

                                <td>

                                </td>

                            </tr>

                            </tbody>
                        </table>


                        <div class="box-header with-border">
                            <h3 class="box-title">客人相关</h3>
                        </div>

                        <div class="box-header with-border" style="padding: 20px;">
                            <button type="submit" class="btn btn-primary">管理导入报价单</button>
                            <button type="submit" class="btn btn-primary" style="margin-right: 20px;margin-left: 20px;">编辑</button>
                            <button type="submit" class="btn btn-primary">保存</button>
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