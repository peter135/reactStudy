import React from 'react';
import styles from './user.module.scss'

export default function User() {

     //============绘制图片
     const drawImage =()=> {
                let person_img = "https://n.sinaimg.cn/spider20220516/377/w600h577/20220516/ac52-78873d65b8aa52d6c02b25854d1ad12e.jpg"
                let code_img = "https://n.sinaimg.cn/spider20220516/377/w600h577/20220516/ac52-78873d65b8aa52d6c02b25854d1ad12e.jpg"
                
                //canvas必须设定确定的宽高,设置为图片大小
                let canvas = document.createElement('canvas')
        
                let ctx = canvas.getContext("2d")
                ctx.mozImageSmoothingEnabled = false;
                ctx.webkitImageSmoothingEnabled = false;
                ctx.msImageSmoothingEnabled = false;
                ctx.imageSmoothingEnabled = false;
        
                loadImg([
                    person_img,
                    code_img,
                ]).then(([img1, img2])=> {
                    console.log('img1',img1.width,img1.height)
                    console.log('img2',img2.width,img2.height)
        
                    const dpr = window.devicePixelRatio || 1;
                    console.log('dpr',dpr)
                    let canvasWidth = 600 
                    const FontHeight = 60
                    const canvasHeightImg1 = canvasWidth/img1.width*img1.height
                    const canvasHeightImg2 = canvasWidth/img2.width*img2.height
                    let canvasHeight = FontHeight + canvasHeightImg1 + canvasHeightImg2
                    canvas.width = Math.round(canvasWidth*dpr)
                    canvas.height = Math.round(canvasHeight*dpr)
                    const { width, height } = canvas;
                    canvas.style.width = width + 'px';
                    canvas.style.height = height + 'px';
                    // 直接用 scale 放大整个坐标系，相对来说就是放大了每个绘制操作
                    ctx.scale(dpr, dpr);
                    console.log('canvas',canvasWidth, canvasHeight)
        
                    ctx.rect(0,0, canvasWidth, canvasHeight) //矩形坐标，大小 (距离左上角x坐标,距离左上角y坐标,宽度,高度)
                    ctx.fillStyle = "#fff"  //矩形的颜色
                    ctx.fill() //填充
        
                    const text = '这是藏品介绍这是藏品介绍这是藏品介绍这是藏品介绍这'
                    ctx.font = "bold 12px serif";
                    ctx.fillStyle ='#000';
                    ctx.fillText(text, 10, canvasHeightImg1+20);
        
                    ctx.drawImage(img1, 0, 0, canvasWidth, canvasHeightImg1)
                    ctx.drawImage(img2, 0, canvasHeightImg1 + FontHeight, canvasWidth, canvasHeightImg2)
        
                    const  imageURL = canvas.toDataURL("image/png")
                    // console.log('imageURL',imageURL)
                    saveAs(imageURL,'collection.png')
                    // let img3 = new Image()
                    // document.getElementsByClassName("box")[0].append(img3)
                    // img3.src = imageURL
                    // canvas.style.display = "none"
                });
     }
        
    const loadImg =(src)=> {
                const paths = Array.isArray(src) ? src : [src];
                const promise = [];
                 paths.forEach((path) => {
                     promise.push(new Promise((resolve, reject) => {
                         let img = new Image();
                            img.setAttribute("crossOrigin", 'anonymous');
                            img.src = path;
                         img.onload = () => {
                             resolve(img);
                         };
                         img.onerror = (err) => {
                             alert('图片加载失败')
                         }
                     }))
                 });
                 return Promise.all(promise);
     }
        
    const saveAs = (blob, fileName)=>{
                console.log('save as')
                var elem = document.createElement('a');
                elem.href = blob
                elem.download = fileName;
                 // 创建一个点击事件并对 a 标签进行触发
                const event = new MouseEvent('click');
                elem.dispatchEvent(event);
        
                // elem.style = 'display:none;';
                // (document.body || document.documentElement).appendChild(elem);
                // if (typeof elem.click === 'function') {
                //     elem.click();
                // } else {
                //     elem.target = '_blank';
                //     elem.dispatchEvent(new MouseEvent('click', {
                //     view: window,
                //     bubbles: true,
                //     cancelable: true
                //     }));
                // }
                // URL.revokeObjectURL(elem.href);
                // elem.remove()
     }
    
            
    const setRole = (role)=>{
        if(role){
            localStorage.setItem('role',role);
        }else {
            localStorage.removeItem('role');
        }

        drawImage()

    }

    return (
          <div className={styles.content}>
          <h1>Userpage</h1>
           <button type="submit" onClick={()=>setRole('user')}>user</button>
           <button type="submit" onClick={()=>setRole('admin')}>admin</button>
           <button type="submit" onClick={()=>setRole('')}>normal</button>

      </div>
    );


}