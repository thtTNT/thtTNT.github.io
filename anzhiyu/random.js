var posts=["2025/09/30/1-性价比超高的串串自助/","2025/10/01/2-10分钟打造自己的个人财务系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };