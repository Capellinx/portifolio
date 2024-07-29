import { aboutMe } from "@/constants/texts";

export default function AboutMe() {
   return (
      <section>
         <h1>Sobre mim</h1>
         <div>
            <span>São Paulo, Brasil</span>
            <p>
               {aboutMe}
            </p>
         </div>
         <nav>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
         </nav>
         <button>Baixar currículo</button>
      </section>
   );
}
