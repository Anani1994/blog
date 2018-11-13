let linkBall = {

};

linkBall.setLinkBall = (parmas ={}) => {
  let coordinateArr = [];
  // 焦距
  let radius = parmas.radius;
  // 储存各链接的空间位置
  let focalLength = parmas.focalLength;
  // 球
  let ball = document.querySelector('.link-ball');
  // 球心：(ball.width/2,ball.height/2)
  let ballCenterX = ball.offsetWidth/2;
  let ballCenterY = ball.offsetHeight/2;
  // getBoundingClientRect() 返回元素的大小及其相对于视口的位置
  let viewportX = ball.getBoundingClientRect().left + ballCenterX;
  let viewportY = ball.getBoundingClientRect().top + ballCenterY;
  // 所有链接元素
  let linkes = document.querySelectorAll('.link-ball a');
  // 创建一个文档片段保存排序后的结构
  let temp = linkBall.randomSort(linkes);
  // 将文档片段附加到DOM树
  // createDocumentFragment() 创建一个新的空白的文档片段
  // 文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流
  let docFrag = document.createDocumentFragment();
  for(let i = 0; i < temp.length; i++) {
    docFrag.appendChild( temp[i] );
  };
  ball.appendChild(docFrag);
  // 设置平均坐标
  linkBall.randomCoordinate(ball,linkes,radius,focalLength,coordinateArr);
  // 根据鼠标位置动态设置各链接的最新空间位置
  linkBall.addMousemove(coordinateArr,linkes,radius,ballCenterX,ballCenterY,focalLength,viewportX,viewportY);
}

// 随机排序
linkBall.randomSort = (arr) => {
  let temp = [];
  for(let i = 0; i < arr.length; i++) {
    temp.push( arr[i] );
  }
  temp.sort(function(){
    return Math.random() < 0.5 ? 1 : -1;
  });
  return temp;
};

linkBall.randomCoordinate = (ball,linkes,radius,focalLength,coordinateArr) => {
  for(let i = 1; i < linkes.length + 1; i++) {
    //生成随机 θ
    let theta = Math.acos((2*i-1)/linkes.length -1);
    // 生成对应的 Φ
    let phi = theta * Math.sqrt(linkes.length * Math.PI);
    // 坐标转换
    let x = radius * Math.sin(theta) * Math.cos(phi);
    let y = radius * Math.sin(theta) * Math.sin(phi);
    let z = radius * Math.cos(theta);
    let newObj = linkBall.creatObj(linkes[i-1],x,y,z);
    coordinateArr.push(newObj);
    // 生成随机颜色
    // linkes[i-1].style.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    // 设置坐标
    linkes[i-1].style.left = x + ball.offsetWidth / 2 - linkes[i-1].offsetWidth/2 + "px";
    linkes[i-1].style.top = y + ball.offsetHeight / 2 - linkes[i-1].offsetHeight/2 + "px";
    // 根据 z 形成一递增函数来设置透明度
    let alpha = (z + radius) / (2 * radius);
    linkes[i-1].style.opacity = alpha + 0.5;
    // 根据 z 形成一递增函数来设置
    let scale = focalLength / (focalLength - z);
    linkes[i-1].style.fontSize = 14 * scale + "px";
    linkes[i-1].style.zIndex = parseInt(scale * 100);
  }
};

linkBall.addMousemove = (coordinateArr,linkes,radius,ballCenterX,ballCenterY,focalLength,viewportX,viewportY) => {
  let ele = document.querySelector('.link-ball-container');
  ele.addEventListener('mousemove',function(event) {
    let eve = window.enent || event;
    // if (eve.target.nodeName !== 'SECTION') {
    //    return;
    // }
    if(event.target === this) {
      let x = eve.clientX - viewportX;
      let y = eve.clientY - viewportY;
      let angleX = 0.00005 * x;
      let angleY = 0.0001 * y;
      linkBall.rotateX(angleX,coordinateArr);
      linkBall.rotateY(angleY,coordinateArr);
      coordinateArr.forEach(function(currVal) {
        let scale = focalLength/(focalLength - currVal.z);
        let alpha = (currVal.z + radius)/(2 * radius);
        currVal.ele.style.fontSize = 15 * scale + "px";
        currVal.ele.style.opacity = alpha + 0.5;
        currVal.ele.style.zIndex = parseInt(scale*100);
        currVal.ele.style.left = currVal.x + ballCenterX - currVal.ele.offsetWidth/2 +"px";
        currVal.ele.style.top = currVal.y + ballCenterY - currVal.ele.offsetHeight/2 +"px";
      });
    };
  });
};

// 创建一个对象用来保存各链接的空间坐标，用于后期实现滚动
linkBall.creatObj = (ele,x,y,z) => {
  return {
    ele : ele,
    x : x,
    y : y,
    z : z,
  }
};

// 绕x轴旋转
// y = ycosθ - zsinθ;
// z = ysinθ + zcosθ;
linkBall.rotateX = (angleX,arr) => {
  let newY;
  let newZ;
  // let  角度的正负值控制旋转方向，大小控制旋转速度
  let cos = Math.cos(angleX);
  let sin = Math.sin(angleX);
  arr.forEach(function(currVal) {
    newY = currVal.y * cos - currVal.z * sin;
    newZ = currVal.z * cos + currVal.y * sin;
    currVal.y = newY;
    currVal.z = newZ;
  });
};

// 绕y轴旋转
// x = xcosθ - zsinθ;
// z = xsinθ + zcosθ;
linkBall.rotateY = (angleY,arr) => {
  let newX;
  let newZ;
  // angleY 角度的正负值控制旋转方向，大小控制旋转速度
  let cos = Math.cos(angleY);
  let sin = Math.sin(angleY);
  arr.forEach(function(currVal) {
    newX = currVal.x * cos - currVal.z * sin;
    newZ = currVal.z * cos + currVal.x * sin;
    currVal.x = newX;
    currVal.z = newZ;
  });
};

export default linkBall;
