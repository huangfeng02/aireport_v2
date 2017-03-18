<template>


    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="departmentForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加部门</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="departmentKey" class="col-sm-3 control-label">部门编码</label>
                            <div class="col-sm-8">
                                <input type="text" v-model="departmentInfo.departmentKey" class="form-control" id="departmentKey" placeholder="部门编码">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="departmentName" class="col-sm-3 control-label">部门名称</label>
                            <div class="col-sm-8">
                                <input type="text" v-model="departmentInfo.departmentName" class="form-control" id="departmentName" placeholder="部门名称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">上级部门</label>
                            <div class="col-sm-8">
                                <select class="form-control" v-model="departmentInfo.parentDepartmentkey">
                                    <option value="0">顶级部门</option>
                                    <option v-for="option in departmentNameLists" v-bind:value="option.departmentKey">
                                        {{ option.departmentName }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description" class="col-sm-3 control-label">部门描述</label>
                            <div class="col-sm-8">
                                <textarea class="form-control" v-model="departmentInfo.description" id="description" rows="3" placeholder="部门描述"></textarea>
                            </div>
                        </div>

                    </form>
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
                departmentKey:'',
                roleKey:''
            }
        },
        props:['departmentInfo','departmentNameLists'],
        methods: {
            submit: function (event) {
                this.$emit('submit', this.departmentInfo)
            },
            update:function(data){
                console.log('departmentInfo',this.departmentInfo)
                this.$emit('update', this.departmentInfo)
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.departmentInfo) {
                    _this.departmentInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })
            //console.log('roles',JSON.stringify(this.roles))

        }

    }
</script>