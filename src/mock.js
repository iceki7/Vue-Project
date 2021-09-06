const Mock = require('mockjs');

const Random=Mock.Random;

const testset=function(){
  return {
    success:true,
    questionList:[
      {

        kind:1,ask:'问题1',qid:111,
        option:{
          a:'123',
          b:'456',
          c:'789',
          d:'666'
        }
      },
      {
        kind:1,ask:'问题2',qid:222,
        option:{
          a:'1',
          b:'2',
          c:'3',
          d:'4'
        }
      }
    ],
    
  }
}
//for reg,login
const fakedata=function(){
    //let articles = [];
    //for (let i = 0; i < 1; i++) {

      return {
        success:true,
        token:'device',
        username:'icekii',
        msg:Random.csentence(5, 10),
        notifyPic: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        notifyType: Random.integer(1, 3), //随机生成1-3的Integer
        isTop: Random.integer(1, 2), //随机生成1-2的Integer
        createUser: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        createTime: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      }
      
    //}
   


}
const fakepost=function(){
  //let articles = [];
  //for (let i = 0; i < 1; i++) {

    return {
      success:true,
      msg:'ohhhh',
 
    }
    
  //}
 


}
Mock.mock('/quiz/getTest','post',testset);
Mock.mock('/forum/login', 'post', fakedata);
Mock.mock('/forum/register', 'post', fakedata);
Mock.mock('/forum/logout','post',fakedata);
Mock.mock('/forum/posts','post',fakepost);
Mock.mock('/quiz/judgeTest','post',fakedata);