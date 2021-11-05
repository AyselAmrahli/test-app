const fetchComments = async () => {
    const response = await fetch('http://localhost:8888/v1/comments');
    const data = await response.json();
    return data;
}


const postComment = async (body) => {
    console.log('api', body);
    const response = await fetch('http://localhost:8888/v1/comments', 
    {
    method: 'POST', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  
    body: JSON.stringify(body)
    });

    const data = await response.json()
    return data;
}

export {fetchComments, postComment}