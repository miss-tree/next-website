"use client"
import { useState,useEffect  } from "react"

export default function Page( props: Object) {
  // 获取路径参数
  console.log("router======",props);
  const [count,setCount] = useState(0)
  useEffect(()=>{
    
  },[count])
  return (
    <div className="">
    <div onClick={()=>setCount(count+1)}>
    setting count {count}
    </div>
     hello,setting
    </div>
  );
}