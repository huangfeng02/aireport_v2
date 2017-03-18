<template>
    <div class="wrapper">
        <!-- Main Header -->
        <header class="main-header" id="main-header">
            <main_header></main_header>
        </header>
        <aside class="main-sidebar" id="main-sidebar">
            <sidebar></sidebar>
        </aside>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <footer class="main-footer">
            Copyright &copy; 2016 <a href="#">aireport</a>. All rights reserved.
        </footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    var sidebar =require("../components/sidebar.vue");
    var main_header =require("../components/main-header.vue");
    module.exports={
        data:function(){
            return{
            }
        },
        components: {sidebar,main_header}
    }

</script>