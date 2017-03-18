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
                                    <input type="text" v-model="formulaInfo.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">分泡比例(C)</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="formulaInfo.volumetricRatio" class="form-control" placeholder="分泡比例">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">选择公式</label>
                                <div class="col-sm-8">
                                    <select class="form-control" v-model="formulaInfo.boradAndEq">
                                        <option value="0">T=X</option>
                                        <option value="1">T=J</option>
                                        <option value="2">T=X+P*C</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油附加费单价</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="formulaInfo.bulkCargo" class="form-control" placeholder="燃油附加费单价">
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

        props:['formulaInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.formulaInfo)
            },
            submit:function(){
                this.$emit('submit', this.formulaInfo)
            }
        },
        mounted:function(){
            console.log(typeof this.formulaInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.formulaInfo) {
                    _this.formulaInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>