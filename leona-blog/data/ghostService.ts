import { MinPostModel, FullPostModel } from "~/models/posts";
import GhostContentAPI from "@tryghost/content-api";

const ghostAPI = new GhostContentAPI({
    url: process.env.GHOST_URL!,
    key: process.env.GHOST_KEY!,
    version: "v5.0"
});

export async function getPostBySlug(slug: string)
{
    const post = await ghostAPI.posts.read({ slug: slug });

    return convertToFullPostModel(post);
}

export async function getNPosts(n: number, p: number, tag: string)
{
    const posts = await ghostAPI.posts.browse({
        limit: n,
        page: p,
        filter: `tag:${tag}`,
        include: 'tags',
        order: 'published_at desc',
    });

    return convertToMinPostModel(posts);
}

export async function getMostRecentPostByTag(tag: string)
{
    const posts = await ghostAPI.posts.browse({
        limit: 1,
        filter: `tag:${tag}`,
        include: 'tags',
        order: 'published_at desc',
    });

    return convertToMinPostModel(posts)[0];
}

function convertToMinPostModel(data: any[]) : MinPostModel[] {
    return data.map(post => ({
        title: post.title,
        slug: post.slug,
        feature_image: post.feature_image,
        custom_excerpt: post.custom_excerpt,
        excerpt: post.excerpt
    }));
}

function convertToFullPostModel(data: any) : FullPostModel {
    return {
        title: data.title,
        html: data.html,
        feature_image: data.feature_image,
        created_at: data.created_at,
        updated_at: data.updated_at,
        published_at: data.published_at
    }; 
}