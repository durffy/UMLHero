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
   * @param {*} datafile Path to a JSON file that contains the project data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  // CREATE METHODS
  async addEntry(name, description) {
    const data = (await this.getData()) || [];
    const createdDate = Date.now();
    const lastUpdated = Date.now();
    const id = 0;
    data.unshift({ id, name, description, createdDate, lastUpdated });
    return writeFile(this.datafile, JSON.stringify(data));
  }

  // READ METHODS

  async getList() {
    const data = await this.getData();
    data[0]['createdDate'] = new Date(data[0]['createdDate']);
    return data;
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }

  async getNames() {
    const data = await this.getData();
    return data.map((project) => ({ name: project.name }));
  }

  async getProject(name) {
    const data = await this.getData();
    const project = data.find((elm) => {
      return elm.name === name;
    });

    if (!project) return null;
    project.createdDate = new Date(project.createdDate);
    project.lastUpdated = new Date(project.lastUpdated);

    return {
      id: project.id,
      name: project.name,
      description: project.description,
      createdDate: project.createdDate,
      lastUpdated: project.lastUpdated,
    };
  }

  // UPDATE METHODS
  async updateEntry(id, name, description, createdDate) {
    const data = (await this.getData()) || [];
    const lastUpdated = Date.now();
    data.unshift({ id, name, description, createdDate, lastUpdated });
    return writeFile(this.datafile, JSON.stringify(data));
  }

  // DELETE METHODS
}

module.exports = ProjectService;
