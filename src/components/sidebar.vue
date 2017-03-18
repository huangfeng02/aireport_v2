<template>
    <aside class="main-sidebar">
         <section class="sidebar">
             <ul class="sidebar-menu">
                 <li class="treeview" v-for="item in items">
                     <a href="javascript:;"><span>{{item.menuName}}</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-down pull-right"></i>
                 </span>
                     </a>
                     <ul class="treeview-menu">
                         <li v-for="sub in item.subMenu"><a v-bind:href="sub.dataUrl"><i class="fa fa-genderless"></i>{{sub.menuName}}</a></li>
                     </ul>
                 </li>
             </ul>
         </section>
    </aside>
</template>

<script>
    var slideBar={
        data:function(){
            return{
                items:""
            }
        },
        mounted:function(){
            var self=this;
            $.ajax({
                url: '/airlogis/sys/authority/getMenuTree?menuCode=0',
                success: function (data) {
                    //self.items=data.data;
                    var data=JSON.parse(data);
                    self.items=data.data;
                },
                error:function(xhr,textStatus,errorThrown){

                }
            })
        }
    }
    module.exports=slideBar;

</script>