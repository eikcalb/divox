const DEFAULT_CONFIG = {
    appName: "Divox",
    version: `0.0.1`,
    author: "eikcalb",
    description: "Divox Consult"
}

/**
 * Server defines required functionality for interacting with a backend infrastructure.
 */
export class Server {
    config = null
    homepage = 'https://eikcalb.dev'

    /**
     * Initialize Server object, combining default config with default configuration.
     * 
     * @param {any} appConfig 
     */
    constructor(appConfig) {
        this.config = DEFAULT_CONFIG
        if (appConfig) {
            if (typeof appConfig !== 'object') {
                throw new TypeError("Parameter `appConfig` must be an object instance")
            }
            this.config = {...this.config, ...appConfig }
        }
    }

    /**
     * Pulls a blog post identified by the provided `id` parameter and returns a promise containing the postdata.
     * @param {string} id 
     */
    getPost(id) {
        return Promise.reject(new Error('Not yet implemented!'))
    }

    /**
     * Saves the provided post and returns a promise with the identifier to pull the post in future.
     * @param {object} postData 
     */
    savePost(postData) {
        return Promise.reject(new Error('Not yet implemented!'))
    }


}