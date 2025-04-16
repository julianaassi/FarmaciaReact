import ListaCategoria from "../../components/categoria/listacategoria/ListaCategoria";


function Home() {
  return (
    <>

      <div className="bg-indigo-400 w-full py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-8">
          <div className="text-white text-center md:text-left space-y-6">
            <h2 className="text-5xl font-bold">FarmaGen</h2>
            <p className="text-xl">
              Se até seu deploy precisa de saúde, imagina você
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <section className="w-full px-8 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Categorias Disponíveis
        </h2>
        <ListaCategoria />
      </section>
    </>
  );
}

export default Home;
