<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加空港</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">航线管理</a></li>
            <li class="active">航线列表</li>
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
                                <input type="text" placeholder="机场名称,三字代码,州名称" v-model="searchKey" class="form-control pull-right" name="table_search">

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
                                <th>三字代码</th>
                                <th>机场</th>
                                <th>机场英文</th>
                                <th>州</th>
                                <th>州英文</th>
                                <th>国家</th>
                                <th>国家英文</th>
                                <th>国家两字代码</th>
                                <th>IATA分区</th>
                                <th>IATA次区</th>
                                <th width="70">操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.airportCode }}</td>
                                <td>{{ item.nameEn }}</td>
                                <td>{{ item.nameCh }}</td>
                                <td>{{ item.stateEn }}</td>
                                <td>{{ item.stateCh }}</td>
                                <td>{{ item.countryEn }}</td>
                                <td>{{ item.countryCh }}</td>
                                <td>{{ item.countryCode }}</td>
                                <td>{{ item.iataPartition }}</td>
                                <td>{{ item.iataSubregion }}</td>
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


    <list-modal v-on:update="update" v-on:submit="submit" :airport-info="airportInfo"></list-modal>
    <list-modal-import></list-modal-import>

    </div>

</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import listModal from './listModal.vue'
    import listModalImport from './listModalImport.vue'

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
                display: 10,
                current: 1,
                searchKey:'',
                airportInfo:''
            }
        },
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
        components:{pagNav,listModal,listModalImport},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.current=p;
                this.listAirport(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/airlogis/airline/editAirport',
                    contentType: "application/json",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.listAirport(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            submit:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/airlogis/airline/addAirport',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.listAirport(searchDate);
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
                        _this.listAirport(searchDate);
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
                        _this.airportInfo=xhr.data;

                        $("#btm-submit").hide()
                        $("#btm-update").show()
                        $('#myModal').modal('show')

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })

            },
            listAirport:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/airlogis/airline/listAirport',
                    data:searchDate,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.total = data.total;
                        //_this.current = data.pageNum;
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
        created: function(transition){
            this.listAirport()
        }
    }

</script>