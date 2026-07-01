import { databases } from "./appwrite.js";
import { DATABASE_ID, JOBS_TABLE } from "./config.js";
import { ID, Query } from "appwrite";

export const getJobs = async (filters = []) => {
    try {
        const queries = [];
        if (filters.governorate) queries.push(Query.equal("governorate", filters.governorate));
        
        return await databases.listDocuments(DATABASE_ID, JOBS_TABLE, queries);
    } catch (error) {
        console.error("Fetch jobs error:", error);
        throw error;
    }
};

export const postJob = async (jobData) => {
    try {
        return await databases.createDocument(DATABASE_ID, JOBS_TABLE, ID.unique(), jobData);
    } catch (error) {
        console.error("Post job error:", error);
        throw error;
    }
};
