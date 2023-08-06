import { User } from "../model/profile";

export function convertUserData(userArray: any): User {
  return {
    name: userArray.name,
    username: userArray.login,
    avatarUrl: userArray.avatar_url,
    bio: userArray.bio || "", 
    company: userArray.company || "", 
    location: userArray.location || "", 
    website: userArray.blog || "", 
    githubLink: userArray.html_url,
    repo: userArray.public_repos,
    followers: userArray.followers,
    following: userArray.following,
  };
}
