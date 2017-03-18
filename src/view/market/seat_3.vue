<template>
    <div>
    <div class="box-header with-border clearfix">
        <button type="button"  class="btn btn-sm btn-warning" @click="delAll">删除</button>
        <button data-toggle="modal" data-target="#myModal3" class="btn btn-sm btn-primary pull-right" type="button">添加I</button>
    </div>

    <div class="row" style="margin-top: 10px;">

        <div class="col-xs-12">
            <div class="box">
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tbody>
                        <tr>
                            <th><input type="checkbox" v-model="checkedAll"></th>
                            <th>ID</th>
                            <th>航空公司</th>
                            <th>标题</th>
                            <th>描述</th>
                            <th>操作</th>
                        </tr>
                        <tr v-for="item in items">
                            <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                            <td>{{ item.id }}</td>
                            <td>{{ item.airCompany }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.content }}</td>
                            <td>
                                <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id,item.airCompany,item.title,item.content)" title="编辑"></i>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
            <!--分页-->
            <div id="pagination">
                <pag-nav :total="total" :display="display" :current="current" v-on:pagechange="pagechange"></pag-nav>
            </div>

        </div>
    </div>

    <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加航班动态</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航空公司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="flightInfomation.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">标题</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="flightInfomation.title" class="form-control" placeholder="标题">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">描述</label>
                                <div class="col-sm-8">
                                    <textarea class="form-control" v-model="flightInfomation.content" rows="3" placeholder="描述"></textarea>

                                </div>
                            </div>

                        </form>
                    </validator>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="submit3" id="btm-submit-3" class="btn btn-primary">提交</button>
                    <button style="display: none;" type="button" id="btm-update-3" @click="update3" class="btn btn-primary">修改</button>
                </div>
            </div>
        </div>
    </div>

    </div>

</template>

<script>
    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    var searchDate={
        pageNum:1,
        pageSize:10
    }
    export default {
        data:function(){
            return{
                items: [],
                checkedIds: [],
                total: 0,
                display: 10,
                current: 1,
                flightInfomation:{
                    id:'',
                    airCompany:'',
                    title:'',
                    content:''
                }
            }
        },
        components:{pagNav},
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
                this.current=p;
                this.list();
            },
            del: function (id) {
                var _this=this;
                $.ajax({
//                    url: '/airlogis/airlogis/market/deleteFlightInfomation?id=' + id,
                    url: '/airlogis/market/flightinfomation/deleteFlightInfomation?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.list()
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            delAll: function () {
                if(this.checkedIds.length==0){
                    util.alertMsgTip("至少选择一个")
                    return;
                }
                this.del(this.checkedIds)
            },
            findById: function (id,airlineCompany,departure,distination,airline,block) {

                this.airlineBlock.id=id
                this.airlineBlock.airlineCompany=airlineCompany
                this.airlineBlock.departure=departure
                this.airlineBlock.distination=distination
                this.airlineBlock.airline=airline
                this.airlineBlock.block=block
                $("#btm-submit-3").hide()
                $("#btm-update-3").show()
                $('#myModal3').modal('show')
            },
            update3:function(){
                var _this=this;
                var data = JSON.stringify(_this.flightInfomation);
                $.ajax({
                    url: '/airlogis/airlogis/airline/editAirlineBlock',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal3').modal('hide')
                        _this.list()
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })
            },
            submit3:function(){
                var _this=this;
                var data = JSON.stringify(this.flightInfomation);
                console.log(data)
                $.ajax({
//                    url: '/airlogis/airlogis/market/addFlightInfomation',
                    url: '/airlogis/market/flightinfomation/addFlightInfomation',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal3').modal('hide')
                        _this.list()
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })

            },
            list:function(){
                var _this=this;
                $.ajax({
//                    url: '/airlogis/airlogis/airline/listAirlineBlock',
                    url: '/airlogis/market/flightinfomation/listFlightInfomation',
                    data:searchDate,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        _this.items=xhr.data
                        _this.total=xhr.total
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })
            }

        },
        mounted:function(){
            var _this=this;
            $('#myModal3').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.flightInfomation) {
                    _this.flightInfomation[sProp]='';
                }
                $("#btm-submit-3").show()
                $("#btm-update-3").hide()
            })
           this.list();
        }
    }

</script>