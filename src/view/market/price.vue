<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">市场管理</a></li>
            <li class="active">价格列表</li>
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
                                <input type="text" placeholder="机场名称" v-model="searchKey" class="form-control pull-right" name="table_search">

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
                                <th>出发港</th>
                                <th>目的港</th>
                                <th>转运港</th>
                                <th>最低价格</th>
                                <th>小于45kg的价格</th>
                                <th>+45kg价格</th>
                                <th>+100kg价格</th>
                                <th>+300kg价格</th>
                                <th>+500kg价格</th>
                                <th>+1000kg价格</th>
                                <th>+3000kg价格</th>
                                <th>+5000kg价格</th>
                                <th>运价含燃油战险</th>
                                <th>生效日期</th>
                                <th width="70">操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.airCompany }}</td>
                                <td>{{ item.departure }}</td>
                                <td>{{ item.destination }}</td>
                                <td>{{ item.transitPort }}</td>
                                <td>{{ item.minPrice }}</td>
                                <td>{{ item.priceN }}</td>
                                <td>{{ item.price45 }}</td>
                                <td>{{ item.price100 }}</td>
                                <td>{{ item.price300 }}</td>
                                <td>{{ item.price500 }}</td>
                                <td>{{ item.price1000 }}</td>
                                <td>{{ item.price3000 }}</td>
                                <td>{{ item.price5000 }}</td>
                                <td>{{ item.fuelSurcharge }}</td>
                                <td>{{ item.effectiveDate }}</td>
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

    <price-modal :price-info="priceInfo"></price-modal>

    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import priceModal from './priceModal.vue'

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
                priceInfo:{}
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
        components:{pagNav,priceModal},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.list(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/airlogis/market/editAirport',
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
                    url: '/airlogis/market/agreementprice/addAgreementPrice',
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
            import:function(){
                $('#importModal').modal('hide')
            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/airlogis/airline/deleteAirport?id=' + id,
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
            findById: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/airlogis/airline/loadAirport?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        _this.priceInfo=xhr.data;

                        $("#btm-submit").hide()
                        $("#btm-update").show()
                        $('#myModal').modal('show')

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })

            },
            list:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/market/agreementprice/listAgreementPrice',
                    data:searchDate,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.total = data.total;
                        _this.current = data.pageNum;
                        if(data.data!=null){//如果是null 子组件的info会强制为空
                            console.log(JSON.stringify(data.data))
                            _this.items = data.data;
                        }
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
                this.list()
            }

        },
        route:{
            data: function(transition){
                this.list()
                // document.title = "用户登入"

            }
        }

    }

</script>