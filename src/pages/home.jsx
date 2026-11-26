import { Link } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>test</h1>
            <Link to="/">Home</Link>
            <Link to="/mk">MK</Link>
            <Link tp="/epcot">Epcot</Link>
            <Link to="/poly">Polynesian</Link>
        </div>
    )
}