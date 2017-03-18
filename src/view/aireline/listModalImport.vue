<template>
    <div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="importForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">批量导入</h4>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label for="exampleInputFile">选择文件</label>
                        <input type="file" id="exampleInputFile">
                        <p class="help-block">Example block-level help text here.</p>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="action_import" class="btn btn-primary">提交</button>
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
        //props:['airportInfo'],
        methods:{
            action_import:function(){
                this.$emit('import')
            }
        },
        ready:function(){


        }


    }
</script>