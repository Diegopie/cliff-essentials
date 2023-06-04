interface IHeaderProps { 
    employeeName: string
}

export const Header = (props: IHeaderProps) => {

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const target = document.getElementById('ledger') as HTMLInputElement | null;
            console.dir(target);
            

            await navigator.clipboard.writeText(target.innerText);

            document.getElementById('ledgerCopy').classList.remove('hidden');

            setTimeout(() => {
                document.getElementById('ledgerCopy').classList.add('hidden')
            }, 2500);

            console.log(`${target.innerText} copied to clipboard`);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <header className='text-center'>
            <h1 className='font-instrument text-6xl mt-5 mb-4'>Cliff Essentials</h1>
            {props.employeeName !== '' &&
                <article>
                    <p className='text-xs mb-3'>Sold By: {props.employeeName} - {new Date().toLocaleString()}</p>
                    <div className="flex flex-row justify-center">
                        <p className='text-xs mb-3'>City Ledger: <span id='ledger'>R2CS6RW</span></p>
                        <article className="relative App-hideOnPrint">
                            <button title={'Copy City Ledger Folio to Clipboard'} className="p-1 pb-3 flex"
                                onClick={handleClick}
                            >
                                <img src={'assets/clipboard.svg'} alt='Copy Icon' className="h-3" />
                            </button>
                            <div id='ledgerCopy' className="
                        absolute text-xs right-0 top-0 left-4 border  bg-white rounded-md offset-1 w-16 text-center hidden">Copied!</div>
                        </article>
                    </div>
                </article>
            }
        </header>
    )
}
