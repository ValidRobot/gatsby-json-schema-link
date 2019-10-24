exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
      type BooksJson implements Node {
        author: AuthorsJson @link(by: "name")
      }
    `)
}
