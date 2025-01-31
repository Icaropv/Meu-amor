interface cardProps {
    anos: number,
    meses: number,
    dias: number,
    tituloAnos: string,
    tituloMeses: string,
    tituloDias: string
}

const Card = ({ anos, tituloAnos, meses, tituloMeses, dias, tituloDias }: cardProps) => {
    return (
        <div className="mt-4 flex-col items-center w-screen" >
            <div className="border-2 rounded-[10px] w-[350px] m-auto border-blue-700 ">
                <p className="text-3xl">
                    {anos} {tituloAnos}
                </p>
            </div >

            <div className="border-2 rounded-[10px] mt-3 mb-3 w-[350px] m-auto border-blue-700">
                <p className="text-3xl">
                     {meses} {tituloMeses}
                </p>
            </div>

            <div className="border-2 rounded-[10px] w-[350px] m-auto border-blue-700">
                <p className="text-3xl">
                   {dias} {tituloDias}
                </p>
            </div>
        </div>
    )
}
export default Card