import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`,
            {
                method: 'DELETE'
            }).then(() => {
                navigate('/')
            })
    }

    return (
        <div className="blog-details">
            {
                error && <div>{error}</div>
            }
            {
                isPending && <div>Loading...</div>
            }
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleDelete}>delete</button>
                    </article>
                )
            }
        </div>
    );
}

export default BlogDetails;