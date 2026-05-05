export default function NewItem(
    {fact, source}: {fact: string, source: string}
) {
    return (
        <>
            <div>
                <h1>{fact}</h1>
                <a href={source}>Fonte</a>
            </div>
        </>
    )
}