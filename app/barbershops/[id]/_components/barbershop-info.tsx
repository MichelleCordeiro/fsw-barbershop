'use client'

import { useRouter } from 'next/navigation';
import { Barbershop } from '@prisma/client';
import { Button } from '@/app/_components/ui/button';
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/app/_components/ui/sheet';
import SideMenu from '@/app/_components/side-menu';
import Image from 'next/image';

interface BarbershopInfoProps {
  barbershop: Barbershop
}

const BarbarshopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter()
  
  const handleBackClick = () => {
    router.replace('/');
  }
  
  return (
    <div>
      <div className='h-[250px] w-full relative'>
        <Button onClick={handleBackClick} size='icon' variant='outline' className='z-50 absolute top-4 left-4' >
          <ChevronLeftIcon />
        </Button>

        {/* <Button size='icon' variant='outline' className='z-50 absolute top-4 right-4'>
          <MenuIcon />
        </Button> */}

        <Sheet>
          <SheetTrigger asChild>
            {/* <Button variant='outline' size='icon' className='h-8 w-8'>
              <MenuIcon size={16} />
            </Button> */}
            <Button size='icon' variant='outline' className='z-50 absolute top-4 right-4'>
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className='p-0'>
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{
            objectFit: 'cover'
          }}
          className='opacity-75'
        />
      </div>

      <div className='px-5 py-3 pb-6 border-solid border-secondary'>
        <h1 className='text-xl font-bold'>{barbershop.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <MapPinIcon className='text-primary stroke-black fill-primary' size={18} />
          <p className='text-sm'>{barbershop.address}</p>
        </div>

        <div className='flex items-center gap-1 mt-2'>
          <StarIcon className='text-primary fill-primary' size={18} />
          <p className='text-sm'>5.0 (126 avaliação)</p>
        </div>
      </div>

      <div className='px-5 mt-6 flex gap-3'>
        <Button variant='default'>Serviços</Button>
        <Button variant='secondary'>Informações</Button>
      </div>
    </div>
  );
}

export default BarbarshopInfo;