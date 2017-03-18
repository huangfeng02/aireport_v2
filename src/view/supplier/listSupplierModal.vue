<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">供应商录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">简称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.shortName" class="form-control" placeholder="简称">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">英文名称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.nameEn" class="form-control" placeholder="英文名称">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">中文名称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.nameCh" class="form-control" placeholder="中文名称">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">类型</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.type" class="form-control" placeholder="类型">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">地址</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.address" class="form-control" placeholder="地址">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">备注</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.remark" class="form-control" placeholder="备注">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">简介</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.intro" class="form-control" placeholder="简介">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">营业执照</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="supplierInfo.businessLicense" class="form-control" placeholder="营业执照">
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-sm-4 control-label">状态</label>
                                <div class="col-sm-8">
                                    <select class="form-control" v-model="supplierInfo.status">
                                        <option value="0">草稿</option>
                                        <option value="1">待完善</option>
                                        <option value="2">编辑中</option>
                                        <option value="3">审核通过</option>
                                        <option value="4">打回</option>
                                        <option value="5">停用</option>
                                    </select>
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
        props:['supplierInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.supplierInfo)

            },
            submit:function(){
                this.$emit('submit', this.supplierInfo)
            }
        },
        mounted:function(){
            console.log(this.supplierInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.supplierInfo) {
                    _this.supplierInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>