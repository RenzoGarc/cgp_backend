import Users from "../../models/maestros/users.js";

export class UsersService {
  async getAll() {
    try {
      const data = await Users.findAll();
      if (!data) {
        throw new Error("Users no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los users...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Users.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el users.");
    }
  }

  async getById(id) {
    try {
      const data = await Users.findByPk(id);
      if (!data) {
        throw new Error("Users no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el users por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Users.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el users.");
    }
  }

  async delete(id) {
    try {
      const data = await Users.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el users.");
    }
  }
}
