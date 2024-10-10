// import {useRouter} from 'next/router' //引入钩子函数


export default function Page({ params }: { params: { slug: string } }) {
	return <div>My Post: {params.slug}</div>
}
// export default function Page() {
// 	const router = useRouter() //使用钩子函数

// 	return (
// 		<>
// 			<div>About Project. The id is: {router.query.id} //获取动态路由参数</div>
// 		</>
// 	)
// }
