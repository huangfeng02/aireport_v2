<template>
    <div>
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加空港</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">航线管理</a></li>
            <li class="active">班期管理</li>
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

                    <div class="box-header with-border">
                        <button type="button" id="btn-delAll" class="btn btn-sm btn-warning" v-on:click="delAll">删除</button>

                        <div class="box-tools">
                            <div style="width: 250px;margin-top: 5px;" class="input-group input-group-sm">
                                <input type="text" placeholder="机场名称,三字代码,州名称" class="form-control pull-right" name="table_search">

                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <!-- /.box-tools -->
                    </div>


                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>空港ID</th>
                                <th>航司</th>
                                <th>始发地</th>
                                <th>目的地</th>
                                <th>航班号</th>
                                <th>起飞时刻</th>
                                <th>到达时刻</th>
                                <th>机型</th>
                                <th>班期</th>
                                <th>开始日期</th>
                                <th>截止日期</th>
                                <th width="70">操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.id }}</td>
                                <td>{{ item.airlineCompany }}</td>
                                <td>{{ item.departure }}</td>
                                <td>{{ item.destination }}</td>
                                <td>{{ item.flightNo }}</td>
                                <td>{{ item.departureTime}}</td>
                                <td>{{ item.arrivalTime }}</td>
                                <td>{{ item.aircraftModel }}</td>
                                <td>{{ item.schedule }}</td>
                                <td>{{ item.startTime|reverse(3) }}</td>
                                <td>{{ item.endTime|reverse(3)}}</td>
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



    <schedule-modal v-on:update="update" v-on:submit="submit" :schedule-info="scheduleInfo"></schedule-modal>

    <schedule-modal-import></schedule-modal-import>
    </div>
</template>

<script>

    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import scheduleModal from './scheduleModal.vue'
    import scheduleModalImport from './scheduleModalImport.vue'

    var searchDate={
        pageNum:1,
        pageSize:10
    }

    export default {
        data:function(){
            return{
                items: "",
                checkedIds: [],
                total: 0,
                display: searchDate.pageSize,
                current: 1,
                scheduleInfo:''
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
        components:{pagNav,scheduleModal,scheduleModalImport},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.listAirport(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/airlogis/airline/editFlightSchedule',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate)
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })
            },
            submit:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/airlogis/airline/addFlightSchedule',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate)
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
                    url: '/airlogis/airlogis/airline/deleteFlightSchedule?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.list(searchDate)
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
                    url: '/airlogis/airlogis/airline/loadFlightSchedule?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        _this.scheduleInfo=xhr.data;

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
                    url: '/airlogis/airlogis/airline/listFlightSchedule',
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
            }

        },
        created: function(){
            this.list()
        }
    }

</script>