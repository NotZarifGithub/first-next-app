import { pizzas } from "@/src/data"
import Link from "next/link"
import Image from "next/image"
import Button from "@/src/components/common/Button"

const CategoryPage = () => {
  return (
    <section>
      <div className="flex flex-wrap text-red-500">
        {pizzas.map(item => (
          <Link 
            key={item.id}
            href={`/menu/${item.id}`}
            className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col  justify-between group:"          
          >

          {/* IMAGE CONTAINER */}

          <div className="relative h-[70%]">
            <Image 
              src={item.img}
              alt="image"
              className="object-contain object-center"
              fill
            />
          </div>

          {/* TEXT CONTAINER */}
          
          <div className="flex flex-row items-center justify-between p-5 text-2xl font-bold">
            <h1 className="uppercase">
              {item.title}
            </h1>
            <p className="group-hover:hidden ">
              ${item.price}
            </p>
            <div className="hidden group-hover:block">
              <Button />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryPage