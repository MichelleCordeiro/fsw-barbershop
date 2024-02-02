import { format } from 'date-fns'
import Header from '../_components/header';
import { ptBR } from 'date-fns/locale';

export default function Home() {
  return (
    <div>
      <Header />

      <div className='px-5 pt-5'>
        <h2 className='text-xl font-bold'>Olá, Bia!</h2>
        <p className='first-letter:uppercase second-letter:uppercase text-sm'>
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR
          })}
      </p>
      </div>
    </div>
  );}
