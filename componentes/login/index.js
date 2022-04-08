import InputPublico from "../inputPublico";
import Image from "next/image";
import Link from "next/link";
import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemChave from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"
import Botao from "../botao";
import {useState} from "react";

export default function Login(){
    const[email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return(
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout = "fill"
                />

            </div>

            <div className="conteudoPaginaPublica">
                <form>

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-Mail"
                        tipo = "email"
                        aoAlterarValor ={e => seEmail(e.target.value)}
                        />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo = "password"
                        aoAlterarValor ={e => setSenha(e.target.value)}

                    />
                    <Botao
                        texto="Login"
                        type="submit"
                        desabilitado={false}

                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                        <Link href="/cadastro">Faça seu cadastro agora!</Link>




                </div>

            </div>

        </section>
    );
}