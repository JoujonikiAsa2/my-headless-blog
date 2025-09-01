export const query = `
          {
            posts {
              nodes {
                id
                title
                content
                excerpt
                postReadingTime {
                  readingTime
                }
                author {
                  node {
                    name
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
                commentCount
                date
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
                commentCount
                date
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                  tags {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
              }
            }
          }
        `;