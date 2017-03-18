<template>
    <div>

    <div class="box-header with-border clearfix">
        <button type="button"  class="btn btn-sm btn-warning" @click="delAll">删除</button>
        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加</button>
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
                            <th>IATA分区</th>
                            <th>IATA次区</th>
                            <th>航线</th>
                            <th>操作</th>
                        </tr>
                        <tr v-for="item in items">
                            <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                            <td>{{ item.id }}</td>
                            <td>{{ item.iataPartition }}</td>
                            <td>{{ item.iataSubregion }}</td>
                            <td>{{ item.airline }}</td>
                            <td>
                                <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id,item.iataPartition,item.iataSubregion,item.airline)" title="编辑"></i>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
            <!--分页-->
            <div id="pagination1">
                <pag-nav :total="total" :display="display" :current="current" v-on:pagechange="pagechange"></pag-nav>
            </div>


        </div>
    </div>




    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加IATA分区航线</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">

                            <div class="form-group">
                                <label class="col-sm-4 control-label">IATA分区</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="iataInfo.iataPartition" class="form-control" placeholder="IATA分区">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">IATA次区</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="iataInfo.iataSubregion" class="form-control" placeholder="IATA次区">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航线</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="iataInfo.airline" class="form-control" placeholder="航线">
                                </div>
                            </div>

                        </form>
                    </validator>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="submit" id="btm-submit" class="btn btn-primary">提交</button>
                    <button style="display: none;" type="button" id="btm-update" @click="update" class="btn btn-primary">修改</button>
                </div>
            </div>
        </div>
    </div>
    </div>


</template>

<script>
    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    export default {
        data:function(){
            return{
                items: "",
                checkedIds: [],
                total: 1,
                display: 3,
                current: 1,
                iataInfo:{
                    id:'',
                    iataPartition:'',
                    iataSubregion:'',
                    airline:''
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
                console.log(p,1)
                this.current=p;
                this.list();
            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/airlogis/airline/deleteIataAirline?id=' + id,
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
                    util.alertMsgTip("自少选择一个")
                    return;
                }
                this.del(this.checkedIds)
            },
            findById: function (id,iataPartition,iataSubregion,airline) {

                this.iataInfo.id=id
                this.iataInfo.iataPartition=iataPartition
                this.iataInfo.iataSubregion=iataSubregion
                this.iataInfo.airline=airline
                $("#btm-submit").hide()
                $("#btm-update").show()
                $('#myModal').modal('show')
            },
            update:function(){
                var _this=this;
                var data = JSON.stringify(_this.iataInfo);
                $.ajax({
                    url: '/airlogis/airlogis/airline/editIataAirline',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list()
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })
            },
            submit:function(){
                var _this=this;
                var data = JSON.stringify(this.iataInfo);
                console.log(data)
                $.ajax({
                    url: '/airlogis/airlogis/airline/addIataAirline',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
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
                    url: '/airlogis/airlogis/airline/listIataAirline?pageNum='+this.current+'&pageSize='+this.display,
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
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.iataInfo) {
                    _this.iataInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })
           this.list();
        }
    }

</script>