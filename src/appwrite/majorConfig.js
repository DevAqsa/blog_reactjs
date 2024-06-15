/* eslint-disable no-useless-catch */
import config from './config/config';
import {Client , ID, Databases, Storage, Query} from 'appwrite';


export class Service {
    Client = new Client();
    database;
    storage;
    query;

    constructor() {
        this.Client
            .setEndpoint(config.endpointurl)
            .setProject(config.appwriteprojectid)

        this.database = new Databases(this.Client);
        this.storage = new Storage(this.Client);
        this.query = new Query(this.Client);
    }


    async createPost ({title, slug, content , featuredImage, status , userId}) {
        try {
            const userAccount =  await this.database.createDocument(config.appwritedatabaseid,config.appwriteprojectid, slug ,{
                title,
                content,
                featuredImage,
                status,
                userId
            });

            return userAccount;
        } catch (error) {
            throw error;
        }

    }


    async updatePost (slug,{title,  content , featuredImage, status}){
        
        try {
            const userAccount =  await this.database.updateDocument(config.appwritedatabaseid,config.appwritecollectionid, slug ,{
                title,
                content,
                featuredImage,
                status,
                
            });

            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async deletePost ({slug}){
            
            try {
                const userAccount =  await this.database.deleteDocument(config.appwritedatabaseid,config.appwritecollectionid, slug);
    
                return userAccount;
            } catch (error) {
                throw error;
            }
        
    }

    async getPost ({slug}){
        try {
            const userAccount =  await this.database.getDocument(config.appwritedatabaseid,config.appwritecollectionid, slug);
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

   
    async getPosts (queries = [Query.equal("status", "active")]){

        try {
            const userAccount =  await this.database.listDocuments(config.appwritedatabaseid,config.appwritecollectionid, queries);
            return userAccount;
        } catch (error) {
            throw error;
        }
        
    }  
    
    //file upload services                                                                          

    async uploadFile (file){
        try {
            const userAccount =  await this.storage.createFile(
                ID.unique(),
                config.appwritebucketid,
                file,
            );
            return userAccount;
        } catch (error) {
            throw error;
        }
    }


    // delete file

    async deleteFile (fileId){
        try {
            const userAccount =  await this.storage.deleteFile(fileId);
            return userAccount;
        } catch (error) {
            throw error;
        }
    }


    // eslint-disable-next-line no-unused-vars
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            

        )
    }
}

const service = new Service();
export default service