

export default function Footer() {
   return (
    <div className="Footer">
        <section id="footer">
        <section>
            <p>This is a portfolio showcasing some of my best and most recent work. <br></br>Please reach out if you have questions or would like to collaborate. 
            </p>
        </section>
        <section>
            <ul className="icons">
                <li><a href="https://www.twitter.com/_switch86" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/switch86" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/berloven/" className="icon brands fa-linkedin"><span className="label">Linked In</span></a></li>
                <li><a href="mailto:noah.berlove@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Noah Berlove</li>
            </ul>
        </section>
            {/* <ul className="skills">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Node.Js</li>
                <li>React</li>
                <li>MongoDB</li>
            </ul> */}
        </section>
    </div>
)
}