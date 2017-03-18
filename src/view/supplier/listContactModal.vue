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
                                <label class="col-sm-4 control-label">供应商ID</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.supplierId"  disabled class="form-control" placeholder="供应商ID">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">公司名称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.company" class="form-control" placeholder="公司名称">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">英文名称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.nameEn" class="form-control" placeholder="英文名称">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">中文名称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.nameCh" class="form-control" placeholder="中文名称">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">部门</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.department" class="form-control" placeholder="部门">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">职位</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.title" class="form-control" placeholder="职位">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">电子邮箱</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.email" class="form-control" placeholder="电子邮箱">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">电话号码</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.tel" class="form-control" placeholder="电话号码">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">传真</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.fax" class="form-control" placeholder="传真">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">备注</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="contactInfo.remark" class="form-control" placeholder="备注">
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
        props:['contactInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.contactInfo)

            },
            submit:function(){
                this.$emit('submit', this.contactInfo)
            }
        },
        mounted:function(){
            console.log(this.contactInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.contactInfo) {
                    _this.contactInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>