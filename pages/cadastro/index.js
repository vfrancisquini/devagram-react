import Image from "next/image";
import Link from "next/link";
import imagemLogo from "../../public/imagens/logo.svg";
import InputPublico from "../../componentes/inputPublico/index";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemUsuarioCinza from "../../public/imagens/usuarioCinza.svg";
import imagemAvatar from "../../public/imagens/avatar.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import {validarEmail, validarSenha, validarConfirmacaoSenha, validarNome} from "../../utils/validadores";




import Botao from "../../componentes/botao";
import {useState} from "react";
import UploadImagem from "../../componentes/uploadImagem";
import UsuarioService from "../../services/UsuarioService";


const usuarioService = new UsuarioService();


export default function Cadastro (){

    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setconfSenha] = useState("");
    const [imagem, setImagem] = useState("");
    const [estaSubmetendo, setEstaSubmetendo] = useState("");

    const validarFormulario = () =>{
        return (
            validarEmail(email)
            &&validarConfirmacaoSenha(senha, confSenha)
            &&validarNome(nome)
        );
    }


    const aoSubmeter = async (e) =>{
        e.preventDefault();
        if (!validarFormulario()){
            return;
        }

        setEstaSubmetendo(true);
        try{
            const corpoReqCadastro = new FormData();
            corpoReqCadastro.append("nome", nome);
            corpoReqCadastro.append("email", email);
            corpoReqCadastro.append("senha", senha);

            if (imagem?.arquivo){
                corpoReqCadastro.append("file", imagem.arquivo);
            }

            await usuarioService.cadastro(corpoReqCadastro);
            alert ("sucesso");

        } catch (error){
            alert(
                "Erro ao cadastrar usuario." + error?.response?.data?.erro
            );
        }
        setEstaSubmetendo(false);
    }


    return (
        <section className={`paginaCadastro paginaPublica`}>
            <div className="logoContainer desktop">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />

            </div>

            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>

                    <UploadImagem
                        imagemPreviewClassName="avatar avatarPreview"
                        imagemPreview={imagem?.preview || imagemAvatar.src}
                        setImagem={setImagem}
                    />

                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto="Nome Completo"
                        tipo = "text"
                        aoAlterarValor ={e => setNome(e.target.value)}
                        valor={nome}
                        mensagemValidacao="O nome precisa de pelo menos 2 caracteres"
                        exibirMensagemValidacao={nome && !validarNome(nome)}
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-Mail"
                        tipo = "email"
                        aoAlterarValor ={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado é inválido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo = "password"
                        aoAlterarValor ={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="A senha precisa ter 3 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirmar Senha"
                        tipo = "password"
                        aoAlterarValor ={e => setconfSenha(e.target.value)}
                        valor={confSenha}
                        mensagemValidacao="A senha não coincide com a outra"
                        exibirMensagemValidacao={confSenha && !validarConfirmacaoSenha(senha, confSenha)}
                    />

                    <Botao
                        texto="Cadastrar"
                        tipo="submit"
                        desabilitado={!validarFormulario() || estaSubmetendo}
                    />

                </form>

                <div className="rodapePaginaPublica">
                    <p>Já possui uma conta? </p>
                    <Link href=".."> Faça login agora!</Link>

                </div>
            </div>
        </section>



    );
}