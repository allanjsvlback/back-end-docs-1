import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	// Added Configuration for 
	// Deployment to GitHub Pages
	site: 'https://AllanSilva29.github.io',
	base: '/front-end-docs-1',

	integrations: [
		starlight({

			// Add plugins
			// FIXME: Plugin route not working. Debug later.
			plugins: [
				/*
				starlightBlog({
				  title: "Blog",
				  postCount: 7,
				  recentPostCount: 1,
				  authors: {
					nitya: {
					  name: "Nitya Narasimhan, PhD",
					  picture: "https://github.com/nitya.png",
					  url: "https://github.com/nitya",
					  title: "AI, Art & Advocacy @Microsoft",
					}
				  },
				}),
				*/
			],

			title: 'Guia Front-End',
			social: {
				github: 'https://github.com/AllanSilva29/front-end-docs-1',
			},
			sidebar: [
				{
					label: 'Guias',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Exemplo de Guia', link: 'guides/example/' },
					],
				},
				{
					label: 'Referência',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Fundamentos do React',
					items: [
						{ label: 'O que é React?', link: '1-fundamentos/1-o-que-e-react/' },
						{ label: 'JSX: A Sintaxe do React', link: '1-fundamentos/2-jsx-a-sintaxe-do-react/' },
						{ label: 'Componentes: Os Blocos de Construção', link: '1-fundamentos/3-componentes-os-blocos-de-construcao/' },
						{ label: 'Props vs. State', link: '1-fundamentos/4-props-vs-state/' },
						{ label: 'O Virtual DOM', link: '1-fundamentos/5-o-virtual-dom/' },
						{ label: 'A Importância das Keys', link: '1-fundamentos/6-a-importancia-das-keys/' },
						{ label: 'Renderização Condicional', link: '1-fundamentos/7-renderizacao-condicional/' },
					],
				},
				{
					label: 'Hooks Essenciais',
					items: [
						{ label: 'Introdução aos Hooks', link: '2-hooks/1-introducao-aos-hooks/' },
						{ label: 'useState: Adicionando Estado', link: '2-hooks/2-usestate/' },
						{ label: 'useEffect: Efeitos Colaterais', link: '2-hooks/3-useeffect/' },
						{ label: 'useContext: Dados Globais', link: '2-hooks/4-usecontext/' },
						{ label: 'useMemo e useCallback: Otimização', link: '2-hooks/5-usememo-e-usecallback/' },
						{ label: 'useRef: Acessando o DOM e Mais', link: '2-hooks/6-useref/' },
						{ label: 'As Regras dos Hooks', link: '2-hooks/7-regras-dos-hooks/' },
						{ label: 'Custom Hooks: Lógica Reutilizável', link: '2-hooks/8-custom-hooks/' },
					]
				},
				{
					label: 'Arquitetura de Projetos',
					items: [
					  { label: 'Estruturas de Pastas', link: '3-arquitetura/1-estruturas-de-pastas/' },
					  { label: 'Roteamento em React', link: '3-arquitetura/2-roteamento-em-react/' },
					  { label: 'Layouts e Páginas', link: '3-arquitetura/3-layouts-e-paginas/' },
					  { label: 'Importações Absolutas', link: '3-arquitetura/4-importacoes-absolutas/' },
					  { label: 'Comunicação entre Componentes', link: '3-arquitetura/5-comunicacao-entre-componentes/' },
					]
				},
			],
		}),
	],
});
