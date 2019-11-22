const Tweeter = function(){
    let posts = []
    
    
    let postIdCounter = 3
    let commentIdCounter = 6

    const  getPosts = ()=>  posts

    const addPost = (text)=>{
        posts.push({post: text, id:"p"+ postIdCounter , comments :[]})
        postIdCounter++
    }
    
    const  addComment = (text, postID ) =>{
        for (let i = 0; i < posts.length; i++) {
            if(posts[i].id==postID){
                posts[i].comments.push({'text': text, id:"c"+commentIdCounter })
                commentIdCounter++
                return
            }
        }
         
    }

    const removePost = (postID)=> {
        for (let i = 0; i < posts.length; i++) {
            if(posts[i].id=postID){
                posts.splice(i,1)
                commentIdCounter--
                return
            }
        }
    }
    
    const removeComment = function(postID, commentID){
        for (let k = 0; k < posts.length; k++) {
            if (posts[k].id==postID){
                for (let i=0;i< posts[k].comments.length; i++) {
                    if (posts[k].comments[i].id==commentID) {
                        posts[k].comments.splice(i,1)
                        commentIdCounter--
                        return
                    }
                }
            }
        }
    }

    return tweeterFun = {addPost, removePost, getPosts, addComment, removeComment}

}


const tweeter = Tweeter()
const posts = tweeter.getPosts()
