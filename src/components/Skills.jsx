import { LazyProgressBar } from "./LazyComponents";


function Skills() {
    return ( 

        <section className="skillsContainer" name="skills">
            <header><h1 className="skillsHeader">Skills</h1></header>
            <article className="skillsContent">
                <article className="skill">
                    <h2 className="skillsHeader">Programming Languages</h2>
                    <LazyProgressBar color={"#FDD835"} width={"90%"} label={"Javascript"} stripColor={"#FFF176"}/>
                    <LazyProgressBar color={"#2196F3"} width={"70%"} label={"C#"} stripColor={"#64B5F6"}/>
                    <LazyProgressBar color={"gray"} width={"60%"} label={"Python"} stripColor={"black"}/>
                </article>
                <article className="skill">
                    <h2 className="skillsHeader">Frameworks</h2>
                    <LazyProgressBar color={"#4CAF50"} width={"90%"} label={"Node"} stripColor={"#81C784"}/>
                    <LazyProgressBar color={"#1565C0"} width={"90%"} label={"React"} stripColor={"#42A5F5"}/>
                </article>
                <article className="skill">
                    <h2 className="skillsHeader">Databases</h2>
                    <LazyProgressBar color={"#4CAF50"} width={"70%"} label={"Mongo"} stripColor={"#FFFFFF"}/>
                    <LazyProgressBar color={"#FF9800"} width={"70%"} label={"MySQL"} stripColor={"#FFFFFF"}/>
                </article>
                <article className="skill">
                    <h2 className="skillsHeader">API</h2>
                    <LazyProgressBar color={"#D9D9D9"} width={"70%"} label={"REST"} stripColor={"#FFFFFF"}/>

                </article>
                
            </article>

        </section>
     );
}

export default Skills;