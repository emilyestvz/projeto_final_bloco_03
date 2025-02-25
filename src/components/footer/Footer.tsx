import { GithubLogo,  LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <nav
            className='bg-gray-100 bottom-0 w-full backdrop-blur-sm 
            border-t border-gray-500 text-cyan-950 z-10'>
                
                <div className='container mx-auto flex flex-col items-center py-4'>
                    <p className='text-xl font-medium'>
                        Todos os direitos reservados &copy; {data} |  Emily Cristiny Dias
                        </p>
                    <p className='text-lg font-light'>Para saber mais: </p>
                    <div className='flex gap-2'>
                        <a className='' href='https://github.com/emilyestvz' target='_blank' rel='noopener'>
                            <GithubLogo size={32} />
                        </a>
                        <a className='' href='https://www.linkedin.com/in/emilycristinydias/' target='_blank' rel='noopener'>
                            <LinkedinLogo size={32} />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Footer