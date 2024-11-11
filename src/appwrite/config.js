import conf from "../conf/conf.js";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    return await this.databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      { title, content, featuredImage, status, userId }
    );
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      { title, content, featuredImage, status }
    );
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  //-------------- File upload services (STORAGE) -----------------

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
          conf.appwriteBucketId,
          ID.unique(),
          file
        );
      } catch (error) {
        console.log(error);
        return false;
      }
  }

  async delteFile(fileId){
    try {
        return await this.bucket.deleteFile(
          conf.appwriteBucketId,
          fileId
        );
      } catch (error) {
        console.log(error);
        return false;
      }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
          fileId
    )
  }

}

const service = new Service();

export default service;
