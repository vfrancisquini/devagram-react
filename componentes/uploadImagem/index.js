
import {useEffect, useRef} from "react";

export function UploadImagem({
    className='',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetaraReferencia
}) {
    const referenciaInput = useRef(null);

    useEffect(() =>{
        if (!aoSetaraReferencia){
            return;
        }
        aoSetaraReferencia(referenciaInput?.current);
    }, [referenciaInput?.current]);


    const abrirSeletorArquivos = () =>{
        referenciaInput?.current?.click();
        console.log('clicou');
    }

    const alterarImagem = () =>{

        if(!referenciaInput?.current?.files?.length){
            return;
        }
        const arquivo = referenciaInput?.current?.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () =>{
            setImagem({
                preview: fileReader.result,
                arquivo
            })
        }
    }
    return(

       <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>

           {imagemPreview && (
               <div className="imagemPreviewConainer">
                   <img
                       src={imagemPreview}
                       alt='imagem preview'
                       className={imagemPreviewClassName}
                   />
               </div>

           )}


           <input
               type='file'
               className='oculto'
               accept="image/*"
               ref={referenciaInput}
               onChange ={alterarImagem}
           />

       </div>

    )
}