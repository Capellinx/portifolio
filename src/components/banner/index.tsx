
import Image  from 'next/image'
import myImage from '../../../public/me.svg'

export default function Banner() {
   return (
      <section>
         <div>
            <p>Olá, eu sou</p>
            <h1>Lucas Capella</h1>
            <span>Desenvolvedor Full Stack & UI Designer.</span>
            <button>Linkedin</button>
         </div>
         <div>
            <Image src={myImage} alt='Imagem de perfil' width={200} height={200}/>
         </div>
      </section>
   )
}