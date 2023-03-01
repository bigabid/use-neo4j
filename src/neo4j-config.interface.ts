export type Neo4jScheme = 'neo4j' | 'neo4j+s' | 'neo4j+scc' | 'neo4j+ssc' | 'bolt' | 'bolt+s' | 'bolt+scc' | 'bolt+ssc'

export interface Neo4jConfig {
    scheme: Neo4jScheme;
    host: string;
    port: number | string;
    username: string | undefined;
    password: string | undefined;
    database?: string | undefined;
}

export const LOCAL_STORAGE_KEY = '$$charts::config'