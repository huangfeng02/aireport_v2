<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">

        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">询价报价</a></li>
            <li class="active">询价提醒规则录入</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box form-horizontal">
                    <div class="box-header with-border">
                        <h3 class="box-title">超重货可能产生垫板费提醒</h3>
                    </div>
                    <div class="box-body">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" style="width: 130px; text-align: center">总重量/件数>=</label>
                            <div class="col-sm-2">
                                <input class="form-control" placeholder="" type="text">
                            </div>
                        </div>
                        <div class="form-group" style="width: 80%;padding-left: 20px;">
                            <label>提醒内容</label>
                            <textarea class="form-control" rows="3" placeholder="超重货可能产生垫板费，费用实报实销"></textarea>
                        </div>
                    </div>

                    <div class="box-header with-border">
                        <h3 class="box-title">主单抹泡提醒</h3>
                    </div>
                    <div class="box-body">
                        <div class="form-group">
                            <label class="col-sm-1 control-label">航司：</label>
                            <div class="col-sm-2">
                                <input class="form-control" placeholder="航司" type="text">
                            </div>

                            <label  class="col-sm-1 control-label">目的港：</label>
                            <div class="col-sm-2">
                                <input class="form-control" placeholder="目的港" type="text">
                            </div>
                        </div>
                        <div class="form-group" style="width: 80%;padding-left: 20px;">
                            <label>提醒内容</label>
                            <textarea class="form-control" rows="3" placeholder="超重货可能产生垫板费，费用实报实销"></textarea>
                        </div>
                    </div>

                    <div class="box-header with-border">
                        <h3 class="box-title">电子账册，手册代理授权事宜</h3>
                    </div>
                    <div class="box-body">
                        <div class="form-group">
                            <div class="col-sm-2">
                                <input type="file">
                            </div>
                        </div>

                    </div>

                    <div class="box-header with-border">
                        <h3 class="box-title">转关注意事项</h3>
                    </div>
                    <div class="box-body">
                        <div class="form-group">
                            <div class="col-sm-2">
                                <input type="file">
                            </div>
                        </div>

                    </div>

                    <div class="box-body">
                        <div class="form-group">
                            <button class="btn btn-sm btn-primary" type="button" style="margin-left: 20px;">提交</button>
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

        methods:{
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