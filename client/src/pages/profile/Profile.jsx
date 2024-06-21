import { useLoaderData } from "react-router-dom";


const Profile = () => {
    const userGame = useLoaderData()
    console.log(userGame); 
    return (
        <div>
            This is profile page
        </div>
    );
};

export default Profile;