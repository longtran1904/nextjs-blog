import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DateSorter from './DateSorter';

let postsDirectory
export function getSortedPostsData(subpath) {
  postsDirectory = path.join(process.cwd(), subpath);
  // Get file names under /subpath
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      description: matterResult.content,
      details: matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(DateSorter);
}

export function getAllPostIds(subpath) {
    postsDirectory = path.join(process.cwd(), subpath);
    const fileNames = fs.readdirSync(postsDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

export async function getPostData(id, subpath) {
  postsDirectory = path.join(process.cwd(), subpath);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
      id,
      description: matterResult.content,
      ...matterResult.data,
  };
}