import { version } from '../../../package.json';
import MermaidExample from './mermaid-markdown-all.js';
import { defineConfig, MarkdownOptions } from 'vitepress';

const allMarkdownTransformers: MarkdownOptions = {
  // the shiki theme to highlight code blocks
  theme: 'github-dark',
  config: async (md) => {
    await MermaidExample(md);
  },
};

export default defineConfig({
  lang: 'en-US',
  title: 'Mermaid',
  description: 'Create diagrams and visualizations using text and code.',
  base: '/',
  markdown: allMarkdownTransformers,
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    [
      'script',
      {
        defer: 'true',
        'data-domain': 'mermaid.js.org',
        // All tracked stats are public and available at https://p.mermaid.live/mermaid.js.org
        src: 'https://p.mermaid.live/js/script.js',
      },
    ],
  ],
  themeConfig: {
    nav: nav(),
    editLink: {
      pattern: ({ filePath, frontmatter }) => {
        if (typeof frontmatter.editLink === 'string') {
          return frontmatter.editLink;
        }
        return `https://github.com/mermaid-js/mermaid/edit/develop/packages/mermaid/src/docs/${filePath}`;
      },
      text: 'Edit this page on GitHub',
    },
    sidebar: {
      '/': sidebarAll(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mermaid-js/mermaid' },
      {
        icon: 'slack',
        link: 'https://join.slack.com/t/mermaid-talk/shared_invite/enQtNzc4NDIyNzk4OTAyLWVhYjQxOTI2OTg4YmE1ZmJkY2Y4MTU3ODliYmIwOTY3NDJlYjA0YjIyZTdkMDMyZTUwOGI0NjEzYmEwODcwOTE',
      },
      {
        icon: {
          svg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.16 490.16"><defs><mask id="Mask"><rect x="0" y="0" width="490.16" height="490.16" fill="white" /><path fill="black" d="M407.48,111.18A165.2,165.2,0,0,0,245.08,220,165.2,165.2,0,0,0,82.68,111.18a165.5,165.5,0,0,0,72.06,143.64,88.81,88.81,0,0,1,38.53,73.45v50.86H296.9V328.27a88.8,88.8,0,0,1,38.52-73.45,165.41,165.41,0,0,0,72.06-143.64Z"/><path fill="black" d="M160.63,328.27a56.09,56.09,0,0,0-24.27-46.49,198.74,198.74,0,0,1-28.54-23.66A196.87,196.87,0,0,1,82.53,227V379.13h78.1Z"/><path fill="black" d="M329.53,328.27a56.09,56.09,0,0,1,24.27-46.49,198.74,198.74,0,0,0,28.54-23.66A196.87,196.87,0,0,0,407.63,227V379.13h-78.1Z"/></mask><style>.cls-1{fill:#76767B;}.cls-1:hover{fill:#FF3570}</style></defs><rect class="cls-1" width="490.16" height="490.16" rx="84.61" mask="url(#Mask)" /></svg>',
        },
        link: 'https://www.mermaidchart.com/',
      },
    ],
  },
});

// Top (across the page) menu
function nav() {
  return [
    { text: 'Docs', link: '/intro/', activeMatch: '/intro/' },
    {
      text: 'Tutorials',
      link: '/config/Tutorials',
      activeMatch: '/config/',
    },
    { text: 'Integrations', link: '/ecosystem/integrations', activeMatch: '/ecosystem/' },
    {
      text: 'Latest News',
      link: '/news/announcements',
      activeMatch: '/announcements',
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/mermaid-js/mermaid/blob/develop/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: '/community/development',
        },
      ],
    },
    {
      text: '💻 Live Editor',
      link: 'https://mermaid.live',
    },
  ];
}

function sidebarAll() {
  return [
    {
      text: '📔 Introduction',
      collapsible: true,
      items: [
        { text: 'About Mermaid', link: '/intro/' },
        { text: 'Deployment', link: '/intro/n00b-gettingStarted' },
        {
          text: 'Syntax and Configuration',
          link: '/intro/n00b-syntaxReference',
        },
      ],
    },
    ...sidebarSyntax(),
    ...sidebarEcosystem(),
    ...sidebarConfig(),
    ...sidebarCommunity(),
    ...sidebarNews(),
  ];
}

function sidebarSyntax() {
  return [
    {
      text: '📊 Diagram Syntax',
      collapsible: true,
      items: [
        { text: 'Flowchart', link: '/syntax/flowchart' },
        { text: 'Sequence Diagram', link: '/syntax/sequenceDiagram' },
        { text: 'Class Diagram', link: '/syntax/classDiagram' },
        { text: 'State Diagram', link: '/syntax/stateDiagram' },
        {
          text: 'Entity Relationship Diagram',
          link: '/syntax/entityRelationshipDiagram',
        },
        { text: 'User Journey', link: '/syntax/userJourney' },
        { text: 'Gantt', link: '/syntax/gantt' },
        { text: 'Pie Chart', link: '/syntax/pie' },
        { text: 'Quadrant Chart', link: '/syntax/quadrantChart' },
        { text: 'Requirement Diagram', link: '/syntax/requirementDiagram' },
        { text: 'Gitgraph (Git) Diagram 🔥', link: '/syntax/gitgraph' },
        { text: 'C4 Diagram 🦺⚠️', link: '/syntax/c4' },
        { text: 'Mindmaps 🔥', link: '/syntax/mindmap' },
        { text: 'Timeline 🔥', link: '/syntax/timeline' },
        { text: 'Zenuml 🔥', link: '/syntax/zenuml' },
        { text: 'Sankey 🔥', link: '/syntax/sankey' },
        { text: 'Other Examples', link: '/syntax/examples' },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: '⚙️ Deployment and Configuration',
      collapsible: true,
      items: [
        { text: 'Configuration', link: '/config/configuration' },
        { text: 'Tutorials', link: '/config/Tutorials' },
        { text: 'API-Usage', link: '/config/usage' },
        { text: 'Mermaid API Configuration', link: '/config/setup/README' },
        { text: 'Mermaid Configuration Options', link: '/config/schema-docs/config' },
        { text: 'Directives', link: '/config/directives' },
        { text: 'Theming', link: '/config/theming' },
        { text: 'Accessibility', link: '/config/accessibility' },
        { text: 'Mermaid CLI', link: '/config/mermaidCLI' },
        { text: 'Advanced usage', link: '/config/n00b-advanced' },
        { text: 'FAQ', link: '/config/faq' },
      ],
    },
  ];
}

function sidebarEcosystem() {
  return [
    {
      text: '📚 Ecosystem',
      collapsible: true,
      items: [
        { text: 'Showcases', link: '/ecosystem/showcases' },
        { text: 'Use-Cases and Integrations', link: '/ecosystem/integrations' },
      ],
    },
  ];
}

function sidebarCommunity() {
  return [
    {
      text: '🙌 Contributions and Community',
      collapsible: true,
      items: [
        { text: 'Overview for Beginners', link: '/community/n00b-overview' },
        ...sidebarCommunityDevelopContribute(),
        { text: 'Adding Diagrams', link: '/community/newDiagram' },
        { text: 'Security', link: '/community/security' },
      ],
    },
  ];
}

// Development and Contributing
function sidebarCommunityDevelopContribute() {
  const page_path = '/community/development';
  return [
    {
      text: 'Contributing to Mermaid',
      link: page_path + '#contributing-to-mermaid',
      collapsible: true,
      items: [
        {
          text: 'Technical Requirements and Setup',
          link: pathToId(page_path, 'technical-requirements-and-setup'),
        },
        {
          text: 'Contributing Code',
          link: pathToId(page_path, 'contributing-code'),
        },
        {
          text: 'Contributing Documentation',
          link: pathToId(page_path, 'contributing-documentation'),
        },
        {
          text: 'Questions or Suggestions?',
          link: pathToId(page_path, 'questions-or-suggestions'),
        },
        {
          text: 'Last Words',
          link: pathToId(page_path, 'last-words'),
        },
      ],
    },
  ];
}

function sidebarNews() {
  return [
    {
      text: '📰 Latest News',
      collapsible: true,
      items: [
        { text: 'Announcements', link: '/news/announcements' },
        { text: 'Blog', link: '/news/blog' },
      ],
    },
  ];
}

/**
 * Return a string that puts together the pagePage, a '#', then the given id
 * @param  pagePath
 * @param  id
 * @returns  the fully formed path
 */
function pathToId(pagePath: string, id = ''): string {
  return pagePath + '#' + id;
}
