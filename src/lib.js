const DEFAULT_CONFIG = {
    appName: "Comfi",
    version: `0.0.1`,
    author: "eikcalb",
    description: "Comfi Webapp"
}

/**
 * Server defines required functionality for interacting with a backend infrastructure.
 */
export class Server {
    config = DEFAULT_CONFIG
    homepage = 'https://eikcalb.dev'

    /**
     * Initialize Server object, combining default config with default configuration.
     * 
     * @param {any} appConfig 
     */
    constructor(appConfig) {
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