
export const GifItem = ({title, url, id}) => {
    
    return (
        <div className="card"
            style = {{width: 150, borderTopLeftRadius: '18px', borderTopRightRadius: '18px'}}>
            <img src = {url} alt = {title} 
            // style = {{width: 100, height: 100, borderRadius:50}}
            />
            <p>{title}</p>
        </div>
    )
}
