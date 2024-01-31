import { items } from "../data"

const Main = () => {
  return (
    <section className='w-full flex justify-end items-end h-full bg-slate-300 flex-wrap flex-col'>
        {
            items.map((item,index) => {
                return (
                    <section key={index} className="flex flex-row gap-8 items-end">
                        <div key={item.id} className='w-1/3 h-1/3 bg-slate-500 text-white text-center p-4 m-4 rounded-lg self-start'>
                        <h1>{item.title}</h1>
                            {item.name}
                        </div>
                            <div key={item.id} className='w-1/3 h-1/3 bg-slate-500 text-white text-center p-4 m-4 rounded-lg'>
                            <h1>{item.title}</h1>
                            {item.name}
                        </div>
                    </section>
                    
                )
            })
        }
    </section>
  )
}

export default Main
