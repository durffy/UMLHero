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

  async addEntry(name, description) {
    const data = (await this.getData()) || [];
    const createdDate = Date.now();
    const lastUpdated = Date.now();
    const id = 0;
    data.unshift({ id, name, description, createdDate, lastUpdated });
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

  /**
   * Returns a list of projects by name
   */
  async getNames() {
    const data = await this.getData();

    // We are using map() to transform the array we get into another one
    return data.map((project) => ({ name: project.name }));
  }

  async getProject(name) {
    const data = await this.getData();
    const project = data.find((elm) => {
      return elm.name === name;
    });

    if (!project) return null;

    return {
      id: project.id,
      name: project.name,
      description: project.description,
      createdDate: project.createdDate,
    };
  }
}

module.exports = ProjectService;
