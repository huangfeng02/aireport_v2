<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">合同录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">供应商ID</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.supplierId" disabled class="form-control" placeholder="供应商ID">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">合同编号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.contractNo" class="form-control" placeholder="合同编号">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">生效日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.effectiveDate" class="form-control" placeholder="生效日期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">截止日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.expiresDate" class="form-control" placeholder="截止日期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">付款期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.collectionPeriod" class="form-control" placeholder="付款期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">客户等级</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.level" class="form-control" placeholder="客户等级">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">结算方式</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contractInfo.settlementWay" class="form-control" placeholder="结算方式">
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
        props:['contractInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.contractInfo)

            },
            submit:function(){
                this.$emit('submit', this.contractInfo)
            }
        },
        mounted:function(){
            console.log(this.receiptInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.contractInfo) {
                    _this.contractInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>