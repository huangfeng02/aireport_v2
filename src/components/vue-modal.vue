<template>
    <div>
        <div v-bind:id="cid" class="modal fade" v-bind:class="{'in':hideModal}" v-bind:style="{display: isPlay}">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" v-on:click="hide"><span>&times;</span></button>
                <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
                v-html="content"
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" v-on:click="hide">关闭</button>
                <button class="btn btn-primary" v-on:click="submit" type="button">提交</button>
            </div>
        </div>
        <div class="modal-backdrop fade" v-bind:class="{'in':hideModal}" v-show="hideModal"></div>
    </div>
</template>

<script>

    export default {
        data: function(){
            return {
           // hideModal: false,
           isPlay: 'none'
       }
   },
   props:['cid','title','content','hideModal'],
   methods: {

    hide: function(callback){
        var $this = this;
        $this.hideModal = false;
        setTimeout(function(){
            $this.isPlay = 'none';
        }, 100);
        if(typeof callback == 'function'){
            return callback();
        }
    },
    submit:function(callback){
        var $this = this;
        $this.hideModal = false;
        setTimeout(function(){
            $this.isPlay = 'none';
        }, 100);
        if(typeof callback == 'function'){
            return callback();
        }
    }
},
mounted: function(){
       /* var mParent = this.$parent;
        for(var o in mParent.vueModalOpt){
            this.options[o] = mParent.vueModalOpt[o]
        }
        mParent.showModal=this.show;
        mParent.hideModal=this.hide;*/
    }
}
</script>
