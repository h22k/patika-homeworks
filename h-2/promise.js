const { logPosts } = require('./helper')

const posts = [
    { title: 'Post Başlık 1', detail: 'Post Detay 1' },
    { title: 'Post Başlık 2', detail: 'Post Detay 2' },
    { title: 'Post Başlık 3', detail: 'Post Detay 3' }
]

logPosts(posts)

const addPost = (post) => {

    return new Promise((res, rej) => {

        if (typeof post === 'object') {

            posts.push(post)
            console.log('Yeni yazı eklendi!')
            res(posts)

        } else {

            rej('Hatalı parametre tipi gönderdiniz.')

        }

    })

}

//Then blogu
addPost({title: 'Post Başlık 4', detail: 'Post Detay 4'})
    .then(res => logPosts(res))
    .catch(err => console.log(err))

//Catch blogu
/*addPost("{title: 'Post Başlık 4', detail: 'Post Detay 4'}")
    .then(res => logPosts(res))
    .catch(err => console.log(err))*/


