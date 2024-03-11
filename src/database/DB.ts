import {Request} from "express";

export type BlogsType = {
    "id": string,
    "name": string,
    "description": string,
    "websiteUrl": string
}

export type PostsType =  {
    "id": string,
    "title": string,
    "shortDescription": string,
    "content": string,
    "blogId": string,
    "blogName": string
}

export type RequestWithParams<P> = Request<P, {}, {}, {}>;
export type RequestWithBody<B> = Request<{}, {}, B, {}>
export type RequestWithBodyAndParams<P,B> = Request<P, {}, B, {}>
export const blogsDB: BlogsType[] = [
    {
        id: "1",
        name: "First blog",
        description: "First description",
        websiteUrl: "First-blog.com"
    }
], postsDB: PostsType[] = [
    {
        id: "1234892487",
        title: "First post",
        shortDescription: "Short description for the first post",
        content: "Content",
        blogId: "1",
        blogName: "First blog"
    }
];