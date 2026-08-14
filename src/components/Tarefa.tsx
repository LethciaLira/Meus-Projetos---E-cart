interface Tarefa {
  id:         number;
  texto:      string;
  concluida:  boolean;
  prioridade: 'alta' | 'media' | 'baixa';
}

const tarefas: Tarefa[] = [
  { id: 1, texto: "Aprender React", concluida: true,  prioridade: 'alta' },
  { id: 2, texto: "Criar portfolio", concluida: false, prioridade: 'alta' },
  { id: 3, texto: "Estudar TypeScript", concluida: false, prioridade: 'media' },
];

function ListaTarefas() {
  // Filtrar apenas não concluídas
  const pendentes = tarefas.filter((t) => !t.concluida);

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}
          className={`item ${tarefa.concluida ? 'concluida' : ''}`}
        >
          <span className={`prioridade prioridade-${tarefa.prioridade}`}>
            {tarefa.prioridade}
          </span>
          {tarefa.texto}
        </li>
      ))}
    </ul>
  );
}

export default ListaTarefas;