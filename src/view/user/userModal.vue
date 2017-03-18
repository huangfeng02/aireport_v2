<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addUserForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加用户</h4>
                </div>
                <div class="modal-body">

                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="jobNumber" class="col-sm-2 control-label">工号</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.jobNumber" class="form-control" id="jobNumber" placeholder="工号">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="userName" class="col-sm-2 control-label">用户名</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.userName" class="form-control" id="userName" placeholder="用户名">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">性别</label>
                            <div class="col-sm-10">
                                <select v-model="userInfo.gender" class="form-control">
                                    <option value="1">男</option>
                                    <option value="2">女</option>
                                    <option value="0">未知</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-2 control-label">邮箱</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.email" class="form-control" id="email" placeholder="邮箱">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="mobile" class="col-sm-2 control-label">手机</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.mobile" class="form-control" id="mobile" placeholder="手机">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="tel" class="col-sm-2 control-label">固话</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.tel" class="form-control" id="tel" placeholder="固话">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">生日</label>
                            <div class="col-sm-10">
                                <calendar :value="value" :format="format" :clear-button="clear" :placeholder="placeholder" >
                                </calendar>
                            </div>

                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">部门</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="userInfo.department">
                                    <option v-for="option in departments" v-bind:value="option.departmentKey">
                                        {{ option.departmentName }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">角色</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="userInfo.roleName">
                                    <option v-for="option in roles" v-bind:value="option.roleKey">
                                        {{ option.roleName }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">状态</label>
                            <div class="col-sm-10">
                                <label class="radio-inline">
                                    <input type="radio" value="0" v-model="userInfo.state"> 可用
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="2" v-model="userInfo.state"> 禁用
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="3" v-model="userInfo.state"> 已删除
                                </label>
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
    import calendar from "../../components/calendar.vue"
    console.log('aaaa',this.userInfo)
    export default {
        data:function(){
            return{
                departmentKey:'',
                roleKey:'',
                value: '',
                format: 'yyyy-MM-dd',
                clear: true,
                placeholder: '生日'
            }
        },
        components:{calendar},
        props:['departments','roles','userInfo'],
        watch:{
            'value': function (value) {
                this.value=value
            }
        },
        methods: {
            submit: function (event) {
                console.log(this.userInfo)
                this.$emit('submit', this.userInfo)
            },
            update:function(data) {
                this.$emit('update', this.userInfo)
            }
        },
        mounted:function(){
            this.departmentKey=this.userInfo.departmentKey;
            this.roleKey=this.userInfo.roleKey;
            this.value=this.userInfo.birthday;
            var _this=this;
            console.log(this.format,this.userInfo)
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.userInfo) {
                    _this.userInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })
            //console.log('roles',JSON.stringify(this.roles))

        }

    }
</script>