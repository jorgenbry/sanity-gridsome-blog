export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f870d2f26e44709ddbdb1d6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-atn38yhh',
                  apiId: '5a95d5b6-093f-4a66-b6ca-5d21cf9a2c08'
                },
                {
                  buildHookId: '5f870d2fee6a790cb235ce8b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-3s1tornj',
                  apiId: '284ff62e-7078-422f-beec-0b67a1e432d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorgenbry/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-3s1tornj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
