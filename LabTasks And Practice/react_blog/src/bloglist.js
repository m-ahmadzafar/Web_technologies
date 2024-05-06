const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;

    // we get the handleDelete as a prop from the home comp as well
    return ( <div className="blogList">
    <h2>{title}</h2>
    {blogs.map((blog) => (

        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> Written by: {blog.author}</p>
            <button onClick={()=> handleDelete(blog.id)}>Delete Me</button>
        </div>
    ))}
    </div> );
}
 
export default BlogList;