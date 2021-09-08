<script>

//全局变量，可自动更新
let token = sessionStorage.getItem("token");
let username = sessionStorage.getItem("username");
let testIds=sessionStorage.getItem("testIds");//试卷的题目编号序列
let category=1
export default{username,token,testIds,category};
</script>
