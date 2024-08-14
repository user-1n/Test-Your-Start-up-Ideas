import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'


const sql = neon("postgresql://top-20-Ideas_owner:Cayz6nu3trhf@ep-snowy-meadow-a56jmx0l.us-east-2.aws.neon.tech/top-20-Ideas?sslmode=require");
export const db = drizzle(sql,{schema});

