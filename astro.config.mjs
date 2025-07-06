// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guia Front-End',
			sidebar: [
				{
					label: 'Fundamentos do React',
					items: [
						{ label: 'O que é React?', link: '/1-fundamentos/1-o-que-e-react/' },
						{ label: 'JSX: A Sintaxe do React', link: '/1-fundamentos/2-jsx-a-sintaxe-do-react/' },
						{ label: 'Componentes: Os Blocos de Construção', link: '/1-fundamentos/3-componentes-os-blocos-de-construcao/' },
						{ label: 'Props vs. State', link: '/1-fundamentos/4-props-vs-state/' },
						{ label: 'O Virtual DOM', link: '/1-fundamentos/5-o-virtual-dom/' },
						{ label: 'A Importância das Keys', link: '/1-fundamentos/6-a-importancia-das-keys/' },
						{ label: 'Renderização Condicional', link: '/1-fundamentos/7-renderizacao-condicional/' },
					],
				},
			],
		}),
	],
});
