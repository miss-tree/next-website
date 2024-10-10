"use client"
import { useParams } from 'next/navigation';
import "app/globals.css"
// import { useRouter } from 'next/router';

export default function Page(props:Object) {
  console.log("router==?props",props);
  
  return (
    <div className="ml-[15px]">
     hello,订单详情
    </div>
  );
}
