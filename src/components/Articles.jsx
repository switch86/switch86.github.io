
export default function Article(props) {
    return (
        <article className={props.articleClass}>
        <h2><a href={props.githubUrl} className="icon brands fa-github"><span className="label">GitHub</span> | {props.name} </a></h2>
            <a href={props.liveUrl} className="image"><img src={props.imageUrl} alt="project preview"></img></a>
        </article>
    )
}