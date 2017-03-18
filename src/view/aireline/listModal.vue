<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">空港录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">机场三字代码</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.airportCode" class="form-control" placeholder="机场三字代码">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">机场</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.nameCh" class="form-control" placeholder="机场">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">机场英文</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.nameEn" class="form-control" placeholder="机场英文">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">洲</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.stateCh" class="form-control" placeholder="洲">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">洲英文</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.stateEn" class="form-control" placeholder="洲英文">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">国家</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.countryCh" class="form-control" placeholder="国家">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">国家英文</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.countryEn" class="form-control" placeholder="国家英文">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">国家两字代码</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.countryCode" class="form-control" placeholder="国家两字代码">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">IATA分区</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.iataPartition" class="form-control" placeholder="IATA分区">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">IATA次区</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="airportInfo.iataSubregion" class="form-control" placeholder="IATA次区">
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
        props:['airportInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.airportInfo)

            },
            submit:function(){
                this.$emit('submit', this.airportInfo)
                console.log('this.airportInfo='+this.airportInfo)
                return;
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.airportInfo) {
                    _this.airportInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>