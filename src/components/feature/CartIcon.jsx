import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
	return (
		<section>
			<Link
				href={"/orders"}
				className='flex gap-1 items-center' 
			>
				<div className='relative w-7 h-7 flex'>
					<Image 
						src="/cart.svg" fill
					/>
				</div>
				<span>Cart (3)</span>
			</Link>
		</section>
	)
}

export default CartIcon