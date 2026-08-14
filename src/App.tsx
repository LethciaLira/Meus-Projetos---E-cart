import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCardPros';
import { projects } from './data/projects';
import type { Project } from './types;

const FILTROS = ['Todos', 'React', 'TypeScript', 'JavaScript'] as const;
type Filtro = (typeof FILTROS)[number];

function App() {
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>('Todos');

const projetosFiltrados: Project[] = 
  filtroAtivo === 'Todos'
  ? projects
  : projects.filter((p) => p.tags.includes(filtroAtivo));
}