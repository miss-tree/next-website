"use client"
import { useState,useEffect  } from "react"

export default function Page() {
  // 获取路径参数
  const [count,setCount] = useState(0)
  useEffect(()=>{
    
  },[count])
  return (
    <div>
    <div className="">
    <div onClick={()=>setCount(count+1)}>
    setting count {count}
    </div>
     hello,setting
    </div>
    </div>
  );
}