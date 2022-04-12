import Image from "next/image";
import Link from "next/link";
import imagemLogo from "../../public/imagens/logo.svg";
import InputPublico from "../../componentes/inputPublico/index";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";



import Botao from "../../componentes/botao";
import {useState} from "react";

export default function Cadastro (){

    const[nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const[email, setEmail] = useState("");
    const [confSenha, setconfSenha] = useState("");

    return (
        <section className={`paginaCadastro paginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />

            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto="Nome Completo"
                        tipo = "text"
                        aoAlterarValor ={e => setNome(e.target.value)}
                        valor={nome}

                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-Mail"
                        tipo = "email"
                        aoAlterarValor ={e => setEmail(e.target.value)}
                        valor={email}

                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo = "password"
                        aoAlterarValor ={e => setSenha(e.target.value)}
                        valor={senha}

                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirmar Senha"
                        tipo = "password"
                        aoAlterarValor ={e => setconfSenha(e.target.value)}
                        valor={confSenha}

                    />




                    <Botao
                        texto="Cadastrar"
                        type="submit"
                        desabilitado={false}

                    />



                </form>


                <div className="rodapePaginaPublica">
                    <p>Já possui uma conta?</p>
                    <Link href="..">Faça login agora!</Link>




                </div>
            </div>
        </section>



    );
}