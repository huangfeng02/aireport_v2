<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">开票信息录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">供应商ID</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="receiptInfo.supplierId" disabled class="form-control" placeholder="供应商ID">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">抬头</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="receiptInfo.title" class="form-control" placeholder="抬头">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">收件地址</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="receiptInfo.mailingAddress" class="form-control" placeholder="收件地址">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">联系人</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="receiptInfo.receiver" class="form-control" placeholder="联系人">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">联系电话</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="receiptInfo.tel" class="form-control" placeholder="联系电话">
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

</template>

<script>

    export default {
        data:function(){
            return{

            }
        },
        props:['receiptInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.receiptInfo)

            },
            submit:function(){
                this.$emit('submit', this.receiptInfo)
            }
        },
        mounted:function(){
            console.log(this.receiptInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.receiptInfo) {
                    _this.receiptInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>