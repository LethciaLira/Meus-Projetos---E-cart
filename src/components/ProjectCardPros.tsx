interface ProjectCardProps {
    readonly titulo: string;
    readonly descricao: string;
    readonly tags: string[];
    readonly imagem: string;
    readonly link?: string;
}
function ProjectCard({titulo, descricao, tags, imagem, link = '#'}: ProjectCardProps){
    return (
        <article className="project-card">
            <img src={imagem} alt={titulo} />
            <div className= "card-body">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Ver projeto
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;
