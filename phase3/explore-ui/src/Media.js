// Pics Component
export default function Pics(){
    const imagecss = {
        width:'500px',
        height:'300px',
        margin: '20px',
    }
    return(
        <>
            {/* jsx */}
           <img style={{width:'200px',height:'200px',borderRadius:'20px',boxShadow:'10px 10px 10px grey'}} src={'https://images.pexels.com/photos/29123248/pexels-photo-29123248.jpeg'} alt="pexel"/>
           <img style={imagecss} src={'https://images.pexels.com/photos/34016060/pexels-photo-34016060.jpeg'} alt="pexel"/>
        </>
    )
}

// PLay Component
export const Play = () =>{
    return(
        <>
            <video controls muted autoPlay src={'https://www.pexels.com/download/video/34124879/'}/>
            {/* <video controls muted autoPlay src={'https://www.pexels.com/download/video/32950330/'}/> */}
        </>
    )
}
// Text Component
export const Text = () =>{
    return(
        <>
            <h1>Normal Text Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Tool</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Spring Boot</td><td>IntelliJ/ Vs Code</td>
                    </tr>
                    <tr>
                        <td>ASP Web API</td><td>Visual Studio</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

// export default Pics;
// export {Play, Text};