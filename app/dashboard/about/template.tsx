"use client"
import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
 const [count,setCount] = useState(0)
 return <div>
  <div onClick={()=>setCount(count+1)}>
   template count {count}
  </div>
  {children}
  </div>
}