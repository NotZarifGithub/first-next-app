import Button from "@/src/components/common/Button"
import { menu } from "@/src/data"
import Link from "next/link"

const menuPage = () => {
  return (
    <section>
      <div className='p-6 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-128px)] flex flex-col md:flex-row justify-center items-center'>
        {menu.map(item => (
          <Link key={item.id} href={`/menu/${item.slug}`} className="w-full p-8 bg-cover h-1/3 md:h-1/2" style={{ backgroundImage: `url(${item.img})` }}> 
          
            {/* MAIN CONTENT */}
            
            <div className={`text-${item.color} w-1/2`}>
              <h1 className="text-3xl font-bold uppercase">
                {item.title}
              </h1>
              <p className="my-8 text-xs">
                {item.desc}
              </p>
              <div className={`hidden 2xl:block`}>
                <Button />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default menuPage