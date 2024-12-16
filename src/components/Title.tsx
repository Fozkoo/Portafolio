interface Props {
    title: string
}
const Title: React.FC<Props> = ({ title }) => {

    return (
        <>
            <div className="container-text">
                <h2 className="font-bold text-7xl max-2xl:text-5xl max-sm:text-4xl">{title}</h2>
            </div>
        </>
    )
}

export default Title