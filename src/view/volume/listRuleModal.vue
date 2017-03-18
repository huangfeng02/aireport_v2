<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">联系人录入</h4>
                </div>


                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">编号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="ruleInfo.supplierId"  disabled class="form-control" placeholder="编号">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="ruleInfo.company" class="form-control" placeholder="航司">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">开始时间</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="ruleInfo.nameEn" class="form-control" placeholder="开始时间">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">结束时间</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="ruleInfo.nameCh" class="form-control" placeholder="结束时间">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">考核货量/T</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="ruleInfo.department" class="form-control" placeholder="考核货量/T">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">超量返还单价 CNY/KG</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="ruleInfo.title" class="form-control" placeholder="超量返还单价 CNY/KG">
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
        props:['ruleInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.ruleInfo)

            },
            submit:function(){
                this.$emit('submit', this.ruleInfo)
            }
        },
        mounted:function(){
            console.log(this.statisticsInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.ruleInfo) {
                    _this.ruleInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>