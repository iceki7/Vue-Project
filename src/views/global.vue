<script>

//全局变量，可自动更新
let token = sessionStorage.getItem("token");
let username = sessionStorage.getItem("username");
let testIds=sessionStorage.getItem("testIds");//试卷的题目编号序列

export default{username,token,testIds};
</script>
