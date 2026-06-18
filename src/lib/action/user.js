import { authClient } from "../auth-client";


const UserDetails = async () => {
  try {
    const { data, error } = await authClient.user.get();
    if (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Unexpected error fetching user details:", error);
    return null;
  }
};

export default UserDetails;