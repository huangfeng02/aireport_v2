<style type="text/css">
</style>
<template>

    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default" v-for="item in items">
            <div class="panel-heading" role="tab" v-bind:id="'heading' + $index">
                <h4 class="panel-title">
                    <a data-toggle="collapse" class="center-block" data-parent="#accordion" v-bind:href="'#collapse' + $index" aria-expanded="true" aria-controls="collapse{{ $index }}">
                        {{item.menuName}}
                    </a>
                </h4>
            </div>
            <div id="collapse{{ $index }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{ $index }}">
                <div class="panel-body">
                    <div class="form-group">
                        <div class="checkbox" v-for="sub in item.subMenu">
                            <label>
                                <input type="checkbox" v-model="menuCodes" value="{{sub.menuCode}}">
                                {{sub.menuName}}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    var listData=""
    $.ajax({
        url: '/airlogis/sys/authority/getMenuTree?menuCode=0',
        async: false,
        success: function (data) {
            listData=data.data;
        },
        error:function(xhr,textStatus,errorThrown){

        }
    })
   /* export default {
        data () {
        return {
            msg: 'Hello from Component A!'
        }
    }
    }*/
    var slideBar={
        data:function(){
            return{
                items:listData,
                menuCodes:[],
                parentMenuCode:""
            }
        },
        props: ['selectMenuCodes']
    }
    module.exports=slideBar;
</script>