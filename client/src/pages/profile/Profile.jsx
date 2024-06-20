import { useLoaderData } from "react-router-dom";


const Profile = () => {
    const userGame = useLoaderData()
    console.log(userGame); 
    return (
        <div>
            
        </div>
    );
};

export default Profile;