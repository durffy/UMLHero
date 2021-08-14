const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * Logic for reading and writing project data
 */
class ProjectService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSOn file that contains the project data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get all project items
   */
  async getList() {
    const data = await this.getData();
    return data;
  }

  /**
   * Add a new project item
   * @param {*} name The name of the user
   * @param {*} title The title of the project message
   * @param {*} message The project message
   */
  async addEntry(name, email, title, message) {
    const data = (await this.getData()) || [];
    data.unshift({ name, email, title, message });
    return writeFile(this.datafile, JSON.stringify(data));
  }

  /**
   * Fetches project data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }
}

module.exports = ProjectService;
