

export default async function DetalheAtleticaPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <h2>Detalhes da Atlética {id}</h2>
                </div>
            </div>
        </div>
    )
}