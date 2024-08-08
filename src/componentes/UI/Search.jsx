import { Button } from '@nextui-org/react'
import React from 'react'

const Search = ({ children, handleSearch }) => {
    return (
        <div className='w-full bg-white h-auto md:overflow-hidden shadow-md rounded-lg p-4 '>
            <h4 className='font-bold text-main' >BÚSQUEDA AVANZADA</h4>
            <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 "></hr>
            {
                children
            }
            <hr className="h-px my-4 bg-gray-200 border-0 "></hr>
            <section className='flex gap-3'>
                <Button size='sm' onClick={handleSearch} color="primary" variant="ghost" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon w-5 icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    BUSCAR
                </Button>
                <Button size='sm' variant="ghost" color="danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>  LIMPIAR
                </Button>
            </section>
        </div>
    )
}

export default Search