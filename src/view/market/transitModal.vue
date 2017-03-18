<template>
    <div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">新增录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航空公司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="transitPrice.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">始发港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="transitPrice.departure" class="form-control" placeholder="始发港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">转运港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="transitPrice.transitPort" class="form-control" placeholder="转运港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="transitPrice.destination" class="form-control" placeholder="目的港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="transitPrice.price" class="form-control" placeholder="价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">最低价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="transitPrice.minPrice" class="form-control" placeholder="最低价格">
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




    <div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="importForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">批量导入</h4>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label for="exampleInputFile">选择文件</label>
                        <input type="file" id="exampleInputFile">
                        <p class="help-block">Example block-level help text here.</p>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="action_import" class="btn btn-primary">提交</button>
                </div>
            </div>
        </div>
    </div>
    </div>


</template>

<script>

    export default {
        data:function(){
            return{

            }
        },

        props:['transitPrice'],
        methods:{
            update:function(){
                this.$emit('update', this.transitPrice)
            },
            submit:function(){
                this.$emit('submit', this.transitPrice)
            },
            action_import: function () {
                var _this=this;
                $.ajax({
                    url: '/airlogis/market/transitprice/importTransitPrice',
                    contentType: "application/json",
                    type: "post",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#importModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
                
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.transitPrice) {
                    _this.transitPrice[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>