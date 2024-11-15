import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData?.$id) {
            const fetchPosts = async () => {
                try {
                    const postsResponse = await appwriteService.getMyPosts(userData.$id);
                    if (postsResponse) {
                        setPosts(postsResponse.documents);
                    }
                } catch (error) {
                    console.error('Error fetching posts:', error);
                } finally {
                    setLoading(false);  // Set loading to false once data is fetched
                }
            };

            fetchPosts();
        } else {
            setLoading(false);  // If userData is not available, stop loading
        }
    }, [userData]);  // Dependency on userData to refetch posts if user changes

    // If the page is still loading, show a loading message or spinner
    if (loading) {
        return <div className="w-full py-8">Loading...</div>;
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 h-[300px]'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default MyPosts;
