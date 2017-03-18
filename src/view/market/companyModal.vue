<template>

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
                                    <input type="text" v-model="companyAttention.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航线</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="companyAttention.airline" class="form-control" placeholder="航线">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">是否可分泡</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value=false v-model="companyAttention.isVolumetric"> 否
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value=true v-model="companyAttention.isVolumetric"> 是
                                    </label>
                                    <input type="text" v-model="companyAttention.volumetricRatio" class="form-control" placeholder="分泡比例">%
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">尺寸限制</label>
                                <div class="col-sm-8">
                                    <textarea class="form-control" v-model="companyAttention.attention" rows="3" placeholder="尺寸限制"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">空运费计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="companyAttention.airFreight"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="companyAttention.airFreight"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="companyAttention.fuelSurcharge"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="companyAttention.fuelSurcharge"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="companyAttention.minFuelSurcharge" class="form-control" placeholder="燃油最低收费">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="companyAttention.securitySurcharge"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="companyAttention.securitySurcharge"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="companyAttention.minSecuritySurcharge" class="form-control" placeholder="战险最低收费">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">转运费计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="companyAttention.transitFee"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="companyAttention.transitFee"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">其它规则</label>
                                <div class="col-sm-8">
                                    <textarea class="form-control" v-model="companyAttention.otherRule" rows="3" placeholder="尺寸限制"></textarea>
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
        methods:{
            update:function(){
                this.$emit('update', this.companyAttention)
            },
            submit:function(){
                this.$emit('submit', this.companyAttention)
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.companyAttention) {
                    _this.companyAttention[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>