export const getCategories = () => (
    $.ajax({
        url: '/api/categories'
    })
)

export const getCategory = categoryId => (
    $.ajax({
        url: `/api/categories/${categoryId}`
    })
)