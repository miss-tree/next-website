/* !
 * @Author: miss-tree
 * @Date: 2024-10-11 20:43:38
 */
"use client"
import { useRouter } from "next/navigation";
import React from "react"

export default function Modal() {
	console.log('22222');
	const router = useRouter()
	return (<div className="size-full bg-slate-400 opacity-70 fixed z-10 top-0 text-center leading-[100px] text-white font-bold"
	onClick={()=>router.back()}>
		modal
	</div>)
}
