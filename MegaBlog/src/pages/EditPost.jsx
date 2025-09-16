import React,{useState,useEffect, use} from 'react'
import { PostForm,Container } from "../components/";
import appwriteService from '../appwrite/config'
import { useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug)
            .then((post)=>{
                setPost(post)
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} type="edit"/>
            </Container>
        </div>
    ) : null ;
}

export default EditPost