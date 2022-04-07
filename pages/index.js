import Head from 'next/head'
import Image from 'next/image'
import {useRef, useState} from "react";

import Botao from '../componentes/botao'
import Avatar from '../componentes/avatar'
import {UploadImagem} from "../componentes/uploadImagem";


export default function Home() {
    const [imagem, setImagem] = useState(null);
   const referenciaInput = useRef(null);

  return (
    <>
     <h1>olá mundo</h1>
     <button onClick={() => referenciaInput?.current?.click()}>abrir seletor</button>
     <div style={{width:200}}>
         <UploadImagem
             setImagem={setImagem}
             imagemPreview={imagem?.preview}
             aoSetaraReferencia ={(ref) => referenciaInput.current = ref}
         />

         <Avatar />
        <Botao texto={'Login'} cor='primaria'  manipularClique= {() => console.log ('botao clicado')  }/>

     </div>
     </>
   
  )
}
