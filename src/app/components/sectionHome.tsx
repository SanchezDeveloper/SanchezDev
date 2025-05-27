"use client"

export default function SectionHome () {
  return (
    <section className="flex flex-col items-center justify-between mt-16 w-full gap-4 h-[var(100vh)] ">
      <img src="/assets/logo-completa.png" alt="Logo completa da Sanchez Dev" className="w-80" />

      <div className="font-medium text-center text-2xl">
        <h1>Transformamos</h1>
        <h1>Suas Ideias em</h1>
        <h1 className="text-[var(--cor-dark-purple)]">Sites Incríveis</h1>
      </div>
      <img src="/assets/mockup-home.png" alt="tela de computador" className="w-3/4 my-4"/>

      <a href="#aboutUs" className="flex items-center justify-center w-60 h-14 text-center uppercase font-bold p-2 rounded-md text-[var(--cor-light-purple)] bg-[var(--cor-dark-purple)]"><p className="w-3/4">solicite um orçamento grátis</p></a>

      <div>
        <div className="flex flex-col w-full font-medium text-2xl gap-2 mt-4">
          <div className="flex items-center">
            <img src="/assets/raio.png" alt="raio" />
            <p className="decoration-dashed"><span className="text-[var(--cor-dark-purple)]">Sites</span> rápidos</p>
          </div>
          <hr className="w-16 mx-auto"/>
          <div className="flex items-center">
            <img src="/assets/raio.png" alt="raio" />
            <p className="text-[var(--cor-dark-purple)]">Design Exclusivo</p>
          </div>
          <hr className="w-16 mx-auto"/>
          <div className="flex items-center">
            <img src="/assets/raio.png" alt="raio" />
            <p><span className="text-[var(--cor-dark-purple)]">Sites</span> rápidos</p>
          </div>
          <hr className="w-16 mx-auto"/>
          <div className="flex items-center">
            <img src="/assets/raio.png" alt="raio" />
            <p><span className="text-[var(--cor-dark-purple)]">Sites</span> rápidos</p>
          </div>
          <hr className="w-16 mx-auto"/>
        </div>
      </div>
    </section>
  )
}