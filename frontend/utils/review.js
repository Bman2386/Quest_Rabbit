export const getReviews = () => {
    return (
        $.ajax({
            url: '/api/reviews'
        })
    )
}

export const getReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`
    })
)

export const createReview = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data: {review}
    })
)