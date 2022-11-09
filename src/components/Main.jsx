import Article from "./Articles"
import data from "./Data"
import data2 from "./Data2"
import { useHorizontalScroll } from "./useSideScroll"

export default function Main() {
    const scrollRef = useHorizontalScroll();
    console.log(data)
    let articleHTML = data.data.projects.map((project, index) => {
        return (
            <Article 
                key={index}
                id = {project.id}
                name = {project.name}
                imageUrl = {project.imageUrl}
                liveUrl = {project.liveUrl}                
                githubUrl = {project.githubUrl} 
                articleClass = {project.articleClass}                
                linkClass = {project.linkClass}
                label = {project.label}            
            />
        )
    })
    let articleHTML2 = data2.data.projects.map((project, index) => {
        return (
            <Article 
                key={index}
                id = {project.id}
                name = {project.name}
                imageUrl = {project.imageUrl}
                liveUrl = {project.liveUrl}                
                githubUrl = {project.githubUrl} 
                articleClass = {project.articleClass}                
                linkClass = {project.linkClass}
                label = {project.label}            
            />
        )
    })
    return (
    <section id="main" ref={scrollRef} >
        <div className="items" style={{ whiteSpace: "nowrap" }}>

        <div className="item intro span-2">
            <h1>Noah Kenney Berlove</h1>
            <p>Full Stack Developer<br />
            <button><a href="mailto:noah.berlove@gmail.com">Contact Now</a></button>
            </p>
        </div>
        {articleHTML}

    </div>

    <div className="items" style={{ whiteSpace: "nowrap" }}>
         {articleHTML2}
        {/*<article className="item thumb span-3">
            <h2>Kingdom of the Wind</h2>
            <a href="/images/fulls/05.jpg" className="image">
                <img src="/images/thumbs/05.jpg" alt=""></img>
            </a>
        </article>
        <article className="item thumb span-1"><h2>The Pursuit</h2><a href="/images/fulls/06.jpg" className="image"><img src="/images/thumbs/06.jpg" alt=""></img></a></article>
        <article className="item thumb span-2"><h2>Boundless</h2><a href="/images/fulls/07.jpg" className="image"><img src="/images/thumbs/07.jpg" alt=""></img></a></article>
        <article className="item thumb span-2"><h2>The Spectators</h2><a href="/images/fulls/08.jpg" className="image"><img src="/images/thumbs/08.jpg" alt=""></img></a></article>
        <article className="item thumb span-1"><h2>You really got me</h2><a href="/images/fulls/01.jpg" className="image"><img src="/images/thumbs/01.jpg" alt=""></img></a></article>
        <article className="item thumb span-2"><h2>Ad Infinitum</h2><a href="/images/fulls/02.jpg" className="image"><img src="/images/thumbs/02.jpg" alt=""></img></a></article>
        <article className="item thumb span-1"><h2>Different.</h2><a href="/images/fulls/03.jpg" className="image"><img src="/images/thumbs/03.jpg" alt=""></img></a></article>
        <article className="item thumb span-2"><h2>Kingdom of the Wind</h2><a href="/images/fulls/05.jpg" className="image"><img src="/images/thumbs/05.jpg" alt=""></img></a></article>
        <article className="item thumb span-1"><h2>Elysium</h2><a href="/images/fulls/04.jpg" className="image"><img src="/images/thumbs/04.jpg" alt=""></img></a></article> */}

    </div>
    </section>
    )
}