<<template>
  <div class="container">
        <div class="row">
            <div class="col-xs-5 col-xs-offset-1">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                    <h3 class = "panel-title"></h3>
                    </div>
                    <div class="panel-body">
                        <form @inquireMajor.prevent="InquireMajor">
                            <div class="form-group has-feedback " v-bind:class="[majorSuccessClass]">
                                <label for = "专业选择" class ="control-label sr-only">专业选择</label>
                                <input type = "专业选择" class ="form-control" @input="checkMajorValidation" id ="专业选择" placeholder = "专业名称" autofocus required></input>
                                <span v-bind:class="[majorIconClass]"></span>
                            </div>
                            <button class="btn btn-primary pull-middle " >查询</button>
                        </form>
                    </div>
                </div> <!-- end major panel-->
            </div><!--end major column-->
            <div class="col-xs-5 ">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                    <h3 class = "panel-title"></h3>
                    </div>
                    <div class="panel-body">
                        <form @inquireClass.prevent="InquireClass">
                            <div class="form-group has-feedback has-primary" >
                                <label for = "课程查询" class ="control-label sr-only">课程查询</label>
                                <input type = "课程查询" class ="form-control" id ="课程查询" placeholder = "课程查询" autofocus required></input>
                            </div>
                            <button class="btn btn-primary pull-middle">查询</button>
                        </form>
                    </div>
                </div> <!-- end panel-->
            </div><!--end column-->
        </div><!--end row-->
  </div>
</template>

<<script>
    export default {
        name: 'Major',
        data(){
            return {
                //Todo : local data here
                majorSuccessClass: '',
                majorIconClass:'',
            }
        },
        methods:{
            checkMajorValidation : function(){
                //Todo : check the major validation
            },
            InquireMajor : function(){
                //Todo : inquire for major information
            },
            InquireClass : function(){
                //Todo : inquire for class information
            },
        }
    }
</script>

<<style scoped>

</style>
