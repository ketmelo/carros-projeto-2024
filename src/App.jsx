import React from 'react'
import iconSedans from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'

export default function App() {
  return (
    <main>
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icone dos carros sedan" />
          <h2 className="text-3xl">Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target='_blanck'>Ver Mais</a>

        </div>

        <div className='bg-green'>
          <img src={iconSuvs} alt="Icon dos carros SUVs" />
          <h2>SUVs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target='_blanck'>Ver Mais</a>
        </div>

        <div className='bg-dark-green'>
          <img src={iconLuxury} alt="Icon dos carros LUXURY" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target='_blanck'>Ver Mais</a>
        </div>


      </section>


    </main>
  )
}

