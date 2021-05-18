const logPosts = post => {
    post.forEach(e => {
        console.log(`Başlık: ${e.title}, Detay: ${e.detail}`)
    })
}

exports.logPosts = logPosts
