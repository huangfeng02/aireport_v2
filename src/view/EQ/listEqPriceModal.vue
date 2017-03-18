<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">规则录入</h4>
                </div>
                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">规则编号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.supplierId"  disabled class="form-control" placeholder="规则编号">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.company" class="form-control" placeholder="航司">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">周期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.nameEn" class="form-control" placeholder="周期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">生效日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.nameCh" class="form-control" placeholder="生效日期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">修改时间</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.department" class="form-control" placeholder="修改时间">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">修改人</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.title" class="form-control" placeholder="修改人">
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
        props:['info'],
        methods:{
            update:function(){
                this.$emit('update', this.info)

            },
            submit:function(){
                this.$emit('submit', this.info)
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.info) {
                    _this.info[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>