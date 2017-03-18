<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">市场管理</a></li>
            <li class="active">表价加成规则</li>
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
                                <input type="text" placeholder="搜索" v-model="searchKey" class="form-control pull-right" name="table_search">
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
                                <th>加成规则</th>
                                <th>类别</th>
                                <th>航空公司</th>
                                <th>航线</th>
                                <th>目的港</th>
                                <th>最低价格增加幅度</th>
                                <th>小于45kg增加幅度</th>
                                <th>+45kg增加幅度</th>
                                <th>+100kg增加幅度</th>
                                <th>+300kg增加幅度</th>
                                <th>+500kg增加幅度</th>
                                <th>+1000kg增加幅度</th>
                                <th>+3000kg增加幅度</th>
                                <th>+5000kg增加幅度</th>
                                <th width="70">操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.category }}</td>
                                <td>{{ item.airCompany }}</td>
                                <td>{{ item.airline }}</td>
                                <td>{{ item.destination }}</td>
                                <td>{{ item.minPrice }}</td>
                                <td>{{ item.priceN }}</td>
                                <td>{{ item.price45 }}</td>
                                <td>{{ item.price100 }}</td>
                                <td>{{ item.price300 }}</td>
                                <td>{{ item.price500 }}</td>
                                <td>{{ item.price1000 }}</td>
                                <td>{{ item.price3000 }}</td>
                                <td>{{ item.price5000 }}</td>

                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id,item.airCompany,item.volumetricRatio,item.boradAndEq,item.bulkCargo)" title="编辑"></i>
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


    <price-rule-modal :price-rule="priceRule"></price-rule-modal>

    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import priceRuleModal from './priceRuleModal.vue'

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
                priceRule:''
            }
        },
        computed: {
            checkedAll: {
                get: function () {
                    /* if (this.checkedIds.length > 0) {
                     $("#btn-delAll").show()
                     } else {
                     $("#btn-delAll").hide()
                     }*/
                    if(this.items!=null){
                        return this.checkedCount == this.items.length
                    }
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
        components:{pagNav,priceRuleModal},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.list(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/airlogis/market/editAirCompanyAttention',
                    contentType: "application/json",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            submit:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/market/pricerule/addPriceRule',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })

            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/airlogis/market/deleteAirCompanyAttention?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.list(searchDate);
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
            findById: function (id,airCompany,volumetricRatio,boradAndEq,bulkCargo) {
                this.formulaInfo.id=id;
                this.formulaInfo.airCompany=airCompany;
                this.formulaInfo.volumetricRatio=volumetricRatio;
                this.formulaInfo.boradAndEq=boradAndEq;
                this.formulaInfo.bulkCargo=bulkCargo;
                $("#btm-submit").hide()
                $("#btm-update").show()
                $('#myModal').modal('show')
            },
            list:function(){
                var _this=this;
                $.ajax({
//                    url: '/airlogis/market/aircompanyattention/listAirCompanyAttention',
                    url: '/airlogis/market/pricerule/listPriceRule',
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
                this.listAirport()
            }

        },
        mounted: function(){
            this.list()
            // document.title = "用户登入"
        }
    }

</script>