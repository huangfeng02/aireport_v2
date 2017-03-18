<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">市场管理</a></li>
            <li class="active">航司转运价格录入</li>
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
                                <th>航空公司</th>
                                <th>始发港</th>
                                <th>转运港</th>
                                <th>目的港</th>
                                <th>价格</th>
                                <th>最低价格</th>

                                <th width="70">操作</th>
                            </tr>

                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.airCompany }}</td>
                                <td>{{ item.departure }}</td>
                                <td>{{ item.transitPort }}</td>
                                <td>{{ item.destination }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.minPrice }}</td>
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


    <transit-modal :company-attention="transitPrice"></transit-modal>

    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import transitModal from './transitModal.vue'
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
                transitPrice:{
                    id:'',
                    airCompany:'',
                    departure:'',
                    transitPort:'',
                    destination:'',
                    price:'',
                    minPrice:''
                }
            }
        },
        events: {

        },
        computed: {
            checkedAll: {
                get: function () {
                    /* if (this.checkedIds.length > 0) {
                     $("#btn-delAll").show()
                     } else {
                     $("#btn-delAll").hide()
                     }*/
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
        components:{pagNav,transitModal},
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
//                    url: '/airlogis/airlogis/market/addAirCompanyAttention',
                    url: '/airlogis/market/transitprice/addTransitPrice',
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
               /* this.transitPrice.id=id;
                this.transitPrice.airCompany=airCompany;
                this.transitPrice.volumetricRatio=volumetricRatio;
                this.transitPrice.boradAndEq=boradAndEq;
                this.transitPrice.bulkCargo=bulkCargo;*/
                $("#btm-submit").hide()
                $("#btm-update").show()
                $('#myModal').modal('show')
            },
            list:function(){
                var _this=this;
                $.ajax({
//                    url: '/airlogis/airlogis/market/listAirCompanyAttention',
                    url: '/airlogis/market/transitprice/listTransitPrice',
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
            this.list()
        }
    }

</script>