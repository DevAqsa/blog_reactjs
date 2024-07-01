/* eslint-disable no-useless-catch */
// import config from '../config/config.js';
import {Client, Account, ID} from 'appwrite';

export class AuthService  {
    Client = new Client();
    account;
    
    constructor() {
        this.Client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('664af01700289149e0d8')

        this.account = new Account(this.Client);
           
    }
    // constructor() {
    //     this.Client
    //     .setEndpoint('https://cloud.appwrite.io/v1')
    //     .setProject('664af01700289149e0d8')
    //     this.account = new Account(this.Client);
           
    // }

    async createAccount ({email, password, name}) {
        try {
          const userAccount =  await this.account.create(ID.unique() ,email, password, name);

          if (userAccount) {
            //call another method
            return this.login({email, password})
          } else {

            return userAccount;
            
          }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const userAccount = await this.account.createEmailSession(email, password);
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async currentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

  
    }


    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}


const authService = new AuthService();



export default authService                                                                                                                                                                                                                                                  

