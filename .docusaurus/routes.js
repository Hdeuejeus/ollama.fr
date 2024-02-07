import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'eb7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'efc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'cf5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6e4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '772'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7ee'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '540'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '745'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9f0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '6cf'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '09f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '35d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ea6'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0cb'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'ec4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e18'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '619'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4f8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '88d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '06f'),
            routes: [
              {
                path: '/docs/category/bibliothèque',
                component: ComponentCreator('/docs/category/bibliothèque', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/en-savoir-plus',
                component: ComponentCreator('/docs/category/en-savoir-plus', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/usage',
                component: ComponentCreator('/docs/category/usage', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/glossaire',
                component: ComponentCreator('/docs/En-savoir-plus/glossaire', '477'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/instruct',
                component: ComponentCreator('/docs/En-savoir-plus/instruct', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/Paramètres',
                component: ComponentCreator('/docs/En-savoir-plus/Paramètres', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/Quantization',
                component: ComponentCreator('/docs/En-savoir-plus/Quantization', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/rag',
                component: ComponentCreator('/docs/En-savoir-plus/rag', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/ecole',
                component: ComponentCreator('/docs/models-list/ecole', 'c00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Général',
                component: ComponentCreator('/docs/models-list/Général', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/image',
                component: ComponentCreator('/docs/models-list/image', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Llama2',
                component: ComponentCreator('/docs/models-list/Llama2', '7a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Llava',
                component: ComponentCreator('/docs/models-list/Llava', 'c00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Médecin',
                component: ComponentCreator('/docs/models-list/Médecin', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/medllama2',
                component: ComponentCreator('/docs/models-list/medllama2', 'e76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Mixtral',
                component: ComponentCreator('/docs/models-list/Mixtral', '26a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/texte',
                component: ComponentCreator('/docs/models-list/texte', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/TinyLlama',
                component: ComponentCreator('/docs/models-list/TinyLlama', 'cde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/outils/Github',
                component: ComponentCreator('/docs/outils/Github', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/outils/python',
                component: ComponentCreator('/docs/outils/python', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/chatbox',
                component: ComponentCreator('/docs/Usage/chatbox', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/Entrainer un modèle',
                component: ComponentCreator('/docs/Usage/Entrainer un modèle', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/Import Modèle',
                component: ComponentCreator('/docs/Usage/Import Modèle', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/ModelFile',
                component: ComponentCreator('/docs/Usage/ModelFile', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/vs code',
                component: ComponentCreator('/docs/Usage/vs code', 'a70'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '351'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
