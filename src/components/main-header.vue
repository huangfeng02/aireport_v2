<template>
    <header class="main-header">

        <!-- Logo -->
        <a href="" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>LT</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">{{name}} | 管理中心</span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>


            <!-- Navbar Right Menu -->

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li><a href="#">总工作台</a></li>
                    <li><a href="#">我的询价处理</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">我的提货派送</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">我的订单</a></li>
                    <li class="dropdown user user-menu">
                        <a data-toggle="" class="" href="#">
                            <img alt="User Image" class="user-image" src="/static/image/head.jpg">
                            <span class="hidden-xs" @click="loginOut">退出</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">退出</a></li>
                            <li><a href="#">个人资料</a></li>
                            <li><a href="#">帐号管理</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </nav>
    </header>

</template>

<script>

    var topHeader={
        data:function(){
            return{
                name: "公司名称",
                age: "31"
            }
        },
        methods:{
            loginOut:function(){
                $.ajax({
                    url: '/airlogis/sys/sysuser/logout',
                    success: function (data) {
                        location.href='/airport/login.html'
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        alert(JSON.parse(xhr.responseText).message)
                    }
                })
            }

        },
        mounted:function(){
        }
    }

    module.exports=topHeader

</script>