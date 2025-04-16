import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
            <Link to='/home' className="text-2xl font-bold">Farmacia</Link>

                    <div className='flex gap-4'>
                        Lista de Categorias
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        Cadastrar Categoria
                    </div>
                </div>
        </>
    )
}

export default Navbar