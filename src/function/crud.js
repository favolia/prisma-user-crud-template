const prisma = require("../client")

// Create
/** 
 * @param {{ username: String, name: String?, age: Number, phone: String?, isAdult: Boolean }} 
 * @returns {Promise<{
 * status: Boolean,
 * message: String,
 * data: {
 * id: Number,
 * username: String,
 * name: String?,
 * age: Number,
 * phone: String?,
 * isAdult: Boolean
 * }?
 * }>}
 */
const Store = async ({ username, name = null, age, phone = null, isAdult }) => {
    try {
        const response = await prisma.user.create({
            data: {
                // *id* is autoincrement and will be automatically generated when the user is added
                username,
                name,
                age,
                phone,
                isAdult,
            }
        })
        return {
            status: true,
            message: 'User has been successfully added!',
            data: response
        };
    } catch (error) {
        return {
            status: false,
            message: 'Erro: ' + error.message,
            data: null
        };
    }
}

// Read
/** 
 * @returns {Promise<{
 * status: Boolean,
 * message: String,
 * data: {
 * id: Number,
 * username: String,
 * name: String?,
 * age: Number,
 * phone: String?,
 * isAdult: Boolean
 * }[]?
 * }>}
*/
const Get = async () => {
    try {
        const response = await prisma.user.findMany()
        return {
            status: true,
            message: 'Success',
            data: response
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error: ' + error.message,
            data: null
        }
    }
}

// Update
/** 
 * @param {{ whereId: Number, username: String, name: String?, age: Number, phone: String?, isAdult: Boolean }} 
 * @returns {Promise<{
 * status: Boolean,
 * message: String,
 * data: {
 * id: Number,
 * username: String,
 * name: String?,
 * age: Number,
 * phone: String?,
 * isAdult: Boolean
 * }?
 * }>}
 */
const Update = async ({ whereId, username, name = null, age, phone = null, isAdult }) => {
    try {
        const response = await prisma.user.update({
            data: { name, username, age, phone, isAdult },
            where: { id: whereId }
        });
        return {
            status: true,
            message: `User with ID ${whereId} has been successfully updated!`,
            data: response
        };
    } catch (error) {
        return {
            status: false,
            message: 'Erro: ' + error.message,
            data: null
        };
    }
};

// Delete
/** 
 * @param {{ whereId: Number }}
 * @returns {Promise<{status: Boolean, message: String}>}
 */
const Destroy = async ({ whereId }) => {
    try {
        const findUser = await prisma.user.findUnique({ where: { id: whereId } });
        if (findUser) {
            await prisma.user.delete({ where: { id: whereId } });
            return {
                status: true,
                message: `User with ID ${whereId} has been successfully deleted.`,
            };
        } else {
            return {
                status: false,
                message: `User with ID ${whereId} is not found.`,
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error: ' + error.message,
        };
    }
};


module.exports = {
    Store,
    Get,
    Update,
    Destroy
}