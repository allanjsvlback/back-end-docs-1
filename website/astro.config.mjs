import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	// Added Configuration for 
	// Deployment to GitHub Pages
	site: 'https://allanjsvlback.github.io',
	base: '/back-end-docs-1',

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

			title: 'Guia Back-End',
			social: {
				github: 'https://github.com/allanjsvlback/back-end-docs-1',
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
					label: 'Começando com Nest.js',
					items: [
						{ label: 'O que é Nest.js e por que usar?', link: '1-comecando-com-nest-js/1-o-que-e-nest' },
						{ label: 'Instalação e Primeiro Projeto', link: '1-comecando-com-nest-js/2-instalacao-e-primeiro-projeto' },
						{ label: 'Estrutura de Pastas e Arquivos', link: '1-comecando-com-nest-js/3-estrutura-de-pastas' },
						{ label: 'Executando sua Aplicação', link: '1-comecando-com-nest-js/4-executando-a-aplicacao' },
					],
				},
				{
					label: 'Arquitetura e Conceitos Core',
					items: [
						{ label: 'Os 3 Pilares: Módulos, Controllers e Providers', link: '2-arquitetura-e-conceitos/1-os-tres-pilares' },
						{ label: 'Controllers: Lidando com Requisições', link: '2-arquitetura-e-conceitos/2-controllers-e-rotas' },
						{ label: 'Providers e Services: A Lógica de Negócio', link: '2-arquitetura-e-conceitos/3-providers-e-services' },
						{ label: 'Módulos: Organizando sua Aplicação', link: '2-arquitetura-e-conceitos/4-modulos-e-organizacao' },
						{ label: 'O Fluxo de uma Requisição (Lifecycle)', link: '2-arquitetura-e-conceitos/5-request-lifecycle' },
					],
				},
			],
		}),
	],
});
