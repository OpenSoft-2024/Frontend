export const Poster = ({
    img
}) => {
    return(
    <div className="mix-blend-overlay">
        <img className='object-contain h-60 w-full' src={img} alt="" />
    </div>
    )
}