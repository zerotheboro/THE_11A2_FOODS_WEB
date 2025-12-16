import video from '../picture/FASTVIDEO.mp4'
function Header(){
    return (
        <header className="header">
            <video autoPlay loop muted >
                    <source src={video} type="video/mp4"></source>
                    <p>the video isn't supported</p>
            </video>
            <h1 id="HERO">11A2</h1>
        </header>
    )
}

export default Header;
