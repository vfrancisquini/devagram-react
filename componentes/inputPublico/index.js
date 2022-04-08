import Image from "next/image";

export default function InputPublico({
    imagem,
    tipo,
    texto,
    valor = "",
    exibirMensagemValidacao = false,
    mensagemValidacao = "",
    aoAlterarValor
    })
{
    return(
        <div className="inputPublicoContainer">
            <div className="inputPublico">
               <Image
                   src={imagem}
                   alt="imagem do campo"
                   className="iconeInputPublico"
                   height={20}
                   width={20}
                />

                <input
                    type={tipo}
                    placeholder={texto}
                    value={valor}
                    onChange ={aoAlterarValor}
                />


                {exibirMensagemValidacao && <p className="mensagemValidação"> {mensagemValidacao} </p>}
            </div>


        </div>
    );
}