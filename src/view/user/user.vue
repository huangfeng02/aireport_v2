<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加用户</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">系统管理</a></li>
            <li class="active">用户管理</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box" id="userList">
                    <div class="box-header with-border clearfix">
                        <button type="button"  class="btn btn-sm btn-warning" v-on:click="delAll">删除</button>
                    </div>

                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th><input type="checkbox" v-model="checkedAll"></th>
                                <th>用户名</th>
                                <th>工号</th>
                                <th>性别</th>
                                <th>邮箱</th>
                                <th>手机</th>
                                <th>固话</th>
                                <th>部门</th>
                                <th>角色</th>
                                <th>状态</th>
                                <th width="70">操作</th>
                            </tr>
                            <tr v-for="item in items">
                                <td><input type="checkbox" :value="item.id" v-model="checkedIds"></td>
                                <td>{{ item.userName }}</td>
                                <td>{{ item.jobNumber }}</td>
                                <td v-if="item.sex==1">男</td>
                                <td v-else-if="item.sex==2">女</td>
                                <td v-else>未知</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.mobile }}</td>
                                <td>{{ item.tel }}</td>
                                <td>{{ item.department }}</td>
                                <td>{{ item.roleName }}</td>
                                <td>{{ item.state }}</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id)" title="编辑"></i>
                                    <!--
                                                                            <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="update(item.id,item.userName,item.jobNumber,item.gender,item.email,item.mobile,item.tel,item.birthday,item.department,item.roleName,item.state)" title="编辑"></i>
                                    -->
                                </td>
                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <!--分页-->
                <div id="pagination">
                    <pag-nav :total="total" :display="display" :current="current" v-on:pagechange="pagechange"></pag-nav>
                </div>

            </div>

        </div>


    </section>

    <!-- Modal -->
    <user-modal v-on:update="update" v-on:submit="submit" :user-info="userInfo" :departments="departments" :roles="roles"></user-modal>
    </div>
</template>

<script>
    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import userModal from './userModal.vue'
    var searchDate={
        pageNum:1,
        pageSize:10
    }

    export default {
        data:function(){
            return{
                items: "",
                checkedIds: [],
                total: 0,
                display: searchDate.pageSize,
                current: 1,
                userInfo:'',
                departments:"",
                roles:''
            }
        },
        computed: {
            checkedAll: {
                get: function () {
                    /* if (this.checkedIds.length > 0) {
                     $("#btn-delAll").show()
                     } else {
                     $("#btn-delAll").hide()
                     }*/
                    return this.checkedCount == this.items.length;
                },
                set: function (value) {
                    if (value) {
                        this.checkedIds = this.items.map(function (item) {
                            return item.id
                        })
                    } else {
                        this.checkedIds = []
                    }
                }
            },
            checkedCount: {
                get: function () {
                    return this.checkedIds.length;
                }
            }
        },
        components:{pagNav,userModal},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.list(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/sys/sysuser/editUser',
                    contentType: "application/json",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            submit:function(data){
                console.log(data)
                var _this=this;
                 var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/sys/sysuser/addUser',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })

            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/sysuser/deleteUser?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            delAll: function () {
                if(this.checkedIds.length==0){
                    util.alertMsgTip("自少选择一个")
                    return;
                }
                this.del(this.checkedIds)
            },
            findById: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/sysuser/loadUser?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        _this.userInfo=xhr.data;
                        console.log(JSON.stringify(_this.userInfo))

                        $("#btm-submit").hide()
                        $("#btm-update").show()
                        $('#myModal').modal('show')

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })

            },
            list:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/sysuser/listUser',
                    data:searchDate,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.total = data.total;
                        _this.current = data.pageNum;
                        _this.items = data.data;
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            listDepartment:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/department/listDepartment?pageNum=1&pageSize=200',
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.departments = data.data;
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            listRole:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/role/listRole?pageNum=1&pageSize=200',
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.roles = data.data;
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            }
        },
        created : function(){
            this.list(searchDate)
            this.listRole()
            this.listDepartment()
            console.log('current',this.current)
            // document.title = "用户登入"

        }

    }

</script>